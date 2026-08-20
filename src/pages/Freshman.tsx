import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, Award, CheckCircle2, Users, ChevronRight,
  History, ShieldCheck, GraduationCap, Eye, Sparkles, Building2,
  Calendar, Layers, MapPin, Mail, Phone, ExternalLink, Target, Compass, Lightbulb,
  Globe, Rocket, Search
} from 'lucide-react';
import { DEPARTMENTS } from '../data';

// Sidebar Menu for Department of I Freshman (I B.Tech)
const DEPARTMENT_SIDEBAR_MENU = [
  { id: 'home', label: 'Home' },
  { id: 'history', label: 'History of the Department' },
  { id: 'bos', label: "Board of Studies' Members" },
  { id: 'courses', label: 'Courses Offered' },
  { id: 'obe', label: 'OBE', hasSubmenu: true },
  { id: 'faculty', label: 'Faculty Members' },
];

// Board of Studies Members (Freshman / Humanities & Sciences)
const BOS_MEMBERS = [
  {
    sno: 1,
    name: 'Mrs. G. Spandana',
    organization: 'HoD Freshman (I B.Tech), Ravindra College of Engineering for Women',
    designation: 'Chairperson'
  },
  {
    sno: 2,
    name: 'Prof. E. Keshava Reddy',
    organization: 'Professor of Mathematics & Director of Evaluation, JNT University Anantapur',
    designation: 'University Nominee'
  },
  {
    sno: 3,
    name: 'Dr. G. Ramachandra Reddy',
    organization: 'Professor, Department of Freshman (H&S), RCEW Kurnool',
    designation: 'Internal Member'
  },
  {
    sno: 4,
    name: 'Dr. B. V. Rami Reddy',
    organization: 'Professor & Controller of Examinations, RCEW Kurnool',
    designation: 'Internal Member'
  },
  {
    sno: 5,
    name: 'Dr. K. Mallikarjunudu',
    organization: 'Professor, Department of Freshman, RCEW Kurnool',
    designation: 'Internal Member'
  },
  {
    sno: 6,
    name: 'Dr. K. Madhurima',
    organization: 'Associate Professor, Department of Freshman, RCEW Kurnool',
    designation: 'Internal Member'
  },
  {
    sno: 7,
    name: 'Dr. P. Sreenivasulu',
    organization: 'Professor of Physics, Sri Venkateswara University, Tirupati',
    designation: 'Academician'
  },
  {
    sno: 8,
    name: 'Dr. V. Madhusudhana Rao',
    organization: 'Professor of Chemistry, Sri Krishnadevaraya University, Ananthapuramu',
    designation: 'Academician'
  }
];

// OBE Details
const OBE_DATA = {
  peos: [
    {
      code: 'PEO 1',
      title: 'Foundational Knowledge & Scientific Principles',
      desc: 'Apply essential concepts of Mathematics, Physics, Chemistry, and Humanities to analyze and resolve preliminary engineering challenges.'
    },
    {
      code: 'PEO 2',
      title: 'Technical Communication & Professional Ethics',
      desc: 'Demonstrate proficiency in oral and written English, interpersonal skills, teamwork, and professional ethics essential for global workplace readiness.'
    },
    {
      code: 'PEO 3',
      title: 'Problem Solving & Programming Foundations',
      desc: 'Formulate algorithmic logic and utilize computing fundamentals for multidisciplinary engineering applications.'
    },
    {
      code: 'PEO 4',
      title: 'Lifelong Learning & Academic Excellence',
      desc: 'Engage in continuous self-assessment, critical thinking, and intellectual growth to excel in upper-division engineering specializations.'
    }
  ],
  psos: [
    {
      code: 'PSO 1',
      title: 'Applied Basic Sciences Integration',
      desc: 'Integrate mathematical models, physical laws, and chemical principles into core engineering problem formulations.'
    },
    {
      code: 'PSO 2',
      title: 'Language & Laboratory Competency',
      desc: 'Utilize advanced language laboratory tools and modern experimental setups to communicate technical ideas precisely.'
    }
  ],
  pos: [
    {
      code: 'PO 1',
      name: 'Engineering Knowledge',
      desc: 'Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization to develop solutions for complex problems.'
    },
    {
      code: 'PO 2',
      name: 'Problem Analysis',
      desc: 'Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions.'
    },
    {
      code: 'PO 3',
      name: 'Design/Development of Solutions',
      desc: 'Design solutions for complex engineering problems and design systems/components/processes to meet identified public health, safety, and environmental needs.'
    },
    {
      code: 'PO 4',
      name: 'Conduct Investigations of Complex Problems',
      desc: 'Use research-based knowledge including design of experiments, analysis, and interpretation of data to provide valid conclusions.'
    },
    {
      code: 'PO 5',
      name: 'Modern Tool Usage',
      desc: 'Create, select and apply appropriate techniques, resources and modern engineering tools including language labs and scientific software.'
    },
    {
      code: 'PO 6',
      name: 'The Engineer and Society',
      desc: 'Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues.'
    },
    {
      code: 'PO 7',
      name: 'Environment & Sustainability',
      desc: 'Understand the impact of professional engineering solutions in societal and environmental contexts.'
    },
    {
      code: 'PO 8',
      name: 'Ethics',
      desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.'
    },
    {
      code: 'PO 9',
      name: 'Individual and Team Work',
      desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.'
    },
    {
      code: 'PO 10',
      name: 'Communication',
      desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large.'
    },
    {
      code: 'PO 11',
      name: 'Project Management & Finance',
      desc: 'Demonstrate knowledge and understanding of engineering and management principles.'
    },
    {
      code: 'PO 12',
      name: 'Life-long Learning',
      desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.'
    }
  ]
};

