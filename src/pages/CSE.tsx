import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, Award, CheckCircle2, Users, ChevronRight,
  History, ShieldCheck, GraduationCap, Eye, Sparkles, Building2,
  Calendar, Layers, MapPin, Mail, Phone, ExternalLink, Target, Compass, Lightbulb,
  Globe, Rocket, Search
} from 'lucide-react';
import { DEPARTMENTS } from '../data';
import CSE_HOD_IMAGE from '../assets/images/rcew_cse_hod_seshadri.png';
import CSE_HERO_IMAGE from '../assets/images/rcew_academic_lab3_1785860375164.png';

// Detailed data models for each sidebar section
const DEPARTMENT_SIDEBAR_MENU = [
  { id: 'home', label: 'Home' },
  { id: 'history', label: 'History of the Department' },
  { id: 'bos', label: "Board of Studies' Members" },
  { id: 'courses', label: 'Courses Offered' },
  { id: 'obe', label: 'OBE', hasSubmenu: true },
  { id: 'faculty', label: 'Faculty Members' },
];

// Board of Studies Members
const BOS_MEMBERS = [
  {
    sno: 1,
    name: 'Dr K Seshadri Ramana',
    organization: 'HoD CSE, Ravindra College of Engineering for Women',
    designation: 'Chairman'
  },
  {
    sno: 2,
    name: 'Prof. C Shoba Bindu',
    organization: 'Professor, Department of CSE & Director, Software Development Cell, JNT University Anantapur, Ananthapuramu',
    designation: 'University Nominee'
  },
  {
    sno: 3,
    name: 'Mr. G. Raja Sekhar',
    organization: 'Sr. Project Manager, LTI Mindtree, Bangalore',
    designation: 'Industry'
  },
  {
    sno: 4,
    name: 'Ms. N. B. Madhuri Deekshitha',
    organization: 'Sr. Software Engineer, Value Labs, Hyderabad',
    designation: 'Alumni'
  },
  {
    sno: 5,
    name: 'Dr. T. Aditya Sai Srinivas',
    organization: 'Associate Professor, Department of Computer Science Engineering, Ravindra College of Engineering for Women',
    designation: 'Internal Member'
  },
  {
    sno: 6,
    name: 'Dr. B. Sabeena',
    organization: 'Associate Professor, Department of Computer Science Engineering, Ravindra College of Engineering for Women',
    designation: 'Internal Member'
  },
  {
    sno: 7,
    name: 'Mrs. Y. Indira Priyadarshini',
    organization: 'Assistant Professor, Department of Computer Science Engineering, Ravindra College of Engineering for Women',
    designation: 'Internal Member'
  },
  {
    sno: 8,
    name: 'Dr. Priyanka Chawla',
    organization: 'Associate Professor, Department of Computer Science And Engineering, National Institute of Technology, Warangal – 506004, Telangana, INDIA',
    designation: 'Academician'
  },
  {
    sno: 9,
    name: 'Dr Bhimarjuna Reddy',
    organization: 'Professor, IIT, Hyderabad',
    designation: 'Academician'
  }
];

