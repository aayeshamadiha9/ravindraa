import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, UserCheck, GraduationCap, Award, BookOpen, Filter, Sparkles } from 'lucide-react';
import FACULTY_GROUP_IMAGE from '../assets/images/rcew_faculty_group_1785859150336.png';

interface FacultyMember {
  sNo: number;
  name: string;
  designation: string;
}

interface DepartmentData {
  id: string;
  title: string;
  code: string;
  description: string;
  faculty: FacultyMember[];
}

const FACULTY_DATA: DepartmentData[] = [
  {
    id: 'freshman',
    title: 'FRESHMAN (I B.Tech)',
    code: 'FRESHMAN (I B.Tech)',
    description: 'FRESHMAN (I B.Tech) Faculty Roster',
    faculty: [
      { sNo: 1, name: 'Mrs. G. SPANDANA', designation: 'Associate Professor & HoD' },
      { sNo: 2, name: 'Dr. G. RAMACHANDRA REDDY', designation: 'Professor' },
      { sNo: 3, name: 'Dr. B. V. RAMI REDDY', designation: 'Professor' },
      { sNo: 4, name: 'Dr. K. MALLIKARJUNUDU', designation: 'Professor' },
      { sNo: 5, name: 'Dr. K. MADHURIMA', designation: 'Associate Professor' },
      { sNo: 6, name: 'Mr. P. RIYAZ', designation: 'Assistant Professor' },
      { sNo: 7, name: 'Mrs. DEENA GRACE ABIGAEL', designation: 'Assistant Professor' },
      { sNo: 8, name: 'Mr. M. SREENIVASA REDDY', designation: 'Assistant Professor' },
      { sNo: 9, name: 'Ms. SEKHAR PRANITHA', designation: 'Assistant Professor' },
      { sNo: 10, name: 'Mrs. B. VIJETHA', designation: 'Assistant Professor' },
      { sNo: 11, name: 'Mr. B. JAGADEESWARA REDDY', designation: 'Assistant Professor' },
      { sNo: 12, name: 'Ms. B. ARUNA', designation: 'Assistant Professor' },
      { sNo: 13, name: 'Mrs. K. NAGA GOWRI', designation: 'Assistant Professor' },
      { sNo: 14, name: 'Ms. S. YOUSUF SHAREEF', designation: 'Assistant Professor' },
      { sNo: 15, name: 'Mrs. K. NAGESWARI', designation: 'Assistant Professor' },
      { sNo: 16, name: 'Mrs. P. J. M. SUMALATHA', designation: 'Assistant Professor' },
      { sNo: 17, name: 'Mrs. D. HARITHA', designation: 'Assistant Professor' },
      { sNo: 18, name: 'Ms. E. NIKHITHA', designation: 'Assistant Professor' },
      { sNo: 19, name: 'Mrs. S. RASHIDA BEGUM', designation: 'Assistant Professor' },
      { sNo: 20, name: 'Mrs. D. BINDU MADHAVI', designation: 'Assistant Professor' },
      { sNo: 21, name: 'Mrs. N. RAHAMATHUNNISA', designation: 'Assistant Professor' },
      { sNo: 22, name: 'Ms. G. HARSHITHA', designation: 'Assistant Professor' },
      { sNo: 23, name: 'Mrs. B. SRILATHA', designation: 'Assistant Professor' },
      { sNo: 24, name: 'Mr. S. BASHEER AHAMMED', designation: 'Assistant Professor' },
      { sNo: 25, name: 'Mr. K. SURESH KUMAR', designation: 'Assistant Professor' }
    ]
  },
  {
    id: 'btech-cse',
    title: 'B.Tech – Computer Science & Engineering',
    code: 'CSE',
    description: 'Undergraduate Department of Computer Science & Engineering Faculty Roster',
    faculty: [
      { sNo: 1, name: 'Dr. K. SESHADRI RAMANA', designation: 'Professor & HoD' },
      { sNo: 2, name: 'Dr. B. NAGALAKSHMI', designation: 'Associate Professor' },
      { sNo: 3, name: 'Mrs. Y. INDIRA PRIYADARSHINI', designation: 'Assistant Professor' },
      { sNo: 4, name: 'Mr. G. FAYAZ HUSSAIN', designation: 'Assistant Professor' },
      { sNo: 5, name: 'Mrs. KIRAN MAYEE', designation: 'Assistant Professor' },
      { sNo: 6, name: 'Mrs. PRATHIBHA PRIYADARSHNI', designation: 'Assistant Professor' },
      { sNo: 7, name: 'Mrs. YASHODA', designation: 'Assistant Professor' },
      { sNo: 8, name: 'Mrs. J. USHA SRI', designation: 'Assistant Professor' },
      { sNo: 9, name: 'Mr. S. ASLAM SHAREEF', designation: 'Assistant Professor' },
      { sNo: 10, name: 'Mrs. M. SAILAJA', designation: 'Assistant Professor' },
      { sNo: 11, name: 'Mrs. G. SHAHEEN FIRDOUS', designation: 'Assistant Professor' },
      { sNo: 12, name: 'Mrs. SAI REKHA', designation: 'Assistant Professor' },
      { sNo: 13, name: 'Mrs. SARITHA REDDY', designation: 'Assistant Professor' },
      { sNo: 14, name: 'Mrs. S. NUZHATHA PASHA', designation: 'Assistant Professor' },
      { sNo: 15, name: 'Mr. M. BALAKRISHNA', designation: 'Assistant Professor' },
      { sNo: 16, name: 'Mrs. SAMEENA YOUSUFF', designation: 'Assistant Professor' },
      { sNo: 17, name: 'Mrs. V. LEENA PARIMALA', designation: 'Assistant Professor' },
      { sNo: 18, name: 'Mrs. SAMIYA', designation: 'Assistant Professor' },
      { sNo: 19, name: 'Mr. M. PRAVEEN KUMAR', designation: 'Assistant Professor' },
      { sNo: 20, name: 'Mrs. L. SANDYA REKHA', designation: 'Assistant Professor' },
      { sNo: 21, name: 'Mrs. K. LAKSHMI PRASANNA', designation: 'Assistant Professor' },
      { sNo: 22, name: 'Mrs. V. PREMA MANVI', designation: 'Assistant Professor' },
      { sNo: 23, name: 'Mrs. T. UMA DEVI', designation: 'Assistant Professor' },
      { sNo: 24, name: 'Mrs. A. JOY PRANAHITHA', designation: 'Assistant Professor' },
      { sNo: 25, name: 'Mrs. P. RAGA CHANDRIKA', designation: 'Assistant Professor' },
      { sNo: 26, name: 'Mrs. S. TABITA', designation: 'Assistant Professor' },
      { sNo: 27, name: 'Mrs. M. SHAHEDA BEGUM', designation: 'Assistant Professor' },
      { sNo: 28, name: 'Mrs. B. NAGA DIVYA', designation: 'Assistant Professor' },
      { sNo: 29, name: 'Ms. M. SHIVA THULASI', designation: 'Assistant Professor' },
      { sNo: 30, name: 'Mrs. E. K. MOUNIKA', designation: 'Assistant Professor' },
      { sNo: 31, name: 'Mrs. P. RAGHAVARDHINI', designation: 'Assistant Professor' },
      { sNo: 32, name: 'Mrs. R. TEJASWI', designation: 'Assistant Professor' },
      { sNo: 33, name: 'Mrs. P. M. PRIYANKA', designation: 'Assistant Professor' },
      { sNo: 34, name: 'Mrs. G. SABERA', designation: 'Assistant Professor' },
      { sNo: 35, name: 'Mr. RAJA ASHOK KUMAR', designation: 'Assistant Professor' },
      { sNo: 36, name: 'Mr. G. NATARAJA SEKHAR', designation: 'Assistant Professor' },
      { sNo: 37, name: 'Mrs. S. RUMANA FIRDOSE', designation: 'Assistant Professor' },
      { sNo: 38, name: 'Mrs. AYESHA IFFAT BASHEER', designation: 'Assistant Professor' },
      { sNo: 39, name: 'Ms. SUVARNAMMA', designation: 'Assistant Professor' },
      { sNo: 40, name: 'Mr. B. SAHADEVA REDDY', designation: 'Assistant Professor' },
      { sNo: 41, name: 'Mr. T. RAMAKRISHNA', designation: 'Assistant Professor' },
      { sNo: 42, name: 'Ms. K. SWATHI', designation: 'Assistant Professor' },
      { sNo: 43, name: 'Mr. K. NARAYANA', designation: 'Assistant Professor' },
      { sNo: 44, name: 'Ms. K. DIVYA', designation: 'Assistant Professor' },
      { sNo: 45, name: 'Mr. M. DINAKARA SANDEEP', designation: 'Assistant Professor' },
      { sNo: 46, name: 'Mrs. M. MADHU LATHA', designation: 'Assistant Professor' },
      { sNo: 47, name: 'Mr. S. MOHAMMED IMTIAZ ALI', designation: 'Assistant Professor' },
      { sNo: 48, name: 'Ms. T. B. SHIRISHA', designation: 'Assistant Professor' },
      { sNo: 49, name: 'Ms. S. SHAISTHA FARHEE', designation: 'Assistant Professor' },
      { sNo: 50, name: 'Ms. V. B. RADHA', designation: 'Assistant Professor' },
      { sNo: 51, name: 'Mr. V. V. R. SHASHANK', designation: 'Assistant Professor' }
    ]
  },
  {
    id: 'btech-ece',
    title: 'B.Tech – Electronics & Communication Engineering',
    code: 'ECE',
    description: 'Undergraduate Department of Electronics & Communication Engineering Faculty Roster',
    faculty: [
      { sNo: 1, name: 'Dr. N. Sreekanth', designation: 'Professor & Principal' },
      { sNo: 2, name: 'Dr. B. Madhusudhana Reddy', designation: 'HOD & Professor' },
      { sNo: 3, name: 'Dr. M. Jayalakshmi', designation: 'Professor' },
      { sNo: 4, name: 'Dr. P. Bindhu Swetha', designation: 'Professor' },
      { sNo: 5, name: 'Dr. Mohebbanaaz', designation: 'Associate Professor' },
      { sNo: 6, name: 'Mrs. C. Ahalya', designation: 'Assistant Professor' },
      { sNo: 7, name: 'Mrs. M. Jyothirmai', designation: 'Assistant Professor' },
      { sNo: 8, name: 'Mr. K. Venkata Siva Reddy', designation: 'Assistant Professor' },
      { sNo: 9, name: 'Mr. P. Kishor Kumar', designation: 'Assistant Professor' },
      { sNo: 10, name: 'Mrs. B. Geetha Rani', designation: 'Assistant Professor' },
      { sNo: 11, name: 'Mr. D. Gowri Sankar Rao', designation: 'Assistant Professor' },
      { sNo: 12, name: 'Ms. Syed Ishrath Moin', designation: 'Assistant Professor' }
    ]
  },
  {
    id: 'mtech-cse',
    title: 'M.Tech – Computer Science & Engineering',
    code: 'M.Tech CSE',
    description: 'Postgraduate Master of Technology Faculty Roster',
    faculty: [
      { sNo: 1, name: 'Dr. B. SABEENA', designation: 'Associate Professor' },
      { sNo: 2, name: 'Mrs. V. ROHINI', designation: 'Assistant Professor' },
      { sNo: 3, name: 'Mr. DORA BABU', designation: 'Assistant Professor' }
    ]
  },
  {
    id: 'mtech-aiml',
    title: 'M.Tech – AI & Machine Learning',
    code: 'M.Tech AIML',
    description: 'Postgraduate Artificial Intelligence & Machine Learning Faculty Roster',
    faculty: [
      { sNo: 1, name: 'Dr. T. ADITYA SAI SRINIVAS', designation: 'Associate Professor' },
      { sNo: 2, name: 'Mr. N. PARASHURAM', designation: 'Assistant Professor' }
    ]
  },
  {
    id: 'cai',
    title: 'CAI',
    code: 'CAI',
    description: 'Computer Science & Allied Innovation Faculty Roster',
    faculty: [
      { sNo: 1, name: 'Ms. V. NEELIMA', designation: 'Assistant Professor' },
      { sNo: 2, name: 'Mr. RAVI BOLLEDDULA', designation: 'Assistant Professor' },
      { sNo: 3, name: 'Ms. N. SWATHI', designation: 'Assistant Professor' },
      { sNo: 4, name: 'Mrs. G. LUCY', designation: 'Assistant Professor' },
      { sNo: 5, name: 'Ms. A. SWETHA', designation: 'Assistant Professor' },
      { sNo: 6, name: 'Ms. P. SNIGDHASREE', designation: 'Assistant Professor' },
      { sNo: 7, name: 'Ms. P. CHANDANA REDDY', designation: 'Assistant Professor' },
      { sNo: 8, name: 'Ms. L. DEVASENA', designation: 'Assistant Professor' },
      { sNo: 9, name: 'Ms. SHAIK RESHMA', designation: 'Assistant Professor' }
    ]
  }
];

