import React, { useState, useEffect } from "react";
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

      {/* Hero Section - Image Brightness Increased */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/yoyi.jpg"
            alt="桃園健身房肌力訓練 B.S 力線體"
            className="w-full h-full object-cover opacity-60" // Changed from opacity-40 to opacity-60
            onError={(e) => {
              // Fallback if yoyi.jpg fails
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
              科學化訓練 <br />
              打造<span className="text-orange-500">強韌身體</span>
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

      {/* Features / About Section - Images Updated */}
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

      {/* Schedule & Pricing Section */}
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
              {/* Private Training - Image Brightness Increased */}
              <div className="relative bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700/50 overflow-hidden group hover:border-orange-500/30 transition-colors">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/1V1.jpg"
                    alt="一對一私人教練"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-50 transition-opacity duration-500" // Changed from opacity-20 to opacity-80, and hover to 50
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide if broken
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

              {/* Group Classes - Image Brightness Increased */}
              <div className="relative bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700/50 overflow-hidden group hover:border-green-500/30 transition-colors">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/daily.jpg"
                    alt="肌力團體班"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-50 transition-opacity duration-500" // Changed from opacity-20 to opacity-80, and hover to 50
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide if broken
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
            {/* Coach Chen Shun */}
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
              imgPosition="object-top"
            />

            {/* Coach Lu */}
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
              imgPosition="object-top"
            />

            {/* Coach Fan */}
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
                "改善肌力不足導致的痠痛",
                "提升日常動作能力",
              ]}
              achievements={[
                "42公里 馬陵生態園區山地馬拉松 分組第二名",
                "25公里 北北基山地超半程馬拉松 分組第三名",
                "一日桃園高雄單日騎行 365 公里",
                "單車北進、單車西進武嶺",
                "2023年 第一屆台灣大力士比賽完賽",
              ]}
              imgPosition="object-top"
            />

            {/* Coach Chen Zhi */}
            <CoachCard
              name="陳麒智"
              title="教練"
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
              imgPosition="object-top"
            />

            {/* Coach Zhang Li */}
            <CoachCard
              name="張立"
              title="教練 / 全立格鬥館長"
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
              ]}
              customAction={{
                text: "想練MMA? 去全立格鬥找張立",
                url: "https://www.google.com/maps/place/%E5%85%A8+%E7%AB%8B+%E6%A0%BC+%E9%AC%A5/@24.9630095,121.2603245,985m/data=!3m2!1e3!4b1!4m6!3m5!1s0x346819f83462c0b1:0x52cc93ee6224fa3c!8m2!3d24.9630047!4d121.2628994!16s%2Fg%2F11x0c6ypq0?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              }}
              isSpecial={true}
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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
            <p className="text-gray-400">聽聽在 B.S 力線體訓練的學員怎麼說</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ReviewCard
              name="王先生"
              tag="一對一課程"
              content="本來因為長期坐辦公室腰痠背痛，來這邊上課後，教練很細心的調整我的姿勢。現在不只痠痛消失了，感覺整個人精神都變好了！"
            />
            <ReviewCard
              name="林小姐"
              tag="泰拳團體課"
              content="以前覺得格鬥很可怕，但陳教練教得非常有趣，上課氣氛很好。每次打完拳都爆汗，壓力完全釋放，超級推薦！"
            />
            <ReviewCard
              name="張媽媽"
              tag="銀髮族肌力"
              content="年紀大了怕跌倒，兒子幫我報名了肌力課。教練對長輩很有耐心，循序漸進，現在我抱孫子都更有力氣了。"
            />
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
                alt="Google"
                className="w-5 h-5"
              />
              <span className="font-bold">前往 Google 看更多評論</span>
              <ExternalLink size={18} className="text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常見問題</h2>
            <p className="text-gray-400">解答您對訓練的所有疑問</p>
          </div>

          <div className="space-y-4">
            <FaqItem
              question="我完全沒有運動經驗，可以參加嗎？"
              answer="當然可以！我們的初階肌力班和一對一教練課程，都是專為新手設計的。教練會從最基礎的呼吸和動作模式開始教起，確保您在安全的環境下進步。"
            />
            <FaqItem
              question="請問附近好停車嗎？"
              answer="我們位於桃園市政府附近，周邊有許多路邊停車格以及停車場，步行至工作室僅需幾分鐘，交通非常便利。"
            />
            <FaqItem
              question="上課需要準備什麼裝備？"
              answer="您只需要穿著舒適的運動服裝、赤足訓練或是準備乾淨的運動鞋，並攜帶毛巾即可（工作室內備有飲水機及廁所）。如果是格鬥課程，工作室會提供公用拳套，若有個人衛生考量也可自行購買。"
            />
            <FaqItem
              question="請問收費方式？需要綁約嗎？"
              answer="我們的價格公開透明，私人課程與團體課程分開計費，詳細方案請參考上方的「課程與費用」區塊，不需綁定長期年約。"
              linkTo="schedule"
            />
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 bg-neutral-800 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  聯絡我們
                </h2>
                <div className="w-16 h-1 bg-orange-600 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg">
                  歡迎預約參觀或諮詢課程，我們將儘速為您安排。
                </p>
              </div>

              <div className="space-y-6 bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50">
                {/* Featured Contact Methods */}
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
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=桃園市桃園區壽星街60號"
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

            {/* Map Embed */}
            <div className="h-[500px] w-full bg-neutral-700 rounded-2xl overflow-hidden shadow-2xl relative border border-neutral-600">
              <iframe
                title="B.S Gym Location"
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
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-orange-600 to-orange-700 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            準備好開始改變了嗎？
          </h2>
          <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            無論您的目標是增強肌力、格鬥競技或是健康抗老，B.S
            力線體都是您最強的後盾。
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Primary Actions (FB/IG) */}
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

            {/* Secondary Actions */}
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

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 text-sm text-gray-500 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                B.S 力線體
              </h2>
              <p className="mb-1">桃園市桃園區壽星街60號1樓</p>
              <p>0936-624-385</p>
            </div>
            <div className="text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} B.S Strength & Conditioning.
                All rights reserved.
              </p>
            </div>
          </div>

          {/* SEO Keywords Block */}
          <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-wrap justify-center gap-3 text-xs opacity-30 select-none">
            <span>#桃園健身房</span>
            <span>#桃園肌力訓練</span>
            <span>#肌力與體能</span>
            <span>#抗老化訓練</span>
            <span>#銀髮族訓練</span>
            <span>#桃園散打</span>
            <span>#桃園泰拳</span>
            <span>#格鬥教學</span>
            <span>#一對一教練</span>
            <span>#運動按摩</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components

// Updated FeatureCard with larger image container
const FeatureCard = ({ image, title, description }) => (
  <div className="bg-neutral-800 rounded-2xl border border-neutral-700/50 hover:border-orange-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 group h-full flex flex-col overflow-hidden">
    {/* Increased height from h-48 to h-96 for larger image presence */}
    <div className="w-full h-96 overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
        onError={(e) => {
          // Fallback to a dark placeholder if image missing
          e.target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-transparent opacity-80"></div>
      <div className="absolute bottom-4 left-6">
        {/* Optional: Put an icon overlay here if needed, currently clean */}
      </div>
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

const ScheduleItem = ({ day, time, title, color }) => (
  <div
    className={`p-4 rounded-xl border-l-4 border-orange-500 bg-neutral-800 hover:bg-neutral-700/80 transition-colors`}
  >
    <div className="flex justify-between items-center">
      <div>
        <span className="font-bold text-lg text-white block">{day}</span>
        <span className="text-gray-400 font-mono text-sm">{time}</span>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm font-bold bg-neutral-700 text-white`}
      >
        {title}
      </span>
    </div>
  </div>
);

// Updated CoachCard Component
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
}) => (
  <div
    className={`bg-neutral-800 rounded-2xl overflow-hidden border transition-all hover:shadow-xl group flex flex-col h-full ${
      isSpecial
        ? "border-orange-500 shadow-orange-500/20 shadow-lg transform hover:-translate-y-2"
        : "border-neutral-700/50 hover:border-orange-500/30"
    }`}
  >
    <div className="h-[30rem] overflow-hidden relative bg-neutral-700">
      <img
        src={image}
        alt={name}
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

      {achievements && achievements.length > 0 && (
        <div>
          <h4 className="flex items-center gap-2 font-bold text-white mb-3">
            <Trophy size={18} className="text-orange-500" /> 特殊戰績 / 經歷
          </h4>
          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>
      )}

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

      <div className="pt-4 border-t border-neutral-700 mt-auto">
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

const ReviewCard = ({ name, tag, content }) => (
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
    <p className="text-gray-400 text-sm leading-relaxed">"{content}"</p>
  </div>
);

const FaqItem = ({ question, answer, linkTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToId = () => {
    const element = document.getElementById(linkTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          isOpen ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-400 leading-relaxed bg-neutral-900/50 p-4 rounded-lg">
          {answer}
          {linkTo && (
            <div className="mt-2">
              <button
                onClick={scrollToId}
                className="text-orange-500 hover:text-orange-400 font-bold text-sm flex items-center gap-1"
              >
                前往查看詳細費用 <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BSGymWebsite;
