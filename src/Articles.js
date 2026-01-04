import React from "react";

const Articles = () => {
  return (
    <div
      style={{
        padding: "40px",
        lineHeight: "1.8",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>B.S 力線體 - 專業文章專欄 📚</h1>
      <p>
        歡迎來到 B.S 力線體，我們提供最專業的<strong>桃園健身房</strong>資訊、
        <strong>肌力訓練</strong>教學與<strong>抗老化訓練</strong>建議。
      </p>

      <hr />

      <div className="article-list">
        <h3>最新文章</h3>
        <ul>
          {/* 這裡之後可以換成你真正的文章連結 */}
          <li>
            <a href="/articles/strength-training-intro">
              為什麼肌力訓練對銀髮族至關重要？
            </a>
          </li>
        </ul>
      </div>

      <br />
      <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>
        ← 回到首頁
      </a>

      <footer style={{ marginTop: "50px", fontSize: "14px", color: "#666" }}>
        <p>#桃園健身房 #桃園肌力訓練 #bs-strength #肌力與體能</p>
      </footer>
    </div>
  );
};

export default Articles;