import { HS_FACULTY } from '../data/facultyData';

// Official RECW Freshman Faculty Roster
const FRESHMAN_FACULTY = HS_FACULTY;

export default function Freshman() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [obeSubtab, setObeSubtab] = useState<'peos' | 'pos' | 'psos'>('peos');
  const [facultySearch, setFacultySearch] = useState<string>('');

  const filteredFaculty = FRESHMAN_FACULTY.filter(f =>
    f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
    f.qualification.toLowerCase().includes(facultySearch.toLowerCase()) ||
    f.designation.toLowerCase().includes(facultySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout with Sidebar on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden sticky top-24">
            
            {/* Top Blue & Gold Accent Line */}
            <div className="h-3.5 bg-gradient-to-r from-blue-900 via-blue-700 to-amber-500" />

            {/* Sidebar Title Card with Royal Blue Gradient & Gold Accent */}
            <div className="p-6 text-center bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-bl-full pointer-events-none" />
              <GraduationCap className="h-7 w-7 text-amber-400 mx-auto mb-1.5 drop-shadow-xs" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                FRESHMAN (I B.Tech)
              </h2>
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 text-amber-300 border border-amber-400/30">
                RCEW Autonomous
              </span>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100">
              {DEPARTMENT_SIDEBAR_MENU.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-5 py-3.5 text-sm sm:text-base font-semibold flex items-center justify-between transition-all cursor-pointer relative ${
                      isActive
                        ? 'text-blue-900 bg-blue-50/80 font-bold shadow-2xs'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-blue-50/40'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />}
                      <span>{item.label}</span>
                    </span>

                    {item.hasSubmenu ? (
                      <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90 text-amber-500 font-bold' : 'text-slate-400'}`} />
                    ) : null}

                    {/* Active Right Vertical Gold Indicator */}
                    {isActive && (
                      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-amber-500 rounded-l shadow-xs" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 md:p-10 min-h-[600px]">
            
            {/* 1. HOME TAB */}
            {activeTab === 'home' && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">RCEW Academic Department</span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                      FRESHMAN (I B.Tech)
                    </h1>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    Autonomous • Code: FRESHMAN
                  </span>
                </div>

                {/* Hero Feature Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                    alt="FRESHMAN (I B.Tech)"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <p className="font-serif text-lg sm:text-2xl font-bold text-amber-300">FRESHMAN (I B.Tech)</p>
                      <p className="text-xs sm:text-sm text-slate-200">Building analytical rigor, scientific mastery, and communicative excellence since 2008.</p>
                    </div>
                  </div>
                </div>

                {/* Quick Highlights / Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-blue-700 block">360+</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">First Year Intake</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-blue-700 block">25</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Core Faculty</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-amber-600 block">2008</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Established</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-blue-700 block">5+</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Advanced Labs</span>
                  </div>
                </div>

                {/* ABOUT THE DEPARTMENT */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-blue-800">
                      ABOUT THE DEPARTMENT
                    </h2>
                  </div>

                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p className="bg-gradient-to-r from-amber-50 via-amber-50/90 to-yellow-50/70 p-5 rounded-2xl border-l-4 border-amber-500 border border-amber-200/80 shadow-xs font-medium text-slate-900">
                      FRESHMAN (I B.Tech) serves as the academic bedrock for all undergraduate engineering disciplines at Ravindra College of Engineering for Women. Dedicated to transforming young high-school graduates into confident engineering scholars, the department provides rigorous instruction in Mathematics, Physics, Chemistry, English Communication, and Problem Solving with C.
                    </p>

                    <p>
                      With state-of-the-art physics, chemistry, and multimedia English language laboratories, our faculty members focus on experiential learning, interactive tutorials, and individualized mentoring. The department fosters ethical values, environmental consciousness, and strong soft skills necessary to excel in specialized engineering domains.
                    </p>
                  </div>
                </div>

                {/* VISION & MISSION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-3">
                    <div className="flex items-center gap-2 text-blue-900 font-serif font-bold text-lg">
                      <Eye className="h-5 w-5 text-amber-500" /> Vision of Department
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      To provide foundational academic excellence in basic sciences, mathematics, and communicative English, cultivating analytical mindsets, technological curiosity, and ethical integrity in first-year women engineering students.
                    </p>
                  </div>

                  <div className="p-6 bg-amber-50/40 rounded-2xl border border-amber-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-amber-950 font-serif font-bold text-lg">
                      <Compass className="h-5 w-5 text-amber-600" /> Mission of Department
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>M1:</strong> Impart strong foundational knowledge in Mathematics, Physics, Chemistry, and English through interactive teaching.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>M2:</strong> Develop effective oral/written communication skills and professional ethics required for global workplace readiness.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>M3:</strong> Encourage hands-on laboratory experimentation and problem-solving skills that build confidence for advanced engineering programs.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* HOD MESSAGE SECTION */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-blue-800">
                      MESSAGE FROM HEAD OF DEPARTMENT
                    </h2>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-4 text-center">
                      <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-blue-100 flex items-center justify-center">
                        <GraduationCap className="h-16 w-16 text-blue-800" />
                      </div>
                      <h3 className="font-serif font-bold text-slate-900 text-base mt-3">Mrs. G. Spandana</h3>
                      <p className="text-xs text-blue-700 font-semibold">Associate Professor & HoD</p>
                      <span className="text-[11px] text-slate-500 font-mono block mt-1">FRESHMAN (I B.Tech)</span>
                    </div>

                    <div className="md:col-span-8 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p className="italic font-serif text-slate-800 text-sm sm:text-base border-l-2 border-amber-500 pl-4 py-1">
                        "Welcome to FRESHMAN (I B.Tech) at Ravindra College of Engineering for Women. First-year engineering is the critical bridge that transforms ambitious young students into analytical problem-solvers. Our mission is to ensure every student masters scientific fundamentals and technical communication while discovering their potential."
                      </p>
                      <p>
                        Our dedicated team of experienced professors, doctorate holders, and assistant professors provide personalized attention, holistic mentoring, and hands-on laboratory experience. We encourage every student to embrace curiosity, teamwork, and lifelong learning right from day one.
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 2. HISTORY TAB */}
            {activeTab === 'history' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Department Legacy</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    History of FRESHMAN (I B.Tech)
                  </h1>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    FRESHMAN (I B.Tech) was established in the academic year 2008 alongside the inception of Ravindra College of Engineering for Women (RCEW). Designed to cater to the foundational needs of all undergraduate engineering programs (CSE, ECE, CAI, AIDS), the department has grown steadily into a center of academic excellence.
                  </p>
                  <p>
                    Over the years, the department has established state-of-the-art Physics, Chemistry, and English Communication Skills language laboratories. With UGC Autonomous status and alignment with JNTUA curriculum regulations (R23/R20), the department offers continuous skill enrichment, remedial classes, bridge courses, and induction programs to transition students seamlessly into professional engineering education.
                  </p>
                </div>
              </motion.div>
            )}

            {/* 3. BOARD OF STUDIES MEMBERS TAB */}
            {activeTab === 'bos' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Academic Governance</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Board of Studies' Members – FRESHMAN (I B.Tech)
                  </h1>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                      <tr>
                        <th className="py-3.5 px-4 text-center w-14">S.No</th>
                        <th className="py-3.5 px-4">Name of the Member</th>
                        <th className="py-3.5 px-4">Designation & Organization</th>
                        <th className="py-3.5 px-4 text-center">Role in BOS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {BOS_MEMBERS.map((member) => (
                        <tr key={member.sno} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-center text-blue-800">{member.sno}</td>
                          <td className="py-3 px-4 font-semibold text-slate-950">{member.name}</td>
                          <td className="py-3 px-4 text-slate-700">{member.organization}</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                              member.designation === 'Chairperson'
                                ? 'bg-amber-100 text-amber-950 border border-amber-300'
                                : 'bg-blue-100 text-blue-950 border border-blue-200'
                            }`}>
                              {member.designation}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* 4. COURSES OFFERED TAB */}
            {activeTab === 'courses' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Curriculum & Subjects</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    First-Year B.Tech Courses & Lab Modules
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-900 border border-blue-200">Mathematics Stream</span>
                    <h3 className="font-serif font-bold text-slate-900 text-base">Linear Algebra, Calculus & Differential Equations</h3>
                    <p className="text-xs text-slate-600">Matrix theory, eigenvalues, vector calculus, differential equations, and numerical methods for engineering modeling.</p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-950 border border-amber-300">Physics & Chemistry</span>
                    <h3 className="font-serif font-bold text-slate-900 text-base">Engineering Physics & Chemistry Labs</h3>
                    <p className="text-xs text-slate-600">Semiconductor physics, quantum mechanics, optics, water technology, electrochemistry, and polymer chemistry experiments.</p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-950 border border-emerald-300">English Language</span>
                    <h3 className="font-serif font-bold text-slate-900 text-base">Communicative English & Language Lab</h3>
                    <p className="text-xs text-slate-600">Phonetics, vocabulary building, presentation skills, report writing, and digital audio-visual language lab practice.</p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-100 text-indigo-950 border border-indigo-200">Engineering Basics</span>
                    <h3 className="font-serif font-bold text-slate-900 text-base">C Programming & Engineering Graphics</h3>
                    <p className="text-xs text-slate-600">Problem solving with C, control structures, arrays, pointers, computer-aided drafting (CAD), and basic electrical engineering.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. OBE TAB */}
            {activeTab === 'obe' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Outcome Based Education</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    OBE Framework (PEOs, PSOs & POs)
                  </h1>
                </div>

                <div className="flex gap-2 border-b border-slate-200 pb-3">
                  <button
                    onClick={() => setObeSubtab('peos')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer ${
                      obeSubtab === 'peos' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                    }`}
                  >
                    PEOs
                  </button>
                  <button
                    onClick={() => setObeSubtab('psos')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer ${
                      obeSubtab === 'psos' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                    }`}
                  >
                    PSOs
                  </button>
                  <button
                    onClick={() => setObeSubtab('pos')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer ${
                      obeSubtab === 'pos' ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-blue-50'
                    }`}
                  >
                    POs (Graduate Attributes)
                  </button>
                </div>

                {obeSubtab === 'peos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {OBE_DATA.peos.map((peo, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-950 border border-amber-300">{peo.code}</span>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">{peo.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{peo.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {obeSubtab === 'psos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {OBE_DATA.psos.map((pso, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-950 border border-blue-300">{pso.code}</span>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">{pso.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{pso.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {obeSubtab === 'pos' && (
                  <div className="space-y-3">
                    {OBE_DATA.pos.map((po, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-800 text-white shrink-0 self-start sm:self-auto">{po.code}</span>
                        <div className="flex-grow sm:ml-4 space-y-0.5">
                          <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm">{po.name}</h4>
                          <p className="text-xs text-slate-600">{po.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* 6. FACULTY MEMBERS TAB */}
            {activeTab === 'faculty' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Faculty Roster</span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                      Faculty Members – FRESHMAN (I B.Tech)
                    </h1>
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search faculty..."
                      value={facultySearch}
                      onChange={(e) => setFacultySearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-800"
                    />
                  </div>
                </div>

                {/* Faculty Table */}
                <div className="bg-white rounded-2xl shadow-2xs border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                          <th scope="col" className="py-4 px-6 w-20 text-center">S.No</th>
                          <th scope="col" className="py-4 px-6">Faculty Name</th>
                          <th scope="col" className="py-4 px-6">Qualification</th>
                          <th scope="col" className="py-4 px-6">Designation</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-800">
                        {filteredFaculty.map((member, index) => (
                          <tr
                            key={member.sno}
                            className={`transition-colors hover:bg-blue-50/40 ${
                              index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                            }`}
                          >
                            <td className="py-3.5 px-6 font-mono font-bold text-center text-blue-800">
                              {member.sno}
                            </td>

                            <td className="py-3.5 px-6 font-semibold text-slate-950">
                              <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center text-xs font-bold shrink-0 border border-blue-200">
                                  {member.name.replace(/^(Dr\.|Mrs\.|Mr\.|Ms\.)\s*/, '').charAt(0)}
                                </div>
                                <span>{member.name}</span>
                              </div>
                            </td>

                            <td className="py-3.5 px-6 font-mono text-xs font-semibold text-purple-900">
                              <span className="px-2.5 py-1 bg-purple-50 rounded-md border border-purple-200 inline-block">
                                {member.qualification}
                              </span>
                            </td>

                            <td className="py-3.5 px-6">
                              <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border ${
                                member.designation.includes('HoD') || member.designation.includes('Professor')
                                  ? 'bg-amber-100 text-amber-950 border-amber-300 font-bold'
                                  : member.designation.includes('Associate') || member.designation.includes('Assoc')
                                  ? 'bg-blue-100 text-blue-950 border-blue-200 font-semibold'
                                  : 'bg-slate-100 text-slate-800 border-slate-200 font-medium'
                              }`}>
                                {member.designation}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
