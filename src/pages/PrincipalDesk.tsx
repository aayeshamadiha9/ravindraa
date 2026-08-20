import React from 'react';
import { Quote, GraduationCap, Award, CheckCircle2, ShieldCheck, Mail, Phone, Sparkles, HeartHandshake, Lightbulb, Compass, Target } from 'lucide-react';
import PRINCIPAL_SREEKANTH_IMG from '../assets/images/rcew_principal_sreekanth.png';

export default function PrincipalDesk() {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      
      {/* Banner in Royal Blue Theme */}
      <section className="relative py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden mb-12 rounded-b-[40px] shadow-lg border-b-2 border-amber-400/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="px-3.5 py-1 bg-white/10 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-amber-400/30">
            Institutional Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Message from Principal Desk
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full shadow-xs" />
          <p className="max-w-3xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed font-medium">
            Academic vision, research commitment, and holistic empowerment of young women engineers at Ravindra College of Engineering for Women.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        
        {/* Main Principal Message Card */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-2xs p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Principal Portrait Image & Quick Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-slate-200 bg-slate-950 group max-w-md mx-auto">
                <img
                  src={PRINCIPAL_SREEKANTH_IMG}
                  alt="Dr. N. Sreekanth - Principal, RCEW"
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-102"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 text-white text-center space-y-0.5">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-amber-300">Dr. N. SREEKANTH</h3>
                  <p className="text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider">
                    Principal & Academic Head • RCEW
                  </p>
                </div>
              </div>

              {/* Quote Card */}
              <div className="p-5 bg-amber-50/80 border border-amber-300/80 rounded-2xl space-y-2 text-center shadow-2xs">
                <Quote className="h-6 w-6 text-amber-600 mx-auto opacity-80" />
                <p className="font-serif font-bold text-amber-950 text-sm italic leading-relaxed">
                  “Engineering is not merely a profession; it is a responsibility to create solutions that improve lives and build a better world.”
                </p>
                <span className="text-[10px] text-amber-800 font-mono uppercase font-bold block">
                  — Dr. N. Sreekanth, Principal
                </span>
              </div>

              {/* Quick Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-950 block">NAAC A+ & NBA</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Academic Status</span>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-950 block">R&D & Patents</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Innovation Labs</span>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Message Speech Text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wider mb-2">
                  <GraduationCap className="h-3.5 w-3.5 text-amber-500" /> Principal's Address
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                  Dr. N. SREEKANTH
                </h2>
                <p className="text-blue-800 font-semibold text-sm sm:text-base mt-1">
                  M.Tech., Ph.D • Principal, Ravindra College of Engineering for Women
                </p>
              </div>

              {/* Full Speech Text */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p className="p-4 bg-blue-50/50 rounded-2xl border-l-4 border-blue-800 font-medium text-slate-950 shadow-2xs">
                  <strong>Dear Young Minds,</strong>
                  <br />
                  It gives me immense pleasure to welcome you to entering higher education at a remarkable time when technology is transforming every aspect of human life. As aspiring engineers, you have the opportunity to become creators of this future rather than mere spectators.
                </p>

                <p>
                  At our institution, we are committed to nurturing technically competent, ethically responsible, and globally competitive engineers. Our objective extends beyond imparting academic knowledge; we strive to develop problem solvers, innovators, researchers, entrepreneurs, and leaders capable of addressing real-world challenges and contributing meaningfully to society.
                </p>

                <p>
                  The college provides a vibrant learning ecosystem supported by highly qualified and dedicated faculty members, modern laboratories, industry collaborations, research facilities, innovation centers, and digital learning resources. Our focus is on preparing graduates who are not only employable but also capable of creating employment opportunities through innovation and entrepreneurship.
                </p>

                <p>
                  We firmly believe that education is a partnership among students, parents, faculty, and the institution. Therefore, we maintain continuous interaction with parents and mentors to ensure the holistic development, well-being, and academic success of every student. We are committed to providing a safe, inclusive, supportive, and intellectually stimulating environment where every student can learn, grow, and excel.
                </p>

                <p>
                  The four years you spend on our campus will be a transformative journey of learning, discovery, innovation and personal growth. I encourage you to dream big, work hard, embrace challenges, and pursue excellence in everything you do. Let curiosity drive your learning, innovation shape your thinking, and integrity guide your actions.
                </p>

                <p>
                  As you embark on this exciting journey, remember that engineering is not merely a profession, it is a responsibility to create solutions that improve lives and build a better world. The future belongs to those who are willing to learn, innovate, and lead.
                </p>

                <p className="font-serif font-bold text-slate-950">
                  I wish you a rewarding academic journey and a future filled with success, achievement, and fulfillment.
                </p>

                <div className="pt-2 text-blue-900 font-serif font-bold text-lg">
                  Wish you all Success!
                </div>
              </div>

              {/* Principal Office Contact Bar */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-200 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold block">Principal Desk Email:</span>
                    <a href="mailto:principal@recw.ac.in" className="font-mono font-bold text-xs text-blue-900 hover:underline">
                      principal@recw.ac.in
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-200 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold block">Campus Office Landline:</span>
                    <span className="font-mono font-bold text-xs text-slate-950">
                      08518-285088
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
