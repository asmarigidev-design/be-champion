import React, { useState } from "react";

export default function WorkoutPlans() {
  const [activeTab, setActiveTab] = useState("strength");
  const [hoveredCard, setHoveredCard] = useState(null);

  const workoutPlans = {
    strength: [
      {
        id: 1,
        title: "برنامه قدرت پایه",
        description: "ساخت پایه‌های قدرتی قوی برای مبتدیان و متوسط‌ها",
        duration: "۸ هفته",
        level: "مبتدی تا متوسط",
        exercises: ["اسکوات", "ددلیفت", "پرس سینه", "زیربغل"],
        price: "رایگان",
        popular: false,
        color: "from-blue-500 to-blue-700",
        icon: "🏋️"
      },
      {
        id: 2,
        title: "پیشرفته قدرتی",
        description: "برای رسیدن به حداکثر قدرت و افزایش رکوردها",
        duration: "۱۲ هفته",
        level: "پیشرفته",
        exercises: ["اسکوات سنگین", "ددلیفت SUMO", "پرس سینه با توقف", "زیربغل هالتر"],
        price: "۱۹۰,۰۰۰ تومان",
        popular: true,
        color: "from-purple-500 to-purple-700",
        icon: "💎"
      }
    ],
    hypertrophy: [
      {
        id: 3,
        title: "حجم‌سازی فول بادی",
        description: "تمرکز بر رشد عضلات در تمام بدن",
        duration: "۱۰ هفته",
        level: "متوسط",
        exercises: ["پرس سینه incline", "جلوپا", "پشت بازو سیمکش", "سرشانه هالتر"],
        price: "۱۴۰,۰۰۰ تومان",
        popular: false,
        color: "from-green-500 to-green-700",
        icon: "📈"
      },
      {
        id: 4,
        title: "حجم‌سازی پیشرفته",
        description: "تکنیک‌های پیشرفته برای رشد حداکثری",
        duration: "۸ هفته",
        level: "پیشرفته",
        exercises: ["دیپ", "لانگز", "فیله کمر", "شراگ"],
        price: "۲۱۰,۰۰۰ تومان",
        popular: true,
        color: "from-orange-500 to-orange-700",
        icon: "🔥"
      }
    ],
    conditioning: [
      {
        id: 5,
        title: "کاندیشنینگ قدرتی",
        description: "ترکیب قدرت و استقامت برای عملکرد بهتر",
        duration: "۶ هفته",
        level: "همه سطوح",
        exercises: ["کتل بل", "بارفیس", "پرش جعبه", "طناب زنی"],
        price: "۱۲۰,۰۰۰ تومان",
        popular: false,
        color: "from-red-500 to-red-700",
        icon: "⚡"
      },
      {
        id: 6,
        title: "فانکشنال ترینینگ",
        description: "تمرینات کاربردی برای زندگی روزمره",
        duration: "۸ هفته",
        level: "مبتدی تا متوسط",
        exercises: ["فارمرز والک", "سوربین", "پوش سلد", "کری کری"],
        price: "۱۶۰,۰۰۰ تومان",
        popular: false,
        color: "from-teal-500 to-teal-700",
        icon: "🎯"
      }
    ]
  };

  const tabConfig = [
    { 
      id: "strength", 
      label: "تمرینات قدرتی", 
      icon: "💪",
      description: "افزایش قدرت و رکوردهای شخصی"
    },
    { 
      id: "hypertrophy", 
      label: "حجم‌سازی عضلانی", 
      icon: "📈",
      description: "رشد و حجم‌دهی به عضلات"
    },
    { 
      id: "conditioning", 
      label: "کاندیشنینگ", 
      icon: "⚡",
      description: "تمرینات عملکردی و استقامتی"
    }
  ];

return (
  <div className="min-h-screen bg-black dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 py-20 px-4 relative overflow-hidden text-white">
    
    {/* Background Elements عناصر پس‌زمینه */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto" data-aos="fade-left">
      
      {/* Header Section بخش سربرگ */}
      <div className="text-center mb-20" data-aos="fade-left">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-700/30 shadow-lg mb-8">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          <span className="text-blue-400 font-bold text-base">
            برنامه‌های تمرینی تخصصی
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            تحول بدنی
          </span>
          <span className="block text-gray-100 mt-4">شروع کن</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          برنامه‌های طراحی شده توسط مربیان بین‌المللی برای رسیدن به اهداف مختلف ورزشی
        </p>
      </div>

      {/* Tab Navigation پیمایش تب */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabConfig.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-4 px-8 py-5 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 min-w-[200px] ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl ring-2 ring-white/20"
                  : "bg-gray-900/70 dark:bg-gray-800/50 text-gray-300 hover:bg-gray-800/80 dark:hover:bg-gray-700/50 shadow-lg backdrop-blur-sm border border-gray-600/30"
              }`}
            >
              <span className="text-2xl" data-aos="fade-right">{tab.icon}</span>
              <div className="text-right">
                <div className="text-lg" data-aos="fade-left">{tab.label}</div>
                <div className={`text-sm mt-1 ${
                  activeTab === tab.id ? "text-blue-100" : "text-gray-400"
                }`}>
                  {tab.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Workout Plans Grid جدول برنامه‌های تمرینی */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(2,minmax(0,1fr))] gap-8 mb-20">
        {workoutPlans[activeTab].map((plan, index) => (
          <div
            key={plan.id}
            className={`relative bg-gray-900/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 group ${
              plan.popular ? "ring-2 ring-yellow-400 dark:ring-yellow-500" : ""
            } ${hoveredCard === plan.id ? "scale-105" : "scale-100"}`}
            onMouseEnter={() => setHoveredCard(plan.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {plan.popular && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold z-20 shadow-2xl flex items-center gap-2">
                <span>⭐</span>
                <span>پرفروش</span>
              </div>
            )}

            <div className={`relative bg-gradient-to-r ${plan.color} p-8 text-white overflow-hidden`}>
              <div className="absolute top-4 left-4 text-4xl opacity-20">
                {plan.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-3 leading-tight">{plan.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm">{plan.description}</p>
              </div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-900/80 rounded-2xl backdrop-blur-sm border border-gray-600/30">
                  <div className="text-sm text-gray-400 mb-1">مدت زمان</div>
                  <div className="font-bold text-white text-lg">{plan.duration}</div>
                </div>
                <div className="text-center p-4 bg-gray-900/80 rounded-2xl backdrop-blur-sm border border-gray-600/30">
                  <div className="text-sm text-gray-400 mb-1">سطح</div>
                  <div className="font-bold text-white text-lg">{plan.level}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                  <span>🎯</span>
                  حرکات اصلی
                </h4>
                <div className="flex flex-wrap gap-2">
                  {plan.exercises.map((exercise, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm border border-blue-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-blue-500/30"
                    >
                      {exercise}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-600/30">
                <div>
                  <div className="text-sm text-gray-400">هزینه برنامه</div>
                  <div className={`text-2xl font-black ${
                    plan.price === "رایگان" 
                      ? "text-green-400" 
                      : "text-white"
                  }`}>
                    {plan.price}
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group-hover:shadow-2xl" data-aos="fade-up">
                  <span>🚀</span>
                  انتخاب برنامه
                </button>
              </div>
            </div>
              {/* Hover Glow Effect جلوه درخشش شناور*/}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>
{/* Features Section بخش ویژگی‌ها */}
<div className="bg-gray-900/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-blue-700/30 shadow-2xl mb-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-black text-white mb-4">
      چرا برنامه‌های ما متفاوت هستند؟
    </h2>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      امکانات ویژه‌ای که در کنار هر برنامه دریافت می‌کنید
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
    {[
      {
        icon: "📱",
        title: "اپلیکیشن اختصاصی",
        description: "برنامه همراه با ویدیوهای آموزشی، پیگیری پیشرفت و تنظیمات هوشمند"
      },
      {
        icon: "👨‍💼",
        title: "پشتیبانی مربی",
        description: "پاسخگویی به سوالات و تنظیم برنامه بر اساس پیشرفت و شرایط شما"
      },
      {
        icon: "📊",
        title: "آنالیز پیشرفت",
        description: "نمودارهای پیشرفت حرفه‌ای و تنظیمات دوره‌ای بر اساس نتایج"
      }
    ].map((feature, index) => (
      <div key={index} className="text-center group">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{feature.icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</div>

{/* CTA Section بخش فرهنگ و هنر */}
<div className="text-center">
  <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
    
    {/* Background Pattern الگوی پس‌زمینه */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-300 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-300 rounded-full translate-y-24 -translate-x-24"></div>
    </div>
    
    <div className="relative z-10">
      <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
        آماده شروع <span className="text-yellow-300">تحول</span> هستید؟
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed" data-aos="fade-left">
        به جامعه هزاران ورزشکاری بپیوندید که با برنامه‌های ما به اهدافشان رسیده‌اند
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up">
        
        {/* دکمه مشاوره رایگان */}
        <button className="bg-gray-100 text-blue-600 hover:bg-gray-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2">
          <span>🎯</span>
          مشاوره رایگان
        </button>

        {/* دکمه مشاهده نمونه برنامه */}
        <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
          <span>📝</span>
          مشاهده نمونه برنامه
        </button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}