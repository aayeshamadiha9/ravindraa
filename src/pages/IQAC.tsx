import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ShieldCheck, CheckCircle2, Award, FileText, Download,
  Building2, Users, ChevronRight, BookmarkCheck, FileCheck,
  Layers, Search, ExternalLink, Calendar, Sparkles, AlertCircle,
  FileSpreadsheet, FolderCheck, Check
} from 'lucide-react';

// Sidebar Navigation Items
const IQAC_SIDEBAR_MENU = [
  { id: 'iqac-cell', label: 'Internal Quality Assurance Cell' },
  { id: 'naac', label: 'NAAC' },
  { id: 'aicte', label: 'AICTE' },
  { id: 'nba', label: 'NBA' },
];

// 1. IQAC Committee Members Data
const IQAC_COMMITTEE_MEMBERS = [
  { sno: 1, name: "Dr. N. Sreekanth", profession: "Principal", designation: "Chairperson" },
  { sno: 2, name: "Dr. M. Giridhar Kumar", profession: "Dean Administration", designation: "Member" },
  { sno: 3, name: "Dr. Mohebbanaaz", profession: "Associate Dean Innovations", designation: "Member" },
  { sno: 4, name: "Dr. B.V. Rami Reddy", profession: "Controller of Examinations", designation: "Member" },
  { sno: 5, name: "Mrs. J Ushasree", profession: "Vice-Principal", designation: "Member" },
  { sno: 6, name: "Ms. Indhira Priyadharshini. Y", profession: "Head, Corporate Affairs", designation: "Member" },
  { sno: 7, name: "Dr. Madhusudana Reddy Barusu", profession: "HOD, ECE Department", designation: "Member" },
  { sno: 8, name: "Dr. Seshadri Ramana", profession: "Head, Dept of CSE", designation: "Member" },
  { sno: 9, name: "Dr. G.Ramachandra Reddy", profession: "Head, Dept of H&S", designation: "Member" },
  { sno: 10, name: "Dr. G. Mamatha", profession: "Management", designation: "Member" },
  { sno: 11, name: "Dr. Y. Pandurangaiah", profession: "Ridge School, GVM Educational Society", designation: "Member" },
  { sno: 12, name: "Ms. Shaik Reshma Begum", profession: "Alumni", designation: "Member" },
  { sno: 13, name: "Ms. Yendapalli Manasa", profession: "IV B.Tech-( 203T1A0458)", designation: "Member" },
  { sno: 14, name: "Ms. G kavitha", profession: "IV B.Tech-(203T1A0535)", designation: "Member" },
  { sno: 15, name: "Dr. Madhusudana Reddy Barusu", profession: "Dean IQAC", designation: "Member" }
];

// Functions & Responsibilities
const IQAC_RESPONSIBILITIES = [
  "Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution",
  "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process",
  "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes",
  "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles",
  "Documentation of the various programmes/activities leading to quality improvement.",
  "Development and maintenance of institutional database through College Management System for the purpose of maintaining /enhancing the institutional quality.",
  "Development of Quality Culture in the institution."
];

// NAAC Criteria Data Standard Model
const NAAC_CRITERIA_LIST = [
  { sno: 1, name: "Criterion – 1", desc: "Curricular Aspects" },
  { sno: 2, name: "Criterion – 2", desc: "Teaching-Learning and Evaluation" },
  { sno: 3, name: "Criterion – 3", desc: "Research, Innovations and Extension" },
  { sno: 4, name: "Criterion – 4", desc: "Infrastructure and Learning Resources" },
  { sno: 5, name: "Criterion – 5", desc: "Student Support and Progression" },
  { sno: 6, name: "Criterion – 6", desc: "Governance, Leadership and Management" },
  { sno: 7, name: "Criterion – 7", desc: "Institutional Values and Best Practices" },
  { 
    sno: 8, 
    name: "Institute Profile Document", 
    subDocs: [
      "GOI/State Govt rules for Number of seats for reserved category",
      "Norms For Faculty Requirement",
      "EWS GO"
    ] 
  },
  { sno: 9, name: "DVV", desc: "Data Validation and Verification" }
];

