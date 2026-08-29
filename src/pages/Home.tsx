import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, ShieldCheck, Award, GraduationCap, CheckCircle2, ChevronRight,
  BookOpen, Star, TrendingUp, Sparkles, Building2, Globe, Users, Bell,
  FileText, Calendar, ExternalLink, Search, DollarSign, Download, ChevronDown, MapPin, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { DEPARTMENTS, NEWS_EVENTS, PLACEMENT_STATS, COLLEGE_INFO } from '../data';

// Import newly added project assets
import MUGDHA_CELEBRATIONS_IMAGE from '../assets/images/rcew_mugdha_celebrations.jpg';
import VISUAL_TOUR_BOOTCAMP from '../assets/images/rcew_visual_tour_bootcamp.jpg';
import VISUAL_TOUR_WORKSHOP from '../assets/images/rcew_visual_tour_workshop.jpg';
import VISUAL_TOUR_LABS from '../assets/images/rcew_visual_tour_labs.jpg';
import DRONE_DEMO_IMAGE from '../assets/images/rcew_drone_demo.jpg';
import TCS_ACCENTURE_IMAGE from '../assets/images/rcew_tcs_accenture_placements.png';
import WALMART_PLACEMENT_IMAGE from '../assets/images/rcew_walmart_placement.png';
import ADP_PLACEMENT_IMAGE from '../assets/images/rcew_adp_placement.png';
import TCS_DIGITAL_IMAGE from '../assets/images/rcew_tcs_digital_placement.png';

// Imported Home Page Edge Banners & User Showcase Photos
import ADMISSIONS_POSTER_2025 from '../assets/images/rcew_admissions_poster_2025.png';
import CLASSICAL_DANCE_PERFORMERS from '../assets/images/rcew_classical_dance_performers.jpg';
import HOME_FACULTY_EVENT from '../assets/images/rcew_home_faculty_event.png';
import HOME_DRONE_INNOVATION from '../assets/images/rcew_home_drone_innovation.png';
import HOME_BUILDING_FRONT from '../assets/images/rcew_home_building_front.png';
import HOME_NIELIT_BOOTCAMP from '../assets/images/rcew_nielit_bootcamp_lamp_lighting.png';
import HOME_TECH_LAB_EVENT from '../assets/images/rcew_home_tech_lab_event.png';
import SWASTHA_AUDITORIUM_IMAGE from '../assets/images/rcew_swastha_auditorium_view.png';
import SPEAKEASY_FLASH_THEATER from '../assets/images/rcew_speakeasy_main_flash_theater.png';
import HOME_STUDENTS_PROJECT_LAB from '../assets/images/rcew_home_students_project_lab.png';
import NSS_EARTH_WEEK_IMAGE from '../assets/images/rcew_nss_earth_week.png';
import NIELIT_FELICITATIONS_IMAGE from '../assets/images/rcew_nielit_felicitations.png';
import SEMINAR_LAB_PRESENTATION_IMAGE from '../assets/images/rcew_seminar_lab_presentation.jpg';




