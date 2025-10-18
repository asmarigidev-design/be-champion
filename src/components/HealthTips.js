import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faAppleAlt, faDumbbell, faBed, faHeartbeat } from '@fortawesome/free-solid-svg-icons';  
import img from '../assets/img/profile.jpeg';  

const HealthTips = () => {  
    return (  
        <div className="min-h-screen bg-black py-20 px-4 relative overflow-hidden text-white">
            
            {/* Background Elements عناصر پس‌زمینه*/}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                
                {/* Header Section بخش سربرگ*/}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-blue-400 font-semibold text-sm">
                            راهنمای جامع سلامتی
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            سلامتیت رو
                        </span>
                        <span className="block text-gray-100">جدید کن</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        با رعایت این اصول ساده اما حیاتی، به بهترین نسخه خودت تبدیل شو و زندگی پرانرژی‌تری داشته باش
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    
                    {/* Image Card Section بخش کارت تصویر*/}
                    <div className="w-full lg:w-5/12">
                        <div className="relative group">
                            <div className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500" data-aos="fade-left">
                                <img  
                                    alt="تصویر سلامت و تناسب اندام"  
                                    src={img}  
                                    className="w-full h-80 object-cover"  
                                />  
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <h4 className="text-2xl font-bold text-white mb-2">
                                        زندگی سالم، زندگی زیبا
                                    </h4>  
                                    <p className="text-blue-100 leading-relaxed">
                                        سلامتی بزرگ‌ترین ثروت است. با تمرین روزانه و تغذیه مناسب، 
                                        این گنج بی‌پایان را برای خودت حفظ کن
                                    </p>  
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-12 opacity-90 group-hover:rotate-45 transition-transform duration-500"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl -rotate-12 opacity-80 group-hover:-rotate-45 transition-transform duration-500"></div>
                        </div>
                    </div>  
                    
                    {/* Features Grid ویژگی‌ها شبکه‌ای*/}
                    <div className="w-full lg:w-7/12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Nutrition Card کارت تغذیه*/}
                            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-lg transform hover:scale-105 transition-all duration-300 group" data-aos="fade-right">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <FontAwesomeIcon icon={faAppleAlt} className="text-white text-lg" />
                                    </div>  
                                    <div className="flex-1">
                                        <h6 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                                            تغذیه هوشمند
                                        </h6>  
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            انتخاب غذاهای مغذی و تازه می‌تواند تأثیر شگفت‌انگیزی بر انرژی، 
                                            عملکرد ذهنی و سلامت طولانی‌مدت شما داشته باشد
                                        </p> 
                                    </div>  
                                </div>  
                            </div>  
                            
                            {/* Exercise Card کارت ورزش*/}
                            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-lg transform hover:scale-105 transition-all duration-300 group" data-aos="fade-left">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <FontAwesomeIcon icon={faDumbbell} className="text-white text-lg" />
                                    </div>  
                                    <div className="flex-1">
                                        <h6 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                            تمرین مستمر
                                        </h6>  
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            فعالیت‌های بدنی منظم نه‌تنها به تناسب اندام کمک می‌کند، 
                                            بلکه هورمون‌های شادی‌آور را آزاد کرده و استرس را کاهش می‌دهد
                                        </p>  
                                    </div>  
                                </div>  
                            </div>  

                            {/* Sleep Card کارت خواب*/}
                            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-lg transform hover:scale-105 transition-all duration-300 group" data-aos="fade-right">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <FontAwesomeIcon icon={faBed} className="text-white text-lg" />
                                    </div>  
                                    <div className="flex-1">
                                        <h6 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                            استراحت با کیفیت
                                        </h6>  
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            خواب کافی و باکیفیت، سوخت‌رسان بدن و ذهن است. 
                                            ۷-۸ ساعت خواب شبانه باعث ترمیم سلول‌ها و بهبود عملکرد مغز می‌شود
                                        </p>  
                                    </div>  
                                </div>  
                            </div>  

                            {/* Health Check Card کارت بررسی سلامت*/}
                            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-lg transform hover:scale-105 transition-all duration-300 group" data-aos="fade-right">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <FontAwesomeIcon icon={faHeartbeat} className="text-white text-lg" />
                                    </div>  
                                    <div className="flex-1">
                                        <h6 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                                            پایش سلامت
                                        </h6>  
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            معاینات منظم پزشکی و توجه به سیگنال‌های بدن، 
                                            بهترین راه برای پیشگیری از بیماری‌ها و حفظ سلامت در طولانی‌مدت است
                                        </p>  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  

                                           {/* Stats Section بخش آمار */}
                        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                            <div className="bg-gray-900/50 rounded-2xl p-4 backdrop-blur-sm">
                                <div className="text-2xl font-black text-blue-400">۹۰٪</div>
                                <div className="text-sm text-gray-300">افزایش انرژی</div>
                            </div>
                            <div className="bg-gray-900/50 rounded-2xl p-4 backdrop-blur-sm">
                                <div className="text-2xl font-black text-green-400">۷۵٪</div>
                                <div className="text-sm text-gray-300">سلامت بهتر</div>
                            </div>
                            <div className="bg-gray-900/50 rounded-2xl p-4 backdrop-blur-sm">
                                <div className="text-2xl font-black text-purple-400">۱۰۰٪</div>
                                <div className="text-sm text-gray-300">رضایت از زندگی</div>
                            </div>
                        </div>
                    </div>  
                </div>  

                {/* CTA Section بخش فرهنگ و هنر*/}
                <div className="text-center mt-16" data-aos="fade-up">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-black mb-4">
                            آماده تغییر زندگی‌ات هستی؟
                        </h3>
                        <p className="text-blue-100 mb-6 text-lg">
                            همین امروز شروع کن و نتیجه را در کمتر از ۳۰ روز ببین
                        </p>
                        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            شروع برنامه سلامتی
                        </button>
                    </div>
                </div>
            </div>  
        </div>  
    );  
};  

export default HealthTips;