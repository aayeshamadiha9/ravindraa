import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Clock, Calendar, Users, Award, ShieldCheck, Terminal, BrainCircuit, Cpu, Zap, Compass, Hammer, Briefcase, GraduationCap } from 'lucide-react';
import { DEPARTMENTS } from '../data';
import { Department } from '../types';

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const getDeptIcon = (code: string) => {
    switch (code) {
      case 'CSE':
        return <Terminal className="h-5 w-5 text-gold-400" />;
      case 'CAI':
      case 'CSE (AI)':
      case 'AI&DS':
        return <BrainCircuit className="h-5 w-5 text-gold-400" />;
      case 'ECE':
        return <Cpu className="h-5 w-5 text-gold-400" />;
      case 'EEE':
        return <Zap className="h-5 w-5 text-gold-400" />;
      case 'CIVIL':
        return <Compass className="h-5 w-5 text-gold-400" />;
      case 'MECH':
        return <Hammer className="h-5 w-5 text-gold-400" />;
      case 'MBA':
        return <Briefcase className="h-5 w-5 text-gold-400" />;
      default:
        return <GraduationCap className="h-5 w-5 text-gold-400" />;
    }
  };

  return (
    <section id="departments" className="py-24 bg-slate-50 dark:bg-primary-950/40 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Academic Streams
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
            Empowering Departments
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Discover our world-class engineering and management streams, blending comprehensive syllabus structures, modern laboratories, and expert research mentors.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="department-cards-grid">
          {DEPARTMENTS.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-primary-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800/80 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden shrink-0">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-primary-950/80 text-white backdrop-blur-sm border border-white/10 tracking-wider">
                  {getDeptIcon(dept.code)}
                  {dept.code}
                </div>

                {/* Duration Overlay */}
                <div className="absolute bottom-4 right-4 text-xs font-semibold text-gold-300 font-mono">
                  {dept.duration}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-gold-300 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {dept.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-400">
                    <span className="font-bold text-slate-600 dark:text-slate-300">Intake:</span> {dept.intake} Seats
                  </div>
                  
                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="px-4 py-2 bg-slate-50 hover:bg-primary-700 hover:text-white dark:bg-primary-800 dark:hover:bg-gold-500 dark:hover:text-primary-950 text-primary-700 dark:text-slate-300 text-xs font-bold uppercase rounded-xl transition-all duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedDept && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDept(null)}
              className="fixed inset-0 bg-primary-950/80 z-50 backdrop-blur-sm"
              id="department-modal-backdrop"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-4 inset-x-4 md:inset-10 lg:inset-y-16 lg:inset-x-32 bg-white dark:bg-primary-900 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
              id="department-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white z-55 transition-colors"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 h-full overflow-y-auto">
                {/* Visual Banner on Left */}
                <div className="lg:col-span-4 relative bg-primary-950 min-h-[220px] lg:h-full">
                  <img
                    src={selectedDept.image}
                    alt={selectedDept.name}
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary-950 via-primary-950/80 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-400 text-primary-950">
                      {selectedDept.code}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mt-3">
                      {selectedDept.name}
                    </h3>
                    <p className="text-slate-300 text-xs mt-1 font-mono">
                      Established in {selectedDept.established}
                    </p>
                  </div>
                </div>

                {/* Details on Right */}
                <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Brief */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                        About Department
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-1.5 leading-relaxed">
                        {selectedDept.fullDesc}
                      </p>
                    </div>

                    {/* Stat indicators */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                      <div className="text-center bg-slate-50 dark:bg-primary-950/40 p-2.5 rounded-xl">
                        <Users className="h-4 w-4 text-primary-700 dark:text-gold-300 mx-auto mb-1" />
                        <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Annual Intake</p>
                        <p className="font-semibold text-slate-800 dark:text-white text-sm">{selectedDept.intake} Seats</p>
                      </div>
                      <div className="text-center bg-slate-50 dark:bg-primary-950/40 p-2.5 rounded-xl">
                        <Clock className="h-4 w-4 text-primary-700 dark:text-gold-300 mx-auto mb-1" />
                        <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Duration</p>
                        <p className="font-semibold text-slate-800 dark:text-white text-sm">{selectedDept.duration}</p>
                      </div>
                      <div className="text-center bg-slate-50 dark:bg-primary-950/40 p-2.5 rounded-xl">
                        <Calendar className="h-4 w-4 text-primary-700 dark:text-gold-300 mx-auto mb-1" />
                        <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Established</p>
                        <p className="font-semibold text-slate-800 dark:text-white text-sm">{selectedDept.established}</p>
                      </div>
                    </div>

                    {/* Labs and Career prospects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Labs */}
                      <div className="bg-primary-50/40 dark:bg-primary-950/10 p-5 rounded-2xl border border-slate-100/50 dark:border-slate-800/50">
                        <h4 className="text-xs font-extrabold text-primary-900 dark:text-gold-300 uppercase tracking-wider font-mono flex items-center gap-1.5 mb-3">
                          <BookOpen className="h-3.5 w-3.5" />
                          Major Laboratories
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                          {selectedDept.labs.map((lab, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" />
                              {lab}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Careers */}
                      <div className="bg-gold-50/45 dark:bg-primary-950/10 p-5 rounded-2xl border border-gold-100/40 dark:border-slate-800/50">
                        <h4 className="text-xs font-extrabold text-gold-700 dark:text-gold-300 uppercase tracking-wider font-mono flex items-center gap-1.5 mb-3">
                          <Briefcase className="h-3.5 w-3.5" />
                          Career Roles
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                          {selectedDept.careers.map((career, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-primary-700 dark:bg-gold-400 rounded-full shrink-0" />
                              {career}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* HOD Details */}
                    {selectedDept.hodName && (
                      <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-primary-950/40 border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                        <div className="p-2.5 bg-primary-700/10 dark:bg-primary-800/30 text-primary-700 dark:text-gold-400 rounded-xl shrink-0">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-mono font-bold tracking-wider">Department HOD</p>
                          <p className="text-sm font-serif font-bold text-slate-800 dark:text-white">
                            {selectedDept.hodName}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {selectedDept.hodDesignation} • <span className="font-mono text-[11px] text-primary-700 dark:text-gold-300 font-semibold">{selectedDept.hodQualification}</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions inside modal */}
                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-400 font-mono">
                      AP EAPCET Counseling Code: RAVW
                    </p>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => setSelectedDept(null)}
                        className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-primary-800 dark:hover:bg-primary-700 text-slate-700 dark:text-white text-xs font-bold uppercase rounded-xl transition-colors"
                      >
                        Close
                      </button>
                      <a
                        href="#admissions"
                        onClick={() => setSelectedDept(null)}
                        className="flex-1 sm:flex-initial px-5 py-2.5 bg-primary-700 hover:bg-primary-600 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-primary-950 text-xs font-bold uppercase rounded-xl shadow-md transition-colors text-center"
                      >
                        Inquire Admission
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
