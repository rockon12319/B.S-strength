import React, { useEffect, useState } from "react";
import { ArrowRight, Play, Search, Sparkles } from "lucide-react";
import { articlePath } from "./routes";
import { TOPICS, dailyArticle, filterArticles, matchesTopic } from "./articleDiscovery";

export default function ArticleLibrary({ posts }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [limit, setLimit] = useState(8);
  // Keep first HTML/hydration identical; switch to today's choice after mounting.
  const [dailyId, setDailyId] = useState(null);
  useEffect(() => {
    const refresh = () => setDailyId(dailyArticle(posts)?.id);
    refresh();
    const timer = window.setInterval(refresh, 60000);
    document.addEventListener("visibilitychange", refresh);
    return () => { window.clearInterval(timer); document.removeEventListener("visibilitychange", refresh); };
  }, [posts]);
  const featured = posts.find((post) => post.id === dailyId) || posts[0];
  const filtered = filterArticles(posts, topic, query);
  const isFiltered = topic !== "all" || query.trim() !== "";

  return <div className="article-library">
    <header className="library-heading">
      <p className="library-eyebrow">B.S 力線體・教練的訓練筆記</p>
      <h1>找到適合自己的<br className="sm:hidden" />肌力訓練起點</h1>
      <p>先選您關心的主題。想陪長輩動起來、第一次上課，或想先看上課影片，都可以從這裡開始。</p>
    </header>

    {!isFiltered && featured && <section className="daily-feature" aria-label="每日精選文章" data-daily-id={dailyId || "pending"}>
      <a href={articlePath(featured.id)} className="daily-picture" tabIndex={-1} aria-hidden="true">
        <img src={featured.image} alt="" className={featured.videoId ? "cover-poster" : ""} decoding="async" />
      </a>
      <div className="daily-copy">
        <p className="library-eyebrow"><Sparkles size={18} aria-hidden="true" /> {dailyId ? "每日精選" : "精選推薦"}</p>
        <p className="article-byline">{featured.author} · {featured.category}</p>
        <h2><a href={articlePath(featured.id)}>{featured.title}</a></h2>
        <p>{featured.excerpt}</p>
        <a className="article-read-link" href={articlePath(featured.id)}>閱讀這篇文章 <ArrowRight size={18} aria-hidden="true" /></a>
        <span className="daily-note">依台灣日期每日換一篇，慢慢認識訓練。</span>
      </div>
    </section>}

    <section className="library-controls" aria-labelledby="topic-heading">
      <h2 id="topic-heading">您想了解什麼？</h2>
      <div className="topic-grid">
        {TOPICS.map((item) => <button key={item.id} type="button" aria-pressed={topic === item.id}
          onClick={() => { setTopic(item.id); setLimit(8); }}>
          <span>{item.label} <small>{posts.filter((p) => matchesTopic(p, item.id)).length} 篇</small></span>
          <span className="topic-description">{item.description}</span>
        </button>)}
      </div>
      <label className="library-search"><Search size={21} aria-hidden="true" /><span className="sr-only">搜尋文章、教練或主題</span>
        <input type="search" placeholder="例如：長輩、團課、呂承諺" value={query}
          onChange={(event) => { setQuery(event.target.value); setLimit(8); }} />
      </label>
    </section>

    <div className="library-results-heading"><h2>{isFiltered ? "符合條件的文章" : "最新文章"}</h2>
      <p role="status" aria-live="polite">共 {filtered.length} 篇{filtered.length > limit ? `，目前顯示 ${limit} 篇` : ""}</p>
    </div>
    <div className="article-grid">
      {filtered.map((post, index) => <a className="article-tile" key={post.id} href={articlePath(post.id)} hidden={index >= limit}>
        <div className="article-tile-image"><img src={post.image} alt={post.imageAlt || post.title} loading="lazy" decoding="async" className={post.videoId ? "cover-poster" : ""} />
          {post.videoId && <span className="video-label"><Play size={15} aria-hidden="true" /> 附上課影片</span>}
        </div>
        <div className="article-tile-copy"><p className="article-byline">{post.author} · {post.date}</p><h3>{post.title}</h3><p>{post.excerpt}</p>
          <span className="article-read-link">{post.videoId ? "閱讀與看影片" : "閱讀全文"} <ArrowRight size={17} aria-hidden="true" /></span>
        </div>
      </a>)}
    </div>
    {filtered.length > limit && <button className="library-more" onClick={() => setLimit((n) => n + 8)}>再看更多文章（還有 {filtered.length - limit} 篇）</button>}
    {filtered.length === 0 && <div className="library-empty"><p>目前沒有符合的文章，試試「長輩」、「肌力」或教練姓名。</p>
      <button className="library-more" onClick={() => { setQuery(""); setTopic("all"); setLimit(8); }}>清除條件，查看全部</button></div>}
  </div>;
}

export function ArticleVideo({ post }) {
  const [loaded, setLoaded] = useState(false);
  return <figure className="article-video">
    <div className="shorts-frame">
      {loaded ? <iframe title={`${post.title}：上課影片`} src={`https://www.youtube-nocookie.com/embed/${post.videoId}?autoplay=1&rel=0`}
        allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> :
        <button onClick={() => setLoaded(true)} aria-label={`播放${post.title}的上課影片`}>
          <img src={post.image} alt={post.imageAlt || post.title} fetchPriority="high" />
          <span className="video-play"><Play size={24} aria-hidden="true" /> 點我觀看上課影片</span>
        </button>}
    </div>
    <figcaption>真實上課紀錄，動作與強度依個別狀況安排。<br /><a href={`https://www.youtube.com/shorts/${post.videoId}`} target="_blank" rel="noopener noreferrer">在 YouTube 開啟影片 ↗</a></figcaption>
  </figure>;
}
