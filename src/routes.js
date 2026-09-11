export const ARTICLE_SLUGS = {
  14: "senior-home-chair-stand-training",
  1: "strength-training-healthy-aging",
  2: "muay-thai-sanda-benefits",
  3: "senior-strength-training-safety",
  4: "sports-massage-recovery",
  5: "invest-in-health",
  6: "strength-and-sport-performance",
  7: "what-is-strength-training",
  8: "women-strength-training",
  9: "senior-training-frequency",
  10: "group-vs-personal-training",
  11: "strength-training-for-fighters",
  12: "strength-training-for-life",
  13: "awei-strength-training",
};

export const articlePath = (id) => `/articles/${ARTICLE_SLUGS[id]}`;

export function resolvePage(pathname = "/", search = "") {
  const path = pathname.replace(/\/$/, "") || "/";
  const params = new URLSearchParams(search);
  const id = Object.keys(ARTICLE_SLUGS).find((key) => articlePath(key) === path);
  if (id) return { view: "post", postId: Number(id) };
  if (path === "/articles") return { view: "blog", postId: null };
  if (path === "/" && params.has("article")) {
    const legacyId = Number(params.get("article"));
    return ARTICLE_SLUGS[legacyId]
      ? { view: "post", postId: legacyId }
      : { view: "notfound", postId: null };
  }
  if (path === "/" && params.get("view") === "blog") return { view: "blog", postId: null };
  return { view: path === "/" ? "home" : "notfound", postId: null };
}