// OBE Details
const OBE_DATA = {
  peos: [
    {
      code: 'PEO 1',
      title: 'Software Systems Development',
      desc: 'Apply principles of computer science and engineering to analyze, design and develop software systems.'
    },
    {
      code: 'PEO 2',
      title: 'Industry Practices & Adaptability',
      desc: 'Understand, analyze and apply current industry accepted computing practices and adapt to changing trends in technology.'
    },
    {
      code: 'PEO 3',
      title: 'Societal & Industry Solutions',
      desc: 'Assess industry and societal needs and develop suitable technological solutions.'
    },
    {
      code: 'PEO 4',
      title: 'Leadership & Lifelong Learning',
      desc: 'Exhibit team spirit, inter-personal and leadership dynamics for effective management of projects and engage in life-long learning to conform to changing professional and societal needs.'
    }
  ],
  psos: [
    {
      code: 'PSO 1',
      title: 'System Software Engineering',
      desc: 'Design, develop, test, and maintain innovative System Software to meet the desired needs of industry & society.'
    },
    {
      code: 'PSO 2',
      title: 'Algorithmic Networking & Data Analytics',
      desc: 'Apply skills to design efficient algorithms to solve the problems in the area of networking & data analytics.'
    }
  ],
  pos: [
    {
      code: 'PO 1',
      name: 'Engineering Knowledge',
      desc: 'Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop to the solution of complex engineering problems.'
    },
    {
      code: 'PO 2',
      name: 'Problem Analysis',
      desc: 'Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development. (WK1 to WK4)'
    },
    {
      code: 'PO 3',
      name: 'Design/Development of Solutions',
      desc: 'Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required. (WK5)'
    },
    {
      code: 'PO 4',
      name: 'Conduct Investigations of Complex Problems',
      desc: 'Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions. (WK8).'
    },
    {
      code: 'PO 5',
      name: 'Engineering Tool Usage',
      desc: 'Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems. (WK2 and WK6)'
    },
    {
      code: 'PO 6',
      name: 'The Engineer and The World',
      desc: 'Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment. (WK1, WK5, and WK7).'
    },
    {
      code: 'PO 7',
      name: 'Ethics',
      desc: 'Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws. (WK9)'
    },
    {
      code: 'PO 8',
      name: 'Individual and Collaborative Team work',
      desc: 'Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.'
    },
    {
      code: 'PO 9',
      name: 'Communication',
      desc: 'Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences.'
    },
    {
      code: 'PO 10',
      name: 'Project Management and Finance',
      desc: 'Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.'
    },
    {
      code: 'PO 11',
      name: 'Life-Long Learning',
      desc: 'Recognize the need for, and have the preparation and ability for i) independent and life-long learning ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change. (WK8)'
    }
  ]
};

import { BTECH_CSE_FACULTY, MTECH_CSE_FACULTY } from '../data/facultyData';

