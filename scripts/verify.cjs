const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const cra = path.dirname(require.resolve("react-scripts/package.json"));
const { JSDOM } = require(require.resolve("jsdom", { paths: [cra] }));
const { default: App, BLOG_POSTS, articlePath, resolvePage } = require("./load-app.cjs")();
const { dailyArticle, filterArticles, TOPICS, matchesTopic } = require("../src/articleDiscovery.js");
const React = require("react");
const root = path.resolve(__dirname, "..");
const origin = "https://www.bs-strength.com";
const read = (route) => fs.readFileSync(path.join(root, "build", route === "/" ? "index.html" : route.slice(1) + ".html"), "utf8");
const doc = (route) => new JSDOM(read(route)).window.document;
const config = require("../vercel.json");
const sitemap = fs.readFileSync(path.join(root, "build/sitemap.xml"), "utf8");
assert.equal(BLOG_POSTS.length, 16);
assert.equal(filterArticles(BLOG_POSTS, "video", "").length, 2);
assert(filterArticles(BLOG_POSTS, "senior", "呂承諺").some((p) => p.id === 15));
for (const post of BLOG_POSTS) assert(TOPICS.some((t) => t.id !== "all" && matchesTopic(post, t.id)), `Missing topic: ${post.id}`);
assert.equal(dailyArticle(BLOG_POSTS, new Date("2026-09-16T00:00:00+08:00")).id, dailyArticle(BLOG_POSTS, new Date("2026-09-16T23:59:59+08:00")).id);
assert.notEqual(dailyArticle(BLOG_POSTS, new Date("2026-09-16T15:59:59Z")).id, dailyArticle(BLOG_POSTS, new Date("2026-09-16T16:00:00Z")).id);
const cycle = Array.from({ length: BLOG_POSTS.length }, (_, i) => dailyArticle(BLOG_POSTS, new Date(Date.UTC(2026, 8, 16 + i))).id);
assert.equal(new Set(cycle).size, BLOG_POSTS.length);
assert.equal(new Set(BLOG_POSTS.map((p) => articlePath(p.id))).size, BLOG_POSTS.length);
for (const post of BLOG_POSTS) {
  const route = articlePath(post.id);
  const document = doc(route);
  assert.equal(document.querySelector("h1").textContent, post.title);
  assert.equal(document.querySelectorAll("title").length, 1);
  assert.equal(document.title, `${post.title}｜B.S 力線體`);
  assert.equal(document.querySelector('link[rel="canonical"]').href, origin + route);
  assert.equal(document.querySelector('meta[name="description"]').content, post.excerpt);
  assert(document.querySelector("#root").textContent.includes(post.author));
  assert(document.querySelector("#root").textContent.includes(new JSDOM(post.content).window.document.body.textContent.trim()));
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent));
  assert(schemas.some((s) => s["@type"] === "Article" && s.headline === post.title));
  assert(fs.existsSync(path.join(root, "public", post.image)));
  assert(sitemap.includes(origin + route));
  assert.equal(resolvePage("/", `?article=${post.id}`).postId, post.id);
  assert(config.redirects.some((r) => r.has[0].key === "article" && r.has[0].value === String(post.id) && r.destination === route && r.permanent));
}
const home = doc("/");
assert(home.querySelector('a[href="https://line.me/ti/p/~rockon12319"]').textContent.includes("LINE"));
assert.equal(home.querySelectorAll("details.coach-credentials").length, 5);
assert(home.body.textContent.includes("週六 10:00–15:30"));
assert(home.body.textContent.includes("週日至週五 10:00–21:30"));
for (const review of ["DLg7R4qhPn5KZiLP9", "mpocbg7jvMqxMJg98", "jyNFeGhig8yB2fHK9"]) assert(home.querySelector(`a[href="https://maps.app.goo.gl/${review}"]`));
const hours = JSON.parse(home.querySelector('script[type="application/ld+json"]').textContent).openingHoursSpecification;
assert(hours.every((h) => h.opens === "10:00"));
assert(hours.some((h) => h.dayOfWeek === "Saturday" && h.closes === "15:30"));
const index = doc("/articles");
for (const post of BLOG_POSTS) assert(index.querySelector(`a[href="${articlePath(post.id)}"]`));
assert.equal(doc("/404").querySelector('meta[name="robots"]').content, "noindex, follow");
assert.equal(resolvePage("/articles/missing").view, "notfound");
assert(!sitemap.includes("?article="));

// Hydrate the actual generated HTML to detect server/client mismatches.
async function hydrationCheck(route) {
  const dom = new JSDOM(read(route), { url: origin + route, pretendToBeVisual: true });
  global.window = dom.window;
  global.document = dom.window.document;
  const errors = [];
  const { hydrateRoot } = require("react-dom/client");
  let app;
  await React.act(async () => {
    app = hydrateRoot(document.getElementById("root"), React.createElement(App), { onRecoverableError: (e) => errors.push(e.message) });
  });
  assert.deepEqual(errors, [], `Hydration failed: ${route}`);
  if (route === "/articles") {
    const visible = () => document.querySelectorAll('.article-tile:not([hidden])').length;
    assert.equal(visible(), 8);
    assert.equal(Number(document.querySelector('[data-daily-id]').dataset.dailyId), dailyArticle(BLOG_POSTS).id);
    const topicButton = (label) => [...document.querySelectorAll('.topic-grid button')].find((b) => b.textContent.startsWith(label));
    await React.act(async () => topicButton('上課影片').click());
    assert.equal(visible(), 2);
    await React.act(async () => topicButton('長輩與家屬').click());
    assert.equal(visible(), 5);
    await React.act(async () => topicButton('全部文章').click());
    await React.act(async () => document.querySelector('.library-more').click());
    assert.equal(visible(), 16);
    const search = document.querySelector('input');
    const setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    await React.act(async () => { setValue.call(search, "阿瑋"); search.dispatchEvent(new window.Event("input", { bubbles: true })); });
    assert(document.querySelector('a[href="/articles/awei-strength-training"]'));
  }
  const videoPost = BLOG_POSTS.find((p) => articlePath(p.id) === route && p.videoId);
  if (videoPost) {
    assert.equal(document.querySelectorAll('.shorts-frame iframe').length, 0);
    assert(document.querySelector(`a[href="https://www.youtube.com/shorts/${videoPost.videoId}"]`));
    await React.act(async () => document.querySelector('.shorts-frame button').click());
    assert(document.querySelector('.shorts-frame iframe').src.includes(`/embed/${videoPost.videoId}`));
  }
  await React.act(async () => app.unmount());
  dom.window.close();
}
global.IS_REACT_ACT_ENVIRONMENT = true;
(async () => {
  for (const route of ["/", "/articles", ...BLOG_POSTS.map((p) => articlePath(p.id)), "/404"]) await hydrationCheck(route);
  console.log(`PASS: ${BLOG_POSTS.length} complete article pages, metadata, images, sitemap, permanent redirect mappings, booking, 5 expandable coach cards, 3 sourced reviews, opening hours, 404, and hydration of all ${BLOG_POSTS.length + 3} pages.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
