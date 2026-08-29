import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, GraduationCap, Play, Pause, X, Send, Phone, User, Mail, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// High-resolution local hero images for the uploaded slides
import HERO_SLIDE_1_AWARD from '../assets/images/hero_award_2026.jpg';
import HERO_SLIDE_2_NIELIT from '../assets/images/hero_nielit_bootcamp.jpg';
import HERO_SLIDE_3_HR_CONCLAVE from '../assets/images/hero_hr_conclave_2024.png';
import HERO_SLIDE_4_CODING_LAB from '../assets/images/hero_student_coding_lab.png';
import HERO_SLIDE_5_MENTORSHIP from '../assets/images/hero_faculty_mentorship.png';
import HERO_SLIDE_6_NIELIT_FELICITATIONS from '../assets/images/rcew_nielit_felicitations.png';
import HERO_SLIDE_7_SEMINAR_LAB from '../assets/images/rcew_seminar_lab_presentation.jpg';

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
      subtitle: "Recognized nationally for educational excellence, interactive coding mentorship, and outstanding placements up to 27.0 LPA.",
      tag: "NATIONAL EXCELLENCE AWARD 2026",
      badgeTag: "RAVW",
      image: HERO_SLIDE_1_AWARD,
      showEmblem: true,
      objectPosition: "object-center"
    },
    {
      title: "Five-Day RTL, IP Integration & SoC Sign-Off.",
      highlightWord: "SoC Sign-Off.",
      subtitle: "Funded by Ministry of Electronics & Information Technology (MeitY), Govt. of India, Organized by NIELIT, Calicut.",
      tag: "NIELIT & MEITY NATIONAL WORKSHOP",
      badgeTag: "RAVW",
      image: HERO_SLIDE_2_NIELIT,
      showEmblem: false,
      objectPosition: "object-center"
    },
    {
      title: "NIELIT MeitY Boot Camp Dignitaries Felicitations.",
      highlightWord: "Dignitaries Felicitations.",
      subtitle: "Honoring national trainers, expert faculty, and student participants at the MeitY funded 5-day SoC Sign-Off bootcamp.",
      tag: "NIELIT & MEITY BOOTCAMP FELICITATIONS",
      badgeTag: "RAVW",
      image: HERO_SLIDE_6_NIELIT_FELICITATIONS,
      showEmblem: false,
      objectPosition: "object-center"
    },
    {
      title: "Hands-on Technical Seminars & Coding Workshops.",
      highlightWord: "Coding Workshops.",
      subtitle: "State-of-the-art air-conditioned seminar halls and computer labs for continuous technical workshops and industry webinars.",
      tag: "HANDS-ON SEMINARS & TECH WORKSHOPS",
      badgeTag: "RAVW",
      image: HERO_SLIDE_7_SEMINAR_LAB,
      showEmblem: false,
      objectPosition: "object-center"
    },
    {
      title: "Akarshan - HR Leadership Connect 2024.",
      highlightWord: "Leadership Connect 2024.",
      subtitle: "Bridging the gap between corporate HR leaders and engineering students for 95%+ campus placement success.",
      tag: "HR CONCLAVE & INDUSTRY CONNECT",
      badgeTag: "RAVW",
      image: HERO_SLIDE_3_HR_CONCLAVE,
      showEmblem: false,
      objectPosition: "object-center"
    },
    {
      title: "Speakeasy Coding & Practical Lab Mastery.",
      highlightWord: "Lab Mastery.",
      subtitle: "Personalized practical coding sessions, data structures, and algorithmic problem solving in modern computing labs.",
      tag: "PRACTICAL CODING & COMPUTER LABS",
      badgeTag: "RAVW",
      image: HERO_SLIDE_4_CODING_LAB,
      showEmblem: false,
      objectPosition: "object-[center_35%]"
    },
    {
      title: "Dedicated Faculty Mentorship & Innovation.",
      highlightWord: "Faculty Mentorship",
      subtitle: "Hands-on guidance by expert faculty, encouraging young women engineers to build real-world software and research projects.",
      tag: "EXPERT MENTORSHIP & PROJECT GUIDANCE",
      badgeTag: "RAVW",
      image: HERO_SLIDE_5_MENTORSHIP,
      showEmblem: false,
      objectPosition: "object-[center_30%]"
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
        <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent font-serif italic">
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="home" aria-label="Hero Showcase" className="relative min-h-[650px] sm:min-h-[700px] lg:min-h-[750px] w-full bg-slate-950 overflow-hidden flex flex-col justify-between py-4 lg:py-6">
      
      {/* 1. BACKGROUND FULL-WIDTH CRISP UNBLURRED IMAGE SHOWCASE */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.img
            key={`hero-img-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className={`w-full h-full object-cover ${slides[currentSlide].objectPosition}`}
            style={{
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
            loading="eager"
          />
        </AnimatePresence>

        {/* Clean bright background without dark bottom shadow */}
        <div className="absolute inset-0 bg-slate-950/15 pointer-events-none z-10" />

        {/* Navy & Gold Accent Framing Lines */}
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

      {/* 2. TEXT & CONTENT OVERLAY ON TOP OF THE CENTERED IMAGE */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-end pt-12 pb-2 sm:pb-4">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/50 text-white shadow-xl"
          >
            <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-950/90 px-2 py-0.5 rounded-md border border-amber-500/40">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-100 font-mono">
              {slides[currentSlide].tag}
            </span>
            <span className="bg-[#f59e0b] text-amber-950 font-mono text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-2xs">
              {slides[currentSlide].badgeTag}
            </span>
          </motion.div>

          {/* Dynamic Animated Headlines Overlaid on Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-3"
            >
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18] drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                {renderTitle(slides[currentSlide].title, slides[currentSlide].highlightWord)}
              </h1>

              {/* Accent Blue Bar + Gold Dot */}
              <div className="flex items-center gap-2 pt-0.5">
                <div className="w-14 h-1.5 bg-[#2563eb] rounded-full shadow-md" />
                <div className="w-2.5 h-2.5 bg-[#f59e0b] rounded-full shadow-md" />
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-white font-sans font-medium leading-relaxed max-w-2xl drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
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
              className="px-6 sm:px-7 py-3 bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white font-bold tracking-wider uppercase text-xs sm:text-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-blue-400/40"
              aria-label="Explore engineering departments"
            >
              EXPLORE DEPARTMENTS
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-amber-400" />
            </Link>

            <Link
              to="/admissions"
              className="px-6 sm:px-7 py-3 bg-white/95 hover:bg-amber-400 text-blue-950 hover:text-blue-950 border-2 border-[#f59e0b] font-bold tracking-wider uppercase text-xs sm:text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer flex items-center gap-2"
              aria-label="Navigate to admissions page"
            >
              <GraduationCap className="h-4 w-4 text-amber-600" />
              ADMISSIONS INFO
            </Link>
          </motion.div>

          {/* Slide Controls Row: Dots + Pause/Play */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-7 bg-[#f59e0b] ring-2 ring-amber-300'
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
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. FLOATING BOTTOM ACCREDITATION BAR */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-3 sm:mt-4">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl rounded-2xl p-3.5 sm:p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="flex items-center gap-3 pt-1 md:pt-0">
              <div className="p-2 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <Award className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs font-bold">NAAC Accredited</p>
                <p className="text-blue-900 text-[9.5px] font-mono uppercase font-bold">A+ GRADE MARK</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1 md:pt-0 md:pl-4">
              <div className="p-2 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <ShieldCheck className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs font-bold">NBA Accreditation</p>
                <p className="text-blue-900 text-[9.5px] font-mono uppercase font-bold">CSE & ECE CORE</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1 md:pt-0 md:pl-4">
              <div className="p-2 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs font-bold">AICTE Approved</p>
                <p className="text-blue-900 text-[9.5px] font-mono uppercase font-bold">GOVT. RECOGNIZED</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1 md:pt-0 md:pl-4">
              <div className="p-2 bg-amber-50 rounded-xl border border-amber-200/80 shrink-0">
                <GraduationCap className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-slate-950 text-xs font-bold">JNTUA Affiliated</p>
                <p className="text-blue-900 text-[9.5px] font-mono uppercase font-bold">AUTONOMOUS SYLLABUS</p>
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
