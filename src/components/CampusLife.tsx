import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Compass, Coffee, Info, Eye, Sparkles } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data';
import { CampusFacility } from '../types';

export default function CampusLife() {
  const [activeFacility, setActiveFacility] = useState<CampusFacility | null>(null);

  return (
    <section id="campus-life" className="py-24 bg-white dark:bg-primary-950 relative overflow-hidden">
      {/* Decorative gradient blocks */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Vibrant Living
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
            Immersive Campus Life
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            From extensive reading zones in our central library to secure hostel rooms, nutritious dining tables, and lively sports complexes, RCEW Kurnool provides an atmosphere designed to nurture comfort and academic success.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="campus-facilities-grid">
          {CAMPUS_FACILITIES.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-slate-50 dark:bg-primary-900/30 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              {/* Image & Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                
                {/* Visual hover assist overlay */}
                <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/95 text-primary-950 text-xs font-bold uppercase rounded-xl shadow-md flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" /> Quick View
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-gold-300 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Highlights List inside card */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/40">
                  <div className="flex flex-wrap gap-2">
                    {facility.highlights.slice(0, 2).map((hl, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium text-primary-700 dark:text-gold-300 bg-primary-50 dark:bg-primary-900/30 px-2.5 py-1 rounded-lg border border-primary-100/50 dark:border-slate-800">
                        <Check className="h-3 w-3 text-gold-500 shrink-0" />
                        {hl}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setActiveFacility(facility)}
                      className="px-4 py-2 bg-white hover:bg-primary-700 hover:text-white dark:bg-primary-800 dark:hover:bg-gold-500 dark:hover:text-primary-950 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase rounded-xl border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1"
                    >
                      <Info className="h-3.5 w-3.5 text-gold-500" /> Full Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cafeteria Extra Spotlight banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-primary-900/20 border border-slate-100 dark:border-slate-800/80 flex flex-col lg:flex-row items-center gap-8 shadow-sm">
          <div className="relative w-full lg:w-1/3 h-56 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600"
              alt="Hygienic Canteen"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-400 text-primary-950">
              <Coffee className="h-3.5 w-3.5" />
              Cafeteria Spotlight
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-900 dark:text-white">
              Hygienic Canteen & Refreshment Corner
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Serving highly hygienic, pure vegetarian culinary items, light meals, juices, and hot brews, our central cafeteria and refreshment deck act as the prime recreational point for campus interactions. Food preparations are heavily monitored for health guidelines.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="h-4 w-4 text-green-500" /> 100% Pure Vegetarian menu
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="h-4 w-4 text-green-500" /> Filtered RO drinking water
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="h-4 w-4 text-green-500" /> Safe, hygienic sanitization
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Facility Details Modal Drawer */}
      <AnimatePresence>
        {activeFacility && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFacility(null)}
              className="fixed inset-0 bg-primary-950/80 z-50 backdrop-blur-sm"
              id="facility-modal-backdrop"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="fixed inset-x-4 bottom-4 md:inset-y-24 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg bg-white dark:bg-primary-900 rounded-3xl shadow-2xl z-50 p-6 sm:p-8 overflow-y-auto"
              id="facility-modal"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white">
                  {activeFacility.name} Details
                </h3>
                <button
                  onClick={() => setActiveFacility(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl font-light"
                >
                  ×
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div className="h-56 overflow-hidden rounded-2xl">
                  <img
                    src={activeFacility.image}
                    alt={activeFacility.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeFacility.description}
                </p>

                {/* Checklist of highlights */}
                <div className="bg-primary-50/30 dark:bg-primary-950/30 p-5 rounded-2xl border border-primary-100/30">
                  <h4 className="text-xs font-bold text-primary-900 dark:text-gold-300 uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    Key Highlights & Infrastructure
                  </h4>
                  <div className="space-y-2">
                    {activeFacility.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                        <span className="text-xs text-slate-700 dark:text-slate-200 leading-normal">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveFacility(null)}
                  className="px-6 py-2.5 bg-primary-700 hover:bg-primary-600 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-primary-950 text-xs font-bold uppercase rounded-xl shadow-md transition-colors"
                >
                  Understood, Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
