import React from "react";

export default function WeightliftingHero() {
  return (
    <div className="min-h-screen bg-black dark:bg-gradient-to-br dark:from-gray-900 dark:to-blue-900/30 relative overflow-hidden text-white">
      
      {/* Pattern Background پس زمینه الگو */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content محتوای اصلی */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        
        {/* Header سربرگ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400 font-semibold text-sm">
              POWERLIFTING ACADEMY
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent" data-aos="fade-left">
              قدرت
            </span>
            <br />
            <span className="text-gray-100" data-aos="fade-up">بی‌پایان</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" data-aos="fade-left">
            در دنیای وزنه‌برداری، هر گرم اضافه یک پیروزی است. 
            محدودیت‌های خود را بشکنید و به قله قدرت برسید
          </p>
        </div>

        {/* Stats Grid آمار شبکه‌ای */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">۱RM</div>
            <div className="text-gray-300">حداکثر قدرت تکرار</div>
            <div className="mt-4 text-2xl font-black text-white">۱۸۰kg</div>
          </div>

          <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">PB</div>
            <div className="text-gray-300">رکورد شخصی</div>
            <div className="mt-4 text-2xl font-black text-white">۲۱۰kg</div>
          </div>

          <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">WILKS</div>
            <div className="text-gray-300">امتیاز قدرتی</div>
            <div className="mt-4 text-2xl font-black text-white">۴۲۰</div>
          </div>
        </div>

        {/* Exercise Cards کارت‌های ورزشی */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto" data-aos="fade-left">
          
          {/* Squat Card کارت اسکات */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black">اسکوات</h3>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">🏋️</span>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              پایه و اساس قدرت پایین تنه. تکنیک صحیح کلید موفقیت در این حرکت است.
            </p>
            <div className="flex gap-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">پاها</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">باسن</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">کمر</span>
            </div>
          </div>

          {/* Bench Press Card کارت پرس سینه */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black">پرس سینه</h3>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">💪</span>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              قدرت بالاتنه خود را به رخ بکشید. کنترل و فرم صحیح از وزن مهم‌تر است.
            </p>
            <div className="flex gap-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">سینه</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">شانه</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">تریسپس</span>
            </div>
          </div>

        </div>

        {/* Motivation Section بخش انگیزشی */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
            <blockquote className="text-2xl font-bold text-white mb-4 leading-relaxed" data-aos="fade-up">
              "وزنه‌ها فقط آهن نیستند، آن‌ها معلمانی هستند که به شما صبر، انضباط و قدرت واقعی را می‌آموزند"
            </blockquote>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-blue-400 font-semibold">
              دیمیتری کولوف - قهرمان وزنه‌برداری
            </p>
          </div>
        </div>

        {/* CTA Button دکمه فراخوان برای اقدام (CTA) */}
        <div className="text-center mt-12" data-aos="fade-left">
          <button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-bold py-4 px-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
            شروع برنامه قدرتی
          </button>
        </div>

      </div>
    </div>
  );
}
