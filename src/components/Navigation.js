import React, { useState, useEffect } from 'react';
import { 
  FaDumbbell, 
  FaHome, 
  FaMagic, 
  FaRocket, 
  FaUser, 
  FaBars, 
  FaTimes,
  FaStar,
  FaGem
} from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

const Navigation = ({ isSignIn, onRouteChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'خانه', icon: FaHome, route: '/' },
    { id: 'services', label: 'خدمات', icon: FaMagic, route: '/' },
    { id: 'features', label: 'قابلیت‌ها', icon: FaStar, route: '/' },
    { id: 'about', label: 'درباره', icon: FaGem, route: '/' },
  ];

  const handleNavClick = (item) => {
    setActiveItem(item.id);
    setIsMenuOpen(false);
    if (item.route) {
      onRouteChange(item.route);
    }
  };

  return (
    <>
      {/* Cursor Trail Effect  اثر دنباله مکان‌نما */ }
      <div 
        className="fixed pointer-events-none z-50 transition-all duration-100 "
        style={{
          left: cursorPos.x - 20,
          top: cursorPos.y - 20,
        }}
      >
        <div className="w-10 h-10 border-2 border-cyan-400 rounded-full animate-ping opacity-20 "></div>
      </div>

      {/* Main Navigation  ناوبری اصلی */}
     <nav className={`
  fixed top-0 left-0 w-full z-40 transition-all duration-500 
  ${scrolled 
    ? 'bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/20 py-2' 
    : 'bg-black p-4'
  }
`}>

        {/* Animated Border  حاشیه متحرک*/}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>

        {/* Floating Particles  ذرات شناور*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${(i + 1) * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between ">
            {/* Logo Section  بخش لوگو*/}
            <div 
              className="flex items-center space-x-3 cursor-pointer group space-x-reverse"
              onClick={() => handleNavClick({ id: 'home' })}
            >
              <div className="relative">
                {/* Animated Orb  گوی متحرک*/}
                <div className="
                  w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 
                  rounded-2xl flex items-center justify-center 
                  shadow-2xl shadow-cyan-400/30
                  group-hover:shadow-cyan-400/50
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:rotate-12
                ">
                  <FaDumbbell className="text-white text-xl" />
                  
                  {/* Pulsing Rings  حلقه‌های ضربان‌دار*/}
                  <div className="absolute inset-0 border-2 border-cyan-400 rounded-2xl animate-ping opacity-20"></div>
                  <div className="absolute inset-0 border border-white/30 rounded-2xl"></div>
                </div>

                {/* Floating Sparkles  جرقه‌های شناور*/}
                <div className="absolute -top-1 -right-1">
                  <IoSparkles className="text-yellow-400 text-xs animate-bounce" />
                </div>
                <div className="absolute -bottom-1 -left-1">
                  <IoSparkles className="text-cyan-400 text-xs animate-bounce delay-75" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="
                  text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 
                  bg-clip-text text-transparent
                  group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300
                  transition-all duration-300
                ">
be-champion                </span>
                <span className="text-xs text-gray-400 font-light tracking-wider">
CHAMPION                   </span>
              </div>
            </div>

            {/* Desktop Navigation Items  موارد ناوبری دسکتاپ*/}
            <div className="hidden md:flex items-center space-x-1 space-x-reverse ">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeItem === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`
                      relative px-6 py-3 rounded-2xl font-medium transition-all duration-300
                      group overflow-hidden
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20' 
                        : 'text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    {/* Hover Background  پس‌زمینه شناور */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                      rounded-2xl transition-all duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}></div>

                    {/* Animated Border  حاشیه متحرک*/}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-400 
                      opacity-0 transition-all duration-300
                      ${isActive ? 'opacity-20' : 'group-hover:opacity-10'}
                    `}></div>

                    <div className="relative flex items-center space-x-2 space-x-reverse">
                      <IconComponent className={`
                        text-lg transition-all duration-300
                        ${isActive 
                          ? 'text-cyan-400 scale-110' 
                          : 'text-gray-400 group-hover:text-cyan-300 group-hover:scale-110'
                        }
                      `} />
                      <span>{item.label}</span>
                    </div>

                    {/* Active Indicator  شاخص فعال*/}
                    {isActive && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Auth Section  بخش تأیید*/}
            <div className="hidden md:flex items-center space-x-3 space-x-reverse">
              {isSignIn ? (
                <button
                  onClick={() => onRouteChange('signout')}
                  className="
                    group relative px-6 py-3 rounded-2xl font-medium
                    bg-gradient-to-r from-amber-500 to-orange-500
                    text-white overflow-hidden
                    hover:shadow-2xl hover:shadow-amber-500/30
                    transition-all duration-300
                    hover:scale-105
                  "
                >
                  {/* Animated Background  پس‌زمینه متحرک*/}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center space-x-2 space-x-reverse">
                    <FaRocket className="text-lg group-hover:rotate-45 transition-transform duration-300" />
                    <span>خروج</span>
                  </div>

                  {/* Sparkle Effects جلوه‌های درخشش*/}
                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IoSparkles className="text-yellow-200 text-xs animate-spin" />
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => onRouteChange('signin')}
                  className="
                    group relative px-6 py-3 rounded-2xl font-medium
                    bg-gradient-to-r from-cyan-500 to-blue-500
                    text-white overflow-hidden
                    hover:shadow-2xl hover:shadow-cyan-500/30
                    transition-all duration-300
                    hover:scale-105
                  "
                >
                  {/* Animated Background  پس‌زمینه متحرک*/}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0  group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center space-x-2 space-x-reverse">
                    <FaUser className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    <span>ورود</span>
                  </div>

                  {/* Sparkle Effects  جلوه‌های درخشش*/}
                  <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IoSparkles className="text-cyan-200 text-xs animate-spin" />
                  </div>
                </button>
              )}
            </div>

            {/* Mobile Menu Button دکمه منوی موبایل*/}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                md:hidden p-3 rounded-2xl
                bg-gradient-to-r from-slate-800 to-blue-900
                text-gray-300 hover:text-white
                transition-all duration-300
                hover:scale-110
                border border-purple-500/30
              "
            >
              {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu منوی موبایل*/}
        <div className={`
          md:hidden absolute top-full left-0 w-full
          bg-gradient-to-b from-slate-900/95 to-blue-900/95
          backdrop-blur-xl border-t border-purple-500/30
          transition-all duration-500 overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`
                    w-full px-4 py-4 rounded-2xl text-right
                    transition-all duration-300 flex items-center space-x-3 space-x-reverse
                    ${isActive 
                      ? 'bg-gradient-to-l from-cyan-500/20 to-purple-500/20 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <IconComponent className={`
                    text-lg transition-all duration-300
                    ${isActive ? 'text-cyan-400 scale-110' : 'text-gray-400'}
                  `} />
                  <span className="flex-1">{item.label}</span>
                  
                  {isActive && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}

            {/* Mobile Auth Button  دکمه تأیید هویت موبایل*/}
            <div className="pt-4 border-t border-purple-500/30">
              {isSignIn ? (
                <button
                  onClick={() => {
                    onRouteChange('signout');
                    setIsMenuOpen(false);
                  }}
                  className="
                    w-full px-4 py-4 rounded-2xl
                    bg-gradient-to-r from-amber-500 to-orange-500
                    text-white font-medium
                    transition-all duration-300
                    hover:shadow-lg hover:shadow-amber-500/30
                    flex items-center justify-center space-x-2 space-x-reverse
                  "
                >
                  <FaRocket className="text-lg" />
                  <span>خروج از حساب</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    onRouteChange('signin');
                    setIsMenuOpen(false);
                  }}
                  className="
                    w-full px-4 py-4 rounded-2xl
                    bg-gradient-to-r from-cyan-500 to-blue-500
                    text-white font-medium
                    transition-all duration-300
                    hover:shadow-lg hover:shadow-cyan-500/30
                    flex items-center justify-center space-x-2 space-x-reverse
                  "
                >
                  <FaUser className="text-lg" />
                  <span>ورود به حساب</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Additional Floating Elements  عناصر شناور اضافی*/}
      <div className="fixed top-4 left-4 z-30 opacity-20">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      </div>
      <div className="fixed top-4 right-4 z-30 opacity-20">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping delay-75"></div>
      </div>
    </>
  );
};

export default Navigation;