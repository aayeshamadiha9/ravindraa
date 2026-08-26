import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FlaskConical, BookOpen, Award, Users, ChevronRight,
  Sparkles, FileText, Download, ShieldCheck, Database,
  Cpu, Layers, ExternalLink, Globe, CheckCircle2, Rocket, Lightbulb,
  Search, Check, DollarSign, Plane, Calendar, Building2, BookCheck
} from 'lucide-react';

// R&D Sidebar Navigation Configuration (Only Home and Research Resources)
const RD_SIDEBAR_MENU = [
  { id: 'home', label: 'Home' },
  { id: 'resources', label: 'Research Resources' },
];

// R&D Functionalities List
const RD_FUNCTIONS = [
  "To identify the potential areas of research in various disciplines of engineering and form the faculty into various clusters based on their specialization.",
  "To prepare and submit proposals to government agencies like AICTE, UGC, DST, IE(I) etc for obtaining funded projects.",
  "To encourage multi-disciplinary research internally within the institute and externally with other organizations.",
  "Encourage the staff to attend/publish papers in various National/International conferences of their specialised areas.",
  "To coordinate the research activities among the various departments of the college.",
  "Encourage the faculty to attend various research oriented Faculty development programmes.",
  "Encourage and motivate the staff to apply for Ph.D at various Universities.",
  "To encourage the staff to publish their research works in reputed journals that have good impact factor and are Scopus indexed.",
  "To plan for resource mobilization through industry interaction, consultancy and Extramural funding.",
  "Scrutinize the student’s project proposals and send them to various agencies for financial support and recommend the suitable projects."
];

// Financial Assistance Policy Table Data
const FINANCIAL_ASSISTANCE_DATA = [
  {
    sno: 1,
    details: "Registration fee",
    india: "Based on the recommendations of Dean R & D following the publication guidelines",
    abroad: "Based on the recommendations of Head R & D following the publication guidelines"
  },
  {
    sno: 2,
    details: "Travel Allowance",
    india: "Assistance to the extent of to & fro First Class/2 Tier AC or Rs 4,000/- whichever is lower",
    abroad: "Assistance to the extent of 50% of actual fare by Economy class by Air India/ any other airline or Rs 20,000 whichever is lower"
  },
  {
    sno: 3,
    details: "Daily Allowance",
    india: "Rs 1500/-",
    abroad: "US $ 40 per day for duration of Conference or Rs 10,000 whichever is lower"
  },
  {
    sno: 4,
    details: "Local Allowance",
    india: "Rs 100 per day subject to maximum of Rs 200/-",
    abroad: "US $ 5 per day or Rs 500/- whichever is lower"
  },
  {
    sno: 5,
    details: "Maximum Limit",
    india: "The Maximum financial assistance limit will be Rs 50,000/- including Registration fee, Travelling Allowance and Daily Allowance",
    abroad: "The Maximum financial assistance limit will be Rs 50,000/- including Registration fee, Travelling Allowance and Daily Allowance"
  }
];

