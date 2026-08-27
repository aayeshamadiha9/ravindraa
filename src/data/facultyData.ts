export interface FacultyMember {
  sno: number;
  name: string;
  qualification: string;
  designation: string;
  department: string;
  isPhD?: boolean;
  link?: string;
}

export interface DepartmentFacultySection {
  id: string;
  title: string;
  subtitle?: string;
  deptKey: string;
  faculty: FacultyMember[];
}

export interface DepartmentFacultyData {
  id: string;
  title: string;
  code: string;
  description: string;
  sections: DepartmentFacultySection[];
}

// ================= 1. CSE B.Tech Faculty (51 Members) =================
export const BTECH_CSE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. K. SESHADRI RAMANA', qualification: 'Ph.D', designation: 'Professor & HoD', department: 'CSE', isPhD: true, link: '/seshadri/' },
  { sno: 2, name: 'Dr. B. NAGALAKSHMI', qualification: 'Ph.D', designation: 'Associate Professor', department: 'CSE', isPhD: true },
  { sno: 3, name: 'Mrs. Y. INDIRA PRIYADARSHINI', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'CSE', isPhD: true, link: '/cse_indira/' },
  { sno: 4, name: 'Mr. G. FAYAZ HUSSAIN', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'CSE', isPhD: true, link: '/cse_fayaz/' },
  { sno: 5, name: 'Mrs. KIRAN MAYEE', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'CSE', isPhD: true, link: '/cse_kiranmai/' },
  { sno: 6, name: 'Mrs. PRATHIBHA PRIYADARSHNI', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'CSE', isPhD: true, link: '/cse_prathiba/' },
  { sno: 7, name: 'Mrs. YASHODA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 8, name: 'Mrs. J USHA SRI', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'CSE', isPhD: true },
  { sno: 9, name: 'Mr. S. ASLAM SHAREEF', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE', link: '/cse_aslam/' },
  { sno: 10, name: 'Mrs. M. SAILAJA', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'CSE', isPhD: true },
  { sno: 11, name: 'Mrs. G. SHAHEEN FIRDOUS', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 12, name: 'Mrs. SAI REKHA', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'CSE', isPhD: true, link: '/cse_sairekha/' },
  { sno: 13, name: 'Mrs. SARITHA REDDY', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE', link: '/cse_saritha/' },
  { sno: 14, name: 'Mrs. S. NUZHATHA PASHA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 15, name: 'Mr. M. BALAKRISHNA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 16, name: 'Mrs. SAMEENA YOUSUFF', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE', link: '/cse_sameena/' },
  { sno: 17, name: 'Mrs. V LEENA PARIMALA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE', link: '/cse_leena-parimala/' },
  { sno: 18, name: 'Mrs. SAMIYA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 19, name: 'Mr. M. PRAVEEN KUMAR', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 20, name: 'Mrs. L. SANDYA REKHA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 21, name: 'Mrs. K. LAKSHMI PRASANNA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 22, name: 'Mrs. V. PREMA MANVI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 23, name: 'Mrs. T. UMA DEVI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 24, name: 'Mrs. A. JOY PRANAHITHA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 25, name: 'Mrs. P. RAGA CHANDRIKA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 26, name: 'Mrs. S. TABITA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 27, name: 'Mrs. M. SHAHEDA BEGUM', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 28, name: 'Mrs. B. NAGA DIVYA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 29, name: 'Ms. M. SHIVA THULASI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 30, name: 'Mrs. E. K. MOUNIKA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 31, name: 'Mrs. P RAGHAVARDHINI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 32, name: 'Mrs. R. TEJASWI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 33, name: 'Mrs. P. M. PRIYANKA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 34, name: 'Mrs. G. SABERA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 35, name: 'Mr. RAJA ASHOK KUMAR', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 36, name: 'Mr. G NATARAJA SEKHAR', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 37, name: 'Mrs. S. RUMANA FIRDOSE', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 38, name: 'Mrs. AYESHA IFFAT BASHEER', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 39, name: 'Ms. SUVARNAMMA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 40, name: 'Mr. B. SAHADEVA REDDY', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 41, name: 'Mr. T. RAMAKRISHNA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 42, name: 'Ms. K. SWATHI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 43, name: 'Mr. K. NARAYANA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 44, name: 'Ms. K. DIVYA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 45, name: 'Mr. M. DINAKARA SANDEEP', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 46, name: 'Mrs. M. MADHU LATHA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 47, name: 'Mr. S. MOHAMMED IMTIAZ ALI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 48, name: 'Ms. T.B. SHIRISHA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 49, name: 'Ms. S SHAISTHA FARHEE', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 50, name: 'Ms. V. B. RADHA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
  { sno: 51, name: 'Mr. V.V.R. SHASHANK', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE' },
];

// ================= 2. CSE (AI) B.Tech Faculty [CAI] (9 Members) =================
export const BTECH_CAI_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Ms. V. NEELIMA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
  { sno: 2, name: 'Mr. RAVI BOLLEDDULA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI', link: '/cse_ravi/' },
  { sno: 3, name: 'Ms. N. SWATHI', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
  { sno: 4, name: 'Mrs. G. LUCY', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
  { sno: 5, name: 'Ms. A. SWETHA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
  { sno: 6, name: 'Ms. P. SNIGDHASREE', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
  { sno: 7, name: 'Ms. P. CHANDANA REDDY', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
  { sno: 8, name: 'Ms. L. DEVASENA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
  { sno: 9, name: 'Ms. SHAIK RESHMA', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'CSE-AI' },
];

// ================= 3. M.Tech CSE Faculty (3 Members) =================
export const MTECH_CSE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. B. SABEENA', qualification: 'Ph.D', designation: 'Associate Professor', department: 'M.Tech CSE', isPhD: true },
  { sno: 2, name: 'Mrs. V. ROHINI', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'M.Tech CSE', isPhD: true, link: '/cse_rohini/' },
  { sno: 3, name: 'Mr. DORA BABU', qualification: 'M.Tech', designation: 'Assistant Professor', department: 'M.Tech CSE' },
];

// ================= 4. M.Tech CSE (AI & ML) Faculty (2 Members) =================
export const MTECH_AIML_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. T. ADITYA SAI SRINIVAS', qualification: 'Ph.D', designation: 'Associate Professor', department: 'M.Tech CSE-AI & ML', isPhD: true, link: '/aditya/' },
  { sno: 2, name: 'Mr. N. PARASHURAM', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', department: 'M.Tech CSE-AI & ML', isPhD: true, link: '/cse_parasuram/' },
];

// ================= 5. ECE Faculty Members =================
export const ECE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. N Sreekanth', qualification: 'Ph.D.', designation: 'Professor & Principal', department: 'ECE', isPhD: true },
  { sno: 2, name: 'Dr. Madhusudana Reddy Barusu', qualification: 'Ph.D.', designation: 'HOD, ECE Department', department: 'ECE', isPhD: true },
  { sno: 3, name: 'Dr. P Bindu Swetha', qualification: 'Ph.D.', designation: 'Professor', department: 'ECE', isPhD: true },
  { sno: 4, name: 'Dr. M. Jayalakshmi', qualification: 'Ph.D.', designation: 'Associate Professor', department: 'ECE', isPhD: true },
  { sno: 5, name: 'Dr. Mohebba Naaz', qualification: 'Ph.D.', designation: 'Assoc. Professor', department: 'ECE', isPhD: true },
  { sno: 6, name: 'Mrs. C Ahalya', qualification: 'M.Tech., (Ph.D.)', designation: 'Assoc. Professor', department: 'ECE', isPhD: true },
  { sno: 7, name: 'Mrs. M Jyothirmai', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', department: 'ECE', isPhD: true },
  { sno: 8, name: 'Mr. K V Siva Reddy', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', department: 'ECE', isPhD: true },
  { sno: 9, name: 'Mr. P Kishor Kumar', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', department: 'ECE', isPhD: true },
  { sno: 10, name: 'Mr. A Rajendra Babu', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', department: 'ECE', isPhD: true },
  { sno: 11, name: 'Mrs. B Geetha Rani', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', department: 'ECE', isPhD: true },
  { sno: 12, name: 'Ms. Syed Ishrath Moin', qualification: 'M.Tech', designation: 'Asst., Professor', department: 'ECE' },
  { sno: 13, name: 'Mr. D Gowri Sankar Rao', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', department: 'ECE', isPhD: true },
];

// ================= 6. H&S Faculty Members =================
export const HS_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Mrs. G Spandana', qualification: '(Ph.D)', designation: 'HoD', department: 'H&S', isPhD: true },
  { sno: 2, name: 'Dr. G Ramachandra Reddy', qualification: 'Ph.D', designation: 'Professor', department: 'H&S', isPhD: true },
  { sno: 3, name: 'Dr. K Mallikarjunudu', qualification: 'Ph.D', designation: 'Professor', department: 'H&S', isPhD: true },
  { sno: 4, name: 'Dr. E Mahojani', qualification: 'Ph.D', designation: 'Asst. Professor', department: 'H&S', isPhD: true },
  { sno: 5, name: 'Mrs. U Supriya', qualification: 'M.Tech', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 6, name: 'Mrs. B Vijeta', qualification: 'M.Sc', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 7, name: 'Mr. P Riyaz', qualification: 'M.Phil', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 8, name: 'Mr. M Srinivasa Reddy', qualification: '(Ph.D)', designation: 'Asst., Professor', department: 'H&S', isPhD: true },
  { sno: 9, name: 'Mrs. B Srilatha', qualification: 'M.Tech', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 10, name: 'Mrs. K Naga Gowri', qualification: 'MCA', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 11, name: 'Mrs. D Bindu Madhavi', qualification: 'MCA', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 12, name: 'Mrs. N Rahamathunnisa', qualification: 'M.Sc', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 13, name: 'Mr. K Suresh Kumar', qualification: 'MA', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 14, name: 'Mrs. D Haritha', qualification: 'M.Sc', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 15, name: 'Mr. S Basheer Ahammed', qualification: 'MCA', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 16, name: 'Mrs. P J M Sumalatha', qualification: 'MA', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 17, name: 'Ms. N Ruthu Veena', qualification: 'M.Sc', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 18, name: 'Ms. K Vahini', qualification: 'MCA', designation: 'Asst., Professor', department: 'H&S' },
  { sno: 19, name: 'Mrs. Sheetal Madhav Raghmode', qualification: 'MCA', designation: 'Asst., Professor', department: 'H&S' },
];

// All Faculty Consolidated Array
export const ALL_FACULTY: FacultyMember[] = [
  ...BTECH_CSE_FACULTY,
  ...BTECH_CAI_FACULTY,
  ...MTECH_CSE_FACULTY,
  ...MTECH_AIML_FACULTY,
  ...ECE_FACULTY,
  ...HS_FACULTY
];

// Global Organized Faculty Data Structure by Department & Degree
export const FACULTY_DATA: DepartmentFacultyData[] = [
  {
    id: 'cse',
    title: 'DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING',
    code: 'CSE',
    description: 'Faculty Roster for Department of Computer Science and Engineering',
    sections: [
      {
        id: 'btech-cse',
        title: 'B.Tech – Faculty Members (CSE)',
        subtitle: '51 Core B.Tech Faculty Members',
        deptKey: 'CSE',
        faculty: BTECH_CSE_FACULTY
      },
      {
        id: 'mtech-cse',
        title: 'M.Tech – Faculty Members (CSE)',
        subtitle: 'Postgraduate Program Faculty',
        deptKey: 'M.Tech CSE',
        faculty: MTECH_CSE_FACULTY
      }
    ]
  },
  {
    id: 'cai',
    title: 'DEPARTMENT OF CSE (ARTIFICIAL INTELLIGENCE)',
    code: 'CSE-AI',
    description: 'Faculty Roster for Department of Computer Science and Engineering (Artificial Intelligence)',
    sections: [
      {
        id: 'btech-cai',
        title: 'B.Tech – Faculty Members (CSE – AI)',
        subtitle: 'Undergraduate Program Faculty (CAI)',
        deptKey: 'CSE-AI',
        faculty: BTECH_CAI_FACULTY
      },
      {
        id: 'mtech-aiml',
        title: 'M.Tech – Faculty Members (CSE – AI & ML)',
        subtitle: 'Postgraduate Program Faculty (AI & ML)',
        deptKey: 'M.Tech CSE-AI & ML',
        faculty: MTECH_AIML_FACULTY
      }
    ]
  },
  {
    id: 'ece',
    title: 'DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING',
    code: 'ECE',
    description: 'Faculty Roster for Department of Electronics & Communication Engineering',
    sections: [
      {
        id: 'btech-ece',
        title: 'B.Tech – Faculty Members (ECE)',
        subtitle: 'Core ECE Faculty Members',
        deptKey: 'ECE',
        faculty: ECE_FACULTY
      }
    ]
  },
  {
    id: 'freshman',
    title: 'DEPARTMENT OF HUMANITIES AND SCIENCES',
    code: 'H&S',
    description: 'Freshman (I B.Tech) & Humanities and Sciences Faculty Roster',
    sections: [
      {
        id: 'hs-faculty',
        title: 'Humanities & Sciences Faculty Roster',
        subtitle: 'Freshman I B.Tech Faculty',
        deptKey: 'H&S',
        faculty: HS_FACULTY
      }
    ]
  }
];