// 1. CIRCULARS DATA (84 entries)
const CIRCULARS_DATA = [
  { id: 1, date: '25.06.2026', title: 'Circular - Holiday in view of Muharram', link: 'https://drive.google.com/file/d/136uLkN22LZFKA_MS9WwELT4m_lRP1SNA/view?usp=drive_link' },
  { id: 2, date: '22.06.2026', title: 'Circular - Commencement of Classwork for II & III B.Tech', link: '#' },
  { id: 3, date: '20.06.2026', title: 'Circular regarding International Yoga Day', link: '#' },
  { id: 4, date: '27.05.2026', title: 'Circular - Holiday in view of Bakrid festival', link: '#' },
  { id: 5, date: '13.04.2026', title: 'Circular - Holiday in view of Dr. B R Ambedkar Jayanthi', link: '#' },
  { id: 6, date: '02.04.2026', title: 'Circular - Holiday in view of Good Friday', link: '#' },
  { id: 7, date: '26.03.2026', title: 'Circular - Holidays in view of SriRama Navami Festival', link: '#' },
  { id: 8, date: '18.03.2026', title: 'Circular - Holidays in view of Ugadi & Ramzan Festivals', link: '#' },
  { id: 9, date: '10.03.2026', title: 'Circular - Fee Reimbursement Amount Released for SC Category Students.', link: '#' },
  { id: 10, date: '09.03.2026', title: 'Circular reg. Fraudulent Phone Calls and Messages from Unknown Persons', link: '#' },
  { id: 11, date: '02.03.2026', title: 'Holiday in view of Holi Festival', link: '#' },
  { id: 12, date: '24.01.2026', title: '77th Republic Day Celebrations - Circular', link: '#' },
  { id: 13, date: '10.01.2026', title: 'Holidays in view of Sankranthi Festival', link: '#' },
  { id: 14, date: '31.12.2025', title: 'Holiday in view of New Year Day', link: '#' },
  { id: 15, date: '24.12.2025', title: 'Holiday in view of Christmas Festival', link: '#' },
  { id: 16, date: '27.11.2025', title: 'Circular regarding Five step verification at Sachivalayam', link: '#' },
  { id: 17, date: '31.10.2025', title: 'Students to enroll their names - Vivekananda Youth Club', link: '#' },
  { id: 18, date: '18.10.2025', title: 'Holiday in view of Diwali Festival', link: '#' },
  { id: 19, date: '26.09.2025', title: 'Holidays in view of Dussehra Festival', link: '#' },
  { id: 20, date: '03.09.2025', title: 'Holidays in view of Ganesh Nimajjanam & Milad-Un-Nabi Festivals', link: '#' },
  { id: 21, date: '26.08.2025', title: 'Holiday in view of Vinayaka Chavithi', link: '#' },
  { id: 22, date: '23.08.2025', title: 'Holiday in view of I B.Tech Orientation Day', link: '#' },
  { id: 23, date: '13.08.2025', title: 'Holiday in view of Sri Krishna Janmastami', link: '#' },
  { id: 24, date: '13.08.2025', title: 'Independence Day Circular', link: '#' },
  { id: 25, date: '07.08.2025', title: 'Holiday in view of Varalakshmi Vratham Festival', link: '#' },
  { id: 26, date: '14.07.2025', title: 'Transport Facility - Circular', link: '#' },
  { id: 27, date: '06.06.2025', title: 'Holiday on account of Bakrid Festival', link: '#' },
  { id: 28, date: '17.04.2025', title: 'Holiday on account of Good Friday', link: '#' },
  { id: 29, date: '12.04.2025', title: 'Holiday in view of Dr. B R Ambedkar Jayanthi', link: '#' },
  { id: 30, date: '04.04.2025', title: "Holiday in view of Babu Jagjivan Ram's Jayanthi", link: '#' },
  { id: 31, date: '29.03.2025', title: 'Holiday in view of Ramzan Festival', link: '#' },
  { id: 32, date: '13.03.2025', title: 'Holiday in view of Holi Festival', link: '#' },
  { id: 33, date: '01.03.2025', title: "International Women's Day (Mugdha'2K25)", link: '#' },
  { id: 34, date: '28.02.2025', title: 'Circular - Fee Reimbursement Amount Released for SC Category Students.', link: '#' },
  { id: 35, date: '25.02.2025', title: 'Holiday in view of Maha Shivarathri', link: '#' },
  { id: 36, date: '15.02.2025', title: 'Revised Classwork Timings', link: '#' },
  { id: 37, date: '25.01.2025', title: 'Hoisting of the flag on Republic Day', link: '#' },
  { id: 38, date: '11.01.2025', title: 'Holidays in view of Sankranthi Festival', link: '#' },
  { id: 39, date: '31.12.2024', title: 'II & IV B.Tech - Commencement of Class works for Even Sem', link: '#' },
  { id: 40, date: '31.12.2024', title: 'Holiday in view of New Year Day', link: '#' },
  { id: 41, date: '24.12.2024', title: 'Holiday in view of Cristmas Festival', link: '#' },
  { id: 42, date: '30.10.2024', title: 'Holiday in view of Diwali', link: '#' },
  { id: 43, date: '08.10.2024', title: 'Holidays in view of Dussehra Festival', link: '#' },
  { id: 44, date: '01.10.2024', title: 'Holiday in view of Gandhi Jayanthi', link: '#' },
  { id: 45, date: '14.09.2024', title: 'Holiday in view of Mild-Un-Nabi Festival', link: '#' },
  { id: 46, date: '05.09.2024', title: 'Holiday in view of Vinayaka Chavithi', link: '#' },
  { id: 47, date: '24.08.2024', title: 'Holiday in view of Krishnastami', link: '#' },
  { id: 48, date: '14.08.2024', title: 'Independence Day', link: '#' },
  { id: 49, date: '16.07.2024', title: 'Holiday in virw of Muharram', link: '#' },
  { id: 50, date: '09.07.2024', title: 'Transportation Fee', link: '#' },
  { id: 51, date: '15.06.2024', title: 'Holiday in view of Bakrid', link: '#' },
  { id: 52, date: '11.05.2024', title: 'Holiday in view of General Elections', link: '#' },
  { id: 53, date: '16.04.2024', title: 'Holiday in view of Srirama Navami Festival', link: '#' },
  { id: 54, date: '08.04.2024', title: 'Holidays in view of Ugadi & Ramzan Festivals', link: '#' },
  { id: 55, date: '04.04.2024', title: "Holiday in view of Babu Jagjivan Ram's Jayanthi", link: '#' },
  { id: 56, date: '28.03.2024', title: 'Holiday for Good Friday', link: '#' },
  { id: 57, date: '23.03.2024', title: 'Holiday for Holi Festival', link: '#' },
  { id: 58, date: '07.03.2024', title: 'Holiday for Maha Sivarathri', link: '#' },
  { id: 59, date: '21.02.2024', title: 'A two-day boot camp on "C" Coding skills', link: '#' },
  { id: 60, date: '07.02.2024', title: 'Inauguration of SPACE Club', link: '#' },
  { id: 61, date: '01.02.2024', title: 'To install APSCHE Messenger App', link: '#' },
  { id: 62, date: '25.01.2024', title: '75th Republic Day Celebrations', link: '#' },
  { id: 63, date: '11.01.2024', title: 'Pongal Hoilidays', link: '#' },
  { id: 64, date: '06.01.2024', title: 'Yoga Competition', link: '#' },
  { id: 65, date: '06.01.2024', title: 'Five step verification at Sachivalayam', link: '#' },
  { id: 66, date: '30.12.2023', title: 'Holiday for New Year Day', link: '#' },
  { id: 67, date: '23.12.2023', title: 'Holiday in view of Christmas Festival', link: '#' },
  { id: 68, date: '16.11.2023', title: 'For Voter registration', link: '#' },
  { id: 69, date: '11.11.2023', title: 'Holiday in view of Diwali Festival', link: '#' },
  { id: 70, date: '07.11.2023', title: 'In view of Bandh', link: '#' },
  { id: 71, date: '19.10.2023', title: 'Dasara Holidays', link: '#' },
  { id: 72, date: '30.09.2023', title: 'Holiday in view of Gandhi Jayanthi', link: '#' },
  { id: 73, date: '20.09.2023', title: 'JNTU Circular', link: '#' },
  { id: 74, date: '16.09.2023', title: 'Holiday in view of Vinayaka Chavithi', link: '#' },
  { id: 75, date: '11.09.2023', title: 'In view of Bandh', link: '#' },
  { id: 76, date: '06.09.2023', title: 'Holiday in view of Sri Krishna Janmastami', link: '#' },
  { id: 77, date: '22.08.2023', title: 'National Sports Day', link: '#' },
  { id: 78, date: '14.08.2023', title: 'Independence Day', link: '#' },
  { id: 79, date: '09.08.2023', title: 'Transportation', link: '#' },
  { id: 80, date: '28.07.2023', title: 'Holiday in view of Muharram Festival', link: '#' },
  { id: 81, date: '28.06.2023', title: 'Holiday in view of Bakrid Festival', link: '#' },
  { id: 82, date: '20.06.2023', title: 'Yoga Session', link: '#' },
  { id: 83, date: '05.05.2023', title: 'Internship Training', link: '#' },
  { id: 84, date: '21.04.2023', title: 'Holiday in view of Ramzan Festival', link: '#' }
];