// IEEE Computer Science & IT Journals List
const CS_IT_IEEE_JOURNALS = [
  "IEEE Transactions on Affective Computing (T-AFFC)",
  "IEEE Annals of the History of Computing (M-AHC)",
  "IEEE Transactions on Broadcasting, (T-BC)",
  "IEEE Cloud Computing",
  "IEEE Transactions on Cloud Computing",
  "IEEE Transactions On Computational Intelligence and AI in Games (T-CIAIG)",
  "IEEE Computational Intelligence Magazine (M-CI)",
  "IEEE Transactions on Computational Social Systems (T-CSS)",
  "IEEE Computer Architecture Letters (L-CA)",
  "IEEE Computer Graphics and Applications Magazine (M-CG&A)",
  "Computer Magazine (M-C)",
  "IEEE Transactions on Computers, (T-C)",
  "Computing in Science and Engineering (CiSE)",
  "IEEE Transactions on Control of Network Systems, (T-CNS)",
  "IEEE Transactions on Control Systems Technology (T-CST)",
  "IEEE Transactions on Cybernetics, (T-CYB) Man, and Cybernetics, Part B: Cybernetics",
  "IEEE Transaction on Dependable And Secure Computing(T-DSC)",
  "IEEE Design and Test Magazine (M-D&T)",
  "IEEE Embedded Systems Letters (L-ES)",
  "IEEE Transactions. on Evolutionary Computation, (T-EVC)",
  "IEEE Transactions. on Fuzzy Systems (T-FUZZ)",
  "IEEE Transactions.on Human-Machine Systems, (T-HMS)",
  "IEEE Transactions on Information Forensics and Security",
  "IEEE Transactions on Information Theory (T-IT)",
  "IEEE Intelligent Systems Magazine (M-IS)",
  "IEEE Internet Computing Magazine (M-IC)",
  "IEEE Internet of Things Journal (J-IOT)",
  "IT Professional Magazine (M-ITPRO)",
  "IEEE Transactions on Knowledge and Data Engineering",
  "IEEE Transactions on. Learning Technologies",
  "IEEE Micro Magazine (M-MICRO)",
  "IEEE Transactions on Mobile Computing",
  "IEEE Multi Media Magazine (M-MULTI)",
  "IEEE Transactions on Multimedia",
  "IEEE Transactions on Network and Service Management",
  "IEEE Transactions on Network Science and Engineering",
  "IEEE Network: The Magazine of Global Internetworking (M-NET)",
  "IEEE/ACM Transactions on Networking, (T-NET)",
  "IEEE Transactions on Neural Networks and Learning Systems (T-NNLS)",
  "IEEE Transactions on Parallel and Distributed Systems",
  "IEEE Transactions on Pattern Analysis and Machine Intelligence",
  "IEEE Persive Computing Magazine",
  "IEEE Transactions on Services Computing, (T-SC)",
  "IEEE Transactions on Software Engineering (T-SE)",
  "IEEE Software Magazine (M-SOFT)",
  "IEEE Systems Journal (J-SYS)",
  "IEEE Transactions on Systems, Man, and Cybernetics: Systems (T-SMC)",
  "IEEE Technology and Society Magazine (M-T&S)",
  "IEEE Transactions on Visualization and Computer Graphics (T-VCG)"
];

// IEEE Electronics & Communication Engineering Journals List
const ECE_IEEE_JOURNALS = [
  "IEEE Antennas and Propagation Magazine (M-AP)",
  "IEEE Transactions on Antennas and Propagation, (T-AP)",
  "IEEE Antennas and Wireless Propagation Letters (L-AWP)",
  "IEEE/ACM Transactions. on Audio, Speech, and Language Processing, (T-ASL)",
  "IEEE Transactions on Automatic Control, (T-AC)",
  "IEEE/CAA Journal of Automatic Sinica (J-AS)",
  "China Communications (M-CHINA)",
  "IEEE Circuits and Systems (M-CAS)",
  "IEEE Transactions On Circuits and Systems for Video Technology (T-CSVT)",
  "IEEE Transactions. on (T-CAS1)Circuits and Systems Part I: Regular Papers",
  "IEEE Transactions on Circuits and Systems Part II: Express Briefs (T-CAS2)",
  "IEEE Communications Letters (L-COMM)",
  "IEEE Communications Magazine (M-COMM)",
  "IEEE Transactions. on Communications (T-COMM)",
  "IEEE Communications Surveys & Tutorials (COMST)",
  "IEEE/ACM Transactions. on Computational Biology and Bioinformatics (T-CBB)",
  "IEEE Transactions. on Computer-Aided Design of Integrated Circuits and Systems, I (T-CAD)",
  "IEEE Consumer Electronics Magazine (M-CE)",
  "IEEE Transactions on Consumer Electronics (T-CE)",
  "IEEE Control Systems Magazine (M-CS)",
  "IEEE Transactions. on Device and Materials Reliability (T-DMR)",
  "Journal of Display Technology",
  "IEEE Electromagnetic Compatibility Magazine(M-EMC)",
  "IEEE Transactions on Electromagnetic Compatibility, (T-EMC)",
  "IEEE Electron Device Letters (L-ED)",
  "IEEE Transactions. on Electron Devices, (T-ED)",
  "IEEE Journal of Emerging And Selected Topics in Circuits And Systems(JETCAS)",
  "IEEE Journal of Emerging and Selected Topics in Power Electronics, (J-ESTPE)",
  "IEEE Transactions. on Energy Conversion, (T-EC)",
  "IEEE Transactions. on Image Processing, (T-IP)",
  "IEEE Industrial Electronics (M-IE)",
  "IEEE Transactions. on Industrial Electronics, (T-IE)",
  "IEEE Transactions. on Industrial Informatics (T-IINF)",
  "IEEE Industry Applications Magazine (M-IA)",
  "IEEE Transactions. on Industry Applications (T-IA)",
  "IEEE Instrumentation and Measurement Magazine",
  "IEEE Transactions. on Instrumentation and Measurement on Includes Instrumentation and Measurement",
  "IEEE Transactions. On Instrumentation and Measurement",
  "Journal of Light wave Technology, (J-LT)",
  "IEEE Magnetics Letters (L-MAG)",
  "IEEE Transactions. on Magnetics (T-MAG)",
  "IEEE Microwave and Wireless Components Letters",
  "IEEE Microwave Magazine (M-MW)",
  "IEEE Transactions. on Microwave Theory and Techniques",
  "IEEE Transactions. on Nuclear Science, (T-NS)",
  "IEEE/OSA Journal of (J-OCN) Optical Communications and Networking",
  "IEEE Photonics Technology Letters (L-PT)",
  "IEEE Journal on Photo voltaic (J-PHOTOV)",
  "IEEE Transactions on Plasma Science (T-PS)",
  "IEEE Transactions on Professional Communication (T-PC)",
  "IEEE Journal of (J-QE) Quantum Electronics",
  "IEEE Transactions on Reliability (T-R)",
  "IEEE Journal of Selected Areas in Communications (J-SAC)",
  "IEEE Journal of (J-STQE) Selected Topics in Quantum Electronics",
  "IEEE Journal of (J-STSP) Selected Topics in Signal Processing",
  "IEEE Journal of Sensors (J-SEN)",
  "IEEE Signal Processing Letters (L-SP)",
  "IEEE Signal Processing Magazine (M-SP)",
  "IEEE Transactions on Signal Processing (T-SP)",
  "IEEE Transactions on Terahertz Science and Technology",
  "IEEE Transactions on Ultra Sonics, Ferroelectrics, and Frequency Control (T-UFFC)",
  "IEEE Wireless Communications Letters (L-WC)",
  "IEEE Wireless Communications Magazine (M-WC)",
  "IEEE Transactions on Wireless Communications (T-WC)"
];

