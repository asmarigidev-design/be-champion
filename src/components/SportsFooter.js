import React from "react";

export default function SportsFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Pattern Overlay روکش الگو*/}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      {/* Main Footer Content محتوای پاورقی اصلی*/}
      <div className="relative z-10 container mx-auto px-4 py-16">
        
        {/* Top Section بخش بالا*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" data-aos="fade-left">
          
          {/* Brand Column ستون برند*/}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏋️</span>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                POWERGYM
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              همراه شما در مسیر تبدیل شدن به بهترین نسخه خودتان. 
              قدرت واقعی از درون شما می‌آید، ما فقط راهنمای شما هستیم.
            </p>
            <div className="flex gap-4" data-aos="fade-up">
              <div className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 border border-blue-500/30">
                <span className="text-blue-400">📱</span>
              </div>
              <div className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 border border-blue-500/30">
                <span className="text-blue-400">💬</span>
              </div>
              <div className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 border border-blue-500/30">
                <span className="text-blue-400">📧</span>
              </div>
            </div>
          </div>

          {/* Quick Links پیوندهای سریع*/}
          <div data-aos="fade-left">
            <h3 className="text-lg font-bold mb-6 text-blue-400">دسترسی سریع</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  برنامه‌های تمرینی
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  مربیان متخصص
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  تغذیه ورزشی
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  رویدادها
                </a>
              </li>
            </ul>
          </div>

          {/* Services خدمات*/}
          <div data-aos="fade-up">
            <h3 className="text-lg font-bold mb-6 text-blue-400">خدمات ما</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  برنامه‌نویسی تمرین
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  آنالیز بدن
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  مشاوره تغذیه
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  ریکاوری فعال
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info  اطلاعات تماس*/}
          <div data-aos="fade-left">
            <h3 className="text-lg font-bold mb-6 text-blue-400">تماس با ما</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-blue-600/20 rounded flex items-center justify-center">
                  <span className="text-blue-400 text-sm">📍</span>
                </div>
                <span>تهران، خیابان کشاورز, مجموعه ورزشی قدرت</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-blue-600/20 rounded flex items-center justify-center">
                  <span className="text-blue-400 text-sm">📞</span>
                </div>
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-blue-600/20 rounded flex items-center justify-center">
                  <span className="text-blue-400 text-sm">✉️</span>
                </div>
                <span>info@...com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider جداکننده*/}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Bottom Section بخش پایین*/}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright حق نشر*/}
          <div className="text-gray-500 text-sm">
            © ۲۰۲۴ P. تمام حقوق محفوظ است.
          </div>

          {/* Social Media رسانه های اجتماعی*/}
          <div className="flex gap-4" data-aos="fade-up">
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <span className="text-gray-400 hover:text-white">📘</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <span className="text-gray-400 hover:text-white">🐦</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <span className="text-gray-400 hover:text-white">📷</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <span className="text-gray-400 hover:text-white">🎥</span>
            </a>
          </div>

          {/* Additional Links پیوندهای اضافی*/}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
              شرایط استفاده
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">
              کوکی‌ها
            </a>
          </div>

        </div>

        {/* Motivational Quote نقل قول انگیزشی*/}
        <div className="text-center mt-12 pt-8 border-t border-gray-800/30">
          <p className="text-gray-600 italic">
            "قدرت واقعی تنها بلند کردن وزنه نیست، بلند کردن روحیه و انگیزه دیگران نیز هست"
          </p>
        </div>

      </div>

      {/* Floating Elements عناصر شناور*/}
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-8 right-8 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-ping"></div>
    </footer>
  );
}