// NAAC Chapters / Reports List
const NAAC_CHAPTERS = [
  { sno: 1, chapter: "SSR", size: "14.2 MB", tag: "Cycle 1" },
  { sno: 2, chapter: "IQAC2018-19", size: "3.8 MB", tag: "Annual Quality Report" },
  { sno: 3, chapter: "IQAC Event 2014-15", size: "2.1 MB", tag: "Event Documentation" },
  { sno: 4, chapter: "IQAC Event 2015-16", size: "2.4 MB", tag: "Event Documentation" },
  { sno: 5, chapter: "IQAC Event 2016-17", size: "2.8 MB", tag: "Event Documentation" },
  { sno: 6, chapter: "IQAC Event 2017-18", size: "3.1 MB", tag: "Event Documentation" },
  { sno: 7, chapter: "IQAC EVENT 2018-19", size: "3.5 MB", tag: "Event Documentation" },
  { sno: 8, chapter: "Consolidated Faculty List", size: "1.9 MB", tag: "Faculty Roster" },
  { sno: 9, chapter: "Balance Sheet", size: "4.2 MB", tag: "Financial Audit" },
  { sno: 10, chapter: "Income & Expenditure", size: "3.9 MB", tag: "Audit Statement" }
];

// AICTE Data Lists
const AICTE_MANDATORY_DISCLOSURES = [
  "AICTE Mandatory Disclosure 2025-26",
  "AICTE Mandatory Disclosure 2024-25",
  "AICTE Mandatory Disclosure 2023-24",
  "AICTE Mandatory Disclosure 2022-23",
  "AICTE Mandatory Disclosure 2021-22",
  "AICTE Mandatory Disclosure 2020-21",
  "AICTE Mandatory Disclosure 2019-20",
  "AICTE Mandatory Disclosure 2018-19"
];

const AICTE_EOA_REPORTS = [
  "AICTE EOA Report 2026-27",
  "AICTE EOA Report 2025-26",
  "AICTE EOA Report 2024-25",
  "AICTE EOA Report 2023-24",
  "AICTE EOA Report 2022-23",
  "AICTE EOA Report 2021-22"
];

const RCEW_AUDIT_REPORTS = [
  "RCEW Audit Report FY 2024-25",
  "RCEW Audit Report FY 2023-24",
  "RCEW Audit Report FY 2022-23",
  "RCEW Audit Report FY 2021-22"
];

// NBA Data Lists
const NBA_EXTENSION_URL = "https://www.recw.ac.in/wp-content/uploads/2024/07/NBA-Extension-Ltr.pdf";

const NBA_AUDITED_STATEMENTS = [
  {
    title: "Audited Statement 2022-2023",
    url: "https://www.recw.ac.in/wp-content/uploads/2024/05/Audited-statement-F.Y-2022-23.pdf"
  },
  {
    title: "Audited Statement  2021-22-10",
    url: "https://www.recw.ac.in/wp-content/uploads/2024/05/f.y-2021-22-10.pdf"
  }
];

