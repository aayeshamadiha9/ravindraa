import { Department, CourseOffering, PlacementsData, CampusFacility, NewsEvent, FacultyMember, Testimonial, FAQItem, CompanyVisitItem, PlacedStudentRecord } from './types';

// Imported exact RCEW Department Lab photos
import AIDS_DEPT_LAB from './assets/images/rcew_aids_dept_lab.png';
import ECE_DEPT_LAB from './assets/images/rcew_ece_dept_lab.jpg';

export const COLLEGE_INFO = {
  name: 'Ravindra Engineering College for Women',
  abbreviation: 'RCEW',
  location: 'Kurnool, Andhra Pradesh, India',
  established: 2008,
  affiliation: 'JNTU Anantapur (JNTUA)',
  approvals: ['AICTE Approved', 'ISO 9001:2015 Certified'],
  accreditations: ['NAAC Accredited', 'NBA Accredited (CSE, ECE)'],
  collegeCode: 'REC',
  tagline: 'Empowering Women Through Quality Engineering Education',
  aboutBrief: 'Ravindra Engineering College for Women (RCEW), Kurnool was established in 2008 under the visionary leadership of Sri G. Pullaiah. With a strong commitment to empowering women in technical fields, RCEW has emerged as a premier institution in Rayalaseema, offering cutting-edge technology education, robust industry connections, and an environment designed to nurture leadership and innovation.',
  principalMessage: 'Dear Students, Welcome to Ravindra Engineering College for Women. Our mission is to produce globally competent and socially responsible women engineers who can lead technological innovations. With state-of-the-art infrastructure, experienced faculty, and industry-aligned training, we ensure that every student is equipped to conquer the professional world. Our consistent placement record is a testament to the hard work of our faculty and the excellence of our students.',
  principalName: 'Dr. K. E. Sreenivasa Murthy',
  principalTitle: 'M.Tech., Ph.D., Principal, RCEW',
  principalImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  vision: 'To emerge as a premier global institution in technical education, training women engineers to acquire technological competency, research-driven capabilities, and ethical integrity, thereby leading the world with innovation and sustainable change.',
  mission: [
    'To impart state-of-the-art technological education with an emphasis on practical application and research.',
    'To foster an empowering environment that builds self-confidence, leadership, and ethical values in women engineers.',
    'To establish strong industry-institute collaborations for continuous skill enhancement and career growth.'
  ],
  contact: {
    address: 'RAVINDRA COLLEGE OF ENGINEERING FOR WOMEN(Autonomous), Near Venkayapalle, Pasupula Village, Nandikotkur Road, Kurnool – 518452, Andhra Pradesh – India.',
    phone: '+91 8639756876 (Admissions), +91 9948187766 (Placements), 08518-285088',
    email: 'principal@recw.ac.in, placementofficer@recw.ac.in',
    admissionsContact: {
      name: 'Mrs. G. Spandana',
      phone: '+91 8639756876'
    },
    placementsContact: {
      name: 'Mrs. Indira Priyadarshini',
      mobile: '+91 9948187766',
      landline: '08518-285088'
    },
    mapIframeUrl: 'https://maps.google.com/maps?q=Ravindra+College+of+Engineering+for+Women,+Nandikotkur+Road,+Venkayapalli,+Kurnool,+Andhra+Pradesh+518002&t=&z=15&ie=UTF8&iwloc=&output=embed',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    }
  }
};

