import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2, GraduationCap, Play, Pause, X, Send, Phone, User, Mail, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Local campus hero images for the 4 slides matching reference UI
import HERO_SLIDE_1_AWARD from '../assets/images/rcew_award_2026_main.jpg';
import HERO_SLIDE_2_NIELIT from '../assets/images/rcew_nielit_bootcamp_lamp_lighting.png';
import HERO_SLIDE_3_BUILDING from '../assets/images/rcew_main_building_students.png';
import HERO_SLIDE_4_STUDENTS from '../assets/images/rcew_empowering_women_hero.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'CSE (AI)',
    eapcetRank: '',
    city: ''
  });

  const slides = [
    {
      title: "Guiding Excellence. Empowering Futures.",
      highlightWord: "Futures.",
      subtitle: "Personalized faculty guidance, interactive Speakeasy coding sessions, and 95%+ campus placements up to 27.0 LPA.",
      tag: "INTERACTIVE CODING & CAREER MENTORSHIP",
      badgeTag: "RAVW",
      image: HERO_SLIDE_1_AWARD,
      showEmblem: true,
      objectPosition: "object-center"
    },
    {
      title: "NIELIT Offline Boot Camp & SoC Sign-off.",
      highlightWord: "SoC Sign-off.",
      subtitle: "Five-Day hands-on training on 'RTL, IP Integration & SoC Sign-off' funded by Ministry of Electronics & IT (MeitY), Govt. of India.",
      tag: "NIELIT & MEITY NATIONAL WORKSHOP",
      badgeTag: "RAVW",
      image: HERO_SLIDE_2_NIELIT,
      showEmblem: false,
      objectPosition: "object-[38%_center]"
    },
    {
      title: "Igniting Ideas. Inspiring Impact.",
      highlightWord: "Impact.",
      subtitle: "Supporting innovation, startups and research that create real-world solutions for a better tomorrow.",
      tag: "EMPOWERING INNOVATION & STARTUPS",
      badgeTag: "RAVW",
      image: HERO_SLIDE_3_BUILDING,
      showEmblem: false,
      objectPosition: "object-center"
    },
    {
      title: "Learn. Grow. Lead. Succeed.",
      highlightWord: "Succeed.",
      subtitle: "A vibrant campus life that nurtures leadership, creativity, and holistic development.",
      tag: "CAMPUS LIFE & BEYOND CLASSROOMS",
      badgeTag: "RAVW",
      image: HERO_SLIDE_4_STUDENTS,
      showEmblem: false,
      objectPosition: "object-center"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsApplyModalOpen(false);
      setFormData({ name: '', phone: '', email: '', branch: 'CSE (AI)', eapcetRank: '', city: '' });
    }, 3000);
  };

  const renderTitle = (title: string, highlight: string) => {
    if (!title.includes(highlight)) {
      return <span>{title}</span>;
    }
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-serif italic">
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="home" aria-label="Hero Showcase" className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[720px] w-full bg-slate-950 overflow-hidden flex flex-col justify-between py-3 lg:py-4">
      
      {/* FULL-WIDTH HERO IMAGE CAROUSEL BACKGROUND LAYER (100% EDGE-TO-EDGE) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={`hero-img-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className={`w-full h-full object-cover ${slides[currentSlide].objectPosition}`}
            loading="eager"
          />
        </AnimatePresence>

        {/* Full-width gradient overlays for crystal-clear text readability */}
        {/* Left-to-right dark gradient to protect text overlay on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/35 pointer-events-none z-10" />
        
        {/* Top & Bottom dark subtle gradient for navbar and accreditation bar contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60 pointer-events-none z-10" />
        
        {/* Subtle radial gold highlight glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none z-10" />

        {/* Navy & Orange Brand Framing Lines across 100% Width */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1e3a8a] via-[#f59e0b] to-[#1e3a8a] z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f59e0b] z-20 opacity-80" />
      </div>

      {/* National Excellence Award Gold Emblem Overlay (Slide 0) */}
      {slides[currentSlide].showEmblem && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 right-4 sm:top-8 sm:right-8 lg:right-12 z-30 flex flex-col items-end text-right pointer-events-none"
        >
          <span className="text-[10px] font-mono font-bold text-amber-200 tracking-wider drop-shadow-md">
            www.eduawardsindia.com
          </span>
          <div className="flex items-center gap-2 mt-1 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-xl border border-amber-400/50 shadow-2xl">
            <Award className="h-6 w-6 text-amber-400 shrink-0" />
            <div className="text-left font-serif text-amber-300">
              <p className="text-[8px] font-mono text-amber-200">INDIA ELITE EDUCATION</p>
              <p className="text-[11px] font-bold text-white uppercase leading-none">AWARDS 2026</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* MAIN HERO CONTENT OVERLAY CONTAINER (Centered over Full-Width Image) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center py-6 lg:py-10">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 lg:space-y-6">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/40 text-white shadow-xl"
          >
            <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-500/40">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-100 font-mono">
              {slides[currentSlide].tag}
            </span>
            <span className="bg-[#f59e0b] text-amber-950 font-mono text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-2xs">
              {slides[currentSlide].badgeTag}
            </span>
          </motion.div>

          {/* Dynamic Animated Headlines */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.14] drop-shadow-lg">
                {renderTitle(slides[currentSlide].title, slides[currentSlide].highlightWord)}
              </h1>

              {/* Accent Blue Bar + Gold Dot */}
              <div className="flex items-center gap-2 pt-1">
                <div className="w-16 h-1.5 bg-[#2563eb] rounded-full shadow-sm" />
                <div className="w-2.5 h-2.5 bg-[#f59e0b] rounded-full shadow-sm" />
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl pt-1 drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              to="/academics"
              onClick={(e) => {
                const elem = document.querySelector('#featured-departments');
                if (elem) {
                  e.preventDefault();
                  handleScrollTo('#featured-departments');
                }
              }}
              className="px-8 py-3.5 bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white font-bold tracking-wider uppercase text-xs sm:text-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 group cursor-pointer border border-blue-400/30"
              aria-label="Explore engineering departments"
            >
              EXPLORE DEPARTMENTS
              <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform text-amber-400" />
            </Link>

            <Link
              to="/admissions"
              className="px-8 py-3.5 bg-white/95 hover:bg-amber-400 text-blue-950 hover:text-blue-950 border-2 border-[#f59e0b] font-bold tracking-wider uppercase text-xs sm:text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer flex items-center gap-2.5"
              aria-label="Navigate to admissions page"
            >
              <GraduationCap className="h-4.5 w-4.5 text-amber-600" />
              ADMISSIONS INFO
            </Link>
          </motion.div>

          {/* Slide Controls Row: Dots + Pause/Play */}
          <div className="flex items-center gap-4 pt-3">
            <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-8 bg-[#f59e0b] ring-2 ring-amber-300'
                      : 'w-2.5 bg-slate-500 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* FLOATING BOTTOM ACCREDITATION BAR */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 lg:mt-3">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="flex items-center gap-3.5 pt-2 md:pt-0">
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs sm:text-sm font-bold">NAAC Accredited</p>
                <p className="text-blue-900 text-[10px] font-mono uppercase font-bold">A+ GRADE MARK</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-4">
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <ShieldCheck className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs sm:text-sm font-bold">NBA Accreditation</p>
                <p className="text-blue-900 text-[10px] font-mono uppercase font-bold">CSE & ECE CORE</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-4">
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <CheckCircle2 className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs sm:text-sm font-bold">AICTE Approved</p>
                <p className="text-blue-900 text-[10px] font-mono uppercase font-bold">GOVT. RECOGNIZED</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-4">
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <GraduationCap className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs sm:text-sm font-bold">JNTUA Affiliated</p>
                <p className="text-blue-900 text-[10px] font-mono uppercase font-bold">AUTONOMOUS SYLLABUS</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= ONLINE ADMISSIONS APPLICATION MODAL ================= */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-6 relative border-b-2 border-amber-400">
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
                <span className="text-[10px] font-mono font-bold uppercase bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded shadow-2xs border border-amber-300">
                  AP EAPCET CODE: RAVW
                </span>
                <h3 className="text-2xl font-serif font-bold text-amber-300 mt-2">
                  B.Tech Admissions 2025-2026
                </h3>
                <p className="text-xs text-blue-100 mt-1">
                  Submit your online application for CSE (AI), CSE, or ECE streams.
                </p>
              </div>

              {/* Form Body / Success View */}
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-slate-900">Application Submitted!</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong>{formData.name || 'Candidate'}</strong>. Our admissions counseling team will contact you shortly on <strong>{formData.phone || 'your phone number'}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-blue-600" /> Full Candidate Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-blue-600" /> Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile no."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-blue-600" /> Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="candidate@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5 text-blue-600" /> Preferred Branch
                        </label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 bg-white"
                        >
                          <option value="CSE (AI)">CSE (Artificial Intelligence)</option>
                          <option value="CSE">Computer Science & Engineering (CSE)</option>
                          <option value="ECE">Electronics & Comm. Engg (ECE)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-blue-600" /> City / District
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kurnool, Nandyal"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <a
                        href="tel:8639756876"
                        className="text-[11px] font-bold text-blue-700 hover:underline flex items-center gap-1"
                      >
                        <Phone className="h-3.5 w-3.5" /> Call Helpline: 8639756876
                      </a>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        Submit Application <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
