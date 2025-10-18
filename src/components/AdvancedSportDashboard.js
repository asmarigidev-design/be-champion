import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Strength from '../assets/img/Strength.webp';  

const AdvancedSportDashboard = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [timeRange, setTimeRange] = useState('week');

  const athleteData = {
    name: "علی رضایی",
    title: "قهرمان ملی وزنه برداری", 
    avatar:Strength ,
    level: "حرفه‌ای",
    progress: 87,
    stats: {
      workouts: 156,
      hours: 420,
      calories: 125000,
      streak: 45
    }
  };

  const performanceData = {
    week: [
      { day: "شنبه", weight: 85, reps: 12, rpe: 7 },
      { day: "یکشنبه", weight: 87.5, reps: 10, rpe: 8 },
      { day: "دوشنبه", weight: 90, reps: 8, rpe: 9 },
      { day: "سه‌شنبه", weight: 92.5, reps: 6, rpe: 9.5 },
      { day: "چهارشنبه", weight: 95, reps: 4, rpe: 10 },
      { day: "پنجشنبه", weight: 97.5, reps: 2, rpe: 10 }
    ],
    month: [
      { week: "هفته ۱", maxWeight: 85, avgReps: 12, progress: 5 },
      { week: "هفته ۲", maxWeight: 90, avgReps: 10, progress: 12 },
      { week: "هفته ۳", maxWeight: 95, avgReps: 8, progress: 18 },
      { week: "هفته ۴", maxWeight: 100, avgReps: 6, progress: 25 }
    ]
  };

  const workoutPlans = [
    {
      id: 1,
      name: "تمرین قدرت پایه",
      duration: "90 دقیقه",
      difficulty: "پیشرفته",
      exercises: 8,
      completed: true,
      focus: "قدرت محض",
      color: "from-green-500 to-blue-600"
    },
    {
      id: 2,
      name: "تمرین استقامت", 
      duration: "75 دقیقه",
      difficulty: "متوسط",
      exercises: 6,
      completed: false,
      focus: "استقامت قلبی",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      name: "تمرین فول بادی",
      duration: "120 دقیقه", 
      difficulty: "حرفه‌ای",
      exercises: 12,
      completed: false,
      focus: "تمرین کامل",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-7xl mx-auto">
        {/*Dashboard header هدر دشبورد */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8"
        >
          <div className="flex items-center space-x-4 mb-4 lg:mb-0 space-x-reverse">
            <div className="relative">
              <img
                src={athleteData.avatar}
                alt={athleteData.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-gray-900"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{athleteData.name}</h1>
              <p className="text-cyan-400">{athleteData.title}</p>
            </div>
          </div>
          
          <div className="flex space-x-3 space-x-reverse">
            <motion.button data-aos="fade-up"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              شروع تمرین جدید
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold border border-white/20 backdrop-blur-sm"
            >
              تنظیمات
            </motion.button>
          </div>
        </motion.div>

        {/*General statistics cards کارت‌های آمار کلی */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(athleteData.stats).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {value}
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors" data-aos="fade-up">
                {key === 'workouts' && 'تمرینات'}
                {key === 'hours' && 'ساعت فعالیت'}
                {key === 'calories' && 'کالری سوزانده شده'}
                {key === 'streak' && 'روز متوالی'}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/*Left sidebar - Apps سایدبار چپ - برنامه‌ها */}
          <div className="xl:col-span-1 space-y-6">
            {/*Progress level card کارت سطح پیشرفت */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-6 shadow-xl"
            >
              <div className="flex justify-between items-start mb-4" data-aos="fade-left">
                <div>
                  <h3 className="text-white text-lg font-semibold">سطح پیشرفت</h3>
                  <p className="text-cyan-100 text-sm">{athleteData.level}</p>
                </div>
                <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  {athleteData.progress}%
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${athleteData.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-white h-3 rounded-full shadow-lg"
                />
              </div>
            </motion.div>

            {/*List of workout programs لیست برنامه‌های تمرینی */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-white text-xl font-bold mb-6">برنامه‌های تمرینی</h3>
              <div className="space-y-4">
                {workoutPlans.map((plan, index) => (
                  <motion.div data-aos="fade-up"
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${plan.color} rounded-2xl p-4 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-semibold">{plan.name}</h4>
                      {plan.completed && (
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs shadow-lg">
                          تکمیل شده
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between text-white/80 text-sm">
                      <span>{plan.duration}</span>
                      <span>{plan.difficulty}</span>
                      <span>{plan.exercises} حرکت</span>
                    </div>
                    <div className="text-white/60 text-xs mt-2">{plan.focus}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/*Main content - performance محتوای اصلی - عملکرد */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10 shadow-lg"
            >
              {/*Tab headers هدر تب‌ها */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">تحلیل عملکرد</h2>
                <div className="flex space-x-2 space-x-reverse">
                  {['week', 'month'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                        timeRange === range
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {range === 'week' ? 'هفته' : 'ماه'}
                    </button>
                  ))}
                </div>
              </div>

              {/*Performance chart نمودار عملکرد */}
              <div className="mb-8">
                <div className="flex items-end justify-between h-48 space-x-2 space-x-reverse">
                  {performanceData[timeRange].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${(item.weight || item.maxWeight) * 0.8}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="flex flex-col items-center space-y-2 flex-1"
                    >
                      <div 
                        className="w-full bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-2xl relative group cursor-pointer shadow-lg"
                        style={{ height: `${(item.weight || item.maxWeight) * 0.8}%`, minHeight: '20px' }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-cyan-500/30">
                          {item.weight || item.maxWeight} کیلوگرم
                        </div>
                      </div>
                      <div className="text-cyan-300 text-sm font-medium">
                        {item.day || item.week}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/*Details table جدول جزئیات */}
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                      <th className="text-right p-4 text-white font-semibold">
                        {timeRange === 'week' ? 'روز' : 'هفته'}
                      </th>
                      <th className="text-right p-4 text-white font-semibold">حداکثر وزن</th>
                      <th className="text-right p-4 text-white font-semibold">
                        {timeRange === 'week' ? 'تکرار' : 'میانگین تکرار'}
                      </th>
                      <th className="text-right p-4 text-white font-semibold">سختی</th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceData[timeRange].map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-cyan-500/10 transition-colors"
                      >
                        <td className="p-4 text-white">{item.day || item.week}</td>
                        <td className="p-4 text-cyan-400 font-semibold">
                          {item.weight || item.maxWeight} کیلوگرم
                        </td>
                        <td className="p-4 text-white">{item.reps || item.avgReps}</td>
                        <td className="p-4">
                       <div className="flex flex-wrap items-center gap-2 justify-end">
  <div className="w-16 bg-gray-700 rounded-full h-2">
    <div
      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full shadow-lg"
      style={{ width: `${(item.rpe || item.progress) * 10}%` }}
    ></div>
  </div>
  <span className="text-cyan-300 text-sm font-semibold flex-shrink-0">
    {item.rpe || item.progress}/10
  </span>
</div>

                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/*Motivational card کارت انگیزشی */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 text-center shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2" data-aos="fade-up">
                امروز روز تو هست! 💪
              </h3>
              <p className="text-cyan-100 text-lg">
                رکورد جدیدی در انتظار توست. تمرینت رو شروع کن و تاریخ ساز شو!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg"
              >
                شروع چالش جدید
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSportDashboard;