import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
} from "lucide-react";

// 這裡引入你剛才建立的文章列表檔案
import Articles from "./Articles";

const BSGymWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-100 bg-neutral-900 min-h-screen selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-900/95 shadow-lg backdrop-blur-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            {/* Logo Image */}
            <img
              src="/mark.jpg"
              alt="B.S Logo"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105 rounded-full border-2 border-orange-500/20"
              onError={(e) => {
                e.target.style.display = "none";
                if (e.target.src.includes("mark.jpg"))
                  e.target.src = "/logo.png";
              }}
            />
            <h1 className="text-2xl font-bold tracking-tighter text-white group-hover:opacity-90 transition-opacity flex items-center gap-1">
              B.S <span className="text-orange-500">力線體</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-orange-500 transition-colors"
            >
              關於我們
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="hover:text-orange-500 transition-colors"
            >
              課表與費用
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="hover:text-orange-500 transition-colors"
            >
              教練團隊
            </button>

            {/* 🔥 新增的文章專欄按鈕 */}
            <Link
              to="/articles"
              className="hover:text-orange-500 transition-colors font-bold text-orange-400"
            >
              文章專欄
            </Link>

            <button
              onClick={() => scrollToSection("reviews")}
              className="hover:text-orange-500 transition-colors"
            >
              學員見證
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-orange-500 transition-colors"
            >
              常見問題
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="hover:text-orange-500 transition-colors"
            >
              聯絡資訊
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <CalendarCheck size={16} /> 預約體驗
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-neutral-800 shadow-xl border-t border-neutral-700 animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 gap-4 text-center">
              <button
                onClick={() => scrollToSection("about")}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                關於我們
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                課表與費用
              </button>

              {/* 🔥 手機版新增的文章專欄按鈕 */}
              <Link
                to="/articles"
                className="py-2 text-orange-400 font-bold border-b border-neutral-700/50"
                onClick={() => setIsMenuOpen(false)}
              >
                文章專欄
              </Link>

              <button
                onClick={() => scrollToSection("team")}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                教練團隊
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                學員見證
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                常見問題
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="py-2 hover:text-orange-500 border-b border-neutral-700/50"
              >
                聯絡資訊
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="py-3 bg-orange-600 text-white rounded-lg font-bold shadow-md active:scale-95 transition-transform"
              >
                立即預約
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/yoyi.jpg"
            alt="桃園健身房肌力訓練 B.S 力線體"
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-neutral-900/60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative text-center md:text-left h-full flex flex-col justify-center">
          <div className="md:max-w-3xl mt-auto mb-auto">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-pulse">
              桃園專業肌力與體能訓練
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              任何人與年紀都需要肌力訓練 <br />
              趁現在開始<span className="text-orange-500">肌力儲蓄</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              B.S 力線體專注於真正的力量建立。從競技運動員到銀髮族抗老化，
              透過專業教練團隊，為您建立終身受用的身體素質。
            </p>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Scroll Down
            </span>
            <ChevronDown size={32} className="text-orange-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              為什麼選擇 B.S 力線體？
            </h2>
            <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
            <div className="mt-8 max-w-3xl mx-auto space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                我們位於
                <span className="text-orange-400 font-bold">
                  桃園市政府附近
                </span>
                ，交通便利。不同於傳統大型健身房的業務推銷模式，我們更重視教學品質與學員的實際進步。
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
              description="我們不只追求體態線條，更重視身體的實質強壯。隨著年齡增長，肌肉與神經系統會自然退化，但人體具備『適應壓力』的能力。透過科學化的壓力刺激（訓練），能有效強化骨質、神經與肌肉，不僅延緩老化、預防退化，更能提升運動表現。"
            />
            <FeatureCard
              image="/fight.jpg"
              title="格鬥與防身"
              description="結合散打、泰拳與綜合格鬥（MMA）元素，提供高強度的體能訓練與實用的防身技巧。不僅能釋放壓力，更能訓練反應速度與協調性。"
            />
            <FeatureCard
              image="/oldtraning.jpg"
              title="全年齡層教學"
              description="從兒童體適能到銀髮族抗老化訓練。我們深知不同年齡層的需求，提供安全且循序漸進的指導，讓運動成為全家人的健康習慣。"
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">課程與費用</h2>
            <p className="text-gray-400">透明的價格，專業的品質，無強迫推銷</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Weekly Schedule */}
            <div className="bg-neutral-900 p-6 rounded-2xl shadow-xl border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-6">
                <CalendarCheck className="text-orange-500" size={28} />
                <h3 className="text-2xl font-bold">每週團體課表</h3>
              </div>

              <div className="space-y-4">
                <ScheduleItem
                  day="星期一"
                  time="19:30 - 20:50"
                  title="進階肌力班"
                  color="bg-orange-600/20 text-orange-400"
                />

                <div className="p-4 bg-neutral-800 rounded-xl border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">星期二</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span className="font-mono">10:30-11:50</span>{" "}
                      <span>初階肌力班</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span className="font-mono">18:30-19:50</span>{" "}
                      <span>初階肌力班</span>
                    </div>
                    <div className="flex justify-between text-white font-medium">
                      <span className="font-mono">20:00-21:20</span>{" "}
                      <span>進階肌力班</span>
                    </div>
                  </div>
                </div>

                <ScheduleItem
                  day="星期三"
                  time="20:00 - 21:20"
                  title="進階肌力班"
                  color="bg-orange-600/20 text-orange-400"
                />

                <div className="p-4 bg-neutral-800 rounded-xl border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">星期四</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white font-medium">
                      <span className="font-mono">18:00-19:20</span>{" "}
                      <span>進階肌力班</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span className="font-mono">19:30-20:50</span>{" "}
                      <span>長者肌力班</span>
                    </div>
                  </div>
                </div>

                <ScheduleItem
                  day="星期六"
                  time="14:00 - 15:20"
                  title="初階肌力班"
                  color="bg-blue-600/20 text-blue-400"
                />

                <div className="p-4 bg-neutral-800 rounded-xl border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">星期日</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span className="font-mono">18:00-19:00</span>{" "}
                      <span>泰拳 Muay Thai</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span className="font-mono">19:00-20:00</span>{" "}
                      <span>柔術 Jiu-Jitsu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="space-y-6">
              <div className="relative bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700/50 overflow-hidden group hover:border-orange-500/30 transition-colors">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/1V1.jpg"
                    alt="一對一私人教練"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-50 transition-opacity duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/60"></div>
                </div>

                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-orange-600 w-2 h-8 rounded-full"></span>
                    私人教練課程
                  </h3>

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

              <div className="relative bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700/50 overflow-hidden group hover:border-green-500/30 transition-colors">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/daily.jpg"
                    alt="肌力團體班"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-50 transition-opacity duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/60"></div>
                </div>

                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-green-600 w-2 h-8 rounded-full"></span>
                    肌力團體班
                  </h3>

                  <div className="space-y-4">
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

      {/* Team Section */}
      <section id="team" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              專業教練團隊
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              每一位教練皆具備專業證照與豐富教學經驗，為您提供最安全的訓練環境。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoachCard
              name="陳麒舜"
              title="教練 / 格鬥教練"
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
            />
            <CoachCard
              name="呂承諺"
              title="教練"
              image="/coach-yan.jpg"
              lineId="ian3457"
              phone="0986-903-826"
              certifications={[
                "怪獸訓練：C級",
                "G動學上肢整合(肌動學、骨頭學、解剖學)",
                "G動學下肢整合",
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
            />
            <CoachCard
              name="范哲瑋"
              title="教練"
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
              expertise={[
                "肌力與體能訓練",
                "銀髮族抗老化訓練",
                "改善肌力不足導致的痠痛",
                "提升日常動作能力",
              ]}
              achievements={[
                "42公里 馬陵生態園區山地馬拉松 分組第二名",
                "25公里 北北基山地超半程馬拉松 分組第三名",
                "一日桃園高雄單日騎行 365 公里",
                "2023年 第一屆台灣大力士比賽完賽",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Reviews, FAQ, Location, Footer ... (原本的其餘區塊) */}
      <section id="reviews" className="py-24 bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">學員見證</h2>
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ReviewCard
              name="邱雅惠"
              tag="一對一課程"
              content="本來腰痠背痛，上課後姿勢調整好了，不只痠痛消失，精神也變好了！"
            />
            <ReviewCard
              name="王小姐"
              tag="泰拳團體課"
              content="格鬥很有趣，老師非常有耐心，壓力完全釋放！"
            />
            <ReviewCard
              name="張媽媽"
              tag="銀髮族肌力"
              content="教練對長輩很有耐心，現在抱孫子都更有力氣了。"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-center text-3xl font-bold mb-12">常見問題</h2>
          <div className="space-y-4">
            <FaqItem
              question="沒有運動經驗可以參加嗎？"
              answer="當然可以！我們有專為新手設計的初階班與一對一課程。"
            />
            <FaqItem
              question="收費方式需要綁約嗎？"
              answer="我們價格公開透明，不需要綁定長期合約。"
              linkTo="schedule"
            />
          </div>
        </div>
      </section>

      <section id="location" className="py-24 bg-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">聯絡我們</h2>
          <p className="mb-4">桃園市桃園區壽星街60號1樓</p>
          <p className="font-mono">0936-624-385</p>
        </div>
      </section>

      <footer className="bg-neutral-950 py-12 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} B.S Strength & Conditioning. All rights
          reserved.
        </p>
        <div className="mt-4 opacity-30 text-xs">
          #桃園健身房 #桃園肌力訓練 #bs-strength
        </div>
      </footer>
    </div>
  );
};

// --- Sub-components (保留原本的輔助組件) ---
const FeatureCard = ({ image, title, description }) => (
  <div className="bg-neutral-800 rounded-2xl border border-neutral-700/50 overflow-hidden hover:border-orange-500/50 transition-all">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const ScheduleItem = ({ day, time, title }) => (
  <div className="p-4 rounded-xl border-l-4 border-orange-500 bg-neutral-800">
    <div className="flex justify-between items-center">
      <span className="font-bold">
        {day} ({time})
      </span>
      <span className="text-sm font-bold bg-neutral-700 px-2 py-1 rounded">
        {title}
      </span>
    </div>
  </div>
);

const CoachCard = ({
  name,
  title,
  image,
  certifications,
  expertise,
  lineId,
  phone,
}) => (
  <div className="bg-neutral-800 rounded-2xl border border-neutral-700/50 overflow-hidden">
    <img src={image} alt={name} className="w-full h-80 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
      <p className="text-orange-500 mb-4">{title}</p>
      <div className="text-sm text-gray-400 space-y-2">
        <p>
          <strong>證照：</strong>
          {certifications.slice(0, 3).join(", ")}...
        </p>
        <p>
          <strong>專長：</strong>
          {expertise.join(", ")}
        </p>
        <p>
          <strong>LINE:</strong> {lineId}
        </p>
      </div>
    </div>
  </div>
);

const ReviewCard = ({ name, tag, content }) => (
  <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700/50">
    <h4 className="font-bold text-white">
      {name} <span className="text-xs text-orange-500 ml-2">{tag}</span>
    </h4>
    <p className="text-gray-400 text-sm mt-2 italic">"{content}"</p>
  </div>
);

const FaqItem = ({ question, answer, linkTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between font-bold text-left"
      >
        {question} <ChevronDown className={isOpen ? "rotate-180" : ""} />
      </button>
      {isOpen && <div className="pb-4 text-gray-400 text-sm">{answer}</div>}
    </div>
  );
};

// --- 🔥 這是最重要的部分：App 入口 ---
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BSGymWebsite />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
};

export default App;