// 2. EXAM NOTIFICATIONS DATA (57 entries)
const EXAM_NOTIFICATIONS_DATA = [
  { id: 1, date: '21/05/2026', title: 'II & III B.Tech I Sem Supplementary Examination – Jun 2026 Timetable', link: '#' },
  { id: 2, date: '10/05/2026', title: 'II & III B.Tech I Sem (R23) Supplementary Examination – Jun 2026 Notification', link: '#' },
  { id: 3, date: '24/04/2026', title: 'I B.Tech II Sem Regular & Supplementary (R23) Examination – Jun 2026', link: '#' },
  { id: 4, date: '17/03/2026', title: 'II & III B.Tech II Sem (R23) Regular Examination – Apr 2026 Timetable', link: '#' },
  { id: 5, date: '13/03/2026', title: 'III B.Tech II Sem (R23) Regular Examination – Apr 2026 Notification Circular', link: '#' },
  { id: 6, date: '07/03/2026', title: 'II B.Tech II Sem (R23) Regular & Supplementary Examination – Apr 2026', link: '#' },
  { id: 7, date: '18/12/2025', title: 'I B.Tech I Sem (R23) Regular Examination – Jan 2026 Timetable', link: '#' },
  { id: 8, date: '18/11/2025', title: 'I B.Tech I Sem Regular & Supplementary (R23) Examination – Dec 2025', link: '#' },
  { id: 9, date: '14/11/2025', title: 'II & III B.Tech I Sem Regular & Supplementary Examination – Nov 2025 Timetable', link: '#' },
  { id: 10, date: '14/11/2025', title: 'I B.Tech II Sem (R23) Supplementary Examination – Dec 2025 Timetable', link: '#' },
  { id: 11, date: '04/11/2025', title: 'I & II B.Tech II Sem Supplementary (R23) Examination – Dec 2025', link: '#' },
  { id: 12, date: '10/10/2025', title: 'II M.Tech I Sem (R24) Regular Examination – Nov 2025', link: '#' },
  { id: 13, date: '01/10/2025', title: 'II & III B.Tech I Sem Regular (R23) Examination – Nov 2025', link: '#' },
  { id: 14, date: '29/03/2025', title: 'II B.Tech II Sem (R23) Regular Examination – May 2025 Timetable', link: '#' },
  { id: 15, date: '18/03/2025', title: 'IV B.Tech II Semester(R20) Regular Notification', link: '#' },
  { id: 16, date: '02/04/2025', title: 'II B.Tech II Semester(R20) Regular Notification and Schedule', link: '#' },
  { id: 17, date: '02/04/2025', title: 'III B.Tech II & I Semester(R20) Regular Notification and Schedule', link: '#' },
  { id: 18, date: '27/03/2025', title: 'IV B.Tech II Semester(R20) Regular Notification', link: '#' },
  { id: 19, date: '04/11/2024', title: 'II-B.Tech I Sem (R23) Regular (Autonomous Exams)Notification -Dec-2024', link: '#' },
  { id: 20, date: '09/08/2024', title: 'RCEW Autonomous Examinations – Date: 12.08.2024 – I B.Tech I Sem(23) Exams Postponed & Rescheduled Circular', link: '#' },
  { id: 21, date: '20/07/2024', title: 'Notification I-B.Tech I Sem (R23) Supply -July-2024-Exams', link: '#' },
  { id: 22, date: '12/06/2024', title: 'I B.Tech II Semester(R23) Regular Examination Timetable - July-2024', link: '#' },
  { id: 23, date: '10/06/2024', title: 'I B.Tech II Semester(R23) MID-II Examination Timetable - July-2024', link: '#' },
  { id: 24, date: '10/06/2024', title: 'Notification I-B.Tech II Sem (R23) Regular-July-2024-Exams', link: '#' },
  { id: 25, date: '22/11/2023', title: 'Notification IV-I - B.Tech (R20) -Dec-Jan-2023-24-Exams', link: '#' },
  { id: 26, date: '22/11/2023', title: 'Notification-for-B.Tech-IV-II-R15-Dec-Jan-2023-24-Exams', link: '#' },
  { id: 27, date: '22/11/2023', title: 'Notification -for-B.Tech-IV-I-R15-Dec-Jan-2023-24-Exams', link: '#' },
  { id: 28, date: '22/11/2023', title: 'Notification NT-for-B.Tech-IV-I-R19-Dec-Jan-2023-24-Exams', link: '#' },
  { id: 29, date: '21/11/2023', title: 'Timetable-for-B.Tech-II-II-R15-Dec-2023-Exams', link: '#' },
  { id: 30, date: '21/11/2023', title: 'Timetable-for-B.Tech-II-II-R19-Supple-Dec-2023-Exams', link: '#' },
  { id: 31, date: '21/11/2023', title: 'Timetable-for-B.Tech-II-II-R20-Dec-2023-Exams', link: '#' },
  { id: 32, date: '21/11/2023', title: 'Timetable-for-B.Tech-II-I-R15-Dec-2023-Exams', link: '#' },
  { id: 33, date: '21/11/2023', title: 'Timetable-for-B.Tech-II-I-R19-Supple-Dec-2023-Exams', link: '#' },
  { id: 34, date: '21/11/2023', title: 'Timetable-for-B.Tech-II-I-R20-Dec-2023-Exams', link: '#' },
  { id: 35, date: '07/11/2023', title: 'B.Tech-II-Yr-I-II-sem-Reg-Supple-Dec-2023-Notification', link: '#' },
  { id: 36, date: '07/11/2023', title: 'II B TECH I R-20 SEM REGULAR & SUPPLEMENTARY NOTIFICATION', link: '#' },
  { id: 37, date: '14/08/2023', title: 'Revised-TT-for-B.Tech-II-I-Aug-Sep-2023-Exams', link: '#' },
  { id: 38, date: '08/08/2023', title: 'TTs-for-B.Tech-II-II-R20-Aug-Sep-2023-Exams', link: '#' },
  { id: 39, date: '08/08/2023', title: 'TTs-for-B.Tech-II-I-R20-Aug-Sep-2023-Exams', link: '#' },
  { id: 40, date: '08/08/2023', title: 'TTs-for-B.Tech-II-I-R19-Aug-Sep-2023-Exams', link: '#' },
  { id: 41, date: '08/08/2023', title: 'TTs-for-B.Tech-II-II-R19-Aug-Sep-2023-Exams', link: '#' },
  { id: 42, date: '08/08/2023', title: 'TTs-for-B.Tech-II-II-R15-Aug-Sep-2023-Exams', link: '#' },
  { id: 43, date: '08/08/2023', title: 'TTs-for-B.Tech-II-I-R15-Aug-Sep-2023-Exams', link: '#' },
  { id: 44, date: '05/08/2023', title: 'Postponed circular - DE', link: '#' },
  { id: 45, date: '31/07/2023', title: 'B.Tech-II-Yr-Academic-Calendar-for-AY-2023-24', link: '#' },
  { id: 46, date: '31/07/2023', title: 'B.Tech-III-Yr-Academic-Calendar-for-AY-2023-25', link: '#' },
  { id: 47, date: '31/07/2023', title: 'B.Tech-IV-Yr-Academic-Calendar-for-AY-2023-26', link: '#' },
  { id: 48, date: '21/07/2023', title: 'B.Tech-II-II-R20 Reg & Supple Notification', link: '#' },
  { id: 49, date: '24/07/2023', title: 'Postponed circular', link: '#' },
  { id: 50, date: '21/07/2023', title: 'B.Tech-II-II-R15 & R19 Supple Notification', link: '#' },
  { id: 51, date: '25/07/2023', title: 'B.Tech-III-II-R20-Aug-2023-Exam Timetables', link: '#' },
  { id: 52, date: '25/07/2023', title: 'B.Tech-III-I-R15-Aug-2023-Exam Timetables', link: '#' },
  { id: 53, date: '25/07/2023', title: 'B.Tech-III-I-R19-Aug-2023-Exam Timetables', link: '#' },
  { id: 54, date: '25/07/2023', title: 'B.Tech-III-I-R20-Aug-2023-Exam Timetables', link: '#' },
  { id: 55, date: '25/07/2023', title: 'B.Tech-III-II-R15-Aug-2023-Exam Timetables', link: '#' },
  { id: 56, date: '21/07/2023', title: 'II B TECH I SEM SUPPLEMENTARY NOTIFICATION', link: '#' },
  { id: 57, date: '25/07/2023', title: 'B.Tech-III-II-R19-Aug-2023-Exam Timetables', link: '#' }
];

