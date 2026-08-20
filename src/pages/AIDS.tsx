import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, Award, CheckCircle2, Users, ChevronRight,
  History, ShieldCheck, GraduationCap, Eye, Sparkles, Building2,
  Calendar, Layers, MapPin, Mail, Phone, ExternalLink, Target, Compass, Lightbulb,
  Globe, Rocket, Search, BrainCircuit, Terminal, Cpu, FlaskConical, Trophy, FileSpreadsheet
} from 'lucide-react';
import { DEPARTMENTS } from '../data';

// Sidebar Menu for Department of Computer Science and Engineering (AI) [CAI]
const DEPARTMENT_SIDEBAR_MENU = [
  { id: 'home', label: 'Home' },
  { id: 'history', label: 'History of the Department' },
  { id: 'bos', label: "Board of Studies' Members" },
  { id: 'courses', label: 'Courses Offered' },
  { id: 'obe', label: 'OBE', hasSubmenu: true },
  { id: 'faculty', label: 'Faculty Members' },
];

// Board of Studies Members for CAI
const BOS_MEMBERS_CAI = [
  {
    sno: 1,
    name: 'Head of Department',
    organization: 'Department of Computer Science and Engineering (AI), Ravindra College of Engineering for Women',
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
    name: 'Mr. R. Pradeep',
    organization: 'Principal AI Architect, Microsoft IDC, Hyderabad',
    designation: 'Industry Representative'
  },
  {
    sno: 4,
    name: 'Ms. V. Sree Harini',
    organization: 'AI Solutions Engineer, Accenture AI & Analytics, Bangalore',
    designation: 'Alumni Representative'
  },
  {
    sno: 5,
    name: 'Dr. S. Chandra Shekar',
    organization: 'Professor, Department of Computer Science and Engineering (AI), RCEW',
    designation: 'Internal Member'
  },
  {
    sno: 6,
    name: 'Mrs. V. Sree Lakshmi',
    organization: 'Associate Professor, Department of Computer Science and Engineering (AI), RCEW',
    designation: 'Internal Member'
  },
  {
    sno: 7,
    name: 'Mr. B. Harish Kumar',
    organization: 'Assistant Professor, Department of Computer Science and Engineering (AI), RCEW',
    designation: 'Internal Member'
  },
  {
    sno: 8,
    name: 'Dr. Priyanka Chawla',
    organization: 'Associate Professor, Department of Computer Science and Engineering, National Institute of Technology, Warangal',
    designation: 'Academician Expert'
  },
  {
    sno: 9,
    name: 'Dr. Bhimarjuna Reddy',
    organization: 'Professor, Indian Institute of Technology (IIT), Hyderabad',
    designation: 'Academician Expert'
  }
];

// OBE Details for CAI
const OBE_DATA_CAI = {
  peos: [
    {
      code: 'PEO 1',
      title: 'Intelligent Systems & Software Engineering',
      desc: 'Apply core principles of computer science and artificial intelligence to analyze, design, and deploy robust intelligent software systems.'
    },
    {
      code: 'PEO 2',
      title: 'Machine Learning & Data Intelligence Practice',
      desc: 'Master, analyze, and apply current industry-accepted machine learning models, neural networks, and big data architectures to adapt to evolving technology trends.'
    },
    {
      code: 'PEO 3',
      title: 'Societal & Responsible AI Solutions',
      desc: 'Identify real-world societal and industry problems and engineer ethical, reliable, and privacy-preserving AI and data-driven solutions.'
    },
    {
      code: 'PEO 4',
      title: 'Leadership & Lifelong AI Research',
      desc: 'Demonstrate inter-personal dynamics, teamwork, and ethical leadership to manage complex AI projects and engage in life-long learning and research.'
    }
  ],
  psos: [
    {
      code: 'PSO 1',
      title: 'Deep Learning & Applied Computer Vision',
      desc: 'Design, optimize, and deploy deep learning models, natural language processing pipelines, and computer vision algorithms to solve complex automation tasks.'
    },
    {
      code: 'PSO 2',
      title: 'Big Data Engineering & AI Automation',
      desc: 'Formulate scalable data pipelines, cloud-native analytics, and intelligent agents tailored for enterprise digital transformation.'
    }
  ],
  pos: [
    {
      code: 'PO 1',
      name: 'Engineering Knowledge',
      desc: 'Apply knowledge of mathematics, computer science, AI algorithms, and engineering fundamentals to develop solutions for complex engineering problems.'
    },
    {
      code: 'PO 2',
      name: 'Problem Analysis',
      desc: 'Identify, formulate, review research literature and analyze complex computing problems reaching substantiated conclusions using machine learning principles.'
    },
    {
      code: 'PO 3',
      name: 'Design/Development of Solutions',
      desc: 'Design creative AI solutions for complex problems and develop intelligent components with due consideration for public safety, ethics, and environmental impact.'
    },
    {
      code: 'PO 4',
      name: 'Conduct Investigations of Complex Problems',
      desc: 'Use research-based knowledge including design of neural experiments, model evaluation, and data interpretation to provide valid conclusions.'
    },
    {
      code: 'PO 5',
      name: 'Modern Tool Usage',
      desc: 'Create, select, and apply state-of-the-art AI frameworks (PyTorch, TensorFlow, Scikit-Learn) and cloud analytics tools to solve engineering challenges.'
    },
    {
      code: 'PO 6',
      name: 'The Engineer and Society',
      desc: 'Apply contextual reasoning to assess societal, legal, safety, and cultural issues relevant to artificial intelligence and automation practices.'
    },
    {
      code: 'PO 7',
      name: 'Environment and Sustainability',
      desc: 'Understand the impact of technological and AI solutions in societal and environmental contexts and demonstrate knowledge of sustainable development.'
    },
    {
      code: 'PO 8',
      name: 'Ethics & Responsible AI',
      desc: 'Apply ethical principles and commit to professional ethics, algorithmic fairness, data privacy laws, and responsible AI deployment.'
    },
    {
      code: 'PO 9',
      name: 'Individual and Team Work',
      desc: 'Function effectively as an individual, and as a member or leader in diverse multi-disciplinary engineering and research teams.'
    },
    {
      code: 'PO 10',
      name: 'Communication',
      desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as writing reports and giving presentations.'
    },
    {
      code: 'PO 11',
      name: 'Project Management and Life-Long Learning',
      desc: 'Demonstrate knowledge and understanding of engineering management principles and engage in independent, life-long learning in the broadest context of technological change.'
    }
  ]
};

