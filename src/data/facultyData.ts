export interface FacultyMember {
  sno: number;
  name: string;
  qualification: string;
  designation: string;
  isPhD?: boolean;
  link?: string;
}

export interface DepartmentFacultySection {
  id: string;
  title: string;
  subtitle?: string;
  faculty: FacultyMember[];
}

export interface DepartmentFacultyData {
  id: string;
  title: string;
  code: string;
  description: string;
  sections: DepartmentFacultySection[];
}

// 1. CSE B.Tech Faculty (51 Members - Dr. K. Seshadri Ramana first)
export const BTECH_CSE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. K Seshadri Ramana', qualification: 'Ph.D', designation: 'Professor & HoD', isPhD: true },
  { sno: 2, name: 'Dr. J Ushasree', qualification: 'Ph.D', designation: 'Vice Principal & Professor', isPhD: true },
  { sno: 3, name: 'Dr. B Nagalakshmi', qualification: 'Ph.D', designation: 'Associate Professor', isPhD: true },
  { sno: 4, name: 'Dr. M Kiran Mayee', qualification: 'Ph.D', designation: 'Associate Professor', isPhD: true },
  { sno: 5, name: 'Mrs. S Yashoda', qualification: 'M.Tech', designation: 'Associate Professor' },
  { sno: 6, name: 'Mrs. Y Indira Priyadarshini', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', isPhD: true },
  { sno: 7, name: 'Mr. G Fayaz Hussain', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', isPhD: true },
  { sno: 8, name: 'Mr. B Ravi', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 9, name: 'Mr. S Aslam Shareef', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 10, name: 'Mrs. G Shaheen Firdous', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 11, name: 'Mrs. G Prathibha Priyadarshini', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 12, name: 'Mrs. V Prema Manvi', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 13, name: 'Mrs. M Sailaja', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', isPhD: true },
  { sno: 14, name: 'Mrs. A Sai Rekha', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', isPhD: true },
  { sno: 15, name: 'Mr. M Balakrishna', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 16, name: 'Mrs. S Saritha', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 17, name: 'Mrs. Sameena Yousuff', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 18, name: 'Mrs. Samiya', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 19, name: 'Mrs. V Leena Parimala', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 20, name: 'Mrs. L Sandhya Rekha', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 21, name: 'Mrs. K Lakshmi Prasanna', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 22, name: 'Mrs. T Umadevi', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 23, name: 'Mrs. A Joy Pranahitha', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 24, name: 'Mrs. P Raga Chandrika', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 25, name: 'Mrs. S Tabita', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 26, name: 'Mrs. M Shaheda Begum', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 27, name: 'Mrs. B Naga Divya', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 28, name: 'Mrs. E K Mounika', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 29, name: 'Mrs. R Tejaswi', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 30, name: 'Mrs. P M Priyanka', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 31, name: 'Mrs. G Sabera', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 32, name: 'Ms. E Suvarnamma', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 33, name: 'Mrs. S Rumania Firdose', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 34, name: 'Mr. B Sahadeva Reddy', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 35, name: 'Ms. S Shaistha Farhee', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 36, name: 'Mrs. M Madhulatha', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 37, name: 'Mr. T Vijaya Narasimha Swamy', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 38, name: 'Ms. T Nagamani', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 39, name: 'Mr. P Adam Ali', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 40, name: 'Mrs. K Shirisha', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 41, name: 'Mr. M Venkata Ramana', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 42, name: 'Mrs. P Sravanthi', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 43, name: 'Ms. G Mahalakshmi', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 44, name: 'Mrs. C Anitha', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 45, name: 'Mr. K Ashok Kumar', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 46, name: 'Mrs. S Haritha', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 47, name: 'Mrs. M Rajeswari', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 48, name: 'Mr. R Naresh', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 49, name: 'Mrs. P Hymavathi', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 50, name: 'Ms. B Sravani', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 51, name: 'Mr. C Kalyan Kumar', qualification: 'M.Tech', designation: 'Assistant Professor' },
];

// 2. CSE M.Tech Faculty (3 Members)
export const MTECH_CSE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. B Sabeena', qualification: 'Ph.D', designation: 'Associate Professor', isPhD: true },
  { sno: 2, name: 'Mrs. V Rohini', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', isPhD: true, link: '/cse_rohini/' },
  { sno: 3, name: 'Mr. K Dora Babu', qualification: 'M.Tech', designation: 'Assistant Professor' },
];

// 3. CSE (AI) B.Tech Faculty [CAI] (9 Members)
export const BTECH_CAI_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Ms. V. NEELIMA', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 2, name: 'Mr. RAVI BOLLEDDULA', qualification: 'M.Tech', designation: 'Assistant Professor', link: '/cse_ravi/' },
  { sno: 3, name: 'Ms. N. SWATHI', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 4, name: 'Mrs. G. LUCY', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 5, name: 'Ms. A. SWETHA', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 6, name: 'Ms. P. SNIGDHASREE', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 7, name: 'Ms. P. CHANDANA REDDY', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 8, name: 'Ms. L. DEVASENA', qualification: 'M.Tech', designation: 'Assistant Professor' },
  { sno: 9, name: 'Ms. SHAIK RESHMA', qualification: 'M.Tech', designation: 'Assistant Professor' },
];

// 4. CSE (AI & ML) M.Tech Faculty (2 Members)
export const MTECH_AIML_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. T. ADITYA SAI SRINIVAS', qualification: 'Ph.D', designation: 'Associate Professor', isPhD: true, link: '/aditya/' },
  { sno: 2, name: 'Mr. N. PARASHURAM', qualification: 'M.Tech (Ph.D)', designation: 'Assistant Professor', isPhD: true, link: '/cse_parasuram/' },
];

// 5. ECE Faculty Members
export const ECE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. N Sreekanth', qualification: 'Ph.D.', designation: 'Professor & Principal', isPhD: true },
  { sno: 2, name: 'Dr. Madhusudana Reddy Barusu', qualification: 'Ph.D.', designation: 'HOD, ECE Department', isPhD: true },
  { sno: 3, name: 'Dr. P Bindu Swetha', qualification: 'Ph.D.', designation: 'Professor', isPhD: true },
  { sno: 4, name: 'Dr. M. Jayalakshmi', qualification: 'Ph.D.', designation: 'Associate Professor', isPhD: true },
  { sno: 5, name: 'Dr. Mohebba Naaz', qualification: 'Ph.D.', designation: 'Assoc. Professor', isPhD: true },
  { sno: 6, name: 'Mrs. C Ahalya', qualification: 'M.Tech., (Ph.D.)', designation: 'Assoc. Professor', isPhD: true },
  { sno: 7, name: 'Mrs. M Jyothirmai', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', isPhD: true },
  { sno: 8, name: 'Mr. K V Siva Reddy', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', isPhD: true },
  { sno: 9, name: 'Mr. P Kishor Kumar', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', isPhD: true },
  { sno: 10, name: 'Mr. A Rajendra Babu', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', isPhD: true },
  { sno: 11, name: 'Mrs. B Geetha Rani', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', isPhD: true },
  { sno: 12, name: 'Ms. Syed Ishrath Moin', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 13, name: 'Mr. D Gowri Sankar Rao', qualification: 'M.Tech., (Ph.D.)', designation: 'Asst., Professor', isPhD: true },
];

// 6. H&S Faculty Members
export const HS_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Mrs. G Spandana', qualification: '(Ph.D)', designation: 'HoD', isPhD: true },
  { sno: 2, name: 'Dr. G Ramachandra Reddy', qualification: 'Ph.D', designation: 'Professor', isPhD: true },
  { sno: 3, name: 'Dr. K Mallikarjunudu', qualification: 'Ph.D', designation: 'Professor', isPhD: true },
  { sno: 4, name: 'Dr. E Mahojani', qualification: 'Ph.D', designation: 'Asst. Professor', isPhD: true },
  { sno: 5, name: 'Mrs. U Supriya', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 6, name: 'Mrs. B Vijeta', qualification: 'M.Sc', designation: 'Asst., Professor' },
  { sno: 7, name: 'Mr. P Riyaz', qualification: 'M.Phil', designation: 'Asst., Professor' },
  { sno: 8, name: 'Mr. M Srinivasa Reddy', qualification: '(Ph.D)', designation: 'Asst., Professor', isPhD: true },
  { sno: 9, name: 'Mrs. B Srilatha', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 10, name: 'Mrs. K Naga Gowri', qualification: 'MCA', designation: 'Asst., Professor' },
  { sno: 11, name: 'Mrs. D Bindu Madhavi', qualification: 'MCA', designation: 'Asst., Professor' },
  { sno: 12, name: 'Mrs. N Rahamathunnisa', qualification: 'M.Sc', designation: 'Asst., Professor' },
  { sno: 13, name: 'Mr. K Suresh Kumar', qualification: 'MA', designation: 'Asst., Professor' },
  { sno: 14, name: 'Mrs. D Haritha', qualification: 'M.Sc', designation: 'Asst., Professor' },
  { sno: 15, name: 'Mr. S Basheer Ahammed', qualification: 'MCA', designation: 'Asst., Professor' },
  { sno: 16, name: 'Mrs. P J M Sumalatha', qualification: 'MA', designation: 'Asst., Professor' },
  { sno: 17, name: 'Ms. N Ruthu Veena', qualification: 'M.Sc', designation: 'Asst., Professor' },
  { sno: 18, name: 'Ms. K Vahini', qualification: 'MCA', designation: 'Asst., Professor' },
  { sno: 19, name: 'Mrs. Sheetal Madhav Raghmode', qualification: 'MCA', designation: 'Asst., Professor' },
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
        subtitle: '51 Core Faculty Members',
        faculty: BTECH_CSE_FACULTY
      },
      {
        id: 'mtech-cse',
        title: 'M.Tech – Faculty Members (CSE)',
        subtitle: 'Postgraduate Program Faculty',
        faculty: MTECH_CSE_FACULTY
      }
    ]
  },
  {
    id: 'cai',
    title: 'DEPARTMENT OF CSE (ARTIFICIAL INTELLIGENCE)',
    code: 'CAI',
    description: 'Faculty Roster for Department of Computer Science and Engineering (Artificial Intelligence)',
    sections: [
      {
        id: 'btech-cai',
        title: 'B.Tech – Faculty Members (CSE – AI)',
        subtitle: 'Undergraduate Program Faculty (CAI)',
        faculty: BTECH_CAI_FACULTY
      },
      {
        id: 'mtech-aiml',
        title: 'M.Tech – Faculty Members (CSE – AI & ML)',
        subtitle: 'Postgraduate Program Faculty (AI & ML)',
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
        faculty: HS_FACULTY
      }
    ]
  }
];