// 3. PLACEMENTS BY ACADEMIC YEAR (23-24 & 24-25)
const PLACEMENTS_23_24 = [
  { sno: 1, company: 'SpringWorks', offers: 1, ctc: '10 Lakhs' },
  { sno: 2, company: 'Accenture(ASE)', offers: 15, ctc: '4.5 Lakhs' },
  { sno: 3, company: 'Accenture(AASE)', offers: 2, ctc: '6.5 Lakhs' },
  { sno: 4, company: 'Excelr', offers: 18, ctc: '4 Lakhs' },
  { sno: 5, company: 'Qspiders', offers: 51, ctc: '4.2 Lakhs' },
  { sno: 6, company: 'Movate(EPS)', offers: 5, ctc: '3.6 Lakhs' },
  { sno: 7, company: 'Movate(DES)', offers: 3, ctc: '2.4 Lakhs' },
  { sno: 8, company: 'Sutherland', offers: 24, ctc: '3 Lakhs' },
  { sno: 9, company: 'UTS', offers: 1, ctc: '4 Lakhs' },
  { sno: 10, company: 'PlanetSpark', offers: 2, ctc: '6.5 Lakhs' },
  { sno: 11, company: 'Accenture (App Developer)', offers: 14, ctc: '4.5 Lakhs' },
  { sno: 12, company: 'Rinex Technologies', offers: 10, ctc: '5.2 Lakhs' }
];

