import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // کتابخانه انیمیشن / Animation library
import Football from '../assets/img/Football.webp';  
import Basketball from '../assets/img/Basketball.webp';  
import Tennis from '../assets/img/Tennis.jpeg';  
import Strength from '../assets/img/Strength.webp';  
import Swimming from '../assets/img/Swimming.webp';  
import Athletics from '../assets/img/Athletics.webp';  


const ModernSportCard = () => {
  const [activeSport, setActiveSport] = useState(0); // استیت ورزش فعال / Active sport state
  const [isHovered, setIsHovered] = useState(false); // استیت هاور / Hover state

const sportsData = [
  {
    id: 1,
   title: "وزنه‌برداری قدرتی",
    category: "Strength",
    image: Strength,
    stats: { lifts: 320, maxLift: 210, trophies: 15 },
    description: "افزایش قدرت و رکوردهای شخصی با تمرینات تخصصی وزنه‌برداری",
    gradient: "from-gray-700 to-yellow-500",
    icon: "🏋️"
  },

  {
    id: 2,
    title: "بسکتبال دینامیک",
    category: "Team Sports",
    image: Basketball,
    stats: { matches: 95, points: 2147, trophies: 5 },
    description: "تمرینات پیشرفته برای رسیدن به اوج عملکرد",
    gradient: "from-orange-500 to-red-600",
    icon: "🏀"
  },

  {
    id: 3,
    title: "تنیس استراتژیک",
    category: "Individual Sports",
    image: Tennis,
    stats: { matches: 73, aces: 184, trophies: 12 },
    description: "تکنیک‌های پیشرفته و استراتژی‌های برنده",
    gradient: "from-purple-500 to-pink-600",
    icon: "🎾"
  },

  {
    id: 4,
    title: "فوتبال حرفه‌ای",
    category: "Team Sports",
    imageSrc: Football,
    stats: { matches: 128, goals: 67, trophies: 8 },
    description: "تجربه حرفه‌ای ترین سطح فوتبال با مربیان بین‌المللی",
    gradient: "from-green-500 to-blue-600",
    icon: "⚽"
  },

  {
    id: 5,
    title: "شنا رقابتی",
    category: "Individual Sports",
    image: Swimming,
    stats: { races: 60, medals: 22, records: 5 },
    description: "تمرینات تنفسی و تکنیکی برای رسیدن به سرعت و استقامت بالا",
    gradient: "from-cyan-500 to-blue-700",
    icon: "🏊"
  },

  {
    id: 6,
    title: "دو و میدانی سرعتی",
    category: "Individual Sports",
    image: Athletics,
    stats: { races: 40, wins: 18, records: 3 },
    description: "افزایش سرعت، چابکی و استقامت با تمرینات تخصصی دو",
    gradient: "from-red-400 to-yellow-400",
    icon: "🏃"
  }
];



  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveSport((prev) => (prev + 1) % sportsData.length); // چرخش خودکار کارت‌ها / Auto rotate cards
      }
    }, 4000);
    return () => clearInterval(interval); // پاکسازی اینتروال / Cleanup interval
  }, [isHovered, sportsData.length]);

  const currentSport = sportsData[activeSport]; // ورزش جاری / Current sport

  return (
        <section id="modernSportcard" className="w-full overflow-x-hidden mt-12">

    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-1 w-full">
      <div className="max-w-6xl w-full mx-auto">
        {/* هدر بخش / Header section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 w-full"
        >
          <h1 className="p-6 md:p-10 text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-5 w-full" data-aos="fade-up">
            دنیای ورزش
          </h1>
          <p className="text-lg md:text-xl text-gray-300 w-full max-w-2xl mx-auto px-4">
            کشف کنید و به جامعه ورزشی ما بپیوندید - جایی که هر حرکت مهم است
          </p>
        </motion.div>

        {/* کارت اصلی / Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full px-4" >
          {/* بخش تصویر / Image section */}
          <motion.div
            key={currentSport.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
          >
            <div className="relative rounded-3xl overflow-hidden group w-full">
              <img
    src={currentSport.image || currentSport.imageSrc}                alt={currentSport.title}
                className="w-full h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
              
              {/* آبجکت شناور / Floating object */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 text-4xl"
              >
                {currentSport.icon}
              </motion.div>

              {/* تگ دسته‌بندی / Category tag */}
              <div className="absolute top-6 left-6">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentSport.category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* بخش محتوا / Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 w-full"
          >
            <div className="w-full">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 w-full">
                {currentSport.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed w-full">
                {currentSport.description}
              </p>
            </div>

            {/* آمار / Statistics */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
              {Object.entries(currentSport.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 text-center border border-white/20 w-full"
                >
                  <div className="text-xl md:text-2xl font-bold text-white">{value}</div>
                  <div className="text-gray-400 text-xs md:text-sm capitalize mt-1">
                    {key === 'matches' && 'بازی'}
                    {key === 'goals' && 'گل'}
                    {key === 'trophies' && 'قهرمانی'}
                    {key === 'points' && 'امتیاز'}
                    {key === 'aces' && 'ایس'}
                    {key === 'lifts' && 'وزنه'}
                    {key === 'maxLift' && 'حداکثر وزنه'}
                    {key === 'races' && 'مسابقه'}
                    {key === 'medals' && 'مدال'}
                    {key === 'records' && 'رکورد'}
                    {key === 'wins' && 'پیروزی'}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* دکمه‌های اقدام / Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 bg-gradient-to-r ${currentSport.gradient} text-white py-3 md:py-4 px-6 md:px-8 rounded-2xl font-semibold text-base md:text-lg shadow-lg w-full`}
              >
                شروع آموزش
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-white/10 backdrop-blur-sm text-white py-3 md:py-4 px-6 md:px-8 rounded-2xl font-semibold text-base md:text-lg border border-white/20 w-full"
              >
                مشاهده ویدیو
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* نویگیشن دات / Dot navigation */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-3 w-full px-4">
          {sportsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSport(index)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSport 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* ویدجت اطلاعات / Info widget */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 md:mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-cyan-500/20 w-full mx-4 md:mx-0"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
            <div className="text-center md:text-right w-full md:w-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white" data-aos="fade-left">آماده برای شروع؟</h3>
              <p className="text-cyan-200 mt-2 text-sm md:text-base">همین حالا به جامعه ورزشی ما بپیوندید</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-xl font-semibold shadow-lg w-full md:w-auto" data-aos="fade-right"
            >
              ثبت نام رایگان
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
    <br />
       </section>
  );
};

export default ModernSportCard;