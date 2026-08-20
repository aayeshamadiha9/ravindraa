export interface FacultyMember {
  sno: number;
  name: string;
  qualification: string;
  designation: string;
  isPhD?: boolean;
}

export const CSE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. J Ushasree', qualification: 'Ph.D', designation: 'Vice Principal', isPhD: true },
  { sno: 2, name: 'Dr. K Seshadri Ramana', qualification: 'Ph.D', designation: 'HoD & Professor', isPhD: true },
  { sno: 3, name: 'Dr. T Aditya Sai Srinivas', qualification: 'Ph.D', designation: 'Assoc. Professor', isPhD: true },
  { sno: 4, name: 'Dr. Sabeena B', qualification: 'Ph.D', designation: 'Assoc. Professor', isPhD: true },
  { sno: 5, name: 'Dr. B Nagalakshmi', qualification: 'Ph.D', designation: 'Assoc. Professor', isPhD: true },
  { sno: 6, name: 'Dr. M Kiran Mayee', qualification: 'Ph.D', designation: 'Assoc. Professor', isPhD: true },
  { sno: 7, name: 'Mrs. S Yashoda', qualification: 'M.Tech', designation: 'Assoc. Professor' },
  { sno: 8, name: 'Mrs. Y Indira Priyadarshini', qualification: 'M.Tech (Ph.D)', designation: 'Asst., Professor', isPhD: true },
  { sno: 9, name: 'Mr. G Fayaz Hussain', qualification: 'M.Tech (Ph.D)', designation: 'Asst., Professor', isPhD: true },
  { sno: 10, name: 'Mr. B Ravi', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 11, name: 'Mr. S Aslam Shareef', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 12, name: 'Mrs. G Shaheen Firdous', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 13, name: 'Mrs. G Prathibha Priyadarshini', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 14, name: 'Mrs. V Prema Manvi', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 15, name: 'Mrs. M Sailaja', qualification: 'M.Tech (Ph.D)', designation: 'Asst., Professor', isPhD: true },
  { sno: 16, name: 'Mrs. A Sai Rekha', qualification: 'M.Tech (Ph.D)', designation: 'Asst., Professor', isPhD: true },
  { sno: 17, name: 'Mr. M Balakrishna', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 18, name: 'Mrs. S Saritha', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 19, name: 'Mrs. Sameena Yousuff', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 20, name: 'Mr. N Parashuram', qualification: 'M.Tech (Ph.D)', designation: 'Asst., Professor', isPhD: true },
  { sno: 21, name: 'Mrs. Samiya', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 22, name: 'Mrs. V Leena Parimala', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 23, name: 'Mrs. V Rohini', qualification: 'M.Tech (Ph.D)', designation: 'Asst., Professor', isPhD: true },
  { sno: 24, name: 'Mrs. L Sandhya Rekha', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 25, name: 'Mrs. K Lakshmi Prasanna', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 26, name: 'Mrs. T Umadevi', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 27, name: 'Mrs. A Joy Pranahitha', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 28, name: 'Mrs. P Raga Chandrika', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 29, name: 'Mrs. S Tabita', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 30, name: 'Mrs. M Shaheda Begum', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 31, name: 'Mrs. G Lucy', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 32, name: 'Mrs. B Naga Divya', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 33, name: 'Mrs. E K Mounika', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 34, name: 'Mrs. R Tejaswi', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 35, name: 'Mrs. P M Priyanka', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 36, name: 'Mr. K Dora Babu', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 37, name: 'Mrs. G Sabera', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 38, name: 'Ms. E Suvarnamma', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 39, name: 'Mrs. S Rumania Firdose', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 40, name: 'Mr. B Sahadeva Reddy', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 41, name: 'Mrs. V Neelima', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 42, name: 'Ms. S Shaistha Farhee', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 43, name: 'Mrs. M Madhulatha', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 44, name: 'Mrs. P Chandana Reddy', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 45, name: 'Mr. T Vijaya Narasimha Swamy', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 46, name: 'Ms. P Snigdhasree', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 47, name: 'Ms. T Nagamani', qualification: 'M.Tech', designation: 'Asst., Professor' },
  { sno: 48, name: 'Mr. P Adam Ali', qualification: 'M.Tech', designation: 'Asst., Professor' },
];

export const ECE_FACULTY: FacultyMember[] = [
  { sno: 1, name: 'Dr. N Sreekanth', qualification: 'Ph.D.', designation: 'Professor & Principal', isPhD: true },
  { sno: 2, name: 'Dr. B Madhusudhana Reddy', qualification: 'Ph.D.', designation: 'HoD & Professor', isPhD: true },
  { sno: 3, name: 'Dr. P Bindu Swetha', qualification: 'Ph.D.', designation: 'Professor', isPhD: true },
  { sno: 4, name: 'Dr. M Jayalakshmi', qualification: 'Ph.D.', designation: 'Assoc. Professor', isPhD: true },
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

export interface DepartmentFacultyData {
  id: string;
  title: string;
  code: string;
  description: string;
  faculty: FacultyMember[];
}

export const FACULTY_DATA: DepartmentFacultyData[] = [
  {
    id: 'freshman',
    title: 'DEPARTMENT OF HUMANITIES AND SCIENCES',
    code: 'H&S',
    description: 'FRESHMAN (I B.Tech) & Humanities and Sciences Faculty Roster',
    faculty: HS_FACULTY
  },
  {
    id: 'cse',
    title: 'DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING',
    code: 'CSE',
    description: 'Department of Computer Science & Engineering (Artificial Intelligence) Faculty Roster',
    faculty: CSE_FACULTY
  },
  {
    id: 'ece',
    title: 'DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING',
    code: 'ECE',
    description: 'Department of Electronics & Communication Engineering Faculty Roster',
    faculty: ECE_FACULTY
  }
];