const PLACEMENTS_24_25 = [
  { sno: 1, company: 'Walmart', offers: 1, ctc: '27 Lakhs' },
  { sno: 2, company: 'Manomay', offers: 1, ctc: '4 Lakhs' },
  { sno: 3, company: 'Accenture(ASE)', offers: 51, ctc: '4.5 Lakhs' },
  { sno: 4, company: 'Accenture(AASE)', offers: 3, ctc: '6.5 Lakhs' },
  { sno: 5, company: 'Infosys', offers: 1, ctc: '9.5 Lakhs' },
  { sno: 6, company: 'Cognizant - Genc', offers: 4, ctc: '4 Lakhs' },
  { sno: 7, company: 'Techouts', offers: 1, ctc: '3.5 Lakhs' },
  { sno: 8, company: 'SpringWorks', offers: 1, ctc: '5 Lakhs' },
  { sno: 9, company: 'Infosys', offers: 2, ctc: '3.6 Lakhs' },
  { sno: 10, company: 'Eduexpose', offers: 33, ctc: '5.2 Lakhs' },
  { sno: 11, company: 'SmartED', offers: 6, ctc: '5 Lakhs' },
  { sno: 12, company: 'NCR Atleos', offers: 17, ctc: '3.6 Lakhs' },
  { sno: 13, company: 'Inspire AI', offers: 4, ctc: '4.5 Lakhs' }
];