export default function CSE() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [obeSubtab, setObeSubtab] = useState<'peos' | 'pos' | 'psos'>('peos');
  const [facultyFilter, setFacultyFilter] = useState<'all' | 'btech' | 'mtech_cse' | 'mtech_aiml' | 'cai'>('all');
  const [facultySearch, setFacultySearch] = useState<string>('');

  const baseDept = DEPARTMENTS.find(d => d.id === 'cse');

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout with Sidebar on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR (Electric Royal Blue Theme - 2nd Image Color) ================= */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden sticky top-24">
            
            {/* Top Royal Blue & Gold Accent Line */}
            <div className="h-3.5 bg-gradient-to-r from-blue-900 via-blue-700 to-amber-500" />

            {/* Sidebar Title Card with Royal Blue Gradient & Gold Accent */}
            <div className="p-6 text-center bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-bl-full pointer-events-none" />
              <GraduationCap className="h-7 w-7 text-amber-400 mx-auto mb-1.5 drop-shadow-xs" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                Department <br />
                <span className="text-amber-300 font-sans tracking-wide text-lg sm:text-xl">of CSE</span>
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
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">RCEW Academic Department</span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                      Department of CSE
                    </h1>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    NBA Accredited • Code: CSE
                  </span>
                </div>

                {/* Hero Feature Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
                    alt="Department of Computer Science & Engineering"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <p className="font-serif text-lg sm:text-2xl font-bold text-amber-300">Department of Computer Science & Engineering</p>
                      <p className="text-xs sm:text-sm text-slate-200">A launchpad for innovation and empowerment at RCEW since 2008.</p>
                    </div>
                  </div>
                </div>

                {/* Quick Highlights / Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-blue-700 block">420+</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Enrolled Students</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-blue-700 block">27</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Core Faculty</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-amber-600 block">2008</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Established</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl font-serif font-bold text-blue-700 block">180</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Annual Intake</span>
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
                      At Ravindra College of Engineering for Women, the Computer Science and Engineering department is more than just a program—it’s a launchpad for innovation and empowerment. Here, we nurture creativity, problem-solving skills, and a passion for technology, preparing women to thrive in the dynamic world of computing. With dedicated faculty, cutting-edge research opportunities, and a supportive community, we’re shaping the next generation of female leaders in computer science.
                    </p>

                    <p className="p-4 bg-white rounded-xl border border-slate-200">
                      The mission of the Department is to persistently strive for achieving excellence in computing disciplines. It is being pursued through its spectrum of academic programmes in computing of contemporary standards. The sustained effort is to produce computing graduates with potential to design and develop systems involving the integration of software and hardware devices; innovative approaches to programming and problem solving as well as creative ways to use Computers; Large scale software systems; and computing infrastructure of an organization.
                    </p>

                    <p className="p-4 bg-white rounded-xl border border-slate-200">
                      History of Computer Science discipline at RCEW dates back to 2008. The Department of Computer Science & Engineering was established to meet the demand for well-qualified computer professionals.
                    </p>

                    <div className="p-5 bg-gradient-to-br from-amber-50/80 to-amber-100/40 rounded-2xl border border-amber-200 space-y-3">
                      <p className="font-medium text-slate-800">
                        At present, the Department of Computer Science and Engineering, has more than <strong>420 students</strong> and <strong>27 core faculty members</strong> apart from many visiting professors, distinguished professionals from industry, eminent researchers and teaching/ research assistants. With an aim to carve a niche for itself in Computer Science and Engineering and allied domains, the Department strives to:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <div className="bg-white p-4 rounded-xl border border-amber-200/80 flex items-start gap-3 shadow-xs">
                          <Globe className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-slate-700 font-medium">
                            Become a pioneering world-class centre of excellence in education and research through collaborative, consultative and participatory approaches
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-amber-200/80 flex items-start gap-3 shadow-xs">
                          <GraduationCap className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-slate-700 font-medium">
                            Nurture effective capabilities for the development of high quality technical and scientific manpower to meet the challenges of the knowledge era
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-amber-200/80 flex items-start gap-3 shadow-xs">
                          <Building2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-slate-700 font-medium">
                            Provide cost-effective Information and Communication Technology (ICT)-based solutions and value-added services to a variety of organisations and to meet the expectations of stakeholders
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-amber-200/80 flex items-start gap-3 shadow-xs">
                          <Sparkles className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-slate-700 font-medium">
                            Foster a learning and creative community that strives to continuously advance the frontiers of knowledge and promote the deployment and usage of ICT-based applications for betterment of society.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VISION & MISSION CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Vision Card */}
                  <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full pointer-events-none" />
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                        <Eye className="h-4 w-4 text-amber-300" />
                        Vision
                      </div>
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium pt-2">
                        "To be a center of excellence in the field of Computer Science and Engineering along with imparting proficient and adaptable technological resources for the well being of mankind."
                      </p>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-white rounded-2xl border-2 border-amber-400/30 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none" />
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                        <Target className="h-4 w-4 text-white" />
                        Mission
                      </div>
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium pt-2">
                        "To achieve professional excellence by promoting an academic environment conducive to research and innovative ideas in order to meet the needs of ever changing IT industry and society."
                      </p>
                    </div>
                  </div>
                </div>

                {/* HOD Message */}
                <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src={CSE_HOD_IMAGE}
                    alt="Dr. K. Seshadri Ramana"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-amber-400 shrink-0 shadow-sm"
                  />
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-amber-300 text-lg sm:text-xl">Message from Head of Department</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                      "Our mission in the Department of Computer Science & Engineering is to inspire creativity, logical rigor, and software leadership. We provide state-of-the-art computational infrastructure and individual mentorship to make our women graduates industry leaders."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. HISTORY OF THE DEPARTMENT - STAGGERED POP-UP MOTION */}
            {activeTab === 'history' && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Department Chronology</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    History of the Department
                  </h1>
                  <p className="text-sm font-semibold text-slate-500 font-serif">Department of CSE</p>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-5 rounded-2xl border-l-4 border-blue-600">
                  The Department of Computer Science & Engineering at Ravindra College of Engineering for Women (RCEW) was established to meet the rising demand for well-qualified computer professionals. Over the years, the department has experienced remarkable academic expansion in both undergraduate (B.Tech) and postgraduate (M.Tech) programs.
                </p>

                {/* Programs Breakdown Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* B.Tech Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-sm hover:shadow-xl transition-all relative overflow-hidden space-y-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <div className="p-2.5 bg-blue-600 text-white rounded-xl">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">Undergraduate</span>
                        <h3 className="font-serif font-bold text-lg text-slate-900 mt-0.5">
                          B. Tech. (Computer Science & Engineering)
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-mono font-bold rounded-lg">2008</span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800">Department Inception</span>
                        </div>
                        <span className="text-xs font-bold text-blue-700 font-mono bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">Started with 60 seats</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-mono font-bold rounded-lg">2010</span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800">1st Expansion Phase</span>
                        </div>
                        <span className="text-xs font-bold text-amber-700 font-mono bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">Intake increased to 120 seats</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-mono font-bold rounded-lg">2021</span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800">2nd Expansion Phase</span>
                        </div>
                        <span className="text-xs font-bold text-blue-700 font-mono bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">Intake increased to 180 seats</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl border border-amber-200">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-amber-600 text-white text-xs font-mono font-bold rounded-lg">2022</span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800">3rd Major Expansion</span>
                        </div>
                        <span className="text-xs font-bold text-amber-900 font-mono bg-amber-200 px-2.5 py-1 rounded-full border border-amber-300">Intake expanded to 360 seats</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* M.Tech Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl border-2 border-amber-200 p-6 shadow-sm hover:shadow-xl transition-all relative overflow-hidden space-y-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <div className="p-2.5 bg-amber-500 text-white rounded-xl">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">Postgraduate</span>
                        <h3 className="font-serif font-bold text-lg text-slate-900 mt-0.5">
                          M. Tech. (Computer Science & Engineering)
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-amber-600 text-white text-xs font-mono font-bold rounded-lg">2024</span>
                          <span className="text-xs sm:text-sm font-medium text-slate-800">PG Inception</span>
                        </div>
                        <span className="text-xs font-bold text-amber-800 font-mono bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">18 Seats Capacity</span>
                      </div>

                      <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1.5">
                        <h4 className="font-bold text-xs text-amber-950 uppercase font-mono">Advanced Curriculum Focus:</h4>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          High Performance Computing, Distributed Systems, Deep Learning Architectures, Cloud Security, and Big Data Analytics.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Visual Progress */}
                <div className="pt-6 border-t border-slate-200 space-y-6">
                  <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
                    <History className="h-5 w-5 text-blue-600" /> Key Milestones Timeline
                  </h3>

                  <div className="relative border-l-2 border-blue-200 pl-6 ml-3 space-y-6">
                    {/* 2008 */}
                    <div className="relative group">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-600 transition-colors">
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">2008</span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">Established with 60 Seats Intake</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Undergraduate B.Tech in CSE launched under JNTUA affiliation with 60 initial seats.</p>
                      </div>
                    </div>

                    {/* 2010 */}
                    <div className="relative group">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-600 transition-colors">
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">2010</span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">Intake Expanded to 120 Seats</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Due to high demand and state-of-the-art lab infrastructure, the B.Tech intake was increased to 120 seats.</p>
                      </div>
                    </div>

                    {/* 2021 */}
                    <div className="relative group">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-600 transition-colors">
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">2021</span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">Intake Expanded to 180 Seats</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Further expansion to 180 seats to accommodate rising admissions and industry placement success.</p>
                      </div>
                    </div>

                    {/* 2022 */}
                    <div className="relative group">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                      <div className="bg-white p-4 rounded-xl border border-amber-300 shadow-xs hover:border-amber-500 transition-colors">
                        <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">2022</span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">Intake Increased to 360 Seats</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Significant expansion to 360 seats in B.Tech CSE, establishing RCEW as a premier regional computing hub.</p>
                      </div>
                    </div>

                    {/* 2024 */}
                    <div className="relative group">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                      <div className="bg-gradient-to-r from-amber-50 to-blue-50 p-4 rounded-xl border border-amber-300 shadow-xs">
                        <span className="text-xs font-mono font-bold text-white bg-blue-600 px-2 py-0.5 rounded">2024</span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">M.Tech. CSE Launched — 18 Seats</h4>
                        <p className="text-xs text-slate-700 mt-0.5 font-medium">Postgraduate M.Tech in Computer Science & Engineering introduced with 18 seats capacity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. BOARD OF STUDIES MEMBERS - STAGGERED POP-UP MOTION */}
            {activeTab === 'bos' && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-200 pb-4 relative">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">Academic Governance</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 inline-block" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Board of Studies' Members
                  </h1>
                  <p className="text-sm font-semibold text-slate-500 font-serif">Department of Computer Science & Engineering</p>
                  <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-amber-500" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/40 p-4 rounded-xl border-l-4 border-blue-800 shadow-2xs">
                  The Board of Studies (BOS) for Computer Science and Engineering comprises eminent academic experts from IITs, NITs, JNTUA, corporate technical leaders, distinguished alumni, and core internal faculty to design an industry-relevant autonomous curriculum.
                </p>

                {/* Summary Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 bg-blue-50/60 border border-blue-200/80 rounded-xl text-center shadow-2xs hover:border-amber-400/60 transition-all hover:shadow-xs">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-blue-900 block">9</span>
                    <span className="text-[10px] font-mono block text-slate-600 font-semibold uppercase mt-0.5">Total Members</span>
                  </div>
                  <div className="p-3.5 bg-amber-50/60 border border-amber-200/80 rounded-xl text-center shadow-2xs hover:border-amber-400 transition-all hover:shadow-xs">
                    <span className="text-lg sm:text-xl font-serif font-bold text-amber-800 block">JNTUA / IIT / NIT</span>
                    <span className="text-[10px] font-mono block text-slate-600 font-semibold uppercase mt-0.5">Academic Experts</span>
                  </div>
                  <div className="p-3.5 bg-blue-50/60 border border-blue-200/80 rounded-xl text-center shadow-2xs hover:border-amber-400/60 transition-all hover:shadow-xs">
                    <span className="text-lg sm:text-xl font-serif font-bold text-blue-900 block">LTI Mindtree</span>
                    <span className="text-[10px] font-mono block text-slate-600 font-semibold uppercase mt-0.5">Industry Partner</span>
                  </div>
                  <div className="p-3.5 bg-amber-50/50 border border-amber-200/70 rounded-xl text-center shadow-2xs hover:border-amber-400 transition-all hover:shadow-xs">
                    <span className="text-lg sm:text-xl font-serif font-bold text-amber-900 block">Value Labs</span>
                    <span className="text-[10px] font-mono block text-slate-600 font-semibold uppercase mt-0.5">Alumni Representative</span>
                  </div>
                </div>

                {/* Table View */}
                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                      <tr>
                        <th className="py-3.5 px-4 w-16 text-center">S.No</th>
                        <th className="py-3.5 px-4">Name of the Member</th>
                        <th className="py-3.5 px-4">Organization / Affiliation</th>
                        <th className="py-3.5 px-4 text-center">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {BOS_MEMBERS.map((member) => {
                        let badgeStyle = "bg-slate-100 text-slate-800 border-slate-200";
                        if (member.designation === 'Chairman') badgeStyle = "bg-blue-800 text-white border-blue-900 font-bold shadow-2xs";
                        else if (member.designation === 'University Nominee') badgeStyle = "bg-blue-100 text-blue-950 border-blue-200 font-bold";
                        else if (member.designation === 'Industry') badgeStyle = "bg-amber-100 text-amber-950 border-amber-300 font-bold";
                        else if (member.designation === 'Alumni') badgeStyle = "bg-amber-50 text-amber-900 border-amber-200/80 font-bold";
                        else if (member.designation === 'Internal Member') badgeStyle = "bg-slate-100 text-slate-900 border-slate-200 font-medium";
                        else if (member.designation === 'Academician') badgeStyle = "bg-blue-50 text-blue-900 border-blue-200 font-medium";

                        return (
                          <tr key={member.sno} className="hover:bg-blue-50/40 transition-colors">
                            <td className="py-3.5 px-4 font-mono font-bold text-center text-blue-800">{member.sno}</td>
                            <td className="py-3.5 px-4 font-bold text-slate-950 whitespace-nowrap">{member.name}</td>
                            <td className="py-3.5 px-4 text-slate-700 leading-relaxed">{member.organization}</td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <span className={`px-3 py-1 rounded-full text-[11px] font-mono border inline-block ${badgeStyle}`}>
                                {member.designation}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* 4. COURSES OFFERED */}
            {activeTab === 'courses' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Academic Curriculum & Degrees</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Courses Offered
                  </h1>
                  <p className="text-sm font-semibold text-slate-500 font-serif">Department of Computer Science & Engineering</p>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-5 rounded-2xl border-l-4 border-blue-600">
                  The Department of Computer Science & Engineering offers industry-aligned Undergraduate (B.Tech) and Postgraduate (M.Tech) programs engineered to impart deep theoretical knowledge, hands-on software development expertise, and advanced specialization in Artificial Intelligence & Machine Learning.
                </p>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* 1. CSE */}
                  <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-mono font-bold rounded-lg uppercase tracking-wider">
                          CSE
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 font-mono border border-amber-200">
                          Undergraduate Program
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                          Computer Science and Engineering
                        </h3>
                        <p className="text-xs font-mono text-slate-500 mt-1">Degree: B.Tech (4 Years / 8 Semesters)</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        Comprehensive curriculum covering software engineering, algorithms, database architectures, cloud systems, and core computer science fundamentals.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                      <span className="flex items-center gap-1 font-semibold text-blue-600">
                        <CheckCircle2 className="h-3.5 w-3.5" /> NBA Accredited
                      </span>
                      <span>Affiliation: JNTUA</span>
                    </div>
                  </div>

                  {/* 2. CAI */}
                  <div className="bg-white rounded-2xl border-2 border-amber-400/30 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-amber-600 text-white text-xs font-mono font-bold rounded-lg uppercase tracking-wider">
                          CAI
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 font-mono border border-amber-200">
                          Undergraduate Program
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                          Computer Science and Engineering (Artificial Intelligence )-b.tech
                        </h3>
                        <p className="text-xs font-mono text-slate-500 mt-1">Degree: B.Tech (4 Years / 8 Semesters)</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        Specialized B.Tech program focused on neural networks, machine learning algorithms, deep learning, computer vision, and cognitive computing.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                      <span className="flex items-center gap-1 font-semibold text-amber-700">
                        <Sparkles className="h-3.5 w-3.5" /> AI Specialization
                      </span>
                      <span>Affiliation: JNTUA</span>
                    </div>
                  </div>

                  {/* 3. M.Tech(CSE) */}
                  <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-blue-900 text-white text-xs font-mono font-bold rounded-lg uppercase tracking-wider">
                          M.Tech (CSE)
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-900 font-mono border border-blue-200">
                          Post Graduate Program
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                          Computer Science and Engineering
                        </h3>
                        <p className="text-xs font-mono text-slate-500 mt-1">Degree: M.Tech (2 Years / 4 Semesters)</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        Advanced postgraduate degree focused on computer architecture, distributed software systems, high-performance computing, and research thesis work.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                      <span className="flex items-center gap-1 font-semibold text-blue-900">
                        <GraduationCap className="h-3.5 w-3.5" /> Advanced R&D
                      </span>
                      <span>Intake: 18 Seats</span>
                    </div>
                  </div>

                  {/* 4. M.Tech(AI & ML) */}
                  <div className="bg-white rounded-2xl border-2 border-purple-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-purple-900 text-white text-xs font-mono font-bold rounded-lg uppercase tracking-wider">
                          M.Tech (AI & ML)
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-900 font-mono border border-purple-200">
                          Post Graduate Program
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                          AI & ML (Artificial Intelligence & Machine Learning)
                        </h3>
                        <p className="text-xs font-mono text-slate-500 mt-1">Degree: M.Tech (2 Years / 4 Semesters)</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        Cutting-edge postgraduate specialization preparing researchers and software architects in generative AI, natural language processing, and autonomous systems.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                      <span className="flex items-center gap-1 font-semibold text-purple-900">
                        <Award className="h-3.5 w-3.5" /> AI & ML Research
                      </span>
                      <span>Affiliation: JNTUA</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 5. OBE (Outcome Based Education) */}
            {activeTab === 'obe' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">NBA Accredited Framework</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Outcome Based Education (OBE)
                  </h1>
                  <p className="text-sm font-semibold text-slate-500 font-serif">Department of Computer Science & Engineering</p>
                </div>

                {/* Sub-tabs for PEOs, PSOs, POs */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-1">
                  <button
                    onClick={() => setObeSubtab('peos')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors cursor-pointer ${
                      obeSubtab === 'peos'
                        ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    PEOs (Educational Objectives)
                  </button>
                  <button
                    onClick={() => setObeSubtab('psos')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors cursor-pointer ${
                      obeSubtab === 'psos'
                        ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    PSOs (Specific Outcomes)
                  </button>
                  <button
                    onClick={() => setObeSubtab('pos')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors cursor-pointer ${
                      obeSubtab === 'pos'
                        ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    POs (Program Outcomes - PO1 to PO11)
                  </button>
                </div>

                {/* Subtab PEOs */}
                {obeSubtab === 'peos' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                      <h3 className="font-serif font-bold text-slate-900 text-base">PROGRAM EDUCATIONAL OBJECTIVES</h3>
                      <p className="text-xs text-slate-600 mt-1">Core long-term career and professional accomplishments expected of CSE graduates within a few years of graduation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {OBE_DATA.peos.map((peo, idx) => (
                        <div key={idx} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-blue-600 transition-colors space-y-2">
                          <span className="text-xs font-mono font-bold text-white bg-blue-600 px-2.5 py-1 rounded-md">{peo.code}</span>
                          <h4 className="font-serif font-bold text-slate-900 text-sm pt-1">{peo.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{peo.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subtab PSOs */}
                {obeSubtab === 'psos' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl space-y-1">
                      <h3 className="font-serif font-bold text-slate-900 text-base">PROGRAM SPECIFIC OUTCOMES</h3>
                      <p className="text-xs font-medium text-amber-900 italic">
                        Upon completion of the program, students will be able to:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {OBE_DATA.psos.map((pso, idx) => (
                        <div key={idx} className="p-5 bg-white border-2 border-amber-200/80 rounded-2xl shadow-xs hover:shadow-md transition-shadow space-y-2">
                          <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-200">{pso.code}</span>
                          <h4 className="font-serif font-bold text-slate-900 text-sm pt-1">{pso.title}</h4>
                          <p className="text-xs text-slate-700 leading-relaxed font-medium">{pso.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subtab POs */}
                {obeSubtab === 'pos' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                      <h3 className="font-serif font-bold text-slate-900 text-base">PROGRAM OUTCOMES (PO1 - PO11)</h3>
                      <p className="text-xs text-slate-600 mt-1">Graduate attributes defined by National Board of Accreditation (NBA) for Computer Science & Engineering.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {OBE_DATA.pos.map((po, idx) => (
                        <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-blue-600 transition-colors space-y-1.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold text-white bg-blue-600 px-2.5 py-0.5 rounded">{po.code}</span>
                            </div>
                            <h4 className="font-serif font-bold text-slate-900 text-sm mt-2">{po.name}</h4>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{po.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 6. FACULTY MEMBERS */}
            {activeTab === 'faculty' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">RCEW Academic Roster</span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                      Department of Computer Science and Engineering
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 font-serif mt-0.5">
                      Core Faculty Roster — B.Tech (CSE) & M.Tech (CSE)
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full md:w-64">
                    <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search faculty name..."
                      value={facultySearch}
                      onChange={(e) => setFacultySearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Helper Table Renderer Function */}
                {(() => {
                  const filterList = (list: typeof BTECH_CSE_FACULTY) => {
                    if (!facultySearch.trim()) return list;
                    const query = facultySearch.toLowerCase();
                    return list.filter(f =>
                      f.name.toLowerCase().includes(query) ||
                      f.qualification.toLowerCase().includes(query) ||
                      f.designation.toLowerCase().includes(query)
                    );
                  };

                  const filteredBTech = filterList(BTECH_CSE_FACULTY);
                  const filteredMTech = filterList(MTECH_CSE_FACULTY);

                  const renderTable = (list: typeof BTECH_CSE_FACULTY) => (
                    <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs bg-white">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-100 text-slate-800 font-serif font-bold uppercase text-[11px] border-b border-slate-200">
                          <tr>
                            <th className="py-3.5 px-4 w-16 text-center">S.No</th>
                            <th className="py-3.5 px-4">Name of the Faculty</th>
                            <th className="py-3.5 px-4 text-center">Qualification</th>
                            <th className="py-3.5 px-4 text-center">Designation</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {list.map((fac) => {
                            let badgeStyle = "bg-slate-100 text-slate-800 border-slate-200";
                            if (fac.designation.includes('HoD') || fac.designation.includes('Principal')) {
                              badgeStyle = "bg-amber-500 text-white font-bold shadow-2xs";
                            } else if (fac.designation.includes('Assoc. Professor') || fac.designation.includes('Associate Professor')) {
                              badgeStyle = "bg-blue-600 text-white font-bold shadow-2xs";
                            } else if (fac.designation.includes('Asst., Professor') || fac.designation.includes('Assistant Professor')) {
                              badgeStyle = "bg-slate-100 text-slate-800 border border-slate-200 font-medium";
                            }

                            return (
                              <tr key={fac.sno} className="hover:bg-blue-50/40 transition-colors">
                                <td className="py-3 px-4 font-mono font-bold text-center text-blue-700">{fac.sno}</td>
                                <td className="py-3 px-4 font-bold text-slate-900">
                                  {fac.link ? (
                                    <a href={fac.link} className="hover:text-blue-600 hover:underline transition-colors">
                                      {fac.name}
                                    </a>
                                  ) : (
                                    <span>{fac.name}</span>
                                  )}
                                </td>
                                <td className="py-3 px-4 text-center font-mono text-xs font-semibold text-purple-900">
                                  <span className="px-2.5 py-1 bg-purple-50 rounded-md border border-purple-200 inline-block">
                                    {fac.qualification}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                  <span className={`px-3 py-1 rounded-full text-[11px] inline-block ${badgeStyle}`}>
                                    {fac.designation}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );

                  return (
                    <div className="space-y-8 pt-2">
                      {/* SECTION 1: B.Tech – Faculty Members (CSE) */}
                      <div className="space-y-4">
                        <div className="p-4 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl flex items-center justify-between shadow-md">
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2 py-0.5 rounded border border-amber-400/30">
                              Undergraduate Program
                            </span>
                            <h3 className="font-serif font-bold text-white text-base sm:text-xl mt-1">
                              B.Tech – Faculty Members (CSE)
                            </h3>
                          </div>
                          <span className="px-3 py-1 bg-amber-400 text-blue-950 font-mono font-bold text-xs rounded-full shadow-xs">
                            {filteredBTech.length} Members
                          </span>
                        </div>
                        {renderTable(filteredBTech)}
                      </div>

                      {/* SECTION 2: M.Tech – Faculty Members (CSE) */}
                      <div className="space-y-4 pt-4">
                        <div className="p-4 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl flex items-center justify-between shadow-md border-l-4 border-amber-400">
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-2 py-0.5 rounded border border-white/20">
                              Postgraduate Program
                            </span>
                            <h3 className="font-serif font-bold text-white text-base sm:text-xl mt-1">
                              M.Tech – Faculty Members (CSE)
                            </h3>
                          </div>
                          <span className="px-3 py-1 bg-blue-800 text-amber-300 font-mono font-bold text-xs rounded-full border border-amber-400/40">
                            {filteredMTech.length} Members
                          </span>
                        </div>
                        {renderTable(filteredMTech)}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
