import React, { useState, useEffect } from "react";
import { articlePath, resolvePage } from "./routes";
import "./styles.css";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ChevronDown,
  MessageCircle,
  CalendarCheck,
  Award,
  ArrowRight,
  Star,
  ExternalLink,
  BookOpen,
  Trophy,
  Activity,
  ArrowLeft,
  User,
  Clock,
  Tag,
  Sparkles,
  Search,
  Share2,
  Check,
  Flower2,
  Car,
  Navigation,
  Footprints,
} from "lucide-react";

const SITE_URL = "https://www.bs-strength.com/";
const DEFAULT_TITLE = "B.S 力線體 - 桃園專業肌力與體能訓練";
const DEFAULT_DESCRIPTION =
  "B.S 力線體位於桃園區壽星街，提供一對一私人教練、肌力與體能、銀髮族抗老化、泰拳散打 MMA 與運動按摩。價格透明，歡迎預約體驗。";
const DEFAULT_IMAGE = `${SITE_URL}yoyi.jpg`;

const updateMetaTag = (attribute, value, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const updateCanonicalUrl = (url) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
};

const toAbsoluteUrl = (path) => new URL(path, SITE_URL).toString();

// Article content shared by the interactive site and static page generation.
export const BLOG_POSTS = [
  {
    id: 14,
    title: "長者居家訓練：從椅子坐站開始，練習下肢肌力",
    excerpt: "長輩還不敢踏進健身房，可以先在家練什麼？呂承諺教練分享椅子坐站的入門方式、扶持與膝蓋疼痛的注意事項，陪家人從日常活動開始，循序累積下肢肌力。",
    date: "2026-09-12",
    author: "呂承諺 教練",
    category: "銀髮族訓練",
    tags: ["#長者居家訓練", "#下肢肌力", "#桃園肌力訓練"],
    image: "/chenyan-senior-chair-squat.jpg",
    imageAlt: "B.S 力線體呂承諺教練在旁指導長輩扶著固定支架進行箱上深蹲",
    content: `
      <p>「我這個年紀，還能去健身房嗎？」「器材看起來好多，我怕自己不會用。」🤔</p>
      <br/>
      <p>長輩還沒準備好踏進健身房，也不用急著說服他們。<strong>長者居家訓練，可以從每天都會做的『坐下、站起來』開始。</strong>先在熟悉的環境裡找到信心，再慢慢增加活動與訓練，往往比一開始就追求做很多更容易持續。🌱</p>
      <br/>
      <h2 class="text-xl font-bold text-orange-500 mb-2">🪑 椅子坐站：把生活動作變成下肢肌力練習</h2>
      <p>從椅子起身、上廁所後站起來，都需要腿部與臀部出力。反覆練習可控制的椅子坐站，是<strong>下肢肌力訓練</strong>的入門方式之一；難度是否合適，仍要看每個人的力量、平衡與關節狀況。</p>
      <br/>
      <p>這張上課照片，是承諺教練在旁指導長輩做箱上深蹲，利用固定支架輔助與箱子提供坐下的位置。居家練習可以借用這個「有穩定座面、慢慢坐站」的概念，<strong>但不要直接照搬課堂上的難度，也不必模仿照片赤腳練習。</strong>在家建議穿合腳、防滑的鞋子。</p>
      <br/>
      <h2 class="text-xl font-bold text-orange-500 mb-2">👣 在家怎麼開始？先求穩，再求多</h2>
      <ol class="list-decimal list-inside space-y-3 my-4">
        <li><strong>先把環境準備好：</strong>選不會滑動、沒有輪子的穩固椅子，靠牆放好，移開地毯邊緣與雜物。椅面不要太低或太軟，坐下時雙腳要能穩穩踩地。</li>
        <li><strong>從坐姿出發：</strong>雙腳約與髖同寬，身體稍微前傾，再用腿部力量慢慢站起。正常呼吸，不用憋氣或甩動身體搶起身。</li>
        <li><strong>控制坐回去：</strong>臀部往後移，慢慢彎曲髖部與膝蓋，輕輕坐回椅面，避免整個人突然往下掉。</li>
        <li><strong>先少量嘗試：</strong>可先以約 5 次為入門目標，做不到也沒關係，依能力減少並充分休息。只有在動作穩定、沒有疼痛或不適時，才逐步增加。</li>
      </ol>
      <p class="text-sm text-gray-400">椅子選擇與坐站入門可參考 <a href="https://www.nhs.uk/live-well/exercise/strength-exercises/" target="_blank" rel="noopener noreferrer" class="text-orange-400 underline">NHS 居家肌力練習</a>；上述方式是一般性介紹，不是適合每位長輩的個別課表。</p>
      <br/>
      <h2 class="text-xl font-bold text-orange-500 mb-2">🤝 站不起來，可以扶東西嗎？</h2>
      <p>可以依能力使用穩固的扶手，或經確認不會移動、傾倒的固定支撐物協助。不要抓有輪子的桌椅、會翻倒的椅背，也不要讓家人用拉扯手臂的方式把長輩拉起來。</p>
      <br/>
      <p>家人可以在旁陪伴，但<strong>若需要別人明顯出力才能起身、容易失去平衡，或曾經跌倒，先請物理治療師評估，再學習合適的練習與協助方式。</strong>教練也可以在確認適合運動後，協助調整座面高度與訓練難度，不必急著挑戰無扶持坐站。</p>
      <br/>
      <h2 class="text-xl font-bold text-orange-500 mb-2">🦵 膝蓋會痛，不是忍一下就好</h2>
      <p>練習中如果出現膝蓋疼痛，先停止，不要為了湊次數硬做。疼痛不一定只是「姿勢錯了」，也可能與原有的關節狀況或當下負荷有關，建議找醫師或物理治療師評估；教練負責依評估結果協助調整動作與訓練，不代替醫療診斷。</p>
      <br/>
      <p>若疼痛持續、腫脹，或已影響走路與承重，應先就醫。練習時感到頭暈或其他明顯不適，也要停止並尋求協助。<a href="https://www.kentcht.nhs.uk/leaflet/strengthening-exercises-falls/" target="_blank" rel="noopener noreferrer" class="text-orange-400 underline">NHS 肌力練習安全提醒</a>同樣建議，疼痛或感到不安全時，先停下並諮詢醫療專業人員。</p>
      <br/>
      <h2 class="text-xl font-bold text-orange-500 mb-2">🏡 不愛「訓練」這個詞，就從多活動開始</h2>
      <p>陪長輩在安全的環境散步、澆花、摺衣服、擦桌子，都是增加活動的機會。讓他們參與做得到、也願意做的事情，保留「我還能自己來」的成就感，比什麼都替他們做好更有意義。😊</p>
      <br/>
      <p>身體會隨活動需求改變，長期缺乏活動可能讓力量與體能逐漸下降；不過，功能改變也可能受疾病、營養等因素影響，不能把退化全歸咎於「不夠努力」。家事也要量力而為，避開爬高、搬重物與濕滑地面。</p>
      <br/>
      <p><strong>多走動與做家事是好的起點，但不一定能取代有足夠刺激的肌力訓練。</strong>依 <a href="https://www.cdc.gov/physical-activity-basics/adding-older-adults/what-counts.html" target="_blank" rel="noopener noreferrer" class="text-orange-400 underline">CDC 長者身體活動建議</a>，長者需要兼顧有氧、肌力與平衡活動，肌力活動一般建議每週至少 2 天，並依健康狀況與能力調整。椅子坐站主要練習下肢，也不是完整的全身訓練課表。</p>
      <br/>
      <h2 class="text-xl font-bold text-orange-500 mb-2">🌱 從家裡的一張椅子，到更有信心的日常</h2>
      <p>長者訓練的目標，不是和別人比重量，而是讓起身、走動與生活中的小事，多一點從容。先從做得到的開始，再慢慢進步，就值得肯定。</p>
      <br/>
      <p>如果您正在尋找願意陪長輩循序練習的<strong>桃園健身房</strong>，歡迎到 <strong>B.S 力線體（bs-strength）</strong>，與呂承諺教練討論銀髮族訓練需求。可先<a href="/#team" class="text-orange-400 underline">認識教練團隊</a>、查看<a href="/#schedule" class="text-orange-400 underline">私人教練與團體課程</a>，或透過 LINE 詢問適合的起點。</p>
      <br/>
      <p>延伸閱讀：<a href="/articles/senior-strength-training-safety" class="text-orange-400 underline">長輩肌力訓練的安全觀念</a>。</p>
    `,
  },
  {
    id: 13,
    title: "🌱 肌力訓練也能沒有壓力｜怪獸訓練系統背景的阿瑋教練",
    excerpt:
      "參加過大力士比賽的范哲瑋教練，上課卻以溫柔、耐心聞名。從私人一對一到肌力團體課程，他希望每個人都能在沒有壓力的環境裡，安心愛上肌力訓練。",
    date: "2026-09-07",
    author: "范哲瑋 教練",
    category: "教練觀點",
    tags: ["#怪獸訓練系統", "#桃園肌力訓練", "#私人教練"],
    image: "/awei-coach-strength-training.jpg",
    content: `
      <p>「參加過大力士比賽的教練，上課會不會很兇、要求很高？」🤔</p>
      <br/>
      <p>如果你認識阿瑋教練，大概會發現這個想像和本人差很多。范哲瑋教練參加過<strong>台灣大力士比賽</strong>，也有<strong>怪獸訓練系統</strong>的學習與認證背景；但他帶課時最常給人的感受，卻是溫柔、耐心，而且願意陪學員慢慢來。</p>
      <br/>
      <p>因為真正好的<strong>肌力訓練</strong>，不是把每個人都逼到極限，而是讓不同年齡、不同程度的人，都能找到適合自己的起點。🌱</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🏋️ 大力士比賽經驗，帶來的不是壓迫感，而是安全感</h3>
      <p>看過大重量、也親自站上大力士比賽場，反而更能理解：力量不是逞強，而是長時間累積出來的能力。動作做得穩、重量加得合理、身體有時間適應，才是真正走得長久的方式。</p>
      <br/>
      <p>所以阿瑋教練不會只看你今天舉了多重，而會觀察你的動作品質、呼吸、控制能力與當天狀態。該挑戰的時候陪你多走一步，需要調整時也不勉強，讓訓練有進步，也保留安心感。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🧠 怪獸訓練系統：不是把人操到累，而是讓訓練有方向</h3>
      <p>阿瑋教練具備怪獸訓練系統 B 級肌力與體能教練、抗老化肌力與體能教練認證，也持續學習動作控制、檢測與矯正、課表設計和週期安排。</p>
      <br/>
      <p>這些學習最後都要回到一件事：<strong>讓課表配合人，而不是叫人硬去配合課表。</strong>有人想增加日常體力，有人想改善久坐後的無力感，也有人只是希望培養固定運動的習慣；目標不同，訓練方式本來就不該完全一樣。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">💪 肌力的好處，會慢慢回到你的生活裡</h3>
      <p>肌力訓練不只是在健身房裡把重量舉起來。當腿部、軀幹、握力與全身協調逐漸進步，提東西、爬樓梯、搬行李、抱小孩，甚至長時間工作後維持穩定姿勢，都可能變得更從容。</p>
      <br/>
      <p>更重要的是，你會重新認識自己的身體：原來我可以學會這個動作、原來我比想像中更有力量。這份信心，常常才是讓人願意持續運動的真正原因。😊</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">👤 私人一對一：按照你的節奏安心開始</h3>
      <p>如果你一進健身房就緊張、擔心動作做錯，或不喜歡被別人看著訓練，<strong>私人一對一課程</strong>會是很適合的開始。阿瑋教練可以依你的能力、生活需求和訓練經驗安排內容，讓問題有時間慢慢說、動作有時間好好學。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">👥 團體課程：有人一起練，但不需要跟別人比較</h3>
      <p>喜歡有人陪伴、想讓運動更有趣，也可以選擇<strong>肌力團體課程</strong>。同一個動作可以依每個人的程度調整重量與難度，大家一起流汗、彼此鼓勵，但不必比快、比重，或擔心自己跟不上。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🌱 活動活動，就是「人活著就是要動」😊</h3>
      <p>這是阿瑋教練很喜歡的一句話。運動不一定要從高強度開始，也不必每一堂課都把自己累壞；今天願意多動一點、明天願意再回來一次，就是很好的累積。</p>
      <br/>
      <p class="text-lg font-bold text-white border-l-4 border-orange-500 pl-4 py-2 bg-neutral-800 rounded-r-lg">如果你曾經因為怕痛苦、怕跟不上，或對健身房有壓力而不敢開始，歡迎預約范哲瑋教練的私人一對一或團體課程。在桃園 B.S 力線體，先從安心開始，再慢慢變強，讓肌力訓練成為生活中願意長久保留的好習慣。🙌</p>
    `,
  },
  {
    id: 12,
    title: "💪 肌力訓練一定要練很壯嗎？不是健美也能受益！",
    excerpt:
      "肌力訓練不等於健美或健體，也不需要把肌肉練得很大塊。陳麒舜教練分享：一般人訓練的重點，是保有完成日常生活的力量，讓自己活得更輕鬆，也有能力保護自己與家人。",
    date: "2026-09-02",
    author: "陳麒舜 教練",
    category: "肌力訓練",
    tags: ["#桃園健身房", "#桃園肌力訓練", "#肌力與體能"],
    image: "/strength-training-for-life.jpg",
    content: `
      <p>「教練，我做肌力訓練，是不是一定要練得很壯、肌肉很大塊？」🤔</p>
      <br/>
      <p>這是很多第一次接觸重量訓練的人最常問的問題。其實答案很簡單：<strong>不用！</strong>肌力訓練和健美、健體的目標並不相同。你不需要把身材練成比賽選手，也不必為了開始訓練，就過著極端嚴格的飲食生活。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🏋️ 肌力訓練，不等於健美或健體</h3>
      <p>健美與健體是專項運動，選手會追求肌肉量、比例、線條與舞台呈現，因此訓練量、體脂控制和飲食安排都有很高的標準。</p>
      <br/>
      <p>一般人的<strong>肌力訓練</strong>，目標可以完全不同。我們訓練的是身體產生力量的能力，讓肌肉、骨骼與動作控制能夠應付生活需要，而不是要求每個人都練成相同的外型。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🍚 不必完美飲食，先建立能長久維持的習慣</h3>
      <p>規律吃飯、攝取足夠蛋白質、蔬菜與水分，當然有助於訓練和恢復；但一般健康訓練不代表從此不能聚餐、不能吃喜歡的食物，更不需要每天精算到讓自己壓力很大。</p>
      <br/>
      <p>真正重要的是找到<strong>能持續很多年的做法</strong>。比起短時間非常嚴格，然後很快放棄，穩定訓練、好好休息，並在大部分時間做出適合自己的飲食選擇，通常更符合一般人的生活。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🧺 我們真正要練的，是「生活的能力」</h3>
      <p>隨著年齡增加，如果缺乏活動和適當刺激，肌力可能逐漸下降。提東西、搬行李、抱小孩、爬樓梯、從地上站起來，原本很自然的事情，都可能慢慢變得吃力。</p>
      <br/>
      <p>規律的<strong>桃園肌力訓練</strong>，就是在替未來的生活存下力量。當身體有足夠的腿力、握力、軀幹穩定與全身協調，日常活動會更從容，也比較不容易因為一點體力工作就累得受不了。💪</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🛡️ 有力量，才有保護自己與家人的底氣</h3>
      <p>力量不只是健身房裡槓片上的數字。遇到需要搬動重物、扶住跌倒的家人、抱起孩子，或在突發狀況中穩住自己時，平常累積的肌力都可能派上用場。</p>
      <br/>
      <p>我們不需要追求變成力氣最大的人，但應該讓自己在生活需要力量的時候，還有能力做出反應。這份能力，就是肌力帶來的安全感與自由。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🌱 從適合自己的重量開始就好</h3>
      <p>不論你現在幾歲、以前有沒有運動經驗，都不必急著跟別人比較。專業的<strong>肌力與體能</strong>訓練，會依照你的身體狀況、動作能力與生活目標，循序漸進安排重量與難度。</p>
      <br/>
      <p class="text-lg font-bold text-white border-l-4 border-orange-500 pl-4 py-2 bg-neutral-800 rounded-r-lg">肌力訓練不是為了把每個人都練成健美選手，而是讓我們有力氣過自己想要的生活。想安全開始訓練，歡迎來桃園 B.S 力線體，讓教練陪你一步一步把力量存起來！🙌</p>
    `,
  },
  {
    id: 11,
    modified: "2026-09-08",
    title: "🥊 【格鬥×肌力】打拳沒力、摔技卡卡？專項選手為什麼一定要練肌力！",
    excerpt: "格鬥選手為什麼要安排肌力訓練？麒舜教練分享十幾年的格鬥經驗，聊聊力量基礎如何配合出拳、摔技與專項練習。",
    date: "2026-08-10",
    author: "陳麒舜 教練",
    category: "肌力訓練",
    tags: ["#桃園健身房", "#桃園肌力訓練", "#肌力與體能"],
    image: "/fighter1.webp",
    content: `
      <p>常常有人問：「打格鬥技巧好就好，還需要另外花時間練肌力嗎？」🤔</p>
      <br/>
      <p>其實不只是格鬥，適當的<strong>肌力訓練</strong>能為專項運動建立力量基礎；實際表現仍取決於技術練習、課表與恢復。今天就來跟大家聊聊這背後的秘密。👇</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🛡️ 變強壯、受傷少，專項表現大升級！</h3>
      <p>很多人以為練好專項技術就夠了，但加入專業的<strong>肌力與體能</strong>訓練，不僅可以讓你更有效率地徵召肌肉與發揮力量，最重要的是能「保護你的身體」！在激烈對抗或高強度競技中，良好的身體素質有助於承受運動負荷，但不能保證不受傷，仍需要技術、恢復與合理的訓練安排。💪</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🥊 麒舜教練的十幾年血淚經驗談</h3>
      <p>回想我這十幾年的格鬥生涯，真的是點滴在心頭啊！😂 以前還沒有接觸系統化訓練前，總覺得明明很用力了，但打出去的拳頭就是沒什麼破壞力。</p>
      <br/>
      <p>直到開始認真投入<strong>桃園肌力訓練</strong>之後，才發現世界完全不一樣了！不僅出拳的爆發力與穿透力差了非常多，甚至在近身纏鬥、摔技對抗的時候，身體的穩定度跟力量抗衡也有著天壤之別！這也是為什麼我們在<strong>桃園健身房</strong>一直大力推廣重量訓練的原因。🔥</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🌱 任何人都能透過訓練變得更好</h3>
      <p>不只是競技選手需要，一般大眾也一樣喔！在 <strong>bs-strength</strong> 的課程中，無論你是想提升運動表現、想要<strong>抗老化訓練</strong>的熟齡族群，或是需要<strong>銀髮族訓練</strong>的長輩，我們 B.S 力線體的教練團隊都能幫你打下適合自己的身體基礎！🏋️‍♂️</p>
      <br/>
      <p class="text-lg font-bold text-white border-l-4 border-orange-500 pl-4 py-2 bg-neutral-800 rounded-r-lg">想體會力量充盈全身的感覺嗎？別再讓身體潛能沉睡了，歡迎來<strong>桃園健身</strong>找我們，一起把身體的潛力發揮到極致吧！💥</p>
    `,
  },
  {
    id: 10,
    modified: "2026-09-08",
    title: "🧑‍🤝‍🧑 【團體課 vs. 私人課】怎麼選？帶你認識 B.S 團體課程的獨特魅力！",
    excerpt:
      "常常有人問：「教練，我到底適合上團體課還是私人教練課呢？」除了預算考量，其實這兩種課程的氛圍與優勢大不相同！今天就來聊聊團體課的隱藏好處...",
    date: "2026-06-30",
    author: "范哲瑋 教練",
    category: "肌力訓練",
    tags: ["#桃園健身房", "#團體課程", "#桃園肌力訓練", "#范哲瑋教練"],
    image: "/GroupCourses1.webp",
    content: `
      <p>在 B.S 力線體，我們最常被問到的問題之一就是：「教練，我到底適合上團體課，還是私人教練課呢？」🤔</p>
      <br/>
      <p>今天就讓我（哲瑋教練）來幫大家分析一下，這兩種課程到底有什麼不一樣！👇</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">💰 預算與氛圍：你想怎麼練？</h3>
      <p>首先，最直接的差異當然是<strong>預算考量</strong>。團體課因為大家一起分擔教練的時間，費用自然會比較親民，是長期建立運動習慣的超棒選擇！</p>
      <br/>
      <p>再來就是<strong>訓練氛圍</strong>的差異了：</p>
      <ul class="space-y-4 my-4 text-gray-300">
        <li><strong>🤫 私人課程：</strong>適合喜歡安靜專注、不被打擾的學員。教練會將 100% 的注意力放在你身上，完全針對你的身體狀況與目標（例如：特定傷病恢復、專項比賽準備）進行<strong>高度客製化</strong>的訓練。</li>
        <li><strong>🎉 團體課程：</strong>適合喜歡熱鬧、喜歡交朋友的你！大家一起流汗、一起哀嚎（？）、一起進步的感覺，是非常有感染力的！</li>
      </ul>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🤝 團體課程的隱藏版好處</h3>
      <p>其實，團體課不僅僅是省荷包而已，它還有很多意想不到的收穫喔！</p>
      <br/>
      <p><strong>1. 互相鼓勵的革命情感：</strong><br/>自己一個人練，有時候難免提不起勁，但看到同學也在努力，就更有動力繼續。大家可以互相鼓勵，同時依照自己的能力調整，不需要和別人比重量！🔥</p>
      <br/>
      <p><strong>2. 超棒的社交圈：</strong><br/>在我們的團體課裡，你可以認識各行各業的同學！有工程師、老師、家庭主婦、自己創業的老闆... 大家因為「想變強壯」這個共同目標聚在一起，練完常常還會一起去吃個好料，生活圈瞬間擴大不少呢！👯‍♂️</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">⚠️ 團體課的小叮嚀：課表安排</h3>
      <p>雖然團體課很棒，但有一點要特別注意：<strong>團體課的課表無法像私人課那樣完全為你量身打造。</strong></p>
      <br/>
      <p>在上課時，教練會根據當天班上同學的「平均水平與整體狀況」來調整主課表。不過別擔心，B.S 的教練們都受過專業訓練，即使在團體課中，我們依然會隨時盯緊大家的動作，在安全的前提下給大家最適合的重量建議！🏋️‍♀️</p>
      <br/>
      <p class="text-lg font-bold text-white border-l-4 border-orange-500 pl-4 py-2 bg-neutral-800 rounded-r-lg">不管是私人課還是團體課，只要願意開始動起來，就是最好的選擇！想體驗看看大家一起變強壯的熱血氛圍嗎？歡迎來找我們一起練！💪</p>
    `,
  },
  {
    id: 9,
    title: "👴👵 長者訓練一週要幾次？陳麒舜教練告訴你抗老秘訣！",
    excerpt:
      "常常有長輩或家屬問我：「教練，老人家訓練一週到底要幾次才夠呀？是不是要天天練才有效？」其實，答案可能會讓你嚇一跳...",
    date: "2026-06-22",
    author: "陳麒舜 教練",
    category: "銀髮族訓練",
    tags: ["#桃園健身房", "#銀髮族訓練", "#抗老化訓練", "#桃園肌力訓練"],
    image: "/oldtraining2.jpg",
    content: `
      <p>常常有長輩或家屬問我：「教練，老人家訓練一週到底要幾次才夠呀？是不是要天天練才有效？」 🤔</p>
      <br/>
      <p>其實，答案可能會讓你嚇一跳：<strong>一週一次的高強度訓練就很足夠囉！</strong> 💯</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">💪 為什麼一週一次就夠了？</h3>
      <p>我們在做重量訓練的時候，肌肉大約只需要 24 小時就能休息恢復。但是，控制我們身體力量的「神經系統」比較辛苦，它需要 <strong>48 到 72 小時</strong> 才能完全恢復過來喔！⏳</p>
      <br/>
      <p>所以，對於長輩們來說，一週安排「一到兩次」的重量訓練是最剛好的。最重要的是要配合自己的精神狀況與作息，千萬不要為了練而練，讓身體過度疲勞反而不好。 🛌</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🚶‍♀️ 平常的日子該做什麼呢？</h3>
      <p>這才是重點！我們反而會更希望長輩們，在沒有來重訓的日子裡，<strong>盡量保持「多活動」，拒絕靜態生活！</strong> 🚫🛋️</p>
      <br/>
      <p>大家可以多出去走走、散散步，去公園曬曬太陽 ☀️。或者參加其他的休閒運動，像是打打太極拳 🧘‍♂️、跳跳廣場舞 💃、或者是去爬個小山都很棒！</p>
      <br/>
      <p>重量訓練負責幫你「把身體的地基打好、長出力量」，而平時的活動則是「讓你享受這份力量帶來的美好生活」！🌟</p>
      <br/>
      <p class="text-lg font-bold text-white border-l-4 border-orange-500 pl-4 py-2 bg-neutral-800 rounded-r-lg">記住喔！訓練重質不重量，一週一次好品質的重訓，配上天天開心多活動，這就是最棒的抗老秘訣！歡迎帶家裡面的長輩，來 B.S 力線體找我們動一動！💪<br/><br/><span class="text-sm font-normal text-gray-400">https://www.bs-strength.com/</span></p>
      <br/>
      <p class="text-sm text-gray-500">#桃園健身房 #桃園肌力訓練 #bs-strength #桃園健身 #肌力訓練 #肌力與體能 #抗老化訓練 #銀髮族訓練</p>
    `,
  },
  {
    id: 8,
    title: "🏋️‍♀️ 【女生重訓會練太壯嗎？迷思一次破解！】",
    excerpt:
      "很多女生來到工作室的第一句話就是：「教練，我不想練太壯喔！」其實因為身體構造與賀爾蒙的關係，女生要練壯真的超級難！今天帶你破解迷思...",
    date: "2026-06-08",
    author: "B.S 教練團隊",
    category: "肌力訓練",
    tags: ["#桃園健身房", "#桃園肌力訓練", "#女生重訓"],
    image: "/yoyi-2.jpg",
    content: `
      <p>很多女生來到 B.S力線體 的第一句話就是：「教練，我想要有線條，但我不想練太壯變成金剛芭比喔！」 😱</p>
      <br/>
      <p>這真的是重訓界最大的迷思！今天就讓教練團隊來幫大家破解這個迷思。👇</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🧬 為什麼女生很難練太壯？</h3>
      <p>答案就是：身體構造與賀爾蒙！男女生天生就不一樣，男生容易長肌肉，很大一部分是受到「睪固酮」（男性荷爾蒙）的影響。女生的睪固酮濃度非常低，所以在自然情況下，想要練出像健美選手那樣超大塊的肌肉，是幾乎不可能的任務！🙅‍♀️</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🍔 體重變重是因為重訓嗎？</h3>
      <p>很多女生剛開始練，發現體重上升就嚇到了！其實，會不會變重、看起來「很大隻」，跟你的「飲食」才是息息相關哦！🍰 如果你瘋狂重訓但又瘋狂大吃，增加的其實是外層的脂肪。</p>
      <br/>
      <p>只要控制好飲食，因為肌肉的密度比脂肪高，同樣重量的肌肉體積只有脂肪的四分之一！所以練重訓反而會讓你視覺上小一號，變得更結實更有線條！👗</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">✨ 女生練重訓的真正好處</h3>
      <p>重點是，重訓不但不會讓你變壯，反而會讓你：</p>
      <ul class="space-y-4 my-4 text-gray-300">
        <li><strong>1️⃣ 體態更漂亮：</strong>擁有迷人的蜜桃臀、緊實的手臂與背部線條。</li>
        <li><strong>2️⃣ 提升代謝：</strong>肌肉量增加能讓你更容易燃燒熱量，養成不易胖體質。</li>
        <li><strong>3️⃣ 更健康抗老：</strong>強化骨質密度，改善腰痠背痛，真正做到抗老化訓練！</li>
      </ul>
      <br/>
      <p class="text-lg font-bold text-white border-l-4 border-orange-500 pl-4 py-2 bg-neutral-800 rounded-r-lg">別再害怕重量了！勇敢拿起啞鈴，你會發現一個更自信、更美麗的自己。想要擁有結實好身材與健康，歡迎來找我們 B.S力線體 的專業團隊！💪<br/><br/><span class="text-sm font-normal text-gray-400">https://www.bs-strength.com/</span></p>
      <br/>
      <p class="text-sm text-gray-500">#桃園健身房 #桃園肌力訓練 #bs-strength #桃園健身 #肌力訓練 #肌力與體能 #抗老化訓練 #銀髮族訓練</p>
    `,
  },
  {
    id: 7,
    title: "📺 【電視常說的「肌力訓練」到底是什麼？跟去公園散步一樣嗎？】 🤔",
    excerpt:
      "最近很多大哥大姐來詢問教練：「電視上說老人家要抗老化就一定要做肌力訓練，那到底什麼是肌力訓練啊？」今天用最簡單的方式，一次說給大家聽！",
    date: "2026-04-08",
    author: "陳麒舜 教練",
    category: "肌力訓練",
    tags: [
      "#桃園健身房",
      "#桃園肌力訓練",
      "#抗老化訓練",
      "#銀髮族訓練",
      "#肌力與體能",
    ],
    image: "/training1.webp",
    content: `
      <p>最近很多大哥大姐來到 B.S力線體，或是打電話來詢問教練：「電視上跟網路上一直說，老人家要抗老化就一定要做肌力訓練，那到底什麼是肌力訓練啊？」</p>
      <br/>
      <p>今天就用最簡單的方式，一次說給大家聽！👂</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🏋️‍♂️ 什麼是真正的肌力訓練？</h3>
      <p>簡單來說，就是透過「外在的重量與壓力」來刺激我們的身體。我們會在人類最自然的動作上（例如：蹲下、站起、從地上拉起東西），安全且循序漸進地施加壓力來訓練。因為人體的這些自然動作，本來就具備著非常好的「負重潛力」！</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">✨ 為什麼一定要練？肌力訓練的超強功用！</h3>
      <p>跟一般公園走路或甩手不一樣，只要給身體適當的重量刺激，就能一次喚醒並強化身體的「三大系統」：</p>
      <ul class="space-y-4 my-4 text-gray-300">
        <li><strong>1️⃣ 肌肉系統：</strong>把隨著年紀流失的肌肉長回來，讓身體更有力氣、保護關節不退化！</li>
        <li><strong>2️⃣ 神經系統：</strong>讓神經與肌肉的連結更暢通，動作更靈活、反應更敏捷，大幅降低老人家最怕的跌倒風險！</li>
        <li><strong>3️⃣ 骨質系統：</strong>骨頭是需要「壓力」才會生長的！負重訓練能有效刺激骨質密度，讓骨頭更硬朗！</li>
      </ul>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🎯 我們訓練的最終目標不只是抗老化！</h3>
      <ul class="space-y-4 my-4 text-gray-300">
        <li><strong>👴👵 對於長輩來說：</strong><br/>訓練是為了預防老化與失能！讓大家可以輕鬆抱孫子、開心出國旅遊走透透、提菜上樓不喘不累，真正擁有高品質、不求人的自在退休生活！✈️🛍️</li>
        <li><strong>🏃‍♂️⛹️‍♀️ 對於年輕人與愛好運動的你：</strong><br/>千萬別以為只有老人家需要訓練！透過專業的肌力與體能鍛鍊，可以大幅提升你的運動表現與專項能力（像是打球、跑步、格鬥）！更重要的是，強壯的肌肉就像身體的天然防護罩，能有效保護關節、預防運動傷害，讓你動得更久、更好！🛡️🔥</li>
      </ul>
      <br/>
      <p class="text-lg font-bold text-white border-l-4 border-orange-500 pl-4 py-2 bg-neutral-800 rounded-r-lg">如果您也想開始為自己的身體建立力量，歡迎來找我們 B.S 力線體的專業教練團隊！💪</p>
    `,
  },
  {
    id: 6,
    modified: "2026-09-08",
    title: "🥊 「拳怕少壯」是真的嗎？陳麒舜教練談：肌力與運動表現的黃金公式",
    excerpt:
      "身為一名格鬥專項教練，在擂台上打滾多年，我最常被問到的問題之一就是：「如果我的技術已經練得很爐火純青了，我還需要練肌力嗎？」...",
    date: "2026-02-23",
    author: "陳麒舜 教練",
    category: "教練觀點",
    tags: ["#桃園健身房", "#肌力訓練", "#格鬥教學", "#肌力與體能"],
    image: "/book223.webp",
    content: `
      <p>大家好，我是麒舜教練！👋 身為一名格鬥專項教練，在擂台上打滾多年，我最常被問到的問題之一就是：「教練，如果我的技術已經練得很爐火純青了，我還需要練肌力嗎？」或者是「為什麼那些年輕選手技術普通，卻能靠著爆發力壓著老將打？」</p>
      <br/>
      <p>今天我們就來聊聊，肌力（身體素質）與運動專項技術之間，那種「相愛相殺」的微妙關係。💪✨</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">💡 為什麼說「拳怕少壯」？</h3>
      <p>大家一定聽過這句話。在格鬥世界裡，很多經驗豐富的老將，即便技術細節做得比年輕人好、預判更精準，但面對「怪物級」的身體素質時，往往還是會陷入苦戰。這背後的科學原因其實很現實：老化。 📉</p>
      <br/>
      <p>隨著年齡增長，如果沒有刻意訓練，肌肉會流失、力量會下降，就連心肺能量系統也會大不如前。年輕選手雖然經驗不足，但他們擁有強大的「引擎」（身體素質），這就是為什麼體能往往能成為反敗為勝的關鍵。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🚀 運動表現的兩大支柱：身體素質 vs. 專項技術</h3>
      <p>要把運動表現推向高峰，我們得把這兩件事拆開來看：</p>
      <br/>
      <p><strong>1️⃣ 身體素質 (Physical Quality) 🏋️‍♂️</strong><br/>
      這就像是車子的「性能」。你的馬力（爆發力）大不大？車架（肌肉與骨骼）穩不穩？油箱（能量系統）耐不耐用？肌力與體能訓練就是在打造一台「超跑等級」的身體。當你的力量增強了，你出的每一拳會更有威脅性，受傷的機率也會大幅降低。</p>
      <br/>
      <p><strong>2️⃣ 專項技術 (Sport-Specific Skills) 🥋</strong><br/>
      這就像是「賽車手的技術」。即便給你一台法拉利，如果你不會過彎、不知道切線時機，你還是跑不贏。格鬥中的距離感、時機抓取、防反技巧，這些都是專項技術。</p>
      
      <div class="bg-neutral-800 border-l-4 border-orange-500 p-5 my-8 rounded-r-lg shadow-lg">
        <p class="font-bold text-orange-400 text-sm mb-1">麒舜教練心法：</p>
        <p class="text-white text-lg font-bold tracking-wide">好的運動表現 = 強大的身體素質 ➕ 精湛的專項技術</p>
      </div>

      <h3 class="text-xl font-bold text-orange-500 mb-2">🛠️ 分工合作，才能發揮最大戰力！</h3>
      <p>想要變強，你需要雙管齊下。但請記得，這兩者的訓練目標是不同的：</p>
      <ul class="space-y-4 my-4 text-gray-300">
        <li><strong>✅ 想增強身體素質？</strong><br/>你應該透過系統化的「力量訓練」來達成。這也是我們 B.S 力線體 最擅長的事，幫你打好身體的根基，讓你擁有應付日常活動與運動需求的力量。</li>
        <li><strong>✅ 想精進專項技巧？</strong><br/>那就必須交給「專業的專項教練」。只有在該領域大量累積經驗的人，才會知道最深層的門道與技巧。如果專項教練沒辦法教會你技術，單純的健身教練通常更難跨越這個門檻。</li>
      </ul>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">🌟 結語：投資你的「身體資產」</h3>
      <p>不管你是職業運動員、熱愛運動的素人，或是希望維持生活品質的銀髮族，都可以從適合自己的肌力訓練開始，慢慢累積力量。</p>
      <br/>
      <p>當你有了強大的肌力支撐，你的技術才能發揮得淋漓盡致，不會因為「力不從心」而留下遺憾。讓我們一起在 B.S 力線體，把身體素質練起來，讓你的運動表現跟著升級吧！🚀</p>
    `,
  },
  {
    id: 5,
    modified: "2026-09-08",
    title: "投資健康，從累積肌力開始：讓日常生活更有餘裕",
    excerpt:
      "在這個變動的時代，我們研究各種投資標的，卻常忽略了最重要的資產——「身體」。健身不只是為了變好看，更是一場守護生活品質的長期抗戰...",
    date: "2026-01-24",
    author: "呂承諺 教練",
    category: "教練觀點",
    tags: ["#肌力訓練", "#抗老化訓練", "#投資健康", "#呂承諺教練"],
    image: "/smart.webp",
    content: `
      <p>在這個變動的時代，我們研究各種投資標的，卻常忽略了最重要的資產——「身體」。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">健身，不只是為了「變好看」</h3>
      <p>很多人認為健身是為了追求外在，但其實，它是一場守護生活品質的長期抗戰。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">對抗老化，守護尊嚴</h3>
      <p>隨著年齡增長，肌肉會以每年 1% 到 2% 的速度流失。現在開始健身，是為了確保在未來的日子裡，我們依然能行動自如、步履輕盈，優雅且體面地老去。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">大腦升級，高效生活</h3>
      <p>科學證實，規律運動能有效促進血液循環，強化專注力與決策力。這也是為什麼許多頂尖企業家無論多忙，都會排入健身行程——因為健康的身體，是保持清醒大腦與高效產出的終極秘訣。</p>
    `,
  },
  {
    id: 4,
    title: "訓練後的恢復關鍵！全新「運動按摩」服務上線",
    excerpt:
      "為什麼練完會痠痛很久？除了休息，你還需要更主動的恢復。B.S 推出專業運動按摩，結合油壓與動態伸展，讓你的肌肉找回彈性...",
    date: "2025-01-06",
    author: "呂承諺 教練",
    category: "運動恢復",
    tags: ["#運動按摩", "#肌力訓練", "#筋膜放鬆", "#桃園運動按摩"],
    image: "/massage2.jpg",
    content: `
      <p>許多人在高強度的肌力訓練或格鬥課程後，往往忽略了「恢復」的重要性。其實，訓練只是破壞，真正的變強發生在修復的過程。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">為什麼你需要運動按摩？</h3>
      <p>不同於一般的休閒按摩，<strong>運動按摩 (Sports Massage)</strong> 更專注於肌肉的張力平衡與關節活動度。透過專業的手法，我們能協助您：</p>
      <ul class="list-disc pl-5 space-y-2 text-gray-300 my-4">
        <li>改善訓練後的延遲性肌肉痠痛 (DOMS)</li>
        <li>放鬆緊繃的筋膜，恢復肌肉彈性</li>
        <li>增加關節活動角度，提升運動表現</li>
      </ul>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">B.S 的運動按摩有什麼不同？</h3>
      <p>我們的服務不僅僅是「按壓」。在 <strong>70分鐘</strong> 的完整課程中，我們結合了：</p>
      <ol class="list-decimal pl-5 space-y-2 text-gray-300 my-4">
        <li><strong>深層油壓：</strong>利用精油介質，進行深層肌肉推展。</li>
        <li><strong>伸展運動：</strong>被動式的拉伸，放鬆平常難以伸展的死角。</li>
        <li><strong>觀念導正：</strong>教練會告訴你為什麼會緊繃，以及回家該如何自我保養。</li>
      </ol>
      <br/>
      <p>現在預約體驗價只要 <strong>$1,200</strong>，讓身體重新開機，為了下一次更強的訓練做準備！</p>
    `,
  },
  {
    id: 1,
    title: "為什麼桃園人都在找肌力訓練？對抗老化從現在開始",
    excerpt:
      "隨著年齡增長，肌肉流失是不可避免的過程。但在桃園，越來越多人意識到「肌力儲蓄」的重要性。這篇文章告訴你為什麼你需要開始訓練...",
    date: "2025-01-05",
    author: "陳麒舜 教練",
    category: "肌力訓練",
    tags: ["#桃園健身房", "#肌力訓練", "#抗老化訓練", "#桃園肌力訓練"],
    image: "/daily.webp",
    content: `
      <p>隨著年齡增長，肌肉流失是不可避免的過程，這在醫學上稱為「肌少症」。但在桃園，越來越多人意識到「肌力儲蓄」的重要性。這篇文章告訴你為什麼你需要開始訓練。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">肌力就是你的生活品質</h3>
      <p>很多人以為健身只是為了好看，其實對於現代人來說，肌力更是為了「好用」。無論是抱孫子、提重物，還是單純的上下樓梯，都需要足夠的肌力支撐。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">抗老化不是擦保養品，而是舉鐵</h3>
      <p>真正的抗老化，是由內而外的。骨質疏鬆是許多銀髮族的隱形殺手，而重量訓練（負重訓練）是目前科學證實最有效能增加骨質密度的運動之一。</p>
      <br/>
      <p>在 B.S 力線體，我們專注於安全且循序漸進的訓練，讓不同年齡層的學員都能找到適合自己的強度。</p>
    `,
  },
  {
    id: 2,
    title: "格鬥不只是打架！泰拳與散打帶給你的身體改變",
    excerpt:
      "想要釋放壓力同時燃燒脂肪嗎？格鬥訓練不僅能提升心肺功能，更能訓練反應與協調性。全立格鬥館長帶你認識這項迷人的運動...",
    date: "2024-12-28",
    author: "張立 教練",
    category: "格鬥教學",
    tags: ["#桃園泰拳", "#桃園散打", "#格鬥教學", "#MMA"],
    image: "/fight.webp",
    content: `
      <p>想要釋放壓力同時燃燒脂肪嗎？格鬥訓練不僅能提升心肺功能，更能訓練反應與協調性。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">全身性的協調運動</h3>
      <p>泰拳與散打不只是動手動腳，它需要核心的旋轉、下肢的推蹬以及上肢的擺動。這是一個極高效率的全身性運動。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">釋放壓力的最佳出口</h3>
      <p>現代人生活壓力大，擊打沙袋或手靶時的快感，是最好的紓壓方式。在 B.S 力線體，我們有專業的格鬥教練（全立格鬥），提供從基礎站姿到實戰技巧的完整教學。</p>
    `,
  },
  {
    id: 3,
    title: "銀髮族運動更要注意！專業教練告訴你如何安全增肌",
    excerpt:
      "長輩怕跌倒？越不動越容易跌倒！透過科學化的評估與指導，銀髮族也能安全地變強壯，找回生活的自主權...",
    date: "2024-12-15",
    author: "范哲瑋 教練",
    category: "銀髮族訓練",
    tags: ["#銀髮族訓練", "#桃園肌力", "#專業教練"],
    image: "/oldtraning.webp",
    content: `
      <p>長輩怕跌倒？其實，越不動越容易因為肌力不足而跌倒！透過科學化的評估與指導，銀髮族也能安全地變強壯。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">安全第一，強度第二</h3>
      <p>對於長者來說，關節的活動度與過往的傷病史是我們最重視的。我們會先進行動作檢測，確保在安全的範圍內進行負重。</p>
      <br/>
      <h3 class="text-xl font-bold text-orange-500 mb-2">找回生活的自主權</h3>
      <p>訓練的最終目的，是讓長輩在日常生活中更輕鬆。不管是去市場買菜、還是出國旅遊走更遠的路，強壯的身體都是最好的本錢。</p>
    `,
  },
];

