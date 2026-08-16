import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, CheckCircle, Sparkles, Building2 } from 'lucide-react';

import LAB2_IMG from '../assets/images/rcew_academic_lab2_1785860326438.png';
import LAB1_IMG from '../assets/images/rcew_academic_lab1_1785860397152.png';
import LAB3_IMG from '../assets/images/rcew_academic_lab3_1785860375164.png';
import WORKSHOP_IMG from '../assets/images/rcew_academic_workshop_1785860399511.jpg';

export default function Academics() {
  const btechCourses = [
    { sNo: 1, name: 'FRESHMAN (I B.Tech)', intake: 360, inception: 2008 },
    { sNo: 2, name: 'Computer Science and Engineering', intake: 360, inception: 2008 },
    { sNo: 3, name: 'Electronics and Communications Engineering', intake: 180, inception: 2008 },
    { sNo: 4, name: 'Computer Science and Engineering (AI)', intake: 180, inception: 2025 },
  ];

  const mtechCourses = [
    { sNo: 1, name: 'M.Tech ( Computer Science and Engineering )', intake: 18, inception: 2024 },
    { sNo: 2, name: 'M.Tech ( AI & ML )', intake: 18, inception: 2026 },
  ];

  const labGallery = [
    {
      title: 'High-Speed Computing & AI Lab',
      desc: 'Equipped with modern high-performance workstations and gigabit networking for advanced programming.',
      image: LAB2_IMG
    },
    {
      title: 'Advanced Software Engineering Lab',
      desc: 'Specialized lab setups for software architecture, VLSI simulations, and database design.',
      image: LAB1_IMG
    },
    {
      title: 'Interactive Language & Communication Lab',
      desc: 'Digital multimedia console system for audio-visual English language proficiency training.',
      image: LAB3_IMG
    },
    {
      title: 'Engineering Workshop & Practical Physics Lab',
      desc: 'Hands-on hardware modeling, mechanical fitting bench vises, and applied engineering workshop.',
      image: WORKSHOP_IMG
    }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* HEADER BANNER */}
      <section className="relative py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden mb-12 border-b-2 border-amber-400/80 shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
            Ravindra Engineering College for Women
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Academic Programs
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full shadow-xs" />
          <p className="max-w-3xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
            Approved by AICTE, New Delhi and Affiliated to JNTUA, Anantapuramu.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-20">
        
        {/* UNDER GRADUATE (B.TECH) SECTION - Pop Up Reveal */}
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-blue-50 text-blue-800 rounded-xl border border-blue-200">
              <GraduationCap className="h-6 w-6 text-amber-500" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">4-Year Degree Programs</span>
              <h2 className="text-2xl font-serif font-bold text-slate-950">
                Under Graduate (B.Tech)
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            The curricula of programmes have been designed by the JNTUA, Anantapuramu & Approved by the AICTE, New Delhi to cater to the ever changing needs and demands of IT industry. The focus is on holistic learning and empowering students to make significant contributions at all levels. The cafeteria system of electives gives a handful of choices for students to develop expertise in their area of interest.
          </p>

          {/* B.Tech Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                  <th className="py-3.5 px-4 text-center w-16 text-amber-300">S.No</th>
                  <th className="py-3.5 px-6 text-white">Name of the Course</th>
                  <th className="py-3.5 px-6 text-center text-slate-100">Sanctioned Intake</th>
                  <th className="py-3.5 px-6 text-center text-amber-300">Year of Inception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-800 bg-white">
                {btechCourses.map((course) => (
                  <tr key={course.sNo} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-blue-800">{course.sNo}</td>
                    <td className="py-3.5 px-6 font-bold text-slate-950">{course.name}</td>
                    <td className="py-3.5 px-6 text-center font-mono font-bold text-slate-900">{course.intake}</td>
                    <td className="py-3.5 px-6 text-center font-mono font-bold text-amber-800">{course.inception}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* POST GRADUATE (M.TECH) SECTION - STAGGERED POP-UP MOTION */}
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-blue-50 text-blue-800 rounded-xl border border-blue-200">
              <Award className="h-6 w-6 text-amber-500" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">2-Year Advanced Degrees</span>
              <h2 className="text-2xl font-serif font-bold text-slate-950">
                Post Graduate (M.Tech)
              </h2>
            </div>
          </div>

          {/* M.Tech Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                  <th className="py-3.5 px-4 text-center w-16 text-amber-300">S.No</th>
                  <th className="py-3.5 px-6 text-white">Name of the Course</th>
                  <th className="py-3.5 px-6 text-center text-slate-100">Sanctioned Intake</th>
                  <th className="py-3.5 px-6 text-center text-amber-300">Year of Inception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-800 bg-white">
                {mtechCourses.map((course) => (
                  <tr key={course.sNo} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-blue-800">{course.sNo}</td>
                    <td className="py-3.5 px-6 font-bold text-slate-950">{course.name}</td>
                    <td className="py-3.5 px-6 text-center font-mono font-bold text-slate-900">{course.intake}</td>
                    <td className="py-3.5 px-6 text-center font-mono font-bold text-amber-800">{course.inception}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ACADEMIC INFRASTRUCTURE & LABORATORIES GALLERY - POP-UP CARDS */}
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-mono">
              Academic Facilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              Academic Infrastructure & Laboratories
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labGallery.map((lab, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-amber-300 transition-all group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] bg-blue-900/90 text-amber-300 border border-amber-400/40 px-2.5 py-1 rounded-md font-mono uppercase font-bold tracking-wider">
                      Academic Lab Facility
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-950 group-hover:text-blue-900 transition-colors">
                    {lab.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