export default function Faculty() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  // Filter logic
  const filteredDepartments = useMemo(() => {
    return FACULTY_DATA.map((dept) => {
      const isDeptSelected = selectedDept === 'all' || selectedDept === dept.id;
      if (!isDeptSelected) {
        return { ...dept, faculty: [] };
      }

      const filtered = dept.faculty.filter((member) => {
        const query = searchQuery.toLowerCase().trim();
        return (
          member.name.toLowerCase().includes(query) ||
          member.designation.toLowerCase().includes(query)
        );
      });

      return { ...dept, faculty: filtered };
    }).filter((dept) => dept.faculty.length > 0);
  }, [searchQuery, selectedDept]);

  // Total counts for stats
  const totalFacultyCount = useMemo(() => {
    return FACULTY_DATA.reduce((acc, curr) => acc + curr.faculty.length, 0);
  }, []);

  const totalFilteredCount = useMemo(() => {
    return filteredDepartments.reduce((acc, curr) => acc + curr.faculty.length, 0);
  }, [filteredDepartments]);

  const getDesignationBadgeClass = (designation: string) => {
    if (designation.includes('HoD') || designation.includes('Professor')) {
      return 'bg-amber-100 text-amber-950 border-amber-300 font-bold';
    }
    if (designation.includes('Associate')) {
      return 'bg-blue-100 text-blue-950 border-blue-200 font-semibold';
    }
    return 'bg-slate-100 text-slate-800 border-slate-200 font-medium';
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 py-16 border-b-2 border-amber-400/80 text-white shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-7 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-amber-400/30"
              >
                <UserCheck className="h-4 w-4 text-amber-400" /> Academic Leadership & Faculty
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight"
              >
                Faculty Members
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal"
              >
                Meet the experienced and dedicated faculty members of Ravindra Engineering College for Women committed to academic excellence, innovation, and student success.
              </motion.p>

              {/* Quick Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-blue-700/60"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl shadow-sm text-center">
                  <span className="text-amber-300 font-serif font-bold text-xl sm:text-2xl block">{totalFacultyCount}</span>
                  <span className="text-[10px] text-blue-100 font-mono uppercase tracking-wider font-bold">Faculty Members</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl shadow-sm text-center">
                  <span className="text-amber-300 font-serif font-bold text-xl sm:text-2xl block">{FACULTY_DATA.length}</span>
                  <span className="text-[10px] text-blue-100 font-mono uppercase tracking-wider font-bold">Academic Streams</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl shadow-sm text-center">
                  <span className="text-amber-300 font-serif font-bold text-xl sm:text-2xl block">100%</span>
                  <span className="text-[10px] text-blue-100 font-mono uppercase tracking-wider font-bold">Dedicated Mentors</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl shadow-sm text-center">
                  <span className="text-amber-300 font-serif font-bold text-xl sm:text-2xl block">JNTUA</span>
                  <span className="text-[10px] text-blue-100 font-mono uppercase tracking-wider font-bold">Aligned Syllabus</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Faculty Group Showcase Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white/20">
                <img
                  src={FACULTY_GROUP_IMAGE}
                  alt="Ravindra College of Engineering for Women Faculty Team"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <span className="text-[11px] bg-blue-900/90 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono shadow-sm">
                    RCEW Faculty Team • Academic Leadership
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR (Sticky) */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Bar Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search faculty by name or designation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 outline-none focus:border-blue-800 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedDept('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedDept === 'all'
                    ? 'bg-blue-800 text-white shadow-xs border border-blue-900'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50/60'
                }`}
              >
                All Departments
              </button>
              {FACULTY_DATA.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    selectedDept === dept.id
                      ? 'bg-blue-800 text-white shadow-xs border border-blue-900'
                      : 'bg-slate-100 text-slate-700 hover:bg-blue-50/60'
                  }`}
                >
                  {dept.code}
                </button>
              ))}
            </div>
          </div>

          {/* Search Result Count summary */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>
              Showing <strong className="text-blue-900">{totalFilteredCount}</strong> faculty members
            </span>
            {searchQuery && (
              <span>Query: "{searchQuery}"</span>
            )}
          </div>
        </div>
      </section>

      {/* DEPARTMENT TABLES SECTION */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {filteredDepartments.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl text-center border border-slate-200 shadow-sm">
              <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No matching faculty members found</h3>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search keyword or department filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedDept('all'); }}
                className="mt-4 px-4 py-2 bg-blue-800 text-white text-xs font-bold uppercase rounded-xl hover:bg-blue-900 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredDepartments.map((dept) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
                id={`dept-${dept.id}`}
              >
                {/* Department Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-blue-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-serif font-bold text-lg shrink-0 border border-blue-200">
                      <GraduationCap className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                        {dept.title}
                      </h2>
                      <p className="text-xs text-slate-500 font-mono">
                        {dept.description}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-900 border border-amber-300 shrink-0 self-start sm:self-auto">
                    {dept.faculty.length} Members
                  </span>
                </div>

                {/* Responsive Faculty Table Card */}
                <div className="bg-white rounded-2xl shadow-2xs border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      {/* Sticky Table Header */}
                      <thead>
                        <tr className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                          <th scope="col" className="py-4 px-6 w-20 text-center">S.No</th>
                          <th scope="col" className="py-4 px-6">Faculty Name</th>
                          <th scope="col" className="py-4 px-6">Designation</th>
                        </tr>
                      </thead>

                      {/* Alternating Table Rows */}
                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-800">
                        {dept.faculty.map((member, index) => (
                          <tr
                            key={member.sNo}
                            className={`transition-colors hover:bg-blue-50/40 ${
                              index % 2 === 0
                                ? 'bg-white'
                                : 'bg-slate-50/60'
                            }`}
                          >
                            <td className="py-3.5 px-6 font-mono font-bold text-center text-blue-800">
                              {member.sNo}
                            </td>

                            <td className="py-3.5 px-6 font-semibold text-slate-950">
                              <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center text-xs font-bold shrink-0 border border-blue-200">
                                  {member.name.replace(/^(Dr\.|Mrs\.|Mr\.|Ms\.)\s*/, '').charAt(0)}
                                </div>
                                <span>{member.name}</span>
                              </div>
                            </td>

                            <td className="py-3.5 px-6">
                              <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border ${getDesignationBadgeClass(member.designation)}`}>
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
            ))
          )}
        </div>
      </section>
    </div>
  );
}