import { CSE_FACULTY } from '../data/facultyData';

// Faculty Roster for CAI Department
const CAI_FACULTY_ROSTER = CSE_FACULTY;

export default function AIDS() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [obeSubtab, setObeSubtab] = useState<'peos' | 'pos' | 'psos'>('peos');
  const [facultySearch, setFacultySearch] = useState<string>('');

  const baseDept = DEPARTMENTS.find(d => d.id === 'aids') || {
    name: 'Computer Science and Engineering (AI)',
    code: 'CAI',
    shortDesc: 'Undergraduate Program: Computer Science and Engineering with Artificial Intelligence specialization.',
    fullDesc: 'The Department of Computer Science and Engineering (AI) [CAI] at Ravindra College of Engineering for Women is designed to meet the explosive global demand for intelligent computing, machine learning models, natural language processing, computer vision, and big data pipeline engineering.',
    intake: 120,
    duration: '4 Years (B.Tech)',
    established: 2021,
    labs: ['AI & Neural Networks Lab', 'Big Data Analytics Lab', 'Machine Learning & Python Lab', 'Data Visualization Studio'],
    careers: ['Data Scientist', 'AI Research Engineer', 'Machine Learning Analyst', 'Business Intelligence Consultant', 'Data Architect'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800'
  };

  const filteredFaculty = CAI_FACULTY_ROSTER.filter(f =>
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
            
            {/* Top Royal Blue & Gold Accent Line */}
            <div className="h-3 bg-gradient-to-r from-blue-900 via-blue-700 to-amber-500" />

            {/* Sidebar Title Card */}
            <div className="p-6 text-center bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-bl-full pointer-events-none" />
              <BrainCircuit className="h-7 w-7 text-amber-400 mx-auto mb-1.5 drop-shadow-xs" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                Department <br />
                <span className="text-amber-300 font-sans tracking-wide text-lg sm:text-xl">of CAI</span>
              </h2>
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 text-amber-300 border border-amber-400/30">
                CSE with AI Specialization
              </span>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100">
              {DEPARTMENT_SIDEBAR_MENU.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-between transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-blue-900 text-white border-l-4 border-amber-400 pl-4 shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-900'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {item.id === 'home' && <Building2 className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-blue-600'}`} />}
                      {item.id === 'history' && <History className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-blue-600'}`} />}
                      {item.id === 'bos' && <Users className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-blue-600'}`} />}
                      {item.id === 'courses' && <BookOpen className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-blue-600'}`} />}
                      {item.id === 'obe' && <Target className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-blue-600'}`} />}
                      {item.id === 'faculty' && <GraduationCap className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-blue-600'}`} />}
                      {item.label}
                    </span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'text-amber-400 translate-x-1' : 'text-slate-300'}`} />
                  </button>
                );
              })}
            </nav>

            {/* Quick Helpline Footer Box */}
            <div className="p-4 bg-slate-50 border-t border-slate-200/80 space-y-2">
              <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest block">Department Helpline</span>
              <p className="text-xs text-slate-700 font-semibold flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-blue-600 shrink-0" /> Admissions: +91 8639756876
              </p>
              <p className="text-xs text-slate-700 font-semibold flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-blue-600 shrink-0" /> admissions@recw.ac.in
              </p>
            </div>
          </div>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* 1. HOME TAB */}
            {activeTab === 'home' && (
              <div className="space-y-8">
                
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-amber-400 text-blue-950 font-mono font-bold text-xs rounded-full uppercase tracking-wider">
                        Code: CAI
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-amber-300 font-mono font-bold text-xs rounded-full border border-amber-400/30 uppercase">
                        Intake: 120 Seats
                      </span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                      Computer Science and Engineering (AI) [CAI]
                    </h1>
                    <p className="text-xs sm:text-sm text-blue-100 max-w-3xl leading-relaxed font-sans">
                      Undergraduate Program: Computer Science and Engineering with Artificial Intelligence specialization. Merging foundational computer science logic with state-of-the-art neural networks, deep learning models, and big data engineering.
                    </p>
                  </div>
                </div>

                {/* Overview & Quick Info */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                  <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block">Academic Overview</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900">About the CAI Program</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {baseDept.fullDesc}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                      <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Annual Intake</span>
                      <p className="font-bold text-blue-900 text-base sm:text-lg">120 Seats / Yr</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                      <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Established</span>
                      <p className="font-bold text-amber-800 text-base sm:text-lg">2021</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Degree Duration</span>
                      <p className="font-bold text-slate-900 text-base sm:text-lg">4 Years (B.Tech)</p>
                    </div>
                  </div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                    <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center border border-amber-200">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-900">Department Vision</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic bg-blue-50/50 p-4 rounded-2xl border-l-4 border-blue-900">
                      "To emerge as a premier center of academic excellence in Computer Science and Engineering with AI specialization, nurturing competent, ethical, and innovative women technologists capable of addressing complex global challenges."
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center border border-blue-200">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-900">Department Mission</h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Provide strong foundational and advanced knowledge in Computer Science and AI algorithms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Establish state-of-the-art GPU laboratories and research facilities in machine learning.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Foster industry collaborations, hackathons, and ethical AI development for societal growth.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Experimental Laboratories */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest">Practical Training</span>
                      <h3 className="text-xl font-serif font-bold text-slate-900">Specialized AI Laboratories</h3>
                    </div>
                    <FlaskConical className="h-6 w-6 text-amber-500" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {baseDept.labs.map((lab, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                        <BrainCircuit className="h-5 w-5 text-blue-900 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{lab}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">High-speed Workstations with NVIDIA GPU Accelerators & Anaconda Studio environments.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. HISTORY TAB */}
            {activeTab === 'history' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <History className="h-6 w-6 text-amber-500" />
                  <h2 className="text-2xl font-serif font-bold text-slate-900">History & Evolution of CAI Department</h2>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  <p>
                    The Department of Computer Science and Engineering with Artificial Intelligence specialization (CAI) was established in the academic year <strong>2021-22</strong> at Ravindra College of Engineering for Women, Kurnool, to address the rapid rise of Artificial Intelligence and Data Intelligence industries worldwide.
                  </p>
                  <p>
                    Recognizing the shift towards machine learning, natural language processing, and deep learning, RCEW introduced this specialized B.Tech degree program with an initial intake of <strong>120 students</strong>.
                  </p>
                  <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-slate-800 space-y-2">
                    <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-600" /> Key Milestones of CAI Department
                    </h4>
                    <ul className="list-disc list-inside text-xs space-y-1.5 text-slate-700">
                      <li><strong>2021:</strong> Department established with state-level approval from AICTE and affiliation to JNTUA.</li>
                      <li><strong>2022:</strong> Established NVIDIA-accelerated Deep Learning & High-Performance Computing Laboratory.</li>
                      <li><strong>2024:</strong> Signed Industry MoUs for specialized hands-on boot camps in Generative AI & Cloud Analytics.</li>
                      <li><strong>2025:</strong> Achieved outstanding placement records with senior students securing roles in TCS, Cognizant, Wipro, and Accenture AI divisions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 3. BOARD OF STUDIES TAB */}
            {activeTab === 'bos' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest">Academic Governance</span>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">Board of Studies (BOS) Members</h2>
                  </div>
                  <Users className="h-6 w-6 text-amber-500" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  The Board of Studies for the Department of Computer Science and Engineering (AI) [CAI] comprises eminent academic scholars, university nominees, and industry leaders who review and update the autonomous curriculum.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-blue-900 text-white font-mono uppercase text-[11px]">
                      <tr>
                        <th className="p-3.5 text-center">S.No</th>
                        <th className="p-3.5">Name of the Member</th>
                        <th className="p-3.5">Organization & Designation</th>
                        <th className="p-3.5">BOS Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {BOS_MEMBERS_CAI.map((row) => (
                        <tr key={row.sno} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 text-center font-mono font-bold text-blue-900">{row.sno}</td>
                          <td className="p-3.5 font-bold text-slate-900">{row.name}</td>
                          <td className="p-3.5 text-slate-600">{row.organization}</td>
                          <td className="p-3.5">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                              {row.designation}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. COURSES OFFERED TAB */}
            {activeTab === 'courses' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest">Academic Degrees</span>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">Courses Offered in CAI</h2>
                  </div>
                  <BookOpen className="h-6 w-6 text-amber-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 text-white space-y-3 shadow-md border border-blue-700">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400 text-blue-950 uppercase">
                      Undergraduate Program
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white">B.Tech in Computer Science and Engineering (AI)</h3>
                    <p className="text-xs text-blue-100 font-sans">
                      Department Code: <strong>CAI</strong> | Annual Intake: <strong>120 Seats</strong> | Duration: <strong>4 Years</strong>
                    </p>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Eligibility: 10+2 with Physics, Chemistry & Mathematics, plus qualifying rank in AP EAPCET (EAMCET) Category-A or Category-B Management Quota.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3 shadow-2xs">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-900 text-white uppercase">
                      Postgraduate Program
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900">M.Tech in AI & Machine Learning</h3>
                    <p className="text-xs text-slate-600 font-sans">
                      Annual Intake: <strong>18 Seats</strong> | Duration: <strong>2 Years</strong>
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Eligibility: B.Tech in CSE / ECE / IT / CAI or equivalent degree with qualifying AP PGECET or GATE score.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. OBE TAB */}
            {activeTab === 'obe' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest">Outcome Based Education</span>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">OBE Framework — CAI Department</h2>
                  </div>
                  <Target className="h-6 w-6 text-amber-500" />
                </div>

                {/* Subtabs for PEOs, PSOs, POs */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                  <button
                    onClick={() => setObeSubtab('peos')}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                      obeSubtab === 'peos' ? 'bg-blue-900 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Program Educational Objectives (PEOs)
                  </button>
                  <button
                    onClick={() => setObeSubtab('psos')}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                      obeSubtab === 'psos' ? 'bg-blue-900 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Program Specific Outcomes (PSOs)
                  </button>
                  <button
                    onClick={() => setObeSubtab('pos')}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                      obeSubtab === 'pos' ? 'bg-blue-900 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Program Outcomes (POs)
                  </button>
                </div>

                {/* PEOs Content */}
                {obeSubtab === 'peos' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {OBE_DATA_CAI.peos.map((peo, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                          {peo.code}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{peo.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{peo.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* PSOs Content */}
                {obeSubtab === 'psos' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {OBE_DATA_CAI.psos.map((pso, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-900 text-white">
                          {pso.code}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{pso.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{pso.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* POs Content */}
                {obeSubtab === 'pos' && (
                  <div className="grid grid-cols-1 gap-3">
                    {OBE_DATA_CAI.pos.map((po, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-900 text-amber-300 shrink-0">
                          {po.code}
                        </span>
                        <div>
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{po.name}</h4>
                          <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">{po.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 6. FACULTY MEMBERS TAB */}
            {activeTab === 'faculty' && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest">{CSE_FACULTY.length} Members Roster</span>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">Computer Science & Allied Innovation Faculty Roster</h2>
                  </div>
                  <div className="relative">
                    <Search className="h-4 w-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search faculty name..."
                      value={facultySearch}
                      onChange={(e) => setFacultySearch(e.target.value)}
                      className="pl-9 pr-4 py-1.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-blue-900 text-white font-mono uppercase text-[11px]">
                      <tr>
                        <th className="p-3.5 text-center">S.No</th>
                        <th className="p-3.5">Name of the Faculty</th>
                        <th className="p-3.5 text-center">Qualification</th>
                        <th className="p-3.5">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {filteredFaculty.map((fac) => (
                        <tr key={fac.sno} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 text-center font-mono font-bold text-blue-900">{fac.sno}</td>
                          <td className="p-3.5 font-bold text-slate-900">
                            {fac.name}
                          </td>
                          <td className="p-3.5 text-center font-mono text-[11px]">
                            <span className="px-2.5 py-1 bg-purple-50 text-purple-900 rounded-md border border-purple-200 inline-block font-semibold">
                              {fac.qualification}
                            </span>
                          </td>
                          <td className="p-3.5 text-slate-700 font-semibold">{fac.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
