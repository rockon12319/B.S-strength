const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const config = require("../vercel.json");
const build = path.resolve(__dirname, "../build");
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".xml": "application/xml", ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml" };
http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const redirect = config.redirects.find((r) => url.pathname === r.source && r.has.every((h) => url.searchParams.get(h.key) === h.value));
  if (redirect) { res.writeHead(308, { Location: redirect.destination }); return res.end(); }
  let file = path.resolve(build, "." + decodeURIComponent(url.pathname));
  if (file !== build && !file.startsWith(build + path.sep)) { res.writeHead(403); return res.end(); }
  if (url.pathname === "/") file = path.join(build, "index.html");
  else if (!path.extname(file)) file += ".html";
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { file = path.join(build, "404.html"); res.statusCode = 404; }
  res.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
  fs.createReadStream(file).pipe(res);
}).listen(4178, "127.0.0.1", () => console.log("Preview ready at http://localhost:4178"));
