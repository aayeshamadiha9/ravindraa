import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, Award, CheckCircle2, Users, ChevronRight,
  History, ShieldCheck, GraduationCap, Eye, Sparkles, Building2,
  Calendar, Layers, MapPin, Mail, Phone, ExternalLink, Target, Compass, Lightbulb,
  Globe, Cpu, Radio, Search, FlaskConical, Microchip, Binary, Zap
} from 'lucide-react';
import { DEPARTMENTS } from '../data';
import ECE_HERO_IMAGE from '../assets/images/rcew_home_building_front.png';

// ECE Sidebar Navigation Configuration
const ECE_SIDEBAR_MENU = [
  { id: 'home', label: 'Home' },
  { id: 'bos', label: 'Board of Studies Members' },
  { id: 'faculty', label: 'Faculty Members' },
  { id: 'labs', label: 'Labs and Computing Facilities' },
  { id: 'obe', label: 'OBE', hasSubmenu: true },
];

// Board of Studies Members - ECE
const ECE_BOS_MEMBERS = [
  {
    sno: 1,
    name: 'Dr. M. Jayalakshmi',
    organization: 'HoD ECE, Ravindra College of Engineering for Women',
    designation: 'Chairman'
  },
  {
    sno: 2,
    name: 'Dr. S Chandra Mohan Reddy',
    organization: 'Professor, Department of Electronics and Communication Engineering, JNTUA College of Engineering, Ananthapuramu',
    designation: 'University Nominee'
  },
  {
    sno: 3,
    name: 'Dr. Sandeep Kumar Chaturvedi',
    organization: 'Scientist ‘B’, Defense Research Development Organization (DRDO), Hyderabad',
    designation: 'Industry'
  },
  {
    sno: 4,
    name: 'Ms. P. Bhavana Reddy',
    organization: 'Application Engineer, Synopsys',
    designation: 'Alumni'
  },
  {
    sno: 5,
    name: 'Dr. Mohebbanaaz',
    organization: 'Associate Professor, Department of Electronics and Communication Engineering, Ravindra College of Engineering for Women',
    designation: 'Internal Member'
  },
  {
    sno: 6,
    name: 'Mrs. M. Jyothirmai',
    organization: 'Assistant Professor, Department of Electronics and Communication Engineering, Ravindra College of Engineering for Women',
    designation: 'Internal Member'
  },
  {
    sno: 7,
    name: 'Prof. S. Rajendar',
    organization: 'Professor, Department of Electronics and Communication Engineering, Vardhaman College of Engineering (Autonomous)',
    designation: 'Academician'
  },
  {
    sno: 8,
    name: 'Dr. T. Srinivas',
    organization: 'Professor, Department of Electrical Communication Engineering, Indian Institute of Science (IISc), Bangalore - 560012',
    designation: 'Academician'
  },
  {
    sno: 9,
    name: 'Dr. S. Anuradha',
    organization: 'Professor, Department of Electronics & Communication Engineering, National Institute of Technology (NIT), Warangal, Telangana',
    designation: 'Academician'
  }
];

import { ECE_FACULTY } from '../data/facultyData';

// Faculty Members - ECE Roster (No Face Images)
const ECE_FACULTY_ROSTER = ECE_FACULTY;

// ECE Software Stack & Equipment List
const ECE_SOFTWARE_STACK = [
  'MATLAB',
  'MASM / TASM',
  'Active HDL',
  'Multi-Sim',
  'Code Composer Studio',
  'Tina-Pro Simulation Software',
  'PSPICE Software',
  'Microprocessor / Microcontroller Kits',
  'DSP Processor Kits',
  'FPGA / CPLD VLSI Trainer Kits'
];

// 12 Specialized ECE Laboratories
const ECE_SPECIALIST_LABS = [
  { id: 1, name: 'Electronic Devices and Circuits Lab', icon: 'Cpu', category: 'Foundational Hardware' },
  { id: 2, name: 'Electronic Circuits Analysis Lab', icon: 'Zap', category: 'Circuit Modeling' },
  { id: 3, name: 'Pulse and Digital Circuits Lab', icon: 'Binary', category: 'Digital Waveforms' },
  { id: 4, name: 'IC Applications Lab', icon: 'Microchip', category: 'Integrated Circuits' },
  { id: 5, name: 'Analog Communication Systems Lab', icon: 'Radio', category: 'Telecom Engineering' },
  { id: 6, name: 'Digital Signal Processing Lab', icon: 'Layers', category: 'Signal Engineering' },
  { id: 7, name: 'Digital Communication Systems Lab', icon: 'Globe', category: 'Digital Networking' },
  { id: 8, name: 'Microwave and Optical Communications Lab', icon: 'Compass', category: 'RF & Photonics' },
  { id: 9, name: 'Microprocessors and DSP Lab', icon: 'Cpu', category: 'Embedded Processors' },
  { id: 10, name: 'IoT Lab', icon: 'Sparkles', category: 'Smart Sensors & IoT' },
  { id: 11, name: 'Network Analysis Lab', icon: 'ShieldCheck', category: 'Network Theory' },
  { id: 12, name: 'Electrical Lab', icon: 'Zap', category: 'Electrical Machines' }
];

