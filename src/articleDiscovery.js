export const TOPICS = [
  { id: "all", label: "全部文章", description: "從最新內容開始看" },
  { id: "senior", label: "長輩與家屬", description: "長者肌力、居家活動", posts: [1, 3, 9, 14, 15] },
  { id: "beginner", label: "第一次練肌力", description: "新手觀念、女性訓練", posts: [1, 5, 7, 8, 12, 13, 16] },
  { id: "courses", label: "選課與上課方式", description: "私人一對一、團體課", posts: [10, 13, 15, 16] },
  { id: "sport", label: "格鬥與運動表現", description: "泰拳、散打、專項體能", posts: [2, 6, 11] },
  { id: "recovery", label: "按摩與恢復", description: "運動後的身體照顧", posts: [4] },
  { id: "video", label: "上課影片", description: "先看看真實上課情況" },
];

export function matchesTopic(post, topicId) {
  if (topicId === "all") return true;
  if (topicId === "video") return Boolean(post.videoId);
  return Boolean(TOPICS.find((topic) => topic.id === topicId)?.posts?.includes(post.id));
}

export function filterArticles(posts, topicId, query) {
  const needle = query.trim().toLocaleLowerCase();
  return posts.filter((post) => matchesTopic(post, topicId) &&
    [post.title, post.excerpt, post.author, post.category, ...post.tags].join(" ").toLocaleLowerCase().includes(needle));
}

// A fixed shuffled cycle avoids adjacent repeats. Date is always Asia/Taipei,
// independent of the visitor's time zone, with no database or scheduled build.
export function dailyArticle(posts, now = new Date()) {
  if (!posts.length) return null;
  const mix = (id) => { let x = Math.imul(id ^ 0x45d9f3b, 0x45d9f3b); x ^= x >>> 16; return x >>> 0; };
  const ordered = [...posts].sort((a, b) => mix(a.id) - mix(b.id) || a.id - b.id);
  const day = Math.floor((now.getTime() + 8 * 60 * 60 * 1000) / 86400000);
  return ordered[((day % ordered.length) + ordered.length) % ordered.length];
}
