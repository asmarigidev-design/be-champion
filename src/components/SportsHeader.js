import React from "react";

export default function SportsHeader() {
  return (
    <header className="relative min-h-screen w-full overflow-x-hidden">
      {/* Overlay for better readability of text on the image    Overlay برای خوانایی بهتر متن روی تصویر */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10 "></div>
      
      {/* Wallpaper  تصویر زمینه */}
      <div className="absolute inset-0 bg-[url('./assets/img/pattern_react.png')] bg-cover bg-center bg-no-repeat"></div>
      
      {/* Main content  محتوای اصلی */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen text-white px-4 w-full">
        <div className="max-w-4xl w-full mx-auto text-center">
          {/*Top line tag   تگ خط بالا */}
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <span className="text-sm font-semibold tracking-wider">ورزش زندگی است</span>
          </div>
          
          {/*Original title   عنوان اصلی */}
          <h1 className="m-12 text-4xl md:text-7xl font-extrabold mb-6 leading-tight" >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent" data-aos="fade-top">
              قدرت
            </span>
            <span className="block mt-2" data-aos="fade-right">درون توست</span>
          </h1>
          
          {/*Explanatory text  متن توضیحی */}
          <p className="text-lg md:text-2xl mb-8 leading-relaxed text-gray-200 w-full max-w-3xl mx-auto px-4" data-aos="fade-left">
            هر روز فرصتی جدید برای قوی‌تر شدن است. محدودیت‌ها را بشکن 
            و به بهترین نسخه خودت تبدیل شو
          </p>
          
          {/* Statistics and figures  آمار و ارقام */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 w-full max-w-2xl mx-auto px-4">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl w-full">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">+۵۰٪</div>
              <div className="text-gray-300 text-sm md:text-base">افزایش انرژی</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl w-full">
              <div className="text-2xl md:text-3xl font-bold text-green-400">+۸۵٪</div>
              <div className="text-gray-300 text-sm md:text-base">سلامت بیشتر</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl w-full">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">۱۰۰٪</div>
              <div className="text-gray-300 text-sm md:text-base">اعتماد به نفس</div>
            </div>
          </div>
          
          {/*Action buttons دکمه‌های اقدام */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4" data-aos="fade-up">
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              شروع سفر ورزشی
            </button>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white/30 hover:border-white/60 rounded-full font-bold text-base md:text-lg transition-all duration-300 backdrop-blur-sm">
              برنامه تمرینی
            </button>
          </div>
          
          {/*Inspirational quote  نقل قول الهام‌بخش */}
          <div className="m-8 md:m-16 border-r-4 border-yellow-400 pr-4 w-full max-w-xl mx-auto px-4">
            <p className="text-base md:text-lg italic text-gray-300 text-right">
              "قهرمانان ساخته می‌شوند، نه متولد. با عرق، اراده و رویایی که هرگز رهایش نمی‌کنی"
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}