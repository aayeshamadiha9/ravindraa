
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, Search, ChevronDown, Phone, Mail, ExternalLink, Instagram, Linkedin, Youtube
} from 'lucide-react';
import { COLLEGE_INFO } from '../data';
import COLLEGE_LOGO_IMAGE from '../assets/images/rcew_college_logo_1784036182954.png';
import COLLEGE_BANNER_IMAGE from '../assets/images/rcew_horizontal_banner.png';

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dropdown states for desktop/mobile
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  const menuConfig = [
    {
      label: 'Academics',
      href: '/academics',
      subitems: [
        { label: 'Academic Program', href: '/academics' },
      ]
    },
    {
      label: 'Know Us',
      href: '/about/profile',
      subitems: [
        { label: 'College Profile & History', href: '/about/profile' },
        { label: 'Our Management', href: '/about/management' },
        { label: 'Message from Principal Desk', href: '/about/principal-desk' },
        { label: 'Rankings and Awards', href: '/about/rankings-awards' },
        { label: 'Governing Body Members', href: '/about/governing-body' },
        { label: 'Milestones', href: '/milestones' },
        { label: 'Why RCEW', href: '/why-rcew' },
      ]
    },
    {
      label: 'Departments',
      href: '/departments/freshman',
      subitems: [
        { label: 'FRESHMAN (I B.Tech)', href: '/departments/freshman' },
        { label: 'Computer Science and Engineering', href: '/departments/cse' },
        { label: 'Electronics and Communication Engineering', href: '/departments/ece' },
        { label: 'Computer Science and Engineering (AI)', href: '/departments/cai' },
      ]
    },
    {
      label: 'Admissions',
      href: '/admissions',
      subitems: [
        { label: 'Admission Info', href: '/admissions' },
      ]
    },
    {
      label: 'Placements',
      href: '/placements/company-visits',
      subitems: [
        { label: 'Company Visits', href: '/placements/company-visits' },
        { label: 'Placed Students', href: '/placements/placed-students' },
      ]
    },
    {
      label: 'IQAC',
      href: '/iqac',
      subitems: [
        { label: 'Internal Quality Assurance Cell', href: '/iqac?tab=iqac-cell' },
        { label: 'NAAC Accreditation', href: '/iqac?tab=naac' },
        { label: 'AICTE Mandatory Disclosures', href: '/iqac?tab=aicte' },
        { label: 'NBA Accreditation', href: '/iqac?tab=nba' },
      ]
    },
    {
      label: 'R&D',
      href: '/rd',
      subitems: [
        { label: 'Research Overview & Grants', href: '/rd?tab=home' },
        { label: 'Research Resources & IEEE Journals', href: '/rd?tab=resources' },
      ]
    },
    {
      label: 'Campus Life',
      href: '/campus-life',
      subitems: [
        { label: 'Campus Connect', href: '/campus-life?tab=campus-connect' },
        { label: 'IEEE Society', href: '/campus-life?tab=ieee-society' },
        { label: 'Computer Society of India (CSI)', href: '/campus-life?tab=csi-society' },
        { label: 'Extra Curricular Activities', href: '/campus-life?tab=extra-curricular' },
        { label: 'Sports Club', href: '/campus-life?tab=sports-club' },
        { label: 'NSS Club', href: '/campus-life?tab=nss-club' },
        { label: 'SPEAK EASY CLUB', href: '/campus-life?tab=speak-easy' },
        { label: 'Foreign Languages Club', href: '/campus-life?tab=foreign-languages' },
        { label: 'MSRC Club', href: '/campus-life?tab=msrc-club' },
        { label: 'RCEW Swastha – Health Club', href: '/campus-life?tab=swastha-health' },
        { label: 'Yoga Club', href: '/campus-life?tab=yoga-club' },
      ]
    },
    {
      label: 'Faculty',
      href: '/faculty',
      subitems: [
        { label: 'Faculty Roster', href: '/faculty' },
      ]
    }
  ];

  const handleScrollToAnchor = (href: string) => {
    setIsOpen(false);
    // Extract path and anchor
    const [path, anchor] = href.split('#');
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          const offset = 140; // accounted for multi-layer sticky navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const offsetPosition = (elementRect - bodyRect) - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (Live Notification Marquee) */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white py-1.5 sm:py-2 overflow-hidden border-b-2 border-amber-400/80 text-xs font-sans select-none relative z-50 w-full shadow-md">
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 flex items-center relative gap-2 sm:gap-3">
          
          {/* Badge & Live Pulse Indicator (Sticky / Highlighted on Left) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 relative z-20 bg-slate-900/90 py-0.5 pr-2.5 rounded-full border border-blue-700/60 shadow-md">
            {/* Live Pulsing Indicator Dot */}
            <div className="inline-flex items-center gap-1.5 pl-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
              </span>
              <span className="text-[10px] font-black tracking-wider text-red-400 uppercase font-mono hidden sm:inline">
                LIVE
              </span>
            </div>

            {/* ANNOUNCEMENTS Badge Pill */}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs tracking-wider border border-amber-300 flex items-center gap-1">
              📢 ANNOUNCEMENTS
            </span>
          </div>

          {/* Scrolling Marquee / Ticker Container (Pauses on Hover) */}
          <div className="w-full overflow-hidden flex whitespace-nowrap group relative items-center">
            
            {/* Left & Right subtle gradient fade edges for smooth marquee clipping */}
            <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-8 sm:gap-12 font-medium tracking-wide shrink-0">
              
              {/* Item 1: Admissions */}
              <Link to="/admissions" className="inline-flex items-center gap-2 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-200 px-3 py-0.5 rounded-full font-bold text-xs transition-colors cursor-pointer">
                <span className="text-amber-400">🎓</span>
                <span>ADMISSIONS OPEN FOR ACADEMIC YEAR 2026–27</span>
                <span className="bg-amber-400 text-amber-950 text-[9px] font-black px-1.5 py-0.2 rounded uppercase tracking-wider">APPLY NOW</span>
              </Link>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 2: Placements */}
              <Link to="/placements/company-visits" className="inline-flex items-center gap-2 bg-blue-500/15 hover:bg-blue-500/25 border border-blue-400/40 text-blue-100 px-3 py-0.5 rounded-full font-bold text-xs transition-colors cursor-pointer">
                <span className="text-yellow-400">🏆</span>
                <span>CORPORATE PLACEMENTS:</span>
                <span className="text-amber-300 font-extrabold text-xs underline decoration-amber-400/60 underline-offset-2">96.4% SECURED</span>
              </Link>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 3: NAAC */}
              <div className="inline-flex items-center gap-2 text-slate-100 text-xs">
                <span className="text-amber-400">✨</span>
                <span className="font-semibold">NAAC ACCREDITED WITH</span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-extrabold px-2 py-0.5 rounded-md">A+ GRADE MARK</span>
              </div>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 4: Autonomous */}
              <div className="inline-flex items-center gap-2 text-slate-100 font-semibold text-xs">
                <span className="text-blue-400">🏛️</span>
                <span>AUTONOMOUS INSTITUTION</span>
                <span className="text-slate-400 text-[10px]">(UGC GOVT. PROPOSAL)</span>
              </div>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 5: JNTUA Circulars */}
              <div className="inline-flex items-center gap-2 text-slate-100 font-semibold text-xs">
                <span className="text-amber-400">📜</span>
                <span>LATEST JNTUA CIRCULARS RELEASED</span>
              </div>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 6: Academic Calendar */}
              <Link to="/academics" className="inline-flex items-center gap-2 text-slate-100 hover:text-amber-300 font-semibold text-xs transition-colors cursor-pointer">
                <span className="text-sky-400">📅</span>
                <span>ACADEMIC CALENDARS ACTIVE (2025-26)</span>
              </Link>

              <span className="text-amber-400/60 text-xs">◆</span>

            </div>

            {/* Duplicate Item Block for Seamless Infinite Loop */}
            <div className="animate-marquee flex items-center gap-8 sm:gap-12 font-medium tracking-wide shrink-0 ml-8 sm:ml-12" aria-hidden="true">
              
              {/* Item 1: Admissions */}
              <Link to="/admissions" className="inline-flex items-center gap-2 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-200 px-3 py-0.5 rounded-full font-bold text-xs transition-colors cursor-pointer">
                <span className="text-amber-400">🎓</span>
                <span>ADMISSIONS OPEN FOR ACADEMIC YEAR 2026–27</span>
                <span className="bg-amber-400 text-amber-950 text-[9px] font-black px-1.5 py-0.2 rounded uppercase tracking-wider">APPLY NOW</span>
              </Link>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 2: Placements */}
              <Link to="/placements/company-visits" className="inline-flex items-center gap-2 bg-blue-500/15 hover:bg-blue-500/25 border border-blue-400/40 text-blue-100 px-3 py-0.5 rounded-full font-bold text-xs transition-colors cursor-pointer">
                <span className="text-yellow-400">🏆</span>
                <span>CORPORATE PLACEMENTS:</span>
                <span className="text-amber-300 font-extrabold text-xs underline decoration-amber-400/60 underline-offset-2">96.4% SECURED</span>
              </Link>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 3: NAAC */}
              <div className="inline-flex items-center gap-2 text-slate-100 text-xs">
                <span className="text-amber-400">✨</span>
                <span className="font-semibold">NAAC ACCREDITED WITH</span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-extrabold px-2 py-0.5 rounded-md">A+ GRADE MARK</span>
              </div>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 4: Autonomous */}
              <div className="inline-flex items-center gap-2 text-slate-100 font-semibold text-xs">
                <span className="text-blue-400">🏛️</span>
                <span>AUTONOMOUS INSTITUTION</span>
                <span className="text-slate-400 text-[10px]">(UGC GOVT. PROPOSAL)</span>
              </div>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 5: JNTUA Circulars */}
              <div className="inline-flex items-center gap-2 text-slate-100 font-semibold text-xs">
                <span className="text-amber-400">📜</span>
                <span>LATEST JNTUA CIRCULARS RELEASED</span>
              </div>

              <span className="text-amber-400/60 text-xs">◆</span>

              {/* Item 6: Academic Calendar */}
              <Link to="/academics" className="inline-flex items-center gap-2 text-slate-100 hover:text-amber-300 font-semibold text-xs transition-colors cursor-pointer">
                <span className="text-sky-400">📅</span>
                <span>ACADEMIC CALENDARS ACTIVE (2025-26)</span>
              </Link>

              <span className="text-amber-400/60 text-xs">◆</span>

            </div>

          </div>

        </div>
      </div>

      {/* 2. UTILITY SLIM HEADER */}
      <div className="bg-slate-50 text-slate-700 text-[11px] font-semibold tracking-wide py-2 border-b border-slate-200 relative z-50 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-4 2xl:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+918639756876" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Phone className="h-3.5 w-3.5 text-blue-600" /> For Admissions : (91)-8639756876
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="mailto:admissions@recw.ac.in" className="hidden sm:flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Mail className="h-3.5 w-3.5 text-blue-600" /> admissions@recw.ac.in
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/academics" className="hover:text-blue-600 transition-colors">Academic Calendar</Link>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-2.5">
              <a href="https://www.instagram.com/recwofficial?igsh=MWh0c3cydGc0dDg0ag==" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.linkedin.com/company/recwofficial/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href="https://youtube.com/@ravindraengineeringcollege?si=Du2rog7orUndnpl7" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 transition-colors" aria-label="YouTube">
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
            <span className="text-slate-300">|</span>
            <a href="https://digitalcampus.rmjit.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              Digital Campus <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. STICKY MAIN NAVIGATION BAR */}
      <nav
        id="main-navbar"
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 w-full bg-white border-b border-slate-200 shadow-sm py-3 text-slate-800`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-4 2xl:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center shrink-0"
              id="navbar-brand-link"
            >
              {location.pathname === '/' ? (
                <img
                  src={COLLEGE_BANNER_IMAGE}
                  alt="RCEW Banner"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              ) : (
                <>
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center p-1 border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0 mr-3">
                    <img src={COLLEGE_LOGO_IMAGE} alt="RCEW Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-blue-900 font-serif font-bold text-xs sm:text-sm xl:text-sm 2xl:text-base leading-none uppercase tracking-tight">
                      Ravindra Engineering College
                    </h1>
                    <p className="text-blue-600 text-[7px] sm:text-[8px] xl:text-[8.5px] 2xl:text-[9.5px] font-bold tracking-widest uppercase mt-0.5">
                      for Women (RCEW), Kurnool
                    </p>
                  </div>
                </>
              )}
            </Link>

            {/* Desktop Nav Items with dropdowns (Aligned Left) */}
            <div className="hidden xl:flex items-center justify-start xl:ml-1 2xl:ml-6 space-x-0 2xl:space-x-1 flex-grow">
              {/* Home */}
              <Link
                to="/"
                className={`px-1 2xl:px-2 py-2 text-xs font-bold uppercase tracking-normal transition-colors hover:text-blue-600 relative ${
                  location.pathname === '/' ? 'text-blue-600 border-b-2 border-yellow-500 pb-1' : 'text-slate-700'
                }`}
              >
                Home
              </Link>

              {/* Loop other categories */}
              {menuConfig.map((item) => {
                const isCurrentCategory = location.pathname.startsWith(item.href.split('#')[0]);
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`px-0.5 2xl:px-1.5 py-2 text-[11px] 2xl:text-xs font-bold uppercase tracking-normal flex items-center gap-0.5 2xl:gap-1 hover:text-blue-600 transition-colors cursor-pointer ${
                        isCurrentCategory ? 'text-blue-600 border-b-2 border-yellow-500 pb-1' : 'text-slate-700'
                      }`}
                    >
                      {item.label} <ChevronDown className="h-3 w-3 shrink-0" />
                    </Link>

                    {/* Dropdown Container */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-56 bg-white border border-slate-200 border-t-2 border-t-blue-600 shadow-xl rounded-b-xl overflow-hidden py-2 z-50"
                        >
                          {item.subitems.map((sub, sidx) => (
                            <Link
                              key={sidx}
                              to={sub.href}
                              className="block px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all border-b border-slate-100 last:border-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-0.5 2xl:px-1.5 py-2 text-[11px] 2xl:text-xs font-bold uppercase tracking-normal transition-colors hover:text-blue-600 ${
                  location.pathname === '/contact' ? 'text-blue-600 border-b-2 border-yellow-500 pb-1' : 'text-slate-700'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Utility Toggles */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-primary-950 shadow-2xl border-t border-slate-100 dark:border-slate-800 p-4 z-40"
            >
              <div className="max-w-3xl mx-auto flex items-center gap-3">
                <Search className="h-5 w-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Type to search departments, schedules, faqs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm outline-none bg-transparent py-1.5 text-slate-800 dark:text-white"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
              {searchQuery.trim() && (
                <div className="max-w-3xl mx-auto mt-3 p-3 bg-slate-50 dark:bg-primary-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono">Real-time matching pages:</span>
                  <div className="mt-2 space-y-1">
                    <Link to="/iqac" onClick={() => setSearchOpen(false)} className="block text-xs p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded text-primary-750 dark:text-gold-400">IQAC & NAAC Cell</Link>
                    <Link to="/rd" onClick={() => setSearchOpen(false)} className="block text-xs p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded text-primary-750 dark:text-gold-400">Research & Development (R&D)</Link>
                    <Link to="/departments/cse" onClick={() => setSearchOpen(false)} className="block text-xs p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded text-primary-750 dark:text-gold-400">Computer Science & Engineering</Link>
                    <Link to="/admissions" onClick={() => setSearchOpen(false)} className="block text-xs p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded text-primary-750 dark:text-gold-400">Admissions Fees & Eligibility</Link>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer Accordion Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 xl:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-primary-950 text-white shadow-2xl z-50 p-6 flex flex-col justify-between xl:hidden overflow-y-auto border-l border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-white rounded-lg p-0.5 border border-gold-500 shadow-sm shrink-0 flex items-center justify-center">
                      <img src={COLLEGE_LOGO_IMAGE} alt="RCEW Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-serif font-bold text-base uppercase text-white">RCEW Kurnool</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 text-white/75 hover:text-white cursor-pointer">
                    <X className="h-5.5 w-5.5" />
                  </button>
                </div>

                <div className="mt-6 space-y-2">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white/5 rounded-xl border-b border-white/5 text-slate-300"
                  >
                    Home
                  </Link>

                  {menuConfig.map((item) => (
                    <div key={item.label} className="border-b border-white/5 pb-1">
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/5 rounded-xl cursor-pointer"
                      >
                        {item.label} <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-6 space-y-1 bg-white/5 rounded-xl py-2 mt-1"
                          >
                            {item.subitems.map((sub, sidx) => (
                              <Link
                                key={sidx}
                                to={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-[11px] font-semibold text-white/80 hover:text-gold-400"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white/5 rounded-xl text-slate-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}