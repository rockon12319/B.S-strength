const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { default: App, BLOG_POSTS, articlePath, resolvePage } = require("./load-app.cjs")();
const root = path.resolve(__dirname, "..");
const build = path.join(root, "build");
const origin = "https://www.bs-strength.com";
const template = fs.readFileSync(path.join(build, "index.html"), "utf8");
const escape = (text) => String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pages = [
  { pathname: "/", title: "B.S 力線體 - 桃園專業肌力與體能訓練", description: "B.S 力線體位於桃園區壽星街，提供一對一私人教練、肌力與體能、銀髮族抗老化、泰拳散打 MMA 與運動按摩。價格透明，歡迎預約體驗。", image: "/yoyi.jpg" },
  { pathname: "/articles", title: "桃園肌力訓練與健身知識｜B.S 力線體", description: "B.S 力線體教練團隊分享肌力訓練、銀髮族抗老化、泰拳散打 MMA、運動表現與恢復知識。", image: "/yoyi.jpg" },
  ...BLOG_POSTS.map((post) => ({ pathname: articlePath(post.id), title: `${post.title}｜B.S 力線體`, description: post.excerpt, image: post.image, post })),
  { pathname: "/404", title: "找不到這個頁面｜B.S 力線體", description: "您要找的頁面不存在，歡迎查看 B.S 力線體肌力訓練文章。", image: "/yoyi.jpg", notfound: true },
];

for (const page of pages) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|robots|googlebot|og:[^"']+|twitter:[^"']+|article:[^"']+)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "");
  if (page.pathname !== "/") html = html.replace(/<link\b[^>]*rel=["']preload["'][^>]*as=["']image["'][^>]*>/gi, "");
  const canonical = `${origin}${page.pathname}`;
  const meta = (name, value, property = false) => `<meta ${property ? "property" : "name"}="${name}" content="${escape(value)}">`;
  const tags = [
    `<title>${escape(page.title)}</title>`,
    meta("description", page.description),
    meta("robots", page.notfound ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"),
    meta("og:title", page.title, true), meta("og:description", page.description, true),
    meta("og:image", origin + page.image, true), meta("og:image:alt", page.title, true),
    meta("og:type", page.post ? "article" : "website", true), meta("og:url", canonical, true),
    meta("og:site_name", "B.S 力線體", true), meta("og:locale", "zh_TW", true),
    meta("twitter:card", "summary_large_image"), meta("twitter:title", page.title),
    meta("twitter:description", page.description), meta("twitter:image", origin + page.image),
  ];
  if (!page.notfound) tags.push(`<link rel="canonical" href="${canonical}">`);
  if (page.post) tags.push(meta("article:published_time", `${page.post.date}T00:00:00+08:00`, true), meta("article:modified_time", `${page.post.modified || page.post.date}T00:00:00+08:00`, true));
  html = html.replace("</head>", tags.join("") + "</head>");
  const markup = renderToString(React.createElement(App, { initialPage: resolvePage(page.pathname) }));
  html = html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
  const file = path.join(build, page.pathname === "/" ? "index.html" : `${page.pathname.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter((p) => !p.notfound).map((p) => `  <url><loc>${origin}${p.pathname}</loc>${p.post ? `<lastmod>${p.post.modified || p.post.date}</lastmod>` : ""}</url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(build, "sitemap.xml"), sitemap);
console.log(`Generated ${BLOG_POSTS.length} complete article pages, article index, homepage, and 404 page.`);