export default function IQAC() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState<string>(() => {
    if (tabParam && IQAC_SIDEBAR_MENU.some(m => m.id === tabParam)) {
      return tabParam;
    }
    return 'iqac-cell';
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (tabParam && IQAC_SIDEBAR_MENU.some(m => m.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredMembers = IQAC_COMMITTEE_MEMBERS.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary-950/40 py-8 sm:py-12">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <span className="text-yellow-400 text-xs font-mono font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Institutional Quality & Accreditation Portal
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight pt-1">
              IQAC, NAAC, AICTE & NBA Cell
            </h1>
            <p className="text-blue-100 text-sm sm:text-base max-w-3xl leading-relaxed">
              Monitoring day-to-day academic benchmarks, statutory AICTE disclosures, NAAC criteria reports, and NBA accreditation quality standards at RCEW Kurnool.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout with Left Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden sticky top-24">
            {/* Top Accent Line */}
            <div className="h-3.5 bg-gradient-to-r from-blue-900 via-blue-700 to-amber-500" />

            {/* Sidebar Title Header */}
            <div className="p-5 text-center bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white relative">
              <ShieldCheck className="h-7 w-7 text-amber-400 mx-auto mb-1 drop-shadow-sm" />
              <h2 className="text-lg font-serif font-bold text-white leading-snug">
                IQAC Navigation
              </h2>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 text-amber-300 border border-amber-400/30">
                RCEW Autonomous
              </span>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100">
              {IQAC_SIDEBAR_MENU.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer relative ${
                      isActive
                        ? 'text-blue-900 bg-blue-50/80 font-bold'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-blue-50/40'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isActive && <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />}
                      <span>{item.label}</span>
                    </span>

                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'text-amber-500 font-bold translate-x-0.5' : 'text-slate-400'}`} />

                    {/* Active Right Vertical Indicator */}
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
            
            {/* ---------------- 1. TAB: INTERNAL QUALITY ASSURANCE CELL ---------------- */}
            {activeTab === 'iqac-cell' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Section Title */}
                <div className="border-b border-slate-200 pb-5 relative">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">Institutional Governance</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 inline-block" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                    Internal Quality Assurance Cell
                  </h2>
                  <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-amber-500" />
                  <div className="mt-3 p-4 bg-blue-50/40 rounded-xl border-l-4 border-blue-800 text-slate-700 text-sm leading-relaxed shadow-2xs">
                    In pursuance of National Assessment and Accreditation Council (NAAC) guidelines, Ravindra College of Engineering for Women (RCEW) established the Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure.
                  </div>
                </div>

                {/* Functions & Responsibilities */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-slate-950 flex items-center gap-2">
                    <BookmarkCheck className="h-5 w-5 text-amber-500" />
                    Functions & Key Responsibilities
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {IQAC_RESPONSIBILITIES.map((resp, index) => (
                      <div key={index} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-amber-300 transition-colors">
                        <CheckCircle2 className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Committee Members Table Section */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-slate-950 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-800" />
                        IQAC Committee Members Roster
                      </h3>
                      <span className="text-xs text-slate-500">15 Active Executive & Academic Committee Members</span>
                    </div>

                    {/* Search filter */}
                    <div className="relative w-full sm:w-64">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search member..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-800"
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                        <tr>
                          <th className="px-4 py-3.5 text-center w-14">S.No</th>
                          <th className="px-4 py-3.5">Name of the Member</th>
                          <th className="px-4 py-3.5">Profession / Department</th>
                          <th className="px-4 py-3.5 text-center">Designation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {filteredMembers.map((member) => (
                          <tr key={member.sno} className="hover:bg-blue-50/40 transition-colors">
                            <td className="px-4 py-3 text-center font-mono font-bold text-blue-800">{member.sno}</td>
                            <td className="px-4 py-3 font-semibold text-slate-950">{member.name}</td>
                            <td className="px-4 py-3 text-slate-700">{member.profession}</td>
                            <td className="px-4 py-3 text-center">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold ${
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
                </div>
              </div>
            )}

            {/* ---------------- 2. TAB: NAAC ---------------- */}
            {activeTab === 'naac' && (
              <div className="space-y-10 animate-fadeIn">
                {/* Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-yellow-400">National Accreditation</span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                      NAAC Accreditation & Criteria Matrix
                    </h2>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl font-mono font-bold text-xs bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 flex items-center gap-2 shrink-0">
                    <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    NAAC Accredited A+ Grade
                  </span>
                </div>

                {/* 1. NAAC CRITERIA 2022-23 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-yellow-400 rounded-lg">
                      <FolderCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      NAAC CRITERIA 2022-23
                    </h3>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 dark:bg-primary-950 text-slate-800 dark:text-slate-200 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 w-16 text-center">S.No</th>
                          <th className="px-4 py-3">Criteria / Document Title</th>
                          <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {NAAC_CRITERIA_LIST.map((item) => (
                          <tr key={item.sno} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="px-4 py-3 text-center font-mono font-bold text-slate-500">{item.sno}</td>
                            <td className="px-4 py-3">
                              <span className="font-semibold text-slate-900 dark:text-white">{item.name}</span>
                              {item.desc && <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 font-mono">({item.desc})</span>}
                              {item.subDocs && (
                                <ul className="mt-2 space-y-1 pl-4 border-l-2 border-blue-300 dark:border-blue-800 text-xs text-slate-600 dark:text-slate-400">
                                  {item.subDocs.map((sub, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-1.5">
                                      <Check className="h-3.5 w-3.5 text-blue-600 dark:text-yellow-400 shrink-0" />
                                      <span>{sub}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors">
                                <Download className="h-3.5 w-3.5" /> PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 2. NAAC CRITERIA 2023-24 */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-yellow-400 rounded-lg">
                      <FolderCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      NAAC CRITERIA 2023-24
                    </h3>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 dark:bg-primary-950 text-slate-800 dark:text-slate-200 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 w-16 text-center">S.No</th>
                          <th className="px-4 py-3">Criteria / Document Title</th>
                          <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {NAAC_CRITERIA_LIST.map((item) => (
                          <tr key={item.sno} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="px-4 py-3 text-center font-mono font-bold text-slate-500">{item.sno}</td>
                            <td className="px-4 py-3">
                              <span className="font-semibold text-slate-900 dark:text-white">{item.name}</span>
                              {item.desc && <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 font-mono">({item.desc})</span>}
                              {item.subDocs && (
                                <ul className="mt-2 space-y-1 pl-4 border-l-2 border-blue-300 dark:border-blue-800 text-xs text-slate-600 dark:text-slate-400">
                                  {item.subDocs.map((sub, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-1.5">
                                      <Check className="h-3.5 w-3.5 text-blue-600 dark:text-yellow-400 shrink-0" />
                                      <span>{sub}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors">
                                <Download className="h-3.5 w-3.5" /> PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3. NAAC Chapters & Event Documents */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-yellow-400 rounded-lg">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      NAAC Chapters & Reports
                    </h3>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 dark:bg-primary-950 text-slate-800 dark:text-slate-200 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 w-16 text-center">Sl. No.</th>
                          <th className="px-4 py-3">Chapter / Document Name</th>
                          <th className="px-4 py-3">Category</th>
                          <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {NAAC_CHAPTERS.map((ch) => (
                          <tr key={ch.sno} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="px-4 py-3 text-center font-mono font-bold text-slate-500">{ch.sno}</td>
                            <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{ch.chapter}</td>
                            <td className="px-4 py-3 font-mono text-xs text-slate-500">{ch.tag}</td>
                            <td className="px-4 py-3 text-right">
                              <button className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors">
                                <Download className="h-3.5 w-3.5" /> PDF ({ch.size})
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. NAAC CRITERIA (General Matrix) */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-yellow-400 rounded-lg">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      NAAC CRITERIA (Consolidated Document Matrix)
                    </h3>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 dark:bg-primary-950 text-slate-800 dark:text-slate-200 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 w-16 text-center">Sl. No.</th>
                          <th className="px-4 py-3">Criteria</th>
                          <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {NAAC_CRITERIA_LIST.map((item) => (
                          <tr key={item.sno} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="px-4 py-3 text-center font-mono font-bold text-slate-500">{item.sno}</td>
                            <td className="px-4 py-3">
                              <span className="font-semibold text-slate-900 dark:text-white">{item.name}</span>
                              {item.desc && <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 font-mono">({item.desc})</span>}
                              {item.subDocs && (
                                <ul className="mt-2 space-y-1 pl-4 border-l-2 border-blue-300 dark:border-blue-800 text-xs text-slate-600 dark:text-slate-400">
                                  {item.subDocs.map((sub, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-1.5">
                                      <Check className="h-3.5 w-3.5 text-blue-600 dark:text-yellow-400 shrink-0" />
                                      <span>{sub}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors">
                                <Download className="h-3.5 w-3.5" /> PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* ---------------- 3. TAB: AICTE ---------------- */}
            {activeTab === 'aicte' && (
              <div className="space-y-10 animate-fadeIn">
                {/* Section Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-yellow-400">Statutory & Financial Disclosures</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                    AICTE Mandatory Disclosures, EOA Reports & Audit Reports
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    All India Council for Technical Education (AICTE) annual compliance, extension approvals, and institutional financial audit reports.
                  </p>
                </div>

                {/* 1. AICTE Mandatory Disclosures */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-blue-600 dark:text-yellow-400" />
                    AICTE Mandatory Disclosures
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {AICTE_MANDATORY_DISCLOSURES.map((docTitle, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-primary-950/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-blue-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-yellow-400 rounded-lg shrink-0">
                            <FileText className="h-4 w-4" />
                          </div>
                          <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">{docTitle}</span>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-1 shrink-0 cursor-pointer">
                          <Download className="h-3.5 w-3.5" /> PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. AICTE EOA Reports */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-600 dark:text-yellow-400" />
                    AICTE Extension of Approval (EOA) Reports
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {AICTE_EOA_REPORTS.map((docTitle, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-primary-950/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-blue-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-yellow-400 rounded-lg shrink-0">
                            <Building2 className="h-4 w-4" />
                          </div>
                          <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">{docTitle}</span>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-1 shrink-0 cursor-pointer">
                          <Download className="h-3.5 w-3.5" /> PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. RCEW Audit Reports */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileSpreadsheet className="h-5 w-5 text-blue-600 dark:text-yellow-400" />
                    RCEW Institutional Audit Reports
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {RCEW_AUDIT_REPORTS.map((docTitle, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-primary-950/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-blue-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-lg shrink-0">
                            <FileSpreadsheet className="h-4 w-4" />
                          </div>
                          <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">{docTitle}</span>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold inline-flex items-center gap-1 shrink-0 cursor-pointer">
                          <Download className="h-3.5 w-3.5" /> PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- 4. TAB: NBA ---------------- */}
            {activeTab === 'nba' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Section Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-yellow-400">Technical Accreditation</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                    NBA Accreditation & Audited Statements
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    National Board of Accreditation (NBA) status, extension letters, and audited financial statements.
                  </p>
                </div>

                {/* NBA Status Card */}
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Award className="h-8 w-8 text-yellow-400 shrink-0" />
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-300 font-bold">Official Extension Order</span>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                          NBA Accreditation Extension Status
                        </h3>
                      </div>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full font-mono font-bold text-xs bg-emerald-500 text-slate-950 shrink-0 self-start sm:self-center">
                      Valid 2024 to 2027
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    NBA accreditation extension status 2024 upto 2027.
                  </p>

                  <div className="pt-2">
                    <a
                      href={NBA_EXTENSION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-blue-950 rounded-xl font-bold text-xs inline-flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
                    >
                      <Download className="h-4 w-4" /> Download NBA Accreditation Extension Order PDF
                    </a>
                  </div>
                </div>

                {/* Audited Statements */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileSpreadsheet className="h-5 w-5 text-blue-600 dark:text-yellow-400" />
                    NBA Audited Financial Statements
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {NBA_AUDITED_STATEMENTS.map((item, idx) => (
                      <div key={idx} className="p-5 bg-slate-50 dark:bg-primary-950/60 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 hover:border-blue-300 transition-colors">
                        <div className="p-2.5 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-yellow-400 rounded-xl w-fit">
                          <FileSpreadsheet className="h-5 w-5" />
                        </div>
                        <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white">{item.title}</h4>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Download className="h-3.5 w-3.5" /> Download PDF Statement
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
