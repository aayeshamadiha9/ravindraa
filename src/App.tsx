import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, ArrowUp } from 'lucide-react';
import COLLEGE_BANNER_IMAGE from './assets/images/rcew_horizontal_banner.png';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import AboutProfile from './pages/AboutProfile';
import VisionMission from './pages/VisionMission';
import Management from './pages/Management';
import Academics from './pages/Academics';
import CSE from './pages/CSE';
import ECE from './pages/ECE';
import AIDS from './pages/AIDS';
import Freshman from './pages/Freshman';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import IQAC from './pages/IQAC';
import RD from './pages/RD';
import CampusLife from './pages/CampusLife';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import Milestones from './pages/Milestones';
import WhyRCEW from './pages/WhyRCEW';
import PrincipalDesk from './pages/PrincipalDesk';
import RankingsAwards from './pages/RankingsAwards';
import GoverningBody from './pages/GoverningBody';

// Scroll to Top Reset Component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Floating Scroll-to-Top Button
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all duration-300 border border-blue-500 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function MainAppLayout({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (val: boolean) => void }) {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-slate-50 transition-colors duration-300 flex flex-col">
      <ScrollProgress />
      <ScrollToTop />
      
      {/* Dynamic multi-layer header and navigations */}
      <Navbar />

      {/* Pages Outlet with Smooth Animated Pop-up Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex-grow flex flex-col"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutProfile />} />
              <Route path="/about/profile" element={<AboutProfile />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/management" element={<Management />} />
              <Route path="/about/principal-desk" element={<PrincipalDesk />} />
              <Route path="/about/rankings-awards" element={<RankingsAwards />} />
              <Route path="/about/governing-body" element={<GoverningBody />} />
              <Route path="/know-us/principal-desk" element={<PrincipalDesk />} />
              <Route path="/know-us/rankings-awards" element={<RankingsAwards />} />
              <Route path="/know-us/governing-body" element={<GoverningBody />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/departments/freshman" element={<Freshman />} />
              <Route path="/departments/hs" element={<Freshman />} />
              <Route path="/departments/cse" element={<CSE />} />
              <Route path="/departments/ece" element={<ECE />} />
              <Route path="/departments/ai-ds" element={<AIDS />} />
              <Route path="/departments/cai" element={<AIDS />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/placements/company-visits" element={<Placements />} />
              <Route path="/placements/placed-students" element={<Placements />} />
              <Route path="/iqac" element={<IQAC />} />
              <Route path="/rd" element={<RD />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/milestones" element={<Milestones />} />
              <Route path="/know-us/milestones" element={<Milestones />} />
              <Route path="/why-rcew" element={<WhyRCEW />} />
              <Route path="/know-us/why-rcew" element={<WhyRCEW />} />
              <Route path="/bulletins" element={<Faculty />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('rcew_app_loaded');
  });
  const [darkMode, setDarkMode] = useState(false);

  // Initialize startup load delay on first visit only
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('rcew_app_loaded', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="relative min-h-screen bg-slate-50 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader />
          ) : (
            <MainAppLayout darkMode={darkMode} setDarkMode={setDarkMode} />
          )}
        </AnimatePresence>
      </div>
    </HashRouter>
  );
}
