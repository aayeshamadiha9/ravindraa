import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Bell, ArrowRight, ShieldAlert, Award, FileText, Check, X } from 'lucide-react';
import { NEWS_EVENTS } from '../data';
import { NewsEvent } from '../types';

export default function Events() {
  const [selectedBulletin, setSelectedBulletin] = useState<NewsEvent | null>(null);

  return (
    <section id="events" className="py-24 bg-white dark:bg-primary-950 relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            College Bulletins
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
            Latest News & Events
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Stay updated with immediate administrative announcements, upcoming technical symposiums, research expert seminars, and fests happening on our Kurnool campus.
          </p>
        </div>

        {/* Bulletins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="bulletins-cards-grid">
          {NEWS_EVENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-slate-50 dark:bg-primary-900/35 border border-slate-100 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md flex flex-col md:flex-row h-full"
            >
              {/* Media image */}
              <div className="relative w-full md:w-2/5 h-48 md:h-auto shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary-950 via-primary-950/20 to-transparent" />
                
                {/* Category label */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-white border border-white/10 ${
                    item.category === 'Announcement'
                      ? 'bg-red-600'
                      : item.category === 'Event'
                      ? 'bg-primary-700 dark:bg-gold-500 dark:text-primary-950 font-semibold'
                      : 'bg-green-600'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <Calendar className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                    {item.date}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-primary-900 dark:text-white mt-2 leading-snug group-hover:text-primary-700 dark:group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/65 flex justify-end">
                  <button
                    onClick={() => setSelectedBulletin(item)}
                    className="text-xs font-bold uppercase text-primary-700 dark:text-gold-300 flex items-center gap-1 hover:translate-x-1 transition-transform"
                  >
                    Read Details <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Calendar Notice rail */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-primary-900/20 border border-slate-100 dark:border-slate-800/60 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white">Immediate Campus Notices</h3>
              <p className="text-slate-400 text-xs font-mono">Immediate administrative bulletins</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-primary-950/30 border border-slate-100 dark:border-slate-800/40 flex gap-3">
              <span className="text-[10px] bg-red-100 text-red-800 font-bold uppercase tracking-wider font-mono h-fit px-2 py-0.5 rounded">NEW</span>
              <div>
                <p className="font-bold text-primary-900 dark:text-white text-xs">JNTUA Semester Examinations Registration</p>
                <p className="text-slate-400 text-[11px] mt-1 font-mono">Deadline for fee payment: July 20, 2026</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-primary-950/30 border border-slate-100 dark:border-slate-800/40 flex gap-3">
              <span className="text-[10px] bg-red-100 text-red-800 font-bold uppercase tracking-wider font-mono h-fit px-2 py-0.5 rounded">NEW</span>
              <div>
                <p className="font-bold text-primary-900 dark:text-white text-xs">AP EAPCET (EAMCET) Web Options Link Active</p>
                <p className="text-slate-400 text-[11px] mt-1 font-mono">Counseling active. College Code: RAVW</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bulletins Details popup */}
      <AnimatePresence>
        {selectedBulletin && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBulletin(null)}
              className="fixed inset-0 bg-primary-950/80 z-50 backdrop-blur-sm"
              id="bulletin-modal-backdrop"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 25 }}
              className="fixed inset-x-4 bottom-4 md:inset-y-24 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl bg-white dark:bg-primary-900 rounded-3xl shadow-2xl z-50 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between"
              id="bulletin-detail-modal"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest text-white ${
                      selectedBulletin.category === 'Announcement'
                        ? 'bg-red-600'
                        : 'bg-primary-700'
                    }`}>
                      {selectedBulletin.category}
                    </span>
                    <span className="text-slate-400 text-xs font-mono">{selectedBulletin.date}</span>
                  </div>
                  <button
                    onClick={() => setSelectedBulletin(null)}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-light"
                  >
                    ×
                  </button>
                </div>

                <div className="h-60 overflow-hidden rounded-2xl shadow-sm border">
                  <img
                    src={selectedBulletin.image}
                    alt={selectedBulletin.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-primary-900 dark:text-white leading-snug">
                    {selectedBulletin.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed whitespace-pre-line">
                    {selectedBulletin.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-950/45 border border-primary-100/50 flex gap-2.5">
                  <Check className="h-4.5 w-4.5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Students are advised to consult the respective departmental notice boards or the administrative dean office in the main block for document submissions.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedBulletin(null)}
                  className="px-6 py-2.5 bg-primary-700 hover:bg-primary-600 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-primary-950 text-xs font-bold uppercase rounded-xl shadow-md transition-colors"
                >
                  Close Notice
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