// OBE Details - ECE
const ECE_OBE_DATA = {
  peos: [
    {
      code: 'PEO 1',
      title: 'Technical Competence & Innovation',
      desc: 'Graduates of ECE will demonstrate technical competence by identifying, formulating, analyzing and creating solutions using appropriate knowledge in Electronics and Communication Engineering.'
    },
    {
      code: 'PEO 2',
      title: 'Multidisciplinary & Team Performance',
      desc: 'Graduates of ECE will become individual or team players who are fortified to provide sustainable solutions for interdisciplinary problems using modern tools.'
    },
    {
      code: 'PEO 3',
      title: 'Professional Engineering & Higher Education',
      desc: 'Graduates of ECE will become engineering professionals and innovators in core engineering, service industries or pursue higher studies.'
    },
    {
      code: 'PEO 4',
      title: 'Ethical Responsibility & Lifelong Learning',
      desc: 'Graduates of ECE will be able to engage in professional activities ethically and thereby enhance the knowledge and contribution towards the society through lifelong learning.'
    }
  ],
  psos: [
    {
      code: 'PSO 1',
      title: 'VLSI & Embedded Systems Design',
      desc: 'The ability to analyze and design circuit and system level solutions, for VLSI, Embedded System and relevant areas.'
    },
    {
      code: 'PSO 2',
      title: 'Communications & Signal Processing Competency',
      desc: 'Demonstrate the technical competency with proficiency in programming and simulation tools for applications in communications and signal processing.'
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

export default function ECE() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [obeSubtab, setObeSubtab] = useState<'peos' | 'pos' | 'psos'>('peos');
  const [facultySearch, setFacultySearch] = useState<string>('');

  const baseDept = DEPARTMENTS.find(d => d.id === 'ece');

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout with Sticky Left Sidebar */}
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
                <span className="text-amber-300 font-sans tracking-wide text-lg sm:text-xl">of ECE</span>
              </h2>
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 text-amber-300 border border-amber-400/30">
                RCEW Autonomous
              </span>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100">
              {ECE_SIDEBAR_MENU.map((item) => {
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
                
                {/* Section Header with CSE-matched Color Scheme */}
                <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                      RCEW Academic Department
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                      Department of ECE
                    </h1>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    NBA Accredited • Code: ECE
                  </span>
                </div>

                {/* Hero Feature Card with Full Building Photo Visibility */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src={ECE_HERO_IMAGE}
                    alt="Electronics & Communication Engineering Department Building"
                    className="w-full h-72 sm:h-96 md:h-[460px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
                    <div className="text-white space-y-1.5">
                      <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-mono font-bold uppercase rounded shadow-2xs">
                        Established 2008
                      </span>
                      <p className="font-serif text-lg sm:text-2xl font-bold text-amber-300 drop-shadow-xs">
                        Department of Electronics & Communication Engineering
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-2xl">
                        Generating innovative ideas, technical competence, and moral values for local and global societal needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Highlights / Key Metrics with CSE-matched Palette */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-blue-700 block">1,500+</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Campus Community</span>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-600 block">2008</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Established</span>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-blue-700 block">180</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">Annual Intake</span>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-blue-700 block pt-1">AICTE</span>
                    <span className="text-[11px] text-slate-600 font-mono uppercase font-semibold">JNTUA Affiliated</span>
                  </div>
                </div>

                {/* ABOUT THE DEPARTMENT */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-blue-800">
                      ABOUT THE DEPARTMENT
                    </h2>
                  </div>

                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p className="bg-gradient-to-r from-amber-50 via-amber-50/90 to-yellow-50/70 p-5 rounded-2xl border-l-4 border-amber-500 border border-amber-200/80 shadow-xs font-medium text-slate-900">
                      The Electronics and Communication Engineering (ECE) Department in Ravindra College of Engineering women (RECW) has been established in 2008 since then it is providing education for the students of ECE to create innovative ideas and produce creative solutions to the societys needs. The students of ECE are conscious to the universal moral values, adherent to the professional ethical code. The department is intended to generate and disseminate knowledge and technologies essential to the local and global needs in the field of Electronics and Communication Engineering.
                    </p>

                    <p className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      Since its inception in 2008, RECW is rigorously striving to attain the status of being one of the top institutions in the field of technical education and scientific research. It is aesthetically designed, practically architected campus for student, faculty and administration efficiency. RECW currently supports a community of over 1,500 students.
                    </p>

                    <p className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                      The Department of Electronics and Communication Engineering (ECE) at RECW is a name for its excellence in Electronics and Communication Engineering education and research. The department is providing excellent opportunities for young technocrats to enhance their learning capabilities with strong skill set in Electronics, Signal & Image processing, Analog & Digital communications, Optical communications, Computer communications and wireless communications.
                    </p>

                    {/* Intake & Program Growth Card with Amber/Gold Accent matching CSE */}
                    <div className="p-5 bg-gradient-to-br from-amber-50/80 to-amber-100/40 rounded-2xl border border-amber-200 space-y-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded border border-amber-300">
                        Approved Intake Capacity
                      </span>
                      <h4 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
                        AICTE Recognition & Intake Augmentation
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        The ECE Program has been recognized by AICTE and affiliated to JNTUA; Anantapur the current intake is 120 students. The intake has been augmented to 180 from the next academic year i.e 2012-2013.
                      </p>
                    </div>

                    {/* Faculty & Mentorship Feature */}
                    <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                      <h4 className="font-serif font-bold text-blue-900 text-base sm:text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        Faculty Commitment & Mentorship Program
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        The ECE Department recruits faculty with excellent academic qualifications and rich experience in academia, industry and research, and supports superior research facilities. Faculty of ECE uses the state- of- the art teaching aids to ensure better content delivery and facilitate greater student interaction. Faculty commitment to excellence in teaching has been recognized and honored with numerous engineering and institution teaching awards. In addition to classes, students also have the opportunity to interact with faculty as mentees through faculty mentoring program.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                          <FlaskConical className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-slate-700 font-medium">
                            The department has well-equipped laboratories for course work teaching and student projects, including a number of specialist laboratories.
                          </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                          <Sparkles className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-slate-700 font-medium">
                            The department of ECE always looks ahead with strong team work in order to give a valuable education and present techno excellent Electronics and Communication engineers to the society.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VISION & MISSION CARDS matching CSE style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Vision Card */}
                  <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3.5 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                        <Eye className="h-4 w-4 text-white" />
                        Vision
                      </div>
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold pt-2">
                        "Molding electronics engineers with Innovative Ideas, Professional Competence and socially responsible for the promotion of industrial growth of the nation."
                      </p>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-white rounded-2xl border-2 border-blue-600 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 bg-blue-700 text-white px-3.5 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                        <Target className="h-4 w-4 text-white" />
                        Mission
                      </div>
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold pt-2">
                        "To become a center of excellence for education and research along with motivating students and faculty to take up innovative activities in line with ethical principles for the benefit of the society."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technological Excellence Banner */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 items-center">
                  <div className="p-4 bg-white/20 rounded-2xl shrink-0">
                    <Cpu className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="font-serif font-bold text-white text-lg sm:text-xl">Techno-Excellent Engineering Commitment</h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed italic">
                      "Presenting techno-excellent Electronics and Communication engineers to society through strong teamwork, superior laboratory infrastructure, and universal moral values."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. BOARD OF STUDIES MEMBERS */}
            {activeTab === 'bos' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4 relative">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">Academic Governance</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 inline-block" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Board of Studies Members
                  </h1>
                  <p className="text-sm font-semibold text-slate-500 font-serif">Department of Electronics & Communication Engineering</p>
                  <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-amber-500" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/40 p-4 rounded-xl border-l-4 border-blue-800 shadow-2xs">
                  The Board of Studies (BOS) for Electronics & Communication Engineering comprises university nominees from JNTUA, DRDO defense research scientists, Synopsys application engineers, academic experts from IISc Bangalore & NIT Warangal, and internal faculty.
                </p>

                {/* Summary Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 bg-blue-50/60 border border-blue-200/80 rounded-xl text-center shadow-2xs hover:border-amber-400/60 transition-all hover:shadow-xs">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-blue-900 block">9</span>
                    <span className="text-[10px] font-mono block text-slate-600 font-semibold uppercase mt-0.5">Total Members</span>
                  </div>
                  <div className="p-3.5 bg-amber-50/60 border border-amber-200/80 rounded-xl text-center shadow-2xs hover:border-amber-400 transition-all hover:shadow-xs">
                    <span className="text-sm font-serif font-bold text-amber-800 block">JNTUA / IISc / NITW</span>
                    <span className="text-[10px] font-mono block text-slate-600 font-semibold uppercase mt-0.5">Academic Experts</span>
                  </div>
                  <div className="p-3.5 bg-blue-50/60 border border-blue-200/80 rounded-xl text-center shadow-2xs hover:border-amber-400/60 transition-all hover:shadow-xs">
                    <span className="text-sm font-serif font-bold text-blue-900 block">DRDO Hyderabad</span>
                    <span className="text-[10px] font-mono block text-slate-600 font-semibold uppercase mt-0.5">Industry Partner</span>
                  </div>
                  <div className="p-3.5 bg-amber-50/50 border border-amber-200/70 rounded-xl text-center shadow-2xs hover:border-amber-400 transition-all hover:shadow-xs">
                    <span className="text-sm font-serif font-bold text-amber-900 block">Synopsys</span>
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
                      {ECE_BOS_MEMBERS.map((member) => {
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
              </div>
            )}

            {/* 3. FACULTY MEMBERS */}
            {activeTab === 'faculty' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      RCEW Academic Roster
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-blue-800 mt-2">
                      Department of ECE Faculty Members
                    </h1>
                    <p className="text-xs font-semibold text-slate-500 font-serif mt-0.5">
                      Core Electronics & Communication Engineering Faculty Roster
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full md:w-64">
                    <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search ECE faculty..."
                      value={facultySearch}
                      onChange={(e) => setFacultySearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Table View without face photos */}
                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-blue-600 text-white font-serif font-bold uppercase text-[11px]">
                      <tr>
                        <th className="py-3.5 px-4 w-16 text-center">SNO</th>
                        <th className="py-3.5 px-4">Name of the Faculty</th>
                        <th className="py-3.5 px-4 text-center">Qualification</th>
                        <th className="py-3.5 px-4 text-center">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ECE_FACULTY_ROSTER.filter(f =>
                        !facultySearch ||
                        f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
                        f.qualification.toLowerCase().includes(facultySearch.toLowerCase()) ||
                        f.designation.toLowerCase().includes(facultySearch.toLowerCase())
                      ).map((fac) => {
                        let badgeStyle = "bg-slate-100 text-slate-800 border-slate-200";
                        if (fac.designation.includes('Principal') || fac.designation.includes('HOD') || fac.designation.includes('HoD')) {
                          badgeStyle = "bg-blue-700 text-white font-bold shadow-2xs";
                        } else if (fac.designation === 'Professor') {
                          badgeStyle = "bg-blue-600 text-white font-bold shadow-2xs";
                        } else if (fac.designation.includes('Associate') || fac.designation.includes('Assoc')) {
                          badgeStyle = "bg-blue-100 text-blue-900 border border-blue-300 font-bold";
                        } else if (fac.designation.includes('Assistant') || fac.designation.includes('Asst')) {
                          badgeStyle = "bg-slate-100 text-slate-800 border border-slate-200 font-medium";
                        }

                        return (
                          <tr key={fac.sno} className="hover:bg-blue-50/40 transition-colors">
                            <td className="py-3.5 px-4 font-mono font-bold text-center text-blue-600">{fac.sno}</td>
                            <td className="py-3.5 px-4 font-bold text-slate-900">
                              <span>{fac.name}</span>
                            </td>
                            <td className="py-3.5 px-4 text-center font-mono text-xs font-semibold text-purple-900">
                              <span className="px-2.5 py-1 bg-purple-50 rounded-md border border-purple-200 inline-block">
                                {fac.qualification}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
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
              </div>
            )}

            {/* 4. LABS AND COMPUTING FACILITIES */}
            {activeTab === 'labs' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Section Header */}
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    Practical Infrastructure
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-blue-800 mt-2">
                    Labs and Computing Facilities
                  </h1>
                  <p className="text-sm font-semibold text-slate-500 font-serif">Department of Electronics & Communication Engineering</p>
                </div>

                {/* Computer Center Banner Card */}
                <div className="p-6 bg-blue-600 text-white rounded-2xl space-y-4 shadow-md relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/20 text-white rounded-xl shadow-xs">
                      <Cpu className="h-6 w-6 font-bold" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-100 bg-white/20 px-2.5 py-0.5 rounded">
                        Air-Conditioned Computer Center
                      </span>
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                        Lenovo Systems Computing Facility & Simulation Software Suite
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-medium">
                    The Department of Electronics and Communication Engineering has well established with latest Instruments. The Department has a separate air conditioned Computer Center to cater to the needs of UG students with Lenovo Systems and equipped with various software’s like MAT LAB, MASM/TASM, Active HDL, Multi-Sim, Code Composer Studio, Tina-pro Simulation Software, Microprocessor/Microcontroller Trainer Kits, DSP Processor Kits, VLSI Trainer Kits FPGA/CPLD and PSPICE Software.
                  </p>

                  {/* Software Badges Stack */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono font-bold text-blue-100 uppercase block mb-2">Installed Simulation Software & Hardware Kits:</span>
                    <div className="flex flex-wrap gap-2">
                      {ECE_SOFTWARE_STACK.map((sw, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/15 text-white text-xs font-mono font-bold rounded-lg border border-white/20 shadow-2xs backdrop-blur-xs">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Core Competence & 12 Specialized Laboratories */}
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl shadow-2xs">
                    <h3 className="font-serif font-bold text-blue-900 text-base">SPECIALIST LABORATORIES</h3>
                    <p className="text-xs text-slate-600 mt-1 font-medium">
                      With an objective of developing core competence in the respective subject matter specialisations and special interest groups for learning newer technologies, the Department has the following labs namely:
                    </p>
                  </div>

                  {/* 12 Labs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ECE_SPECIALIST_LABS.map((lab) => (
                      <div key={lab.id} className="p-4.5 bg-white border border-slate-200 rounded-2xl shadow-2xs hover:border-blue-600 hover:shadow-md transition-all space-y-3 flex flex-col justify-between group">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-mono font-bold text-xs shadow-2xs">
                              #{lab.id}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-blue-800 uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              {lab.category}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-snug pt-1 group-hover:text-blue-600 transition-colors">
                            {lab.name}
                          </h4>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-600 font-semibold">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> Fully Equipped & Operational
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 5. OBE (OUTCOME BASED EDUCATION) */}
            {activeTab === 'obe' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    NBA Accredited Framework
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-blue-800 mt-2">
                    Outcome Based Education (OBE)
                  </h1>
                  <p className="text-sm font-semibold text-slate-500 font-serif">Department of Electronics & Communication Engineering</p>
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
                      <h3 className="font-serif font-bold text-blue-900 text-base">PROGRAM EDUCATIONAL OBJECTIVES</h3>
                      <p className="text-xs text-slate-600 mt-1">Core long-term career and professional accomplishments expected of ECE graduates within a few years of graduation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ECE_OBE_DATA.peos.map((peo, idx) => (
                        <div key={idx} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-blue-600 transition-colors space-y-2">
                          <span className="text-xs font-mono font-bold text-white bg-blue-600 px-2.5 py-1 rounded-md shadow-2xs">{peo.code}</span>
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
                    <div className="p-4 bg-blue-50/80 border-l-4 border-blue-600 rounded-r-xl space-y-1">
                      <h3 className="font-serif font-bold text-blue-900 text-base">PROGRAM SPECIFIC OUTCOMES</h3>
                      <p className="text-xs font-medium text-blue-900 italic">
                        Upon completion of the ECE program, students will be able to:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ECE_OBE_DATA.psos.map((pso, idx) => (
                        <div key={idx} className="p-5 bg-white border-2 border-blue-200 rounded-2xl shadow-xs hover:shadow-md transition-shadow space-y-2">
                          <span className="text-xs font-mono font-bold text-white bg-blue-600 px-2.5 py-1 rounded-md border border-blue-300">{pso.code}</span>
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
                      <h3 className="font-serif font-bold text-blue-900 text-base">PROGRAM OUTCOMES (PO1 - PO11)</h3>
                      <p className="text-xs text-slate-600 mt-1">Graduate attributes defined by National Board of Accreditation (NBA) for Electronics & Communication Engineering.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ECE_OBE_DATA.pos.map((po, idx) => (
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

          </div>

        </div>

      </div>
    </div>
  );
}