export default function Home() {
  const featuredDepts = DEPARTMENTS.filter(d => ['freshman', 'cse', 'ece', 'aids'].includes(d.id));

  // Interactive Notice Board State
  const [noticeTab, setNoticeTab] = useState<'circulars' | 'exams'>('circulars');
  const [noticeSearch, setNoticeSearch] = useState('');

  // Interactive Placements Year State
  const [placementYear, setPlacementYear] = useState<'24-25' | '23-24'>('24-25');

  // Visual Tour Marquee Hover State
  const [isTourHovered, setIsTourHovered] = useState(false);

  // Visual Tour Image Cards Collection
  const VISUAL_TOUR_CARDS = [
    { img: HOME_DRONE_INNOVATION, title: "IEEE Drone Innovation & Flight Demo", badge: "IEEE Student Branch" },
    { img: HOME_TECH_LAB_EVENT, title: "Interactive Coding & Tech Lab Mentorship", badge: "Skill Mentorship" },
    { img: NSS_EARTH_WEEK_IMAGE, title: "Green Campus", badge: "NSS & Sustainability" },
    { img: NIELIT_FELICITATIONS_IMAGE, title: "NIELIT Boot Camp Dignitaries Felicitations", badge: "National Workshop" },
    { img: SEMINAR_LAB_PRESENTATION_IMAGE, title: "Hands-on Technical Seminars & Coding Workshops", badge: "Seminar Hall" },
    { img: HOME_FACULTY_EVENT, title: "Academic Conferences & Faculty Leadership", badge: "Conferences" },
    { img: HOME_BUILDING_FRONT, title: "State-of-the-Art Autonomous Campus", badge: "Main Campus" },
    { img: SWASTHA_AUDITORIUM_IMAGE, title: "Auditorium Seminars & Student Gatherings", badge: "Grand Assemblies" },
    { img: SPEAKEASY_FLASH_THEATER, title: "Flash Theater & Cultural Club Events", badge: "SpeakEasy Club" },
    { img: HOME_STUDENTS_PROJECT_LAB, title: "Advanced Computing & Coding Labs", badge: "Practical Training" },
    { img: CLASSICAL_DANCE_PERFORMERS, title: "Cultural Fest & Classical Dance Performances", badge: "Arts & Culture" },
    { img: MUGDHA_CELEBRATIONS_IMAGE, title: "Annual Campus Fests & Celebrations", badge: "Mugdha Fest" },
  ];




  const filteredCirculars = CIRCULARS_DATA.filter(c => 
    c.title.toLowerCase().includes(noticeSearch.toLowerCase()) || c.date.includes(noticeSearch)
  );

  const filteredExams = EXAM_NOTIFICATIONS_DATA.filter(e => 
    e.title.toLowerCase().includes(noticeSearch.toLowerCase()) || e.date.includes(noticeSearch)
  );

  return (
    <div className="bg-slate-50 dark:bg-primary-950/20">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section with Animated Counters */}
      <Stats />

      {/* College Introduction & Vision - Scroll Pop-Up Reveal */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Left Image grid with pop-up hover effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100/60 rounded-3xl blur-2xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src={MUGDHA_CELEBRATIONS_IMAGE}
                  alt="RCEW Mugdha Celebrations"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif font-bold text-lg drop-shadow-xs">Empowering Women Engineers</p>
                  <p className="text-xs text-yellow-300 font-mono mt-1 drop-shadow-xs">Established in 2008 • Kurnool</p>
                </div>
              </div>
            </motion.div>

            {/* Right content with smooth reveal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-5"
            >
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono block">
                Welcome to RCEW, Kurnool
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Pioneering Technical Excellence for Women
              </h2>
              <div className="h-1 w-20 bg-yellow-500 rounded-full" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ravindra Engineering College for Women (RCEW) is Kurnool's elite academic destination, solely committed to sharpening technological competency and leadership profiles of young women engineers. Approved by AICTE, affiliated to JNTUA, and NAAC Accredited A+, we offer state-of-the-art labs and global placement training.
              </p>

              {/* Accreditations Row with Pop-up Badges */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">NAAC Accredited A+</h4>
                    <p className="text-[11px] text-slate-500">Institutional Excellence Mark</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">NBA Accredited</h4>
                    <p className="text-[11px] text-slate-500">CSE & ECE Core Streams</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  aria-label="Learn Vision and Profile"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg group"
                >
                  Learn Vision & Profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ADMISSIONS & SHOWCASE POSTERS BANNER - POP-UP MOTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        id="admissions-section"
        className="relative overflow-hidden py-8 sm:py-10 bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 text-white border-y-2 border-yellow-400 shadow-lg my-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400 text-blue-950 font-mono font-bold text-[11px] shadow-sm">
                  ADMISSIONS OPEN
                </span>
                <span className="text-[11px] font-mono font-bold uppercase bg-white/10 px-3 py-1 rounded-full border border-yellow-400/40 text-yellow-300">
                  AP EAPCET CODE: RAVW
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-yellow-300 leading-snug">
                Begin Your Engineering Journey With RCEW
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                Approved by AICTE, Affiliated to JNTUA, NAAC Accredited A+, and NBA Accredited (CSE & ECE). B.Tech Specializations in <strong>CSE (AI), CSE, and ECE</strong>.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <Link
                  to="/admissions"
                  className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  Admissions Information <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:8639756876"
                  className="text-xs font-mono font-bold text-yellow-300 hover:text-white underline flex items-center gap-1"
                >
                  📞 Helpline: 8639756876 / 8639756663
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Pop-up Image Card */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-[280px] w-full bg-white p-1.5 rounded-2xl border-2 border-yellow-400 shadow-xl group cursor-pointer"
              >
                <img
                  src={ADMISSIONS_POSTER_2025}
                  alt="Ravindra College of Engineering for Women B.Tech Admissions 2025-2026 Open Official Poster"
                  className="w-full h-auto max-h-[340px] rounded-xl object-contain shadow-xs mx-auto"
                  loading="eager"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ================= NOTICE BOARD PORTAL - POP-UP REVEAL ================= */}
      <section className="py-14 bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden"
          >
            {/* Header with Switcher & Search */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-400/20 text-yellow-400 rounded-xl border border-yellow-400/30">
                  <Bell className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-300 font-bold">Live Updates</span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                    Campus Notices & Exam Desk
                  </h3>
                </div>
              </div>

              {/* Tab Switch Buttons */}
              <div className="flex items-center bg-white/10 p-1 rounded-xl border border-white/20 self-start sm:self-center">
                <button
                  onClick={() => setNoticeTab('circulars')}
                  aria-label="Show circulars"
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    noticeTab === 'circulars'
                      ? 'bg-yellow-400 text-blue-950 shadow-sm'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  📢 Circulars ({CIRCULARS_DATA.length})
                </button>
                <button
                  onClick={() => setNoticeTab('exams')}
                  aria-label="Show exam notifications"
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    noticeTab === 'exams'
                      ? 'bg-yellow-400 text-blue-950 shadow-sm'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  📝 Exam Notifications ({EXAM_NOTIFICATIONS_DATA.length})
                </button>
              </div>

              {/* Live Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search notices..."
                  value={noticeSearch}
                  onChange={(e) => setNoticeSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:bg-white focus:text-slate-900 transition-all"
                />
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-4 sm:p-6 max-h-[380px] overflow-y-auto divide-y divide-slate-100">
              {noticeTab === 'circulars' ? (
                filteredCirculars.length > 0 ? (
                  filteredCirculars.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center gap-4 hover:bg-blue-50/60 px-3 rounded-xl transition-colors">
                      <span className="px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold bg-blue-100 text-blue-800 shrink-0">
                        {item.date}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 truncate">
                        {item.title}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 text-center py-8 font-mono">No circulars match your search query.</p>
                )
              ) : (
                filteredExams.length > 0 ? (
                  filteredExams.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center gap-4 hover:bg-amber-50/60 px-3 rounded-xl transition-colors">
                      <span className="px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold bg-amber-100 text-amber-900 shrink-0">
                        {item.date}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 truncate">
                        {item.title}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 text-center py-8 font-mono">No exam notifications match your search query.</p>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PLACEMENTS SECTION - STAGGERED POP-UP motion ================= */}
      <section className="py-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono block">
                Yearly Placements Breakdown
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                Corporate Placements (AY 2023-24 & 2024-25)
              </h2>
            </div>

            {/* Year Switcher Buttons */}
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start sm:self-center">
              <button
                onClick={() => setPlacementYear('24-25')}
                aria-label="View 2024-25 placements"
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  placementYear === '24-25'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Academic Year 2024-25
              </button>
              <button
                onClick={() => setPlacementYear('23-24')}
                aria-label="View 2023-24 placements"
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  placementYear === '23-24'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Academic Year 2023-24
              </button>
            </div>
          </motion.div>

          {/* Featured Placement Photo Banners Grid with Staggered Pop-Ups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[WALMART_PLACEMENT_IMAGE, TCS_ACCENTURE_IMAGE, ADP_PLACEMENT_IMAGE, TCS_DIGITAL_IMAGE].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 group cursor-pointer"
              >
                <img src={imgSrc} alt="Corporate Placement Banner" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>

          {/* Placements Table with Pop-Up Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs"
          >
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                <tr>
                  <th className="px-4 py-3 text-center w-14">S.No</th>
                  <th className="px-4 py-3">Recruiting Company</th>
                  <th className="px-4 py-3 text-center">Number of Offers</th>
                  <th className="px-4 py-3 text-right">Package (CTC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {(placementYear === '24-25' ? PLACEMENTS_24_25 : PLACEMENTS_23_24).map((row) => (
                  <tr key={row.sno} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">{row.sno}</td>
                    <td className="px-4 py-2.5 font-bold text-slate-900">{row.company}</td>
                    <td className="px-4 py-2.5 text-center">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 text-blue-800">
                        {row.offers} {row.offers === 1 ? 'Offer' : 'Offers'}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-right font-bold text-emerald-700">{row.ctc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </div>
      </section>

      {/* Featured Departments - Staggered Pop-Up Grid */}
      <section className="py-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between mb-10"
          >
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono block">
                Academic Disciplines
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                Featured Engineering Streams
              </h2>
            </div>
            <Link
              to="/academics"
              className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1 hover:gap-2 transition-all mt-4 sm:mt-0"
            >
              All Programs <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDepts.map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 45, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold bg-yellow-400 text-blue-950 px-2.5 py-1 rounded-full font-mono uppercase tracking-widest shadow-2xs">
                    {dept.code}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-tight">
                      {dept.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {dept.shortDesc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Intake: {dept.intake} seats</span>
                    <Link
                      to={`/departments/${dept.id === 'aids' ? 'ai-ds' : dept.id}`}
                      className="text-xs font-bold uppercase text-blue-600 flex items-center gap-1 hover:translate-x-1 transition-transform"
                    >
                      View Page <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CULTURAL FEST BANNER - POP-UP MOTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden py-8 sm:py-10 bg-gradient-to-r from-slate-950 via-purple-950 to-indigo-950 text-white border-y-2 border-amber-400/50 shadow-lg my-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Pop-up Dance Image Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full md:w-80 h-52 md:h-60 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-xl group cursor-pointer bg-slate-900 shrink-0"
          >
            <img src={CLASSICAL_DANCE_PERFORMERS} alt="RCEW Classical Cultural Dance Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3">
              <span className="text-[11px] font-mono text-amber-300 font-bold bg-slate-950/80 px-2.5 py-0.5 rounded-md border border-amber-400/40">
                🎭 Mugdha & Cultural Fests
              </span>
            </div>
          </motion.div>

          <div className="space-y-2.5 max-w-xl text-left md:text-right">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-400 text-blue-950 uppercase tracking-widest inline-block shadow-sm">
              ✨ Vibrant Campus Culture
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-300 leading-snug">
              Celebrating Artistic Excellence & Heritage
            </h3>
            <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-sans">
              From classical Bharatanatyam recitals to annual campus celebrations like <strong>Mugdha 2K25</strong>, RCEW nurtures artistic talents and leadership alongside academic brilliance.
            </p>
            <div className="pt-1 flex md:justify-end">
              <Link to="/campus-life" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105">
                Explore Clubs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Visual Tour Section - Infinite Leftward Auto-Scrolling Marquee with Hover-to-Pause */}
      <section className="py-16 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
              Life on Campus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Campus Innovation & Visual Tour
            </h2>
            <div className="h-1 w-16 bg-yellow-500 mx-auto mt-3 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-500 mt-3 font-medium">
              Hover your cursor over the box to pause scrolling and view image details
            </p>
          </motion.div>
        </div>

        {/* Auto-Scrolling Container with Hover-to-Pause */}
        <div
          className="relative w-full overflow-hidden py-4 group"
          onMouseEnter={() => setIsTourHovered(true)}
          onMouseLeave={() => setIsTourHovered(false)}
        >
          {/* Subtle gradient edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Floating Hover Indicator Badge */}
          {isTourHovered && (
            <div className="absolute top-2 right-12 z-20 px-3 py-1 bg-amber-400 text-blue-950 text-xs font-bold font-mono rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5 animate-pulse">
              <span>⏸</span>
              <span>Paused on Hover</span>
            </div>
          )}

          {/* Marquee Track: Duplicated list for seamless leftward infinite loop */}
          <div
            className="flex gap-6 w-max animate-marquee-continuous transition-all duration-300"
            style={{ animationPlayState: isTourHovered ? 'paused' : 'running' }}
          >
            {[...VISUAL_TOUR_CARDS, ...VISUAL_TOUR_CARDS].map((card, idx) => (
              <div
                key={idx}
                className="relative w-72 sm:w-80 h-64 sm:h-72 rounded-2xl overflow-hidden group/card shadow-md border border-slate-200/90 shrink-0 bg-slate-900 cursor-pointer hover:border-yellow-400 transition-all"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700"
                  style={{ imageRendering: '-webkit-optimize-contrast', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  {card.badge && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-yellow-300 bg-blue-950/80 px-2.5 py-0.5 rounded-md self-start mb-1.5 border border-yellow-400/30 backdrop-blur-xs">
                      {card.badge}
                    </span>
                  )}
                  <h3 className="text-white text-sm sm:text-base font-serif font-bold leading-snug drop-shadow-sm group-hover/card:text-yellow-300 transition-colors">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <Link
            to="/campus-life"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            Tour Campus & Facilities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Campus Location Map Box */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Campus Geography
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-snug">
                Campus Location & Navigation Map
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Ravindra College of Engineering for Women (RCEW) is located on Nandikotkur Road at Venkayapalli, Kurnool, Andhra Pradesh - 518002.
              </p>
              
              <div className="space-y-2 text-xs font-medium text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Nandikotkur Road, Venkayapalli, Kurnool - 518002</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Admissions Helpline: +91 8639756876</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Ravindra+College+of+Engineering+for+Women+Kurnool"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Map Box Column */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-2.5 overflow-hidden shadow-sm h-72 sm:h-80">
              <iframe
                title="RCEW Campus Map Location"
                src={COLLEGE_INFO.contact.mapIframeUrl}
                className="w-full h-full rounded-2xl border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
