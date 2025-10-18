import {React, useState, useEffect} from "react";
import WorkoutPlans from './components/WorkoutPlans.js';
import Navigation from './components/Navigation.js';
import HealthTips from './components/HealthTips.js';
import SportsFooter from './components/SportsFooter.js';
import SportsHeader from './components/SportsHeader.js';
import ModernSportCard from './components/ModernSportCard.js';
import AdvancedSportDashboard  from'./components/AdvancedSportDashboard.js';
import WeightliftingHero from './components/WeightliftingHero.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  // راه‌اندازی انیمیشن‌ها با AOS
  // Initialize AOS animations
  AOS.init({
  duration: 800,
  easing: 'ease-out-cubic'
});


 const [isSignIn, setIsSignIn] = useState(false);
 const [route, setRoute] = useState('signin');

 const onRouteChange = (newRoute) => {
    if (newRoute === 'signout') {
      setIsSignIn(false);
    } else if (newRoute === 'home') {
      setIsSignIn(true);
    }
    setRoute(newRoute);
  }
  return (
<div class="bg-black text-white min-h-screen"><Navigation 
     isSignIn={isSignIn} 
    onRouteChange={onRouteChange} 
/>  
<ModernSportCard />
<SportsHeader />
<AdvancedSportDashboard />
<HealthTips />
<WorkoutPlans />
<WeightliftingHero />
<SportsFooter />

 </div>
  )
}