const BSGymWebsite = ({ initialPage }) => {
  const [page, setPage] = useState(() => initialPage || resolvePage(window.location.pathname, window.location.search));
  const currentView = page.view;
  const selectedPostId = page.postId;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const selectedPost = BLOG_POSTS.find((post) => post.id === selectedPostId);
  const currentCanonicalUrl =
    currentView === "post" && selectedPost
      ? toAbsoluteUrl(articlePath(selectedPost.id))
      : currentView === "blog"
        ? toAbsoluteUrl("/articles")
        : currentView === "notfound" ? toAbsoluteUrl("/404") : SITE_URL;

  useEffect(() => {
    let title = DEFAULT_TITLE;
    let description = DEFAULT_DESCRIPTION;
    let image = DEFAULT_IMAGE;
    let type = "website";

    if (currentView === "blog") {
      title = "桃園肌力訓練與健身知識｜B.S 力線體";
      description =
        "B.S 力線體教練團隊分享肌力訓練、銀髮族抗老化、泰拳散打 MMA、運動表現與恢復知識。";
    }

    if (currentView === "post" && selectedPost) {
      title = `${selectedPost.title}｜B.S 力線體`;
      description = selectedPost.excerpt;
      image = toAbsoluteUrl(selectedPost.image);
      type = "article";
    }

    if (currentView === "notfound") {
      title = "找不到這個頁面｜B.S 力線體";
      description = "您要找的頁面不存在，歡迎查看 B.S 力線體肌力訓練文章。";
    }
    document.documentElement.lang = "zh-TW";
    document.title = title;
    if (currentView !== "notfound") updateCanonicalUrl(currentCanonicalUrl);
    else document.head.querySelector('link[rel="canonical"]')?.remove();
    updateMetaTag("name", "description", description);
    updateMetaTag(
      "name",
      "robots",
      currentView === "notfound" ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", image);
    updateMetaTag("property", "og:image:alt", title);
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:url", currentCanonicalUrl);
    updateMetaTag("property", "og:site_name", "B.S 力線體");
    updateMetaTag("property", "og:locale", "zh_TW");
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", image);

    const publishedMeta = document.head.querySelector(
      'meta[property="article:published_time"]'
    );
    if (currentView === "post" && selectedPost) {
      updateMetaTag(
        "property",
        "article:published_time",
        `${selectedPost.date}T00:00:00+08:00`
      );
    } else if (publishedMeta) {
      publishedMeta.remove();
    }
  }, [currentView, currentCanonicalUrl, selectedPost]);

  // SEO: 結構化數據 (JSON-LD)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "B.S力線體",
    alternateName: "B.S Strength & Conditioning",
    image: DEFAULT_IMAGE,
    logo: `${SITE_URL}mark.jpg`,
    "@id": `${SITE_URL}#organization`,
    url: SITE_URL,
    telephone: "+886-936-624-385",
    address: {
      "@type": "PostalAddress",
      streetAddress: "壽星街60號1樓",
      addressLocality: "桃園區",
      addressRegion: "桃園市",
      postalCode: "330",
      addressCountry: "TW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.9943462,
      longitude: 121.2934289,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "21:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:30" },
    ],
    priceRange: "$$",
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=B.S+%E5%8A%9B%E7%B7%9A%E9%AB%94",
    areaServed: {
      "@type": "City",
      name: "桃園市",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100083143876394",
      "https://www.instagram.com/b.s_bigandstrong/",
    ],
    description:
      "桃園肌力與體能工作室 B.S力線體。由五位專業教練提供：一對一肌力與體能訓練、銀髮族抗老化訓練、泰拳、散打、MMA 綜合格鬥及運動按摩。立即預約！",
  };

  const articleSchema =
    currentView === "post" && selectedPost
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: selectedPost.title,
          description: selectedPost.excerpt,
          image: [toAbsoluteUrl(selectedPost.image)],
          datePublished: `${selectedPost.date}T00:00:00+08:00`,
          dateModified: `${selectedPost.modified || selectedPost.date}T00:00:00+08:00`,
          inLanguage: "zh-TW",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": currentCanonicalUrl,
          },
          author: {
            "@type": selectedPost.author.includes("團隊")
              ? "Organization"
              : "Person",
            name: selectedPost.author,
          },
          publisher: {
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            name: "B.S 力線體",
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}mark.jpg`,
            },
          },
        }
      : null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncPage = () => setPage(resolvePage(window.location.pathname, window.location.search));
    window.addEventListener("popstate", syncPage);
    const params = new URLSearchParams(window.location.search);
    if (window.location.pathname === "/" && (params.has("article") || params.get("view") === "blog")) {
      const resolved = resolvePage("/", window.location.search);
      if (resolved.view !== "notfound") {
        window.history.replaceState({}, "", resolved.view === "post" ? articlePath(resolved.postId) : "/articles");
      }
    }
    return () => window.removeEventListener("popstate", syncPage);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (id) => {
    if (currentView !== "home") {
      window.location.assign(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-100 bg-neutral-900 min-h-screen selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      )}

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || currentView !== "home"
            ? "bg-neutral-900/95 shadow-lg backdrop-blur-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="/"
            aria-label="B.S 力線體首頁"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/mark.jpg"
              alt="桃園健身房 B.S力線體 Logo - 專業肌力與體能訓練"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105 rounded-full border-2 border-orange-500/20"
              onError={(e) => {
                e.target.style.display = "none";
                if (e.target.src.includes("mark.jpg"))
                  e.target.src = "/logo.png";
              }}
            />
            <div className="text-2xl font-bold tracking-tighter text-white group-hover:opacity-90 transition-opacity flex items-center gap-1">
              B.S <span className="text-orange-500">力線體</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
            <a
              href="/#about" onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 transition-colors"
            >
              關於我們
            </a>
            <a
              href="/#schedule" onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 transition-colors"
            >
              課表與費用
            </a>
            <a
              href="/#team" onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 transition-colors"
            >
              教練團隊
            </a>
            <a
              href="/#reviews" onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 transition-colors"
            >
              學員見證
            </a>
            <a
              href="/articles"
              className={`transition-colors flex items-center gap-1 ${
                currentView === "blog" || currentView.startsWith("post")
                  ? "text-orange-500 font-bold"
                  : "hover:text-orange-500"
              }`}
            >
              <BookOpen size={16} /> 精選文章
            </a>
            <a
              href="/#location" onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 transition-colors"
            >
              交通與聯絡
            </a>
            <a
              href="/#contact" onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <CalendarCheck size={16} /> 預約體驗
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "關閉導覽選單" : "開啟導覽選單"}
              aria-expanded={isMenuOpen}
              className="text-white focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-neutral-800 shadow-xl border-t border-neutral-700 animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 gap-4 text-center">
              <a
                href="/#about" onClick={() => setIsMenuOpen(false)}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                關於我們
              </a>
              <a
                href="/#schedule" onClick={() => setIsMenuOpen(false)}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                課表與費用
              </a>
              <a
                href="/#team" onClick={() => setIsMenuOpen(false)}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                教練團隊
              </a>
              <a
                href="/articles"
                className="py-2 hover:text-orange-500 text-orange-400 font-bold border-b border-neutral-700/50 flex items-center justify-center gap-2"
              >
                <BookOpen size={18} /> 精選文章
              </a>
              <a
                href="/#reviews" onClick={() => setIsMenuOpen(false)}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                學員見證
              </a>
              <a
                href="/#location" onClick={() => setIsMenuOpen(false)}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                交通與聯絡
              </a>
              <a
                href="/#contact" onClick={() => setIsMenuOpen(false)}
                className="py-3 bg-orange-600 text-white rounded-lg font-bold shadow-md active:scale-95 transition-transform"
              >
                立即預約
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {currentView === "notfound" && <div className="pt-40 pb-24 text-center"><h1 className="text-3xl font-bold mb-6">找不到這個頁面</h1><a className="text-orange-400 underline" href="/articles">查看所有文章</a></div>}
        {currentView === "home" && (
          <HomePageContent scrollToSection={scrollToSection} />
        )}
        {currentView === "blog" && <BlogList />}
        {currentView === "post" && (
          <BlogPost postId={selectedPostId} />
        )}
      </main>

      <footer className="bg-neutral-950 py-12 text-sm text-gray-500 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                B.S 力線體
              </h2>
              <p className="mb-1">桃園市桃園區壽星街60號1樓</p>
              <p className="mb-1">週日至週五 10:00–21:30｜週六 10:00–15:30</p>
              <p>0936-624-385</p>
            </div>
            <div className="text-center md:text-right">
              <p>
                © {new Date().getFullYear()} B.S Strength & Conditioning. All
                rights reserved.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-900 text-center">
            <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed mb-5">
              B.S 力線體是位於桃園區的肌力與體能訓練工作室，提供私人教練、
              團體肌力課、銀髮族抗老化訓練、泰拳散打 MMA 與運動按摩服務。
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
              <a
                href="/#schedule" onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-500 transition-colors"
              >
                桃園肌力課程與費用
              </a>
              <a
                href="/#team" onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-500 transition-colors"
              >
                專業教練團隊
              </a>
              <a
                href="/articles"
                className="hover:text-orange-500 transition-colors"
              >
                肌力與體能知識
              </a>
              <a
                href="/#location" onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-500 transition-colors"
              >
                停車、地址與聯絡方式
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- View Components ---

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  // 取得所有不重複的分類
  const categories = [
    "全部",
    ...new Set(BLOG_POSTS.map((post) => post.category)),
  ];

  // 根據搜尋與分類過濾文章
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchCategory =
      selectedCategory === "全部" || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-24 pb-12 min-h-screen bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 pt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            桃園肌力訓練專欄｜B.S{" "}
            <span className="text-orange-500">力線體</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            我們擁有五位專業教練，分享肌力訓練知識與教學經驗、抗老化觀念以及格鬥運動的樂趣。
          </p>
        </div>

        {/* 搜尋與分類過濾區塊 */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              aria-label="搜尋文章、教練或主題"
              placeholder="搜尋文章關鍵字、教練名稱或標籤..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 文章列表 */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={articlePath(post.id)}
                className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-orange-500/30 transition-all hover:-translate-y-2 hover:shadow-2xl group cursor-pointer flex flex-col"
              >
                <div className="h-64 md:h-72 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.imageAlt || `B.S力線體文章附圖：${post.title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-neutral-700/50 flex justify-between items-center">
                    <span className="text-orange-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      閱讀全文 <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="h-16 w-16 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-300 mb-2">
              找不到相關文章
            </h3>
            <p className="text-gray-500">請嘗試更換關鍵字或選擇其他分類。</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("全部");
              }}
              className="mt-6 text-orange-500 hover:text-orange-400 underline"
            >
              清除搜尋條件
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const BlogPost = ({ postId }) => {
  const [copied, setCopied] = useState(false);
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (!post)
    return <div className="pt-32 text-center text-white">文章不存在</div>;

  const handleShareClick = () => {
    // 使用 document.execCommand 作為複製功能
    const url = window.location.href;
    const textArea = document.createElement("textarea");
    textArea.value = url;
    // 將 textarea 移出畫面外，避免破壞版面
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-neutral-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <a
            href="/articles"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} /> 返回文章列表
          </a>

          <button
            onClick={handleShareClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
              copied
                ? "bg-green-500/20 text-green-400 border border-green-500/50"
                : "bg-neutral-800 text-gray-300 hover:text-white hover:bg-neutral-700 border border-neutral-700"
            }`}
          >
            {copied ? (
              <>
                <Check size={16} /> 已複製網址
              </>
            ) : (
              <>
                <Share2 size={16} /> 分享文章
              </>
            )}
          </button>
        </div>

        <div className="mb-10">
          <div className="flex gap-2 mb-4 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-orange-400 text-sm font-medium bg-orange-500/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm border-b border-neutral-700 pb-8">
            <span className="flex items-center gap-2">
              <User size={16} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Tag size={16} /> {post.category}
            </span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl border border-neutral-700 bg-neutral-950 flex justify-center">
          <img
            src={post.image}
            alt={post.imageAlt || `桃園健身房 B.S力線體 - 文章圖片：${post.title}`}
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>

        <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-loose">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-16 bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            覺得這篇文章有幫助嗎？
          </h3>
          <p className="text-gray-400 mb-6">
            如果您想在桃園開始肌力與體能訓練，歡迎來 B.S
            力線體聊聊您的目標，選擇適合自己的課程。
          </p>
          <a
            href="https://line.me/ti/p/~rockon12319"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            <MessageCircle size={20} /> 立即預約教練諮詢
          </a>
        </div>
      </div>
    </div>
  );
};

const HomePageContent = ({ scrollToSection }) => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/yoyi.jpg"
            alt="桃園 B.S 力線體肌力與體能訓練工作室"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-neutral-900/60"></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 md:py-40 z-10 relative text-center md:text-left flex flex-col justify-center">
          <div className="md:max-w-3xl mt-auto mb-auto">
            <div className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-pulse">
              桃園專業肌力與體能訓練工作室
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              不論幾歲，都能開始<br />
              累積自己的{" "}
              <span className="text-orange-500">肌力儲蓄</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              B.S 力線體專注於真正的力量建立。從競技運動員到銀髮族抗老化，
              透過五位專業教練組成的團隊，為您建立終身受用的身體素質。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3">
              <a href="https://line.me/ti/p/~rockon12319" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 hover:bg-green-800 px-7 py-4 text-white text-lg font-bold shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <MessageCircle size={22} aria-hidden="true" /> 加 LINE 預約體驗
              </a>
              <a href="/#schedule" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-neutral-900/50 hover:bg-neutral-800 px-7 py-4 text-white font-semibold">
                查看課表與費用 <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">桃園區壽星街 60 號｜私人教練・肌力團課・銀髮訓練</p>
          </div>

        </div>
      </section>

      <section id="about" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              為什麼選擇 B.S 力線體？
            </h2>
            <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
            <div className="mt-8 max-w-3xl mx-auto space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                我們位於桃園市桃園區
                <span className="text-orange-400 font-bold">
                  壽星街（近桃園市政府）
                </span>
                ，由五位專項教練組成團隊，重視教學品質與學員的實際進步，依照不同需求安排訓練。
              </p>
              <p className="text-white text-xl md:text-2xl font-bold leading-relaxed border-l-4 border-orange-500 pl-6 py-2 bg-neutral-800/30 rounded-r-lg">
                「肌力訓練是我們最重視的事情，我們幫助別人變強壯，無論年齡都應該要訓練累積肌力財富。」
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              image="/Pistol Squat.jpg"
              title="肌力與體能專業"
              description="我們不只追求體態線條，更重視身體的實質強壯。透過科學化的壓力刺激（訓練），有助於提升肌力與動作能力，支持日常活動與運動表現；課程會依照每個人的狀況調整。"
              altText="桃園肌力訓練與體能專業教學"
            />
            <FeatureCard
              image="/fight.webp"
              title="桃園格鬥與防身"
              description="結合散打、泰拳與綜合格鬥（MMA）元素，提供高強度的體能訓練與實用的防身技巧。不僅能釋放壓力，更能訓練反應速度與協調性。"
              altText="桃園散打泰拳MMA格鬥教學"
            />
            <FeatureCard
              image="/oldtraning.webp"
              title="全年齡層與銀髮族教學"
              description="從兒童體適能到銀髮族抗老化訓練。我們深知不同年齡層的需求，提供安全且循序漸進的指導，讓運動成為全家人的健康習慣。"
              altText="桃園銀髮族抗老化肌力訓練"
            />
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              桃園肌力課程與透明費用
            </h2>
            <p className="text-gray-400">
              價格公開透明，專業高品質，無強迫推銷
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-neutral-900 p-6 rounded-2xl shadow-xl border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-6">
                <CalendarCheck className="text-orange-500" size={28} />
                <h3 className="text-2xl font-bold">每週團體課表</h3>
              </div>

              <div className="space-y-4">
                <ScheduleItem
                  day="星期一"
                  classes={[
                    {
                      time: "19:30 - 20:50",
                      title: "進階肌力班",
                      beginnerFriendly: true,
                    },
                  ]}
                />

                <ScheduleItem
                  day="星期二"
                  classes={[
                    {
                      time: "20:00 - 21:20",
                      title: "進階肌力班",
                      beginnerFriendly: true,
                    },
                  ]}
                />

                <ScheduleItem
                  day="星期三"
                  classes={[
                    { time: "20:00 - 21:20", title: "進階肌力班" },
                  ]}
                />

                <ScheduleItem
                  day="星期四"
                  accent="green"
                  classes={[
                    { time: "18:00 - 19:20", title: "進階肌力班" },
                    {
                      time: "19:30 - 20:50",
                      title: "長者肌力班",
                      beginnerFriendly: true,
                    },
                  ]}
                />

                <ScheduleItem
                  day="星期六"
                  classes={[
                    {
                      time: "14:00 - 15:20",
                      title: "初階肌力班",
                      beginnerFriendly: true,
                    },
                  ]}
                />

                <ScheduleItem
                  day="星期日"
                  accent="red"
                  classes={[
                    { time: "18:00 - 19:00", title: "泰拳 Muay Thai" },
                    { time: "19:00 - 20:00", title: "柔術 Jiu-Jitsu" },
                  ]}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700/50 overflow-hidden group hover:border-orange-500/40 transition-colors h-full">
                <div className="relative h-56 overflow-hidden bg-neutral-800">
                  <img
                    src="/1V1.jpg"
                    alt="桃園一對一私人教練 - B.S 力線體"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 via-neutral-950/65 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block text-sm font-bold text-orange-300 mb-1">
                      一對一專業指導
                    </span>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <span className="bg-orange-500 w-2 h-8 rounded-full"></span>
                      桃園私人教練課程
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="space-y-6">
                    <div className="border-b border-neutral-700/50 pb-4">
                      <h4 className="text-lg font-bold text-orange-400 mb-2">
                        一對一私人教練
                      </h4>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-400">單堂體驗</span>
                        <span className="text-xl font-bold">$1,800</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">十堂課程</span>
                        <span className="text-xl font-bold">$15,000</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-orange-400 mb-2">
                        一對二私人教練{" "}
                        <span className="text-xs font-normal text-gray-500 ml-2">
                          (需評估)
                        </span>
                      </h4>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-400">單堂體驗</span>
                        <span className="text-xl font-bold">$2,400</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">十堂課程</span>
                        <span className="text-xl font-bold">$20,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700/50 overflow-hidden group hover:border-green-500/40 transition-colors">
                <div className="relative h-52 overflow-hidden bg-neutral-800">
                  <img
                    src="/daily.webp"
                    alt="桃園肌力訓練團體班 - 銀髮族與抗老化"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 via-neutral-950/65 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block text-sm font-bold text-green-300 mb-1">
                      小班制肌力訓練
                    </span>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <span className="bg-green-500 w-2 h-8 rounded-full"></span>
                      桃園肌力團體班
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-neutral-700/50 pb-3">
                      <div>
                        <span className="block font-bold">單堂團體課程</span>
                        <span className="text-xs text-gray-400">單次參加</span>
                      </div>
                      <span className="text-2xl font-bold text-green-400">
                        $600
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-neutral-700/50 pb-2">
                      <div>
                        <span className="block font-bold">初階肌力班</span>
                        <span className="text-xs text-gray-500">
                          八堂課 / 為期八週
                        </span>
                      </div>
                      <span className="text-xl font-bold text-green-400">
                        $3,600
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-neutral-700/50 pb-2">
                      <div>
                        <span className="block font-bold">進階肌力班</span>
                        <span className="text-xs text-gray-500">
                          八堂課 / 為期八週
                        </span>
                      </div>
                      <span className="text-xl font-bold text-green-400">
                        $3,600
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block font-bold">長者肌力班</span>
                        <span className="text-xs text-gray-500">
                          八堂課 / 為期八週
                        </span>
                      </div>
                      <span className="text-xl font-bold text-green-400">
                        $3,600
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700/50 overflow-hidden group hover:border-purple-500/40 transition-colors">
                <div className="relative h-48 overflow-hidden bg-neutral-800">
                  <img
                    src="/massage1.jpg"
                    alt="桃園運動按摩與筋膜放鬆"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 via-neutral-950/65 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block text-sm font-bold text-purple-300 mb-1">
                      70 分鐘運動按摩
                    </span>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <span className="bg-purple-500 w-2 h-8 rounded-full"></span>
                      專業運動按摩修復
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block font-bold flex items-center gap-2">
                          運動按摩{" "}
                          <Sparkles size={14} className="text-purple-400" />
                        </span>
                        <span className="text-xs text-gray-400 block mb-1">
                          70分鐘 / 油壓
                        </span>
                        <span className="text-xs text-gray-500 block">
                          包含伸展運動與觀念導正
                        </span>
                      </div>
                      <span className="text-xl font-bold text-purple-400">
                        $1,200
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-4 rounded-xl text-sm text-gray-400 flex gap-2 items-start">
                <div className="min-w-[4px] h-full bg-yellow-500 rounded-full"></div>
                <p>
                  小提醒：團體課程可以請假，但不予補課及退費。報名請私訊或加
                  LINE。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              認識 B.S 力線體的 5 位教練
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              從肌力與體能到格鬥教學，依照您的目標、經驗與身體狀況，找到適合的教練。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoachCard
              name="陳麒舜"
              title="肌力與體能 / 格鬥教練"
              image="/coach-shun.jpg"
              lineId="rockon12319"
              phone="0936-624-385"
              certifications={[
                "ACE-CPT 國際私人教練",
                "CTSSN 運動營養專認證",
                "WBC 國際高階拳擊證照",
                "EMT1 初級救護技術員",
                "台灣保健運動協會-硬式壺鈴授課教練",
                "IHA 國際保健協會運動按摩技術員",
                "中華民國泰國拳協會C級運動裁判證",
                "G動學上、下肢整合研習",
                "怪獸訓練 (教練俱樂部第11期、動作控制、課程設計)",
              ]}
              expertise={[
                "肌力與體能訓練",
                "銀髮族抗老化訓練",
                "泰拳、散打、柔術、綜合格鬥",
                "筋膜舒緩、痠痛緩解",
              ]}
              achievements={[
                "2015年 桃園市長盃散打 亞軍",
                "2015年 全國乙組散打搏擊錦標賽 亞軍",
                "2016年 全國乙組散打搏擊錦標賽 亞軍",
                "2016年 WAKO踢拳擊全國錦標賽 亞軍",
                "2017年 桃園市長盃散打搏擊 冠軍",
                "2017年 WAKO踢拳擊錦標賽 冠軍",
                "2024年 桃園市第五屆泰拳交流賽優勝",
                "2025年 桃園市鑫利通盃泰拳優勝",
                "2025年 桃園泰拳市長盃泰拳錦標賽優勝",
              ]}
              altText="桃園肌力與體能教練 陳麒舜"
            />

            <CoachCard
              name="呂承諺"
              title="專業私人教練"
              image="/coach-yan.jpg"
              lineId="ian3457"
              phone="0986-903-826"
              certifications={[
                "怪獸訓練：C級",
                "G動學上肢整合(肌動學、骨頭學、解剖學)",
                "G動學下肢整合(肌動學、骨頭學、解剖學)",
                "IHA 國際保健協會運動按摩技術員",
                "怪獸訓練-動作控制、學習、檢測與矯正",
              ]}
              expertise={[
                "肌力與體能訓練",
                "銀髮族抗老化訓練",
                "泰拳、散打",
                "筋膜舒緩、肌肉放鬆",
              ]}
              achievements={[
                "2020 全國乙組散打 第三名",
                "2021 全國乙組散打 冠軍",
              ]}
              altText="桃園肌力訓練與運動按摩教練 呂承諺"
            />

            <CoachCard
              name="范哲瑋"
              title="肌力與體能教練"
              image="/coach-wei.jpg"
              lineId="fan_jhewei"
              phone="0979-509-068"
              certifications={[
                "怪獸訓練證照：抗老化肌力與體能教練認證",
                "怪獸訓練證照：B級肌力與體能教練認證",
                "中華民國運動教練學會-丙級肌力與體能教練（何立安教官授課）",
                "亞洲教練科學會-肌力與體能B級教練證",
                "台灣保健運動協會-硬式壺鈴授證教練",
              ]}
              education={[
                "KAT-私人教練培訓班",
                "G動學 動作概論呼吸與核心",
                "怪獸訓練-動作控制、學習、檢測與矯正",
                "怪獸訓練-體能教練俱樂部第十一期",
                "怪獸訓練-體能教練研究班第十三、十四期",
                "怪獸訓練-課程設計、技術、課表、週期及身心準備",
              ]}
              expertise={[
                "肌力與體能訓練",
                "銀髮族抗老化訓練",
                "循序漸進建立肌力",
                "提升日常動作能力",
              ]}
              achievements={[
                "42公里 馬陵生態園區山地馬拉松 分組第二名",
                "25公里 北北基山地超半程馬拉松 分組第三名",
                "一日桃園高雄單日騎行 365 公里",
                "單車北進、單車西進武嶺",
                "2023年 第一屆台灣大力士比賽完賽",
              ]}
              altText="桃園銀髮族抗老化教練 范哲瑋"
            />

            <CoachCard
              name="陳麒智"
              title="私人教練"
              image="/coach-zhi.jpg"
              lineId="歡迎洽詢官方LINE"
              phone=""
              certifications={[
                "ACE 美國國家運動協會私人教練認證",
                "AFAA 美國有氧體適能協會兒童體適能研習證書",
                "TRX-STC 懸吊訓練師",
                "Afaa-WT國際重量訓練指導員",
                "台灣運動保健協會-硬式壺鈴教練",
                "G動學 (上肢整合、下肢整合、動作概論呼吸與核心)",
                "Dr.John Rusin無痛表現訓練",
                "馬力舉重 Level 1",
                "怪獸訓練中心 (動作控制、課程設計、年長者訓練研習)",
              ]}
              expertise={[
                "肌力與體能訓練",
                "兒童體適能",
                "懸吊訓練",
                "壺鈴訓練",
                "動作控制與矯正",
              ]}
              achievements={[
                "2012 全國業餘泰拳錦標賽 銀牌",
                "2013 海峽兩岸暨港澳地區泰拳邀請賽國家代表選手第四名",
                "2013 全國散打搏擊錦標賽 銀牌",
                "2013 桃園市市長盃博擊錦標賽 銀牌",
                "2013 北大盃全國大專散打搏擊錦標賽 銀牌",
                "2014 WAKO 踢拳道全國錦標賽 銅牌",
                "2014 全國業餘泰拳錦標賽 銅牌",
                "2015 桃園市市長盃博擊錦標賽 銀牌",
                "2015 WAKO踢拳道國錦標賽 金牌",
                "2022 總統盃單項臥舉 銅牌",
                "2023 新北市出力館盃單項臥舉 銅牌",
              ]}
              altText="桃園壺鈴與私人教練 陳麒智"
            />

            <CoachCard
              name="張立"
              title="全立格鬥館長 / 格鬥教練"
              image="/coach-li.jpg"
              lineId="@989qoqeb"
              phone=""
              certifications={["中華民國泰拳C級教練", "ACE-CPT私人教練證照"]}
              expertise={["泰拳", "散打", "MMA綜合格鬥", "肌力訓練"]}
              achievements={[
                "2011 全國散打56公斤冠軍",
                "2011 陽明盃散打56公斤冠軍",
                "2012 參加IFMA世界業餘泰拳60公斤",
                "2012 全國業餘泰拳54公斤亞軍",
                "2013 全國業餘泰拳60公斤亞軍",
                "2014 參加IFMA世界大學泰拳比賽",
                "2014 兩岸四地泰拳邀請賽54公斤銀牌",
                "2015 兩岸四地泰拳邀請賽57公斤銅牌",
                "2015 全國業餘泰拳60公斤冠軍",
                "2017 桃園縣縣長盃60公斤冠軍",
                "2020-2024 WOTD MMA雛量級7連勝",
                "2024 參加AMMA雛量級亞錦賽",
                "2025 參加AMMA雛量級國手選拔冠軍",
                "2026 亞洲格鬥錦標賽國手",
              ]}
              customAction={{
                text: "想練MMA? 去全立格鬥找張立",
                url: "https://www.google.com/maps/place/%E5%85%A8+%E7%AB%8B+%E6%A0%BC+%E9%AC%A5/@24.9630095,121.2603245,985m/data=!3m2!1e3!4b1!4m6!3m5!1s0x346819f83462c0b1:0x52cc93ee6224fa3c!8m2!3d24.9630047!4d121.2628994!16s%2Fg%2F11x0c6ypq0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              }}
              isSpecial={true}
              altText="桃園MMA散打教練 張立 (全立格鬥館長)"
            />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              學員見證回饋
            </h2>
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <p className="text-gray-400">
              以下節錄自 Google 商家公開評論，可點連結閱讀完整內容。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ReviewCard name="大嘴魚" tag="理解訓練方法"
              content="讓新手知道為何以及如何而練"
              source="https://maps.app.goo.gl/DLg7R4qhPn5KZiLP9" />
            <ReviewCard name="wangyuyun" tag="新手友善與尊重"
              content="教練對女性學員有充分的協助與尊重，以及新手友善。"
              source="https://maps.app.goo.gl/mpocbg7jvMqxMJg98" />
            <ReviewCard name="水豚特務" tag="學會自主訓練"
              content="也學習到很多自由訓練的技巧跟正確觀念！"
              source="https://maps.app.goo.gl/jyNFeGhig8yB2fHK9" />
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=B.S+力線體"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-700 hover:border-orange-500 text-white px-8 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-lg"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google 評論"
                loading="lazy"
                decoding="async"
                className="w-5 h-5"
              />
              <span className="font-bold">前往 Google 看更多桃園在地評論</span>
              <ExternalLink size={18} className="text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              常見問題 FAQ
            </h2>
            <p className="text-gray-400">
              解答您對桃園 B.S 力線體訓練的所有疑問
            </p>
          </div>

          <div className="space-y-4">
            <FaqItem
              question="我完全沒有運動經驗，可以參加嗎？"
              answer="當然可以！我們的初階肌力班和一對一教練課程，都是專為新手與零基礎的學員設計的。教練會從最基礎的呼吸和動作模式開始教起，陪您循序漸進地學習，依照動作能力調整難度。"
            />
            <FaqItem
              question="請問附近好停車嗎？"
              answer="可以，附近有 Times 桃園仁愛路停車場，以及文中路 7-ELEVEN 文中門市旁的全方位停車場文中站。下方有兩個停車場的導航連結，以及從文中站走到工作室的紅線捷徑圖。"
              linkTo="parking"
              linkLabel="查看停車位置與步行路線"
              scrollToSection={scrollToSection}
            />
            <FaqItem
              question="上課需要準備什麼裝備？"
              answer="您只需要穿著舒適的運動服裝、赤足訓練或是準備乾淨的室內運動鞋，並攜帶毛巾即可（工作室內備有飲水機及廁所）。如果是格鬥課程，工作室會提供公用拳套，若有個人衛生考量也可自行購買。"
            />
            <FaqItem
              question="請問收費方式？需要綁約嗎？"
              answer="我們的價格公開透明，私人課程與團體課程分開計費，無強迫推銷，詳細方案請參考上方的「課程與費用」區塊，皆不需綁定長期年約。"
              linkTo="schedule"
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </section>

      <section id="location" className="py-24 bg-neutral-800 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  聯絡桃園 B.S 力線體
                </h2>
                <div className="w-16 h-1 bg-orange-600 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg">
                  歡迎預約參觀或諮詢課程，我們專業的五位教練團隊將儘速為您安排。
                </p>
              </div>

              <div className="space-y-6 bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50">
                <div className="mb-8">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <MessageCircle size={20} className="text-orange-500" />
                    線上私訊 / 追蹤上課日常
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=100083143876394"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/30 hover:bg-[#1877F2] hover:text-white transition-all group"
                    >
                      <Facebook
                        size={40}
                        className="text-[#1877F2] group-hover:text-white"
                      />
                      <span className="font-bold text-[#1877F2] group-hover:text-white">
                        Facebook
                      </span>
                      <span className="text-xs opacity-60">粉專私訊</span>
                    </a>
                    <a
                      href="https://www.instagram.com/b.s_bigandstrong/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-[#E4405F]/10 border border-[#E4405F]/30 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white transition-all group"
                    >
                      <Instagram
                        size={40}
                        className="text-[#E4405F] group-hover:text-white"
                      />
                      <span className="font-bold text-[#E4405F] group-hover:text-white">
                        Instagram
                      </span>
                      <span className="text-xs opacity-60">追蹤上課日常</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-neutral-700/50">
                  <div className="flex items-start gap-4">
                    <div className="bg-neutral-700 p-2 rounded-lg text-gray-300 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">地址</h4>
                      <p className="text-gray-400">桃園市桃園區壽星街60號1樓</p>
                      <p className="text-gray-400 mt-3">週日至週五 10:00–21:30<br />週六 10:00–15:30</p>
                      <p className="text-gray-500 text-sm mt-1">課程請先透過 LINE 預約。</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=B.S+力線體"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-orange-500 hover:text-orange-400 hover:underline mt-1 inline-block transition-colors"
                      >
                        在 Google Maps 上查看
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-neutral-700 p-2 rounded-lg text-gray-300 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">電話</h4>
                      <p className="text-gray-400 font-mono">0936-624-385</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-neutral-700 p-2 rounded-lg text-gray-300 shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">LINE</h4>
                      <p className="text-gray-400">ID: rockon12319</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px] w-full bg-neutral-700 rounded-2xl overflow-hidden shadow-2xl relative border border-neutral-600">
              <iframe
                title="B.S Gym 桃園健身房地圖"
                src="https://maps.google.com/maps?q=桃園市桃園區壽星街60號&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="filter grayscale contrast-125 hover:filter-none transition-all duration-700"
              ></iframe>
            </div>
          </div>

          <div id="parking" className="mt-16 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-orange-400 font-bold mb-3">
                  <Car size={22} aria-hidden="true" />
                  開車來上課
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  附近停車場資訊
                </h3>
                <p className="text-gray-400 text-base md:text-lg">
                  先選停車場開啟導航，停好車後再步行前往 B.S 力線體。
                </p>
              </div>
              <p className="text-sm text-gray-400 bg-neutral-900/70 border border-neutral-700 rounded-full px-4 py-2 self-start md:self-auto">
                車位與收費請以停車場現場公告為準
              </p>
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
              <div className="space-y-4">
                <article className="bg-neutral-900 rounded-2xl border border-orange-500/30 p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-black text-lg shrink-0">
                      1
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xl font-bold text-white mb-2">
                        Times 桃園仁愛路停車場
                      </h4>
                      <p className="text-gray-300 mb-3">
                        桃園市桃園區仁愛路 42 號
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5 text-sm">
                        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                          24 小時開放
                        </span>
                        <span className="px-3 py-1 rounded-full bg-neutral-800 text-gray-300 border border-neutral-700">
                          仁愛路方向
                        </span>
                      </div>
                      <a
                        href="https://maps.app.goo.gl/1xbPx12t5L8hD2XQ8"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl transition-colors"
                      >
                        <Navigation size={18} aria-hidden="true" />
                        開啟 Google 地圖導航
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-neutral-900 rounded-2xl border border-green-500/30 p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-neutral-950 font-black text-lg shrink-0">
                      2
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xl font-bold text-white mb-2">
                        全方位停車場文中站
                      </h4>
                      <p className="text-gray-300 mb-1">
                        桃園市桃園區文中路 51 號一帶
                      </p>
                      <p className="text-green-300 text-sm font-medium mb-3">
                        7-ELEVEN 文中門市旁，可走下方紅線小路
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5 text-sm">
                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                          24 小時開放
                        </span>
                        <span className="px-3 py-1 rounded-full bg-neutral-800 text-gray-300 border border-neutral-700">
                          有步行捷徑
                        </span>
                      </div>
                      <a
                        href="https://maps.app.goo.gl/Je1UFWhzWnZYaZoR6"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3 rounded-xl transition-colors"
                      >
                        <Navigation size={18} aria-hidden="true" />
                        開啟 Google 地圖導航
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              <figure className="bg-neutral-900 rounded-2xl border border-neutral-700 overflow-hidden shadow-2xl">
                <img
                  src="/parking-route-wenzhong.png"
                  alt="從全方位停車場文中站沿小路步行至 B.S 力線體的紅線路線圖"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <figcaption className="p-5 md:p-6 border-t border-neutral-700">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500/10 text-red-400 p-2 rounded-lg shrink-0">
                      <Footprints size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">
                        紅線就是步行捷徑
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        從全方位停車場文中站停好車後，沿紅線小路走到 B.S
                        力線體，可以少繞一大圈。
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-orange-600 to-orange-700 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            準備好開始累積肌力了嗎？
          </h2>
          <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            無論您的目標是增強肌力、格鬥競技或是健康抗老，B.S
            力線體的教練團隊都願意陪您循序漸進地練習。
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=100083143876394"
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 bg-white text-[#1877F2] px-8 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Facebook size={28} /> FB 粉專預約
              </a>
              <a
                href="https://www.instagram.com/b.s_bigandstrong/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 bg-white text-[#E4405F] px-8 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Instagram size={28} /> IG 私訊預約
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://line.me/ti/p/~rockon12319"
                target="_blank"
                rel="noreferrer noopener"
                className="sm:w-auto bg-black/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-black/30 transition-colors flex items-center justify-center gap-2 border border-white/10"
              >
                <MessageCircle size={18} /> 加 LINE 諮詢
              </a>
              <a
                href="tel:0936624385"
                className="sm:w-auto bg-black/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-black/30 transition-colors flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone size={18} /> 撥打電話
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      </section>
    </>
  );
};

// Sub-components

const FeatureCard = ({ image, title, description, altText }) => (
  <div className="bg-neutral-800 rounded-2xl border border-neutral-700/50 hover:border-orange-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 group h-full flex flex-col overflow-hidden">
    <div className="w-full h-96 overflow-hidden relative">
      <img
        src={image}
        alt={altText}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-transparent opacity-80"></div>
    </div>

    <div className="p-8 pt-6 flex-grow flex flex-col relative z-10">
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-justify flex-grow">
        {description}
      </p>
    </div>
  </div>
);

const SCHEDULE_ACCENT_CLASSES = {
  orange: "border-orange-500",
  green: "border-green-500",
  red: "border-red-500",
};

const ScheduleItem = ({ day, classes, accent = "orange" }) => (
  <div
    className={`p-4 rounded-xl border-l-4 bg-neutral-800 hover:bg-neutral-700/80 transition-colors ${
      SCHEDULE_ACCENT_CLASSES[accent] || SCHEDULE_ACCENT_CLASSES.orange
    }`}
  >
    <span className="font-bold text-lg text-white block mb-3">{day}</span>

    <div className="divide-y divide-neutral-700/70">
      {classes.map(({ time, title, beginnerFriendly }) => (
        <div
          key={`${day}-${time}-${title}`}
          className="grid grid-cols-[minmax(6.5rem,auto)_1fr] items-center gap-3 py-3 first:pt-0 last:pb-0"
        >
          <span className="text-gray-300 font-mono text-sm whitespace-nowrap">
            {time}
          </span>

          <div className="flex flex-wrap items-center justify-end gap-2">
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-neutral-700 text-white whitespace-nowrap">
              {title}
            </span>

            {beginnerFriendly && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-300 text-xs font-bold whitespace-nowrap">
                <Flower2 size={14} aria-hidden="true" />
                新手友善
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CoachCard = ({
  name,
  title,
  image,
  certifications,
  education,
  expertise,
  lineId,
  phone,
  achievements,
  customAction,
  isSpecial,
  imgPosition,
  altText,
}) => (
  <div
    className={`bg-neutral-800 rounded-2xl overflow-hidden border transition-all hover:shadow-xl group flex flex-col h-full ${
      isSpecial
        ? "border-orange-500 shadow-orange-500/20 shadow-lg transform hover:-translate-y-2"
        : "border-neutral-700/50 hover:border-orange-500/30"
    }`}
  >
    <div className="h-64 md:h-[30rem] overflow-hidden relative bg-neutral-700 shrink-0">
      <img
        src={image}
        alt={altText}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-100 ${
          imgPosition || "object-top"
        }`}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/800x600?text=Coach+Image";
        }}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent p-6 pt-20">
        <h3 className="text-3xl font-bold text-white mb-1">{name}</h3>
        <p className="text-orange-500 font-medium text-lg">{title}</p>
      </div>
    </div>

    <div className="p-6 flex-grow flex flex-col gap-6 relative">
      {isSpecial && (
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-red-500 font-bold tracking-wider text-sm">
            想練 MMA ?
          </span>
        </div>
      )}

      {/* 專長區塊 */}
      <div className="flex-grow">
        <h4 className="flex items-center gap-2 font-bold text-white mb-3">
          <Activity size={18} className="text-blue-500" /> 專長領域
        </h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((exp, i) => (
            <span
              key={i}
              className="text-xs bg-neutral-700 text-gray-200 px-2 py-1 rounded border border-neutral-600"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>


      <div className="md:hidden">
        <h4 className="font-bold text-white mb-2">代表證照</h4>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {(certifications || []).slice(0, 3).map((cert) => <li key={cert}>{cert}</li>)}
        </ul>
      </div>
      <details className="coach-credentials">
        <summary className="cursor-pointer text-orange-400 font-semibold py-3 list-none flex items-center justify-between gap-2">
          <span className="coach-expand">展開完整資歷</span><span className="coach-collapse">收合完整資歷</span>
          <ChevronDown size={18} aria-hidden="true" />
        </summary>
        <div className="coach-credentials-body space-y-6 pt-4 md:pt-0">
      {/* 證照區塊 */}
      {certifications && certifications.length > 0 && (
        <div>
          <h4 className="flex items-center gap-2 font-bold text-white mb-3">
            <Award size={18} className="text-yellow-500" /> 主要證照
          </h4>
          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 進修區塊 */}
      {education && education.length > 0 && (
        <div>
          <h4 className="flex items-center gap-2 font-bold text-white mb-3">
            <BookOpen size={18} className="text-green-500" /> 進修課程
          </h4>
          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
            {education.map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 經歷戰績區塊 */}
      {achievements && achievements.length > 0 && (
        <div>
          <h4 className="flex items-center gap-2 font-bold text-white mb-3">
            <Trophy size={18} className="text-orange-500" /> 特殊戰績 / 經歷
          </h4>
          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside md:max-h-56 md:overflow-y-auto pr-2 custom-scrollbar">
            {achievements.map((ach, i) => (
              <li key={i} className="py-0.5">
                {ach}
              </li>
            ))}
          </ul>
        </div>
      )}


        </div>
      </details>
      <div className="pt-4 border-t border-neutral-700 mt-auto shrink-0">
        {!customAction && <a href={`https://line.me/ti/p/~${lineId && !lineId.includes("歡迎") ? lineId : "rockon12319"}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 px-4 rounded-xl font-bold mb-4"><MessageCircle size={18} aria-hidden="true" /> 預約 {name} 教練</a>}
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-gray-500">LINE ID</span>
          <span className="text-white font-mono bg-neutral-900 px-2 py-1 rounded select-all text-xs md:text-sm">
            {lineId}
          </span>
        </div>
        {phone && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">電話</span>
            <a
              href={`tel:${phone.replace(/-/g, "")}`}
              className="text-orange-500 hover:underline font-mono"
            >
              {phone}
            </a>
          </div>
        )}
        {customAction && (
          <div className="mt-4">
            <a
              href={customAction.url}
              target="_blank"
              rel="noreferrer noopener"
              className="block w-full text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <MapPin size={18} />
              {customAction.text}
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

const ReviewCard = ({ name, tag, content, source }) => (
  <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700/50 hover:border-orange-500/30 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-bold text-white">{name}</h4>
        <span className="text-xs text-orange-500 border border-orange-500/30 px-2 py-0.5 rounded-full bg-orange-500/10">
          {tag}
        </span>
      </div>
      <div className="flex gap-0.5 text-yellow-500">
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
        <Star size={14} fill="currentColor" />
      </div>
    </div>
    <blockquote className="text-gray-300 text-base leading-relaxed">「{content}」</blockquote>
    <a href={source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-5 text-sm text-orange-400 hover:underline" aria-label={`閱讀 ${name} 的 Google 評論原文`}>Google 評論原文 <ExternalLink size={14} aria-hidden="true" /></a>
    <p className="mt-2 text-xs text-gray-500">原文節錄 · 查閱於 2026/09/08</p>
  </div>
);

const FaqItem = ({
  question,
  answer,
  linkTo,
  linkLabel = "前往查看詳細費用",
  scrollToSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollClick = () => {
    if (scrollToSection && linkTo) {
      scrollToSection(linkTo);
    }
  };

  return (
    <div className="border-b border-neutral-700 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:text-orange-500 transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-400 leading-relaxed bg-neutral-900/50 p-4 rounded-lg">
          {answer}
          {linkTo && (
            <div className="mt-2">
              <button
                onClick={handleScrollClick}
                className="text-orange-500 hover:text-orange-400 font-bold text-sm flex items-center gap-1"
              >
                {linkLabel} <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BSGymWebsite;