export default function RD() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (tabParam && RD_SIDEBAR_MENU.some(m => m.id === tabParam)) {
      return tabParam;
    }
    return 'home';
  });

  const [resourceSearch, setResourceSearch] = useState('');
  const [resourceCategory, setResourceCategory] = useState<'all' | 'cs' | 'ece'>('all');

  useEffect(() => {
    if (tabParam && RD_SIDEBAR_MENU.some(m => m.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCSJournals = CS_IT_IEEE_JOURNALS.filter(j => 
    j.toLowerCase().includes(resourceSearch.toLowerCase())
  );

  const filteredECEJournals = ECE_IEEE_JOURNALS.filter(j => 
    j.toLowerCase().includes(resourceSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary-950/40 py-8 sm:py-12">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <span className="text-yellow-400 text-xs font-mono font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Innovation & Excellence
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight pt-1">
              Research & Development (R&D) Cell
            </h1>
            <p className="text-blue-100 text-sm sm:text-base max-w-3xl leading-relaxed">
              Fostering a culture of cutting-edge research, British Council international grants, AI/ML FDPs, and extensive IEEE journal resources at RCEW Kurnool.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout with Left Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="lg:col-span-3 bg-white dark:bg-primary-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-24">
            {/* Top Accent Line */}
            <div className="h-2.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800" />

            {/* Sidebar Title Header */}
            <div className="p-5 text-center bg-gradient-to-b from-indigo-900 to-blue-950 text-white relative">
              <FlaskConical className="h-7 w-7 text-yellow-400 mx-auto mb-1 drop-shadow-sm" />
              <h2 className="text-lg font-serif font-bold text-white leading-snug">
                R&D Navigation
              </h2>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/20 text-white border border-white/20">
                RCEW Research Cell
              </span>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100 dark:divide-slate-800">
              {RD_SIDEBAR_MENU.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer relative ${
                      isActive
                        ? 'text-indigo-700 dark:text-yellow-400 bg-indigo-50 dark:bg-indigo-950/60 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isActive && <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-yellow-400 animate-pulse" />}
                      <span>{item.label}</span>
                    </span>

                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'text-indigo-600 dark:text-yellow-400 font-bold translate-x-0.5' : 'text-slate-400'}`} />

                    {/* Active Right Vertical Indicator */}
                    {isActive && (
                      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-indigo-600 dark:bg-yellow-400 rounded-l" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-9 bg-white dark:bg-primary-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-10 min-h-[600px]">
            
            {/* ---------------- 1. TAB: HOME ---------------- */}
            {activeTab === 'home' && (
              <div className="space-y-10 animate-fadeIn">
                
                {/* Header Banner */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-yellow-400">Research Ecosystem</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                    Inspired By Excellence & Innovation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Showcasing prestigious international grants, FDP programs, research governance, and publication support policies.
                  </p>
                </div>

                {/* SECTION 1: PROJECTS GRANTED */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 rounded-xl">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      Projects Granted & Sponsored Research
                    </h3>
                  </div>

                  {/* Project 1: British Council ERWESD Grant */}
                  <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-indigo-900/40 space-y-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full pointer-events-none" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-yellow-400 text-slate-950 uppercase">
                        International Grant Award
                      </span>
                      <span className="text-xs font-mono text-yellow-300 font-bold">
                        Grant Amount: £29,990.88 (₹30,00,000)
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-serif font-bold text-yellow-400 leading-snug">
                      Empowering Rural Women through Skill Development for Enhanced Employability (ERWESD)
                    </h4>

                    <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 bg-white/10 p-3 rounded-xl border border-white/10">
                      <div><strong className="text-white">Principal Investigator:</strong> Dr J. Usha Sree</div>
                      <div><strong className="text-white">Co-Investigator:</strong> Dr. M. Jayalakshmi</div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      We are proud to announce that Ravindra College of Engineering for Women has been awarded the prestigious <strong>Going Global Partnerships: Industry Academia Collaborative Grant 2024–25 by the British Council</strong>. Out of four selected institutions across India, ours is the <strong>only institute from South India</strong> to receive this honor, in collaboration with <strong>Teesside University, UK</strong>, and <strong>RMJ IT Solutions Pvt. Ltd.</strong>
                    </p>

                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold text-yellow-300 font-mono uppercase tracking-wide">
                        Key Focus Areas & Deliverables:
                      </p>
                      <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
                        <li>Industry certifications (e.g., Cambridge Lingua Skills)</li>
                        <li>IT and digital skills (e.g., Microsoft Office, Photoshop, Tally)</li>
                        <li>Practical exposure and community-based projects in Nandanapalli, Venkayapalli, and Pasupula</li>
                      </ul>
                    </div>

                    <p className="text-xs text-slate-300 italic border-t border-white/15 pt-3">
                      This milestone highlights our commitment to fostering employability, gender equality, and sustainable growth.
                    </p>
                  </div>

                  {/* Project 2: E&ICT Sponsored FDP */}
                  <div className="bg-slate-50 dark:bg-primary-950/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-yellow-300">
                        E&ICT Sponsored FDP Grant
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                        Sanctioned Amount: Rs 3,00,000/-
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white">
                      One Week FDP on “Latest Trends in AI & ML”
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2 font-mono">
                      <Calendar className="h-4 w-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                      Held from 28th Jan to 1st Feb 2025
                    </p>
                  </div>
                </div>

                {/* SECTION 2: RESEARCH & DEVELOPMENT CELL OVERVIEW & FUNCTIONS */}
                <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 rounded-xl">
                      <FlaskConical className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                        Research & Development Cell
                      </h3>
                      <p className="text-xs text-slate-500">Governance & Administrative Framework</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-blue-50/60 dark:bg-blue-950/40 p-4 rounded-xl border border-blue-100 dark:border-blue-900/50">
                    The College has established Research and Development Cell (R & D) in order to promote research activities among the students and staff of the college. All the Heads of departments also act as members of the cell which provides valuable suggestions/inputs in carrying out the research work in the College.
                  </p>

                  {/* Functionalities */}
                  <div className="space-y-4">
                    <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <BookCheck className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                      Functionalities of Research & Development Cell
                    </h4>

                    <div className="grid grid-cols-1 gap-2.5">
                      {RD_FUNCTIONS.map((fn, idx) => (
                        <div key={idx} className="p-3.5 bg-slate-50 dark:bg-primary-950/50 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-3 items-start hover:border-indigo-300 transition-colors">
                          <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-yellow-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {fn}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 3: RESEARCH ACTIVITIES & FINANCIAL ASSISTANCE POLICY */}
                <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 rounded-xl">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      Research Activities & Financial Assistance Policy
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    In order to promote the research activity in the College, the R & D cell constantly encourages the faculty to submit research proposals to various funding agencies like AICTE, DST, UGC, IE(I) etc.
                  </p>

                  {/* Financial Assistance Terms & Conditions */}
                  <div className="p-5 bg-indigo-50/50 dark:bg-indigo-950/40 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 space-y-3">
                    <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-yellow-400" />
                      Publication Incentives & Guidelines
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                      <li>The faculty member attending the conference should compulsorily present the paper and should be a regular employee of the college.</li>
                      <li>If there are more than one author for a paper, only one author will be eligible for financial assistance.</li>
                      <li>The faculty can avail the financial assistance twice in an academic year on successful production of vouchers regarding registration fee and travel tickets.</li>
                      <li>Further the financial assistance to a Conference/Workshop is subject to review by Dean R & D in order to review the standard/Creditability of the Conference.</li>
                    </ul>
                  </div>

                  {/* Financial Assistance Table */}
                  <div className="space-y-3">
                    <h4 className="text-base font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Plane className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                      Financial Assistance Scale for Faculty Training & Conferences
                    </h4>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white font-mono uppercase text-[11px]">
                          <tr>
                            <th className="px-4 py-3.5 text-center w-14">S.No</th>
                            <th className="px-4 py-3.5">Details</th>
                            <th className="px-4 py-3.5">Conferences/Workshops/Seminars in India</th>
                            <th className="px-4 py-3.5">Conferences/Workshops/Seminars Abroad</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                          {FINANCIAL_ASSISTANCE_DATA.map((row) => (
                            <tr key={row.sno} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                              <td className="px-4 py-3.5 text-center font-mono font-bold text-slate-500">{row.sno}</td>
                              <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">{row.details}</td>
                              <td className="px-4 py-3.5 leading-relaxed text-xs">{row.india}</td>
                              <td className="px-4 py-3.5 leading-relaxed text-xs">{row.abroad}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* ---------------- 2. TAB: RESEARCH RESOURCES ---------------- */}
            {activeTab === 'resources' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-yellow-400">IEEE Transactions & Digital Library</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                    Research Resources & Subscribed IEEE Journals
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Comprehensive catalog of IEEE Transactions, Magazines, and Journals subscribed for Computer Science & Electronics Engineering.
                  </p>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-50 dark:bg-primary-950/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setResourceCategory('all')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        resourceCategory === 'all'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      All Journals ({CS_IT_IEEE_JOURNALS.length + ECE_IEEE_JOURNALS.length})
                    </button>
                    <button
                      onClick={() => setResourceCategory('cs')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        resourceCategory === 'cs'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      CS & IT ({CS_IT_IEEE_JOURNALS.length})
                    </button>
                    <button
                      onClick={() => setResourceCategory('ece')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        resourceCategory === 'ece'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      ECE ({ECE_IEEE_JOURNALS.length})
                    </button>
                  </div>

                  <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search IEEE Journal..."
                      value={resourceSearch}
                      onChange={(e) => setResourceSearch(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-primary-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* CS & IT IEEE JOURNALS SECTION */}
                {(resourceCategory === 'all' || resourceCategory === 'cs') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Cpu className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                        Computer Science and Information Technology IEEE Publications
                      </h3>
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-yellow-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-full">
                        {filteredCSJournals.length} Journals
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {filteredCSJournals.map((jName, idx) => (
                        <div key={idx} className="p-3.5 bg-slate-50 dark:bg-primary-950/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 hover:border-indigo-300 transition-colors">
                          <div className="flex items-center gap-2.5">
                            <BookOpen className="h-4 w-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                            <span className="font-semibold text-xs text-slate-900 dark:text-slate-200 leading-snug">{jName}</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded font-bold shrink-0">
                            Subscribed
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ECE IEEE JOURNALS SECTION */}
                {(resourceCategory === 'all' || resourceCategory === 'ece') && (
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Layers className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                        Electronics and Communication Engineering IEEE Publications
                      </h3>
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-yellow-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-full">
                        {filteredECEJournals.length} Journals
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {filteredECEJournals.map((jName, idx) => (
                        <div key={idx} className="p-3.5 bg-slate-50 dark:bg-primary-950/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 hover:border-indigo-300 transition-colors">
                          <div className="flex items-center gap-2.5">
                            <BookOpen className="h-4 w-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                            <span className="font-semibold text-xs text-slate-900 dark:text-slate-200 leading-snug">{jName}</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded font-bold shrink-0">
                            Subscribed
                          </span>
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