export const STATS = [
  { id: 'students', label: 'Enrolled Students', value: 2400, suffix: '+' },
  { id: 'faculty', label: 'Faculty Members', value: 160, suffix: '+' },
  { id: 'departments', label: 'Academic Departments', value: 7, suffix: '' },
  { id: 'placements', label: 'Placement Rate', value: 95, suffix: '%' },
  { id: 'recruiters', label: 'Top Recruiters', value: 80, suffix: '+' },
  { id: 'alumni', label: 'Global Alumni', value: 5000, suffix: '+' }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'freshman',
    name: 'FRESHMAN (I B.Tech)',
    code: 'FRESHMAN',
    shortDesc: 'Foundational engineering sciences, mathematics, physics, chemistry, and communicative English for first-year B.Tech students.',
    fullDesc: 'FRESHMAN (I B.Tech) is the cornerstone of engineering education at Ravindra College of Engineering for Women. Dedicated to building strong analytical and scientific foundations, the department integrates Humanities, Basic Sciences (Mathematics, Physics, Chemistry), and fundamental engineering skill sets. Led by experienced faculty, the department ensures a smooth transition into specialized engineering streams with hands-on laboratories and holistic mentoring.',
    intake: 360,
    duration: '1 Year (I B.Tech Foundational)',
    established: 2008,
    labs: ['Engineering Physics Lab', 'Engineering Chemistry Lab', 'Communicative English & Language Lab', 'Programming for Problem Solving Lab', 'Engineering Graphics Studio'],
    careers: ['Core Engineering Foundation', 'Advanced Computing Readiness', 'Hardware & Embedded Foundations', 'Scientific Research & Development'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    hodName: 'Mrs. G. Spandana',
    hodDesignation: 'HoD',
    hodQualification: '(Ph.D)'
  },
  {
    id: 'cse',
    name: 'Computer Science and Engineering',
    code: 'CSE',
    shortDesc: 'Nurturing innovative software developers and computer scientists for the modern digital era.',
    fullDesc: 'At Ravindra College of Engineering for Women, the Computer Science and Engineering department is a launchpad for innovation and empowerment. Established in 2008, the NBA-accredited department has more than 420 students and 27 core faculty members dedicated to professional excellence, research, and contemporary computing education.',
    intake: 180,
    duration: '4 Years (B.Tech)',
    established: 2008,
    labs: ['Java Programming Lab', 'Advanced Data Structures Lab', 'Cloud Computing & IoT Lab', 'Mobile App Development Lab', 'Computer Networks Lab'],
    careers: ['Software Engineer', 'Full Stack Developer', 'Cloud Engineer', 'Cyber Security Analyst', 'Database Administrator'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    hodName: 'Dr. K Seshadri Ramana',
    hodDesignation: 'HoD & Professor',
    hodQualification: 'Ph.D'
  },
  {
    id: 'ece',
    name: 'Electronics and Communication Engineering',
    code: 'ECE',
    shortDesc: 'Connecting the physical and digital worlds through VLSI, communication systems, and embedded signal processing.',
    fullDesc: 'The NBA-accredited ECE department provides deep knowledge of hardware systems, microcontrollers, VLSI design, wireless networks, and IoT architectures. RCEW ECE students consistently win national level hackathons and secure placements in both core electronics and IT corporations.',
    intake: 120,
    duration: '4 Years (B.Tech)',
    established: 2008,
    labs: ['VLSI & Embedded Systems Lab', 'Analog & Digital Communications Lab', 'Microprocessors & Microcontrollers Lab', 'Digital Signal Processing Lab', 'Microwave Engineering Lab'],
    careers: ['Embedded Systems Engineer', 'VLSI Design Engineer', 'Telecom Systems Architect', 'IoT Solutions Expert', 'Hardware Test Analyst'],
    image: ECE_DEPT_LAB,
    hodName: 'Dr. B Madhusudhana Reddy',
    hodDesignation: 'HoD & Professor',
    hodQualification: 'Ph.D.'
  },
  {
    id: 'aids',
    name: 'Computer Science and Engineering (AI)',
    code: 'CAI',
    shortDesc: 'Undergraduate Program: Computer Science and Engineering with Artificial Intelligence specialization.',
    fullDesc: 'Designed to cater to the explosive demand for data intelligence, the Department of Computer Science and Engineering (AI) [CAI] trains students in algorithms, statistical models, natural language processing, computer vision, and big data pipeline engineering. Students work on real-world datasets and complete hands-on AI projects.',
    intake: 120,
    duration: '4 Years (B.Tech)',
    established: 2021,
    labs: ['AI & Neural Networks Lab', 'Big Data Analytics Lab', 'Machine Learning & Python Lab', 'Data Visualization Studio'],
    careers: ['Data Scientist', 'AI Research Engineer', 'Machine Learning Analyst', 'Business Intelligence Consultant', 'Data Architect'],
    image: AIDS_DEPT_LAB
  }
];

export const COURSE_OFFERINGS: CourseOffering[] = [
  { degree: 'B.Tech', branch: 'Computer Science and Engineering', duration: '4 Years', seats: 180, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Computer Science and Engineering (AI)', duration: '4 Years', seats: 120, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Electronics & Communication Engineering', duration: '4 Years', seats: 120, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Electrical & Electronics Engineering', duration: '4 Years', seats: 60, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Civil Engineering', duration: '4 Years', seats: 30, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'B.Tech', branch: 'Mechanical Engineering', duration: '4 Years', seats: 30, eligibility: '10+2 with Physics, Chemistry & Math, plus qualifying rank in AP EAPCET (EAMCET)' },
  { degree: 'MBA', branch: 'Finance, HR & Marketing Specializations', duration: '2 Years', seats: 60, eligibility: 'Any graduate degree with 50%+ marks, plus qualifying score in AP ICET' }
];

export const ADMISSION_PROCESS = [
  { step: '1', title: 'Entrance Exams', desc: 'Appear for AP EAPCET (for B.Tech courses) or AP ICET (for postgraduate MBA course) state counseling.' },
  { step: '2', title: 'Web Counseling Selection', desc: 'Select Ravindra Engineering College for Women (College Code: RAVW) as your preferred choice in the web options entry.' },
  { step: '3', title: 'Verification', desc: 'Undergo document verification at certified government counseling centers.' },
  { step: '4', title: 'Reporting & Booking', desc: 'Upon seat allotment, report to our lush Kurnool campus with academic credentials to confirm admission.' }
];

export const SCHOLARSHIPS = [
  { name: 'Jagananna Amma Vodi & Vasathi Deevena', eligibility: 'AP State Government scheme offering full tuition reimbursement and hostel support for eligible backward and minority classes.' },
  { name: 'Merit Scholarships (RCEW Special)', eligibility: 'Up to 50% waiver in college special fees for state board / CBSE top scorers scoring above 95% in intermediate exams.' },
  { name: 'Pragati Scholarship Scheme', eligibility: 'AICTE scholarship of ₹50,000 per annum specifically designed to aid and promote women engineers.' },
  { name: 'Sports & Cultural Excellence Grants', eligibility: 'Tailored tuition concessions for national and state-level sports medalists.' }
];

export const PLACEMENT_STATS: PlacementsData = {
  highestPackage: '₹14.5 Lakhs Per Annum',
  averagePackage: '₹4.8 Lakhs Per Annum',
  placementPercentage: '96.4%',
  recruitersCount: 85,
  studentsPlacedThisYear: 382,
  topRecruiters: [
    { name: 'TATA Consultancy Services', logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200' },
    { name: 'Cognizant (CTS)', logoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200' },
    { name: 'Wipro Technologies', logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200' },
    { name: 'Infosys Limited', logoUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200' },
    { name: 'Accenture India', logoUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=200' },
    { name: 'Capgemini', logoUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200' },
    { name: 'Hexaware Technologies', logoUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=200' },
    { name: 'HCL Technologies', logoUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=200' },
    { name: 'Tech Mahindra', logoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200' },
    { name: 'IBM India', logoUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=200' },
    { name: 'L&T Technology Services', logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200' },
    { name: 'Virtusa Corporation', logoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=200' }
  ],
  successStories: [
    {
      name: 'Y. Sai Lahari',
      branch: 'CSE',
      company: 'TCS Digital',
      package: '₹14.5 LPA',
      quote: 'RCEW gave me the confidence to stand out. The intensive coding camps and soft skill training from the 2nd year onwards prepared me perfectly for TCS Digital rounds.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'M. Vaishnavi',
      branch: 'ECE',
      company: 'Cognizant GenC Next',
      package: '₹9.2 LPA',
      quote: 'The embedded systems and microcontrollers training combined with software bootcamps made it possible for me to clear multiple job selections.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'K. Divya Sree',
      branch: 'AI & DS',
      company: 'Hexaware Technologies',
      package: '₹8.4 LPA',
      quote: 'Studying AI and Data Science at RCEW was an amazing experience. The machine learning labs are fully equipped and mentors are immensely supportive.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'P. Bhavana',
      branch: 'CSE',
      company: 'Wipro NLTH',
      package: '₹7.5 LPA',
      quote: 'The placement cell arranged special mock interview drills that boosted my confidence immensely. Grateful for the faculty support!',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'S. Swathi',
      branch: 'ECE',
      company: 'Accenture',
      package: '₹6.8 LPA',
      quote: 'Hands-on lab work and regular hackathons provided standard industry exposure. Getting selected at Accenture is a dream come true.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'G. Harika',
      branch: 'CSE',
      company: 'Infosys Specialist Programmer',
      package: '₹9.5 LPA',
      quote: 'Coding bootcamps from 1st year helped me crack the competitive Infosys HackWithInfy challenge and secure a specialist programmer role.',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300'
    }
  ]
};

export const COMPANY_VISITS_DATA: CompanyVisitItem[] = [
  { sno: 1, company: 'Value labs', ctc: '27 Lakh', category: 'Super Dream' },
  { sno: 2, company: 'Wiley Edge', ctc: '11 Lakh', category: 'Super Dream' },
  { sno: 3, company: 'Crisil', ctc: '7.7 Lakh', category: 'Dream' },
  { sno: 4, company: 'TCS (DIGITAL)', ctc: '7 Lakh', category: 'Dream' },
  { sno: 5, company: 'Technovert', ctc: '6.6 Lakh', category: 'Dream' },
  { sno: 6, company: 'Hexaware', ctc: '6 Lakh', category: 'Dream' },
  { sno: 7, company: 'EPAM', ctc: '6 Lakh', category: 'Dream' },
  { sno: 8, company: 'ADP', ctc: '6 Lakh', category: 'Dream' },
  { sno: 9, company: 'Deloitte', ctc: '6 Lakh', category: 'Dream' },
  { sno: 10, company: 'Infor', ctc: '6 Lakh', category: 'Dream' },
  { sno: 11, company: 'Manomay', ctc: '5.5 Lakh', category: 'Dream' },
  { sno: 12, company: 'GEP', ctc: '5.5 Lakh', category: 'Dream' },
  { sno: 13, company: 'Efftronics', ctc: '5.2 Lakh', category: 'Dream' },
  { sno: 14, company: 'Persistent Systems (AWS)', ctc: '5 Lakh', category: 'Dream' },
  { sno: 15, company: 'Caddycode Solutions Pvt.ltd', ctc: '5 Lakh', category: 'Dream' },
  { sno: 16, company: 'DataBeats', ctc: '5 Lakh', category: 'Dream' },
  { sno: 17, company: 'CDK', ctc: '5 Lakh', category: 'Dream' },
  { sno: 18, company: 'Pal Tech', ctc: '5 Lakh', category: 'Dream' },
  { sno: 19, company: 'Cognizant (CTS) Elevate', ctc: '4.5 Lakh', category: 'Standard' },
  { sno: 20, company: 'Full Creative', ctc: '4.5 Lakh', category: 'Standard' },
  { sno: 21, company: 'Vodafone', ctc: '4.5 Lakh', category: 'Standard' },
  { sno: 22, company: 'Deloitte', ctc: '4.4 Lakh', category: 'Standard' },
  { sno: 23, company: 'HCL', ctc: '4.25 Lakh', category: 'Standard' },
  { sno: 24, company: 'DXC', ctc: '4.2 Lakh', category: 'Standard' },
  { sno: 25, company: 'Market Simplified', ctc: '4.2 Lakh', category: 'Standard' },
  { sno: 26, company: 'Cognizant (CTS) GenC', ctc: '4 Lakh', category: 'Standard' },
  { sno: 27, company: 'Exelacom', ctc: '4 Lakh', category: 'Standard' },
  { sno: 28, company: 'MITSGO', ctc: '4 Lakh', category: 'Standard' },
  { sno: 29, company: 'TCS Codevita (NQT)', ctc: '3.6 Lakh', category: 'Standard' },
  { sno: 30, company: 'TCS (NINJA)', ctc: '3.6 Lakh', category: 'Standard' },
  { sno: 31, company: 'iLensys Technologies Pvt.ltd', ctc: '3.6 Lakh', category: 'Standard' },
  { sno: 32, company: 'TechM', ctc: '3.5 Lakh', category: 'Standard' },
  { sno: 33, company: 'CSS CORP', ctc: '3.5 Lakh', category: 'Standard' },
  { sno: 34, company: 'Sailotech', ctc: '3.5 Lakh', category: 'Standard' },
  { sno: 35, company: 'ATC', ctc: '3 Lakh', category: 'Standard' },
  { sno: 36, company: 'Mold – Tek', ctc: '2.8 Lakh', category: 'Standard' },
  { sno: 37, company: 'Suryatech Solutions', ctc: '3.3 Lakh / 2.6 Lakh', category: 'Standard' },
  { sno: 38, company: 'Focus Edumatics', ctc: '3.5 Lakh / 2.5 Lakh', category: 'Standard' },
  { sno: 39, company: 'Enlight CAD ENGINEERING', ctc: '2.2 Lakh', category: 'Standard' }
];

export const YEARLY_PLACEMENT_SUMMARY = [
  { year: '2024 – 2025', count: 209 },
  { year: '2023 – 2024', count: 151 },
  { year: '2022 – 2023', count: 156 },
  { year: '2021 – 2022', count: 241 },
];

export const PLACED_ACADEMIC_YEARS = [
  '2024 - 25',
  '2023 - 24',
  '2022 - 23',
  '2021 - 22',
  '2020 - 21',
  '2019 - 20',
  '2018 - 19',
  '2017 - 18',
  '2016 - 17',
  '2015 - 16',
  '2014 - 15',
];

export const PLACED_STUDENTS_ROSTER: PlacedStudentRecord[] = [
  { sno: 1, rollNo: '153T1A0401', name: 'AMBATIANKITHA', employer: 'ACCENTURE', ctc: '3.75 LPA', branch: 'ECE' },
  { sno: 2, rollNo: '153T1A0402', name: 'B HIMA BINDU', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 3, rollNo: '153T1A0403', name: 'BRACHANA', employer: 'DXC', ctc: '3.24 LPA', branch: 'ECE' },
  { sno: 4, rollNo: '153T1A0404', name: 'BANAVASI PAVANI', employer: 'Talentio', ctc: '3 LPA', branch: 'ECE' },
  { sno: 5, rollNo: '153T1A0405', name: 'BEGENEPALLIVAISHNAVI', employer: 'Global Edge', ctc: '2.65 LPA', branch: 'ECE' },
  { sno: 6, rollNo: '153T1A0406', name: 'BONTHALA NAGAMALLIKA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 7, rollNo: '153T1A0407', name: 'C NARMADA', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 8, rollNo: '153T1A0408', name: 'CHAKALI PAVANI', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 9, rollNo: '153T1A0409', name: 'CHENNURUVAISHNAVI', employer: 'ACCENTURE', ctc: '3.75 LPA', branch: 'ECE' },
  { sno: 10, rollNo: '153T1A0411', name: 'CHINNAPOLU KALPANA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 11, rollNo: '153T1A0413', name: 'D Priyanka', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 12, rollNo: '153T1A0414', name: 'DASARI LAVANYA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 13, rollNo: '153T1A0415', name: 'DESAISUPRIYA', employer: 'ACCENTURE', ctc: '3.75 LPA', branch: 'ECE' },
  { sno: 14, rollNo: '153T1A0416', name: 'DOMA HEMALATHA', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 15, rollNo: '153T1A0418', name: 'G USHA RANI', employer: 'FACE', ctc: '2.88 LPA', branch: 'ECE' },
  { sno: 16, rollNo: '153T1A0419', name: 'GOPIREDDY SAI MANASA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 17, rollNo: '153T1A0421', name: 'GUMPULA ARADHANA', employer: 'TCS', ctc: '3.36 LPA', branch: 'ECE' },
  { sno: 18, rollNo: '153T1A0423', name: 'H SHAZIA BEGUM', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 19, rollNo: '153T1A0424', name: 'IMMADISETTY SUSHMA', employer: 'TCS, Wipro', ctc: '3.36 LPA', branch: 'ECE' },
  { sno: 20, rollNo: '153T1A0425', name: 'INDRAKANTI SUMA', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 21, rollNo: '153T1A0426', name: 'JARAGALAKEERTHICHOWDARY', employer: 'TCS', ctc: '3.36 LPA', branch: 'ECE' },
  { sno: 22, rollNo: '153T1A0427', name: 'JELLI VANAJAKSHI', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 23, rollNo: '153T1A0428', name: 'KHARSHITHA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 24, rollNo: '153T1A0429', name: 'K MANASA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 25, rollNo: '153T1A0431', name: 'KAREEMSABGARI FAANUS BANU', employer: 'FACE', ctc: '2.88 LPA', branch: 'ECE' },
  { sno: 26, rollNo: '153T1A0433', name: 'KATA MOUNIKA', employer: 'FACE', ctc: '2.88 LPA', branch: 'ECE' },
  { sno: 27, rollNo: '153T1A0434', name: 'KONADEEPTHI', employer: 'TCS', ctc: '3.36 LPA', branch: 'ECE' },
  { sno: 28, rollNo: '153T1A0435', name: 'KONDETI AMRUTHA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 29, rollNo: '153T1A0436', name: 'KUNCHAPU VADDE SWATHI', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 30, rollNo: '153T1A0438', name: 'MUDIAMHARITHA', employer: 'DXC', ctc: '3.24 LPA', branch: 'ECE' },
  { sno: 31, rollNo: '153T1A0439', name: 'M RAHILA SIDDIQUA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 32, rollNo: '153T1A0441', name: 'MADASU MOUNIKA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 33, rollNo: '153T1A0444', name: 'MANJULA SWETHA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 34, rollNo: '153T1A0446', name: 'MANNE MAHESWARI', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 35, rollNo: '153T1A0447', name: 'MARAM PAVANI', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 36, rollNo: '153T1A0448', name: 'MARELLA HARITHA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 37, rollNo: '153T1A0451', name: 'MOHAMMEDIZEBAAFREEZ', employer: 'Wipro', ctc: '3.5 LPA', branch: 'ECE' },
  { sno: 38, rollNo: '153T1A0452', name: 'NAKKA HEMALATHA', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 39, rollNo: '153T1A0453', name: 'NAGIRI MANJUSHA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 40, rollNo: '153T1A0454', name: 'NARUVADI PRAVALLIKA', employer: 'Talentio', ctc: '3 LPA', branch: 'ECE' },
  { sno: 41, rollNo: '153T1A0455', name: 'PATLEGAR PRIYANKA', employer: 'Talentio', ctc: '3 LPA', branch: 'ECE' },
  { sno: 42, rollNo: '153T1A0456', name: 'PESARAI SAIMANI MANJUSHA', employer: 'FACE', ctc: '2.88 LPA', branch: 'ECE' },
  { sno: 43, rollNo: '153T1A0459', name: 'POTLAPATIVIMALA', employer: 'NTT Data', ctc: '3 LPA', branch: 'ECE' },
  { sno: 44, rollNo: '153T1A0460', name: 'RAICHUR SANOVAR BEGUM', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 45, rollNo: '153T1A0462', name: 'S MD SHAHINA BEGUM', employer: 'FACE', ctc: '2.88 LPA', branch: 'ECE' },
  { sno: 46, rollNo: '153T1A0463', name: 'SSREETEJA', employer: 'Wipro', ctc: '3.5 LPA', branch: 'ECE' },
  { sno: 47, rollNo: '153T1A0465', name: 'SANIVARAPUVANITHA', employer: 'CTS', ctc: '2.26 LPA', branch: 'ECE' },
  { sno: 48, rollNo: '153T1A0471', name: 'SHAIK RESHMA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 49, rollNo: '153T1A0473', name: 'SHAIK SHAMSHUN', employer: 'Mind Wave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 50, rollNo: '153T1A0476', name: 'SOMA SAI SANTHOSHI', employer: 'FACE, Mindwave', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 51, rollNo: '153T1A0477', name: 'SRIRAM APARNA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 52, rollNo: '153T1A0478', name: 'SUDIREDDY DHARANI', employer: 'Talentio', ctc: '3 LPA', branch: 'ECE' },
  { sno: 53, rollNo: '153T1A0479', name: 'SYEDMEERAFREEN', employer: 'Wipro', ctc: '3.5 LPA', branch: 'ECE' },
  { sno: 54, rollNo: '153T1A0480', name: 'SYED MUBEENA RANI', employer: 'Talentio', ctc: '3 LPA', branch: 'ECE' },
  { sno: 55, rollNo: '153T1A0481', name: 'SYED SHABANA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 56, rollNo: '153T1A0482', name: 'TALLURI YASWITHA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 57, rollNo: '153T1A0485', name: 'V SREEMADHURI', employer: 'Cyient', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 58, rollNo: '153T1A0486', name: 'VENKATAPURAM SRAVANI', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 59, rollNo: '153T1A0487', name: 'VUNDAVELLI BHAVANA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 60, rollNo: '153T1A0489', name: 'YEKKANTI HARITHA', employer: 'Palle Technologies', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 61, rollNo: '153T1A0503', name: 'ANJUM', employer: 'CTS', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 62, rollNo: '153T1A0506', name: 'AYTHAMRAJU SAI YAMINI MOULIKA', employer: 'CGI', ctc: '3.2 LPA', branch: 'CSE' },
  { sno: 63, rollNo: '153T1A0507', name: 'HAVEELA RANI', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 64, rollNo: '153T1A0508', name: 'B N HARIKA', employer: 'BROADRIDGE', ctc: '3.65 LPA', branch: 'CSE' },
  { sno: 65, rollNo: '153T1A0509', name: 'B SRAVANI', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 66, rollNo: '153T1A0512', name: 'BACHU PRIYANKA', employer: 'BROADRIDGE', ctc: '3.65 LPA', branch: 'CSE' },
  { sno: 67, rollNo: '153T1A0513', name: 'BANDI SAI YAMINI NAYANA', employer: 'NTTDATA', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 68, rollNo: '153T1A0515', name: 'BOLLAPU HARSHITHA', employer: 'TALENTIO', ctc: '3 LPA', branch: 'CSE' },
  { sno: 69, rollNo: '153T1A0516', name: 'KEERTHI', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 70, rollNo: '153T1A0518', name: 'CHALLA PAVANI', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 71, rollNo: '153T1A0519', name: 'CHANDAPURAM BHAVANI', employer: 'INFOSYS', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 72, rollNo: '153T1A0520', name: 'CHINNAMUTHYALA LAVANYA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 73, rollNo: '153T1A0521', name: 'D NAVYA SREE', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 74, rollNo: '153T1A0523', name: 'D SUSHRUTHA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 75, rollNo: '153T1A0524', name: 'DVY MAHESWARI', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 76, rollNo: '153T1A0529', name: 'GANDLA SWAPNA', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 77, rollNo: '153T1A0531', name: 'HARDHAGERI BURJINTI MAMATHA', employer: 'IBM', ctc: '4.25 LPA', branch: 'CSE' },
  { sno: 78, rollNo: '153T1A0532', name: 'JANGAM UMA', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 79, rollNo: '153T1A0533', name: 'JANGAM VASAVI', employer: 'CTS', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 80, rollNo: '153T1A0537', name: 'SINDHU BHARGAVI', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 81, rollNo: '153T1A0540', name: 'K V SRIRAMYA', employer: 'TCS', ctc: '3.35 LPA', branch: 'CSE' },
  { sno: 82, rollNo: '153T1A0541', name: 'KAGGOLU SAI NAVYA SRI', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 83, rollNo: '153T1A0543', name: 'KANDUKURI LIKHITHA', employer: 'IBM', ctc: '4.25 LPA', branch: 'CSE' },
  { sno: 84, rollNo: '153T1A0544', name: 'KASIREDDY MOUNIKA', employer: 'IBM', ctc: '4.25 LPA', branch: 'CSE' },
  { sno: 85, rollNo: '153T1A0545', name: 'KATHA LAVANYA', employer: 'TALENTIO', ctc: '3 LPA', branch: 'CSE' },
  { sno: 86, rollNo: '153T1A0546', name: 'KORRAPOLU DIVYA DANIEL', employer: 'TALENTIO', ctc: '3 LPA', branch: 'CSE' },
  { sno: 87, rollNo: '153T1A0547', name: 'KOTHUR AISHWARYA', employer: 'WIPRO', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 88, rollNo: '153T1A0548', name: 'KOTTAMASOOM PRIYANKA', employer: 'TCS', ctc: '3.35 LPA', branch: 'CSE' },
  { sno: 89, rollNo: '153T1A0549', name: 'KOULURI HIMABINDU', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 90, rollNo: '153T1A0551', name: 'LAKA LAKSHMI SUSHMA', employer: 'TCS', ctc: '3.35 LPA', branch: 'CSE' },
  { sno: 91, rollNo: '153T1A0552', name: 'LINGAREDDY SAI NIKHILA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 92, rollNo: '153T1A0553', name: 'CHANDANA PRIYA', employer: 'VITWIT', ctc: '3.24 LPA', branch: 'CSE' },
  { sno: 93, rollNo: '153T1A0554', name: 'CHARITHA REDDY', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 94, rollNo: '153T1A0555', name: 'HARITHA', employer: 'TALENTIO', ctc: '3 LPA', branch: 'CSE' },
  { sno: 95, rollNo: '153T1A0556', name: 'HEMA', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 96, rollNo: '153T1A0558', name: 'SANA TAHSEEN', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 97, rollNo: '153T1A0559', name: 'AISHWARYA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 98, rollNo: '153T1A0560', name: 'REETHU', employer: 'DXC', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 99, rollNo: '153T1A0561', name: 'M SWALEHA TABASSUM', employer: 'CTS', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 100, rollNo: '153T1A0562', name: 'MADASU MAMATHA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 101, rollNo: '153T1A0563', name: 'MAILA KEERTHI NAIDU', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 102, rollNo: '153T1A0564', name: 'MANDA SRAVYA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 103, rollNo: '153T1A0565', name: 'MARATHI TEJESWARI BAI', employer: 'ABC', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 104, rollNo: '153T1A0569', name: 'NUKA JYOTHI VENKATA SIREESHA', employer: 'TCS', ctc: '3.35 LPA', branch: 'CSE' },
  { sno: 105, rollNo: '153T1A0571', name: 'RAMYA', employer: 'ACCENTURE', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 106, rollNo: '153T1A0572', name: 'P S SWETHA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 107, rollNo: '153T1A0573', name: 'SHAHISTHA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 108, rollNo: '153T1A0576', name: 'PADAKANDLA PRATHYUSHA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 109, rollNo: '153T1A0577', name: 'PAGIDALA VINITHA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 110, rollNo: '153T1A0578', name: 'PAKKIR KARI NIKITHA BAI', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 111, rollNo: '153T1A0580', name: 'PEDDAPADU SRAVANI', employer: 'MPAHSIS', ctc: '3.25 LPA', branch: 'CSE' },
  { sno: 112, rollNo: '153T1A0583', name: 'POTHURU SREELEKHA', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 113, rollNo: '153T1A0584', name: 'POTLAPATI USHA', employer: 'BROADRIDGE', ctc: '3.65 LPA', branch: 'CSE' },
  { sno: 114, rollNo: '153T1A0585', name: 'POTTALAPADU MANASA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 115, rollNo: '153T1A0587', name: 'PRIYANKA', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 116, rollNo: '153T1A0588', name: 'VINITHA', employer: 'ACCENTURE', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 117, rollNo: '153T1A0589', name: 'POTHURU SAI LAVANYA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 118, rollNo: '153T1A0590', name: 'SANEM SANDHYA RANI', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 119, rollNo: '153T1A0592', name: 'SHAIK AFREEN', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 120, rollNo: '153T1A0593', name: 'SHAIK BUSHRA SULTANA', employer: 'PALLE TECHNOLOGIES', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 121, rollNo: '153T1A0595', name: 'SHAIK RESHMA', employer: 'TALENTIO', ctc: '3 LPA', branch: 'CSE' },
  { sno: 122, rollNo: '153T1A0597', name: 'SHAIK RUHI AFSHA', employer: 'SYNTEL', ctc: '3.2 LPA', branch: 'CSE' },
  { sno: 123, rollNo: '153T1A0599', name: 'SHAIK SHAHINA PARVEEN', employer: 'TALENTIO', ctc: '3 LPA', branch: 'CSE' },
  { sno: 124, rollNo: '153T1A05A1', name: 'SHAIK SHEKUN', employer: 'TALENTIO', ctc: '3 LPA', branch: 'CSE' },
  { sno: 125, rollNo: '153T1A05A3', name: 'SWATHI CHAWAN', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 126, rollNo: '153T1A05A5', name: 'APARNA', employer: 'INFOSYS', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 127, rollNo: '153T1A05A6', name: 'CHANDRAKALA', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 128, rollNo: '153T1A05A7', name: 'LAKSHMI PARVATHI', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 129, rollNo: '153T1A05A9', name: 'TELUGU JYOTHSNA', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 130, rollNo: '153T1A05B0', name: 'THIKKANNAGARI KUSUMA KUMARI', employer: 'CTS', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 131, rollNo: '153T1A05B1', name: 'VADDE ALAKUNTALA PRIYANKA', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 132, rollNo: '153T1A05B3', name: 'VANGALA INDRAJA', employer: 'INFOSYS', ctc: '3.5 LPA', branch: 'CSE' },
  { sno: 133, rollNo: '153T1A05B4', name: 'VATTI VEERA NAGA SANTHI', employer: 'FACE', ctc: '3 LPA', branch: 'CSE' },
  { sno: 134, rollNo: '153T1A05B5', name: 'VIRIVINTI TEJASWINI', employer: 'TCS', ctc: '3.35 LPA', branch: 'CSE' },
  { sno: 135, rollNo: '153T1A05B6', name: 'VUDCHINTHAL MOHAMMED HUSNA FARAZ', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'ECE' },
  { sno: 136, rollNo: '153T1A05B7', name: 'YEDDULA MOUNIKA', employer: 'MINDWAVE', ctc: '2.8 LPA', branch: 'CSE' },
  { sno: 137, rollNo: '153T1A05B8', name: 'YEDHURUPATI AMANI', employer: 'GENPACT', ctc: '2.8 LPA', branch: 'CSE' },
];

import LIBRARY_IMG from './assets/images/rcew_library_1785857412956.png';
import LABS_IMG from './assets/images/rcew_labs_1785857439260.jpg';
import SPORTS_YOGA_IMG from './assets/images/rcew_sports_yoga_1785858954194.jpg';
import TRANSPORT_IMG from './assets/images/rcew_transport_1785858124524.png';
import HOSTEL_IMG from './assets/images/rcew_hostel_1785858724076.png';
import AUDITORIUM_DANCE_IMG from './assets/images/rcew_auditorium_dance_1785858845832.jpg';

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    name: 'Central Library',
    description: 'A massive hub of knowledge housing over 35,000 volumes, 120 national and international physical journals, and digital subscription portals (IEEE, Springer, Delnet) with high-speed internet desks.',
    image: LIBRARY_IMG,
    highlights: ['24/7 Digital Hub access', 'Over 35,000 physical volumes', 'Air-Conditioned reading zones', 'Plagiarism verification software access']
  },
  {
    id: 'laboratories',
    name: 'State-of-the-Art Labs',
    description: 'Specialized lab setups for research and development. From advanced machine learning computing systems to specialized VLSI testing equipment and physics & electronics analyzers.',
    image: LABS_IMG,
    highlights: ['NVIDIA AI workstations', 'Latest testing equipment', 'Dedicated technical staff', 'High speed Gigabit networking']
  },
  {
    id: 'hostel',
    name: 'Secure Girls Hostel',
    description: 'An expansive home away from home with round-the-clock structural CCTV surveillance, biometric security, nutritious vegetarian food dining, clean pure drinking water filtration, and standard hygiene care.',
    image: HOSTEL_IMG,
    highlights: ['24/7 Wardens & Security guards', 'Nutritious clean dining hall', 'Solar hot water facility', 'Recreational sports & common lounges']
  },
  {
    id: 'sports',
    name: 'Sports & Fitness Arena',
    description: 'Promoting a balanced, healthy style of living with our comprehensive grounds for volleyball, throwball, yoga fitness, table tennis, badminton, and a fully equipped gymnasium with certified trainers.',
    image: SPORTS_YOGA_IMG,
    highlights: ['International Yoga Day celebrations', 'Volleyball & Throwball grounds', 'Annual sports festival (RECSpo)', 'Certified physical trainers']
  },
  {
    id: 'transport',
    name: 'Transportation Fleet',
    description: 'A fleet of well-maintained safety college buses, mapping all primary junctions across Kurnool city, Nandyal, Nandikotkur, Dhone, and neighboring major towns.',
    image: TRANSPORT_IMG,
    highlights: ['GPS-equipped modern buses', 'Extensive route coverage', 'Experienced drivers', 'Dedicated grievance support']
  },
  {
    id: 'auditorium',
    name: 'Centenary Auditorium & Stage Events',
    description: 'A magnificent, fully centralized air-conditioned hall with high-end acoustic sound boards and stage setup for cultural dance performances, sports, and international event celebrations.',
    image: AUDITORIUM_DANCE_IMG,
    highlights: ['1,000+ guest seating size', 'Top-tier Acoustic systems', 'Host for Cultural Fests & Dance', 'Stage & cultural event suites']
  }
];

export const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', caption: 'Convocation Ceremony Day' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', caption: 'Interactive Brainstorming Hackathon' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', caption: 'Students Collaborating in AI Lab' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', caption: 'Chief Guest Speech at Annual Fest' },
  { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', caption: 'Cultural Traditional Dance Day' },
  { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', caption: 'Peaceful Reading Desks in Library' }
];

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: 'n1',
    title: 'Admissions Open for B.Tech & MBA Academic Year 2026-27',
    date: 'July 10, 2026',
    category: 'Announcement',
    description: 'The counseling codes are active. Candidates qualified in AP EAPCET / AP ICET can now exercise Web options for RAVW. Apply today to secure a seat at Kurnool’s premium girls engineering college.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'e1',
    title: 'National Level Hackfest - RCEW Ignite 2026 Scheduled',
    date: 'Aug 24, 2026',
    category: 'Event',
    description: 'Our annual multi-state collegiate engineering hackathon "Ignite 2026" returns this August. Grand cash prizes of over ₹1,50,000 are up for grabs for the best solutions in Smart City & Healthcare technologies.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'n2',
    title: 'RCEW Achieves Stellar 96.4% Placements Record',
    date: 'June 18, 2026',
    category: 'News',
    description: 'We congratulate our senior students on setting a new record for placement offers in 2025-26. TCS, Cognizant, Wipro, and Accenture led the cohort, with a highest package of ₹14.5 LPA.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'e2',
    title: 'Expert Seminar: Generative AI & Large Language Models',
    date: 'Sept 05, 2026',
    category: 'Event',
    description: 'A professional tech-seminar hosted by the Department of AI & Data Science, inviting senior research scientists from Microsoft and Google India to share perspectives on LLM engineering.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'P. Kavitha Sree',
    role: 'Associate Software Architect',
    branch: 'CSE',
    batch: 'Class of 2022',
    rating: 5,
    quote: 'Ravindra Engineering College for Women provided a life-transforming phase for me. Coming from a simple town, the English lab, soft skills trainers, and consistent coding challenges gave me the professional drive to clear standard multinational interviews effortlessly.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't2',
    name: 'S. Fathima Bi',
    role: 'Embedded Hardware Developer',
    branch: 'ECE',
    batch: 'Class of 2023',
    rating: 5,
    quote: 'The academic support system and girls-centric growth atmosphere at RCEW was amazing. Doing real hardware projects in VLSI and microcontrollers labs gave me excellent conceptual depth that is helping me greatly in my core industrial career.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't3',
    name: 'D. Harshitha Reddy',
    role: 'Data Analyst at Infosys',
    branch: 'CSE',
    batch: 'Class of 2024',
    rating: 5,
    quote: 'Our principal and faculty members were extremely supportive during my student years. The rigorous preparation classes, mock tech interviews, and personality bootcamps played a crucial role in landing me on my dream corporate pathway.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Where is Ravindra Engineering College for Women located?',
    answer: 'RCEW is beautifully situated on the Nandikotkur Road at Venkayapalli, which is roughly 6 kilometers from the Kurnool City Railway Station and Main Bus Stand. It is easily accessible via public buses and college transport.'
  },
  {
    question: 'Is Ravindra Engineering College for Women NAAC and NBA accredited?',
    answer: 'Yes, RCEW is NAAC-accredited with a highly favorable grade. Its flagship core programs—B.Tech in Computer Science & Engineering (CSE) and B.Tech in Electronics & Communication Engineering (ECE)—are accredited by the National Board of Accreditation (NBA).'
  },
  {
    question: 'What is the college code for counseling options?',
    answer: 'The counseling code for Ravindra Engineering College for Women under both AP EAPCET (EAMCET) and AP ICET systems is "RAVW".'
  },
  {
    question: 'How secure is the hostel facility inside the campus?',
    answer: 'RCEW prioritizes complete security. The girls hostel is located inside the secure campus boundaries, secured with 24/7 guarded checkposts, comprehensive CCTV systems, biometric scanning registers, and resident wardens who reside inside the block.'
  },
  {
    question: 'Does the college provide placement training?',
    answer: 'Yes! RCEW has a dedicated Training and Placement (T&P) cell. Training starts as early as the 2nd year, covering quantitative aptitude, logical reasoning, verbal communication, full-stack programming, mock coding tests, and professional interview behavioral drills.'
  },
  {
    question: 'What financial aid or scholarships are accepted?',
    answer: 'We accept and support all central and state government scholarships, including Jagananna Amma Vodi, Vasathi Deevena, and AICTE’s Pragati Scheme for female engineering students. Additionally, RCEW offers special merit concessions for intermediate board toppers.'
  }
];
