import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, BookOpen, GraduationCap, Building2, Briefcase, Trophy } from 'lucide-react';
import { STATS } from '../data';

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: false, amount: 0.3 });


  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // milliseconds
    const increment = Math.ceil(value / (duration / 16)); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={elementRef} className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-blue-700 tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'students':
        return <Users className="h-6 w-6 text-yellow-500" />;
      case 'faculty':
        return <BookOpen className="h-6 w-6 text-yellow-500" />;
      case 'departments':
        return <Building2 className="h-6 w-6 text-yellow-500" />;
      case 'placements':
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 'recruiters':
        return <Briefcase className="h-6 w-6 text-yellow-500" />;
      case 'alumni':
        return <GraduationCap className="h-6 w-6 text-yellow-500" />;
      default:
        return <GraduationCap className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <section aria-label="Key Institution Statistics" className="relative bg-[#F8FBFF] py-16 sm:py-20 overflow-hidden border-y border-blue-100/80">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group hover:border-blue-300"
            >
              <div className="p-3 bg-yellow-50 rounded-2xl mb-3 border border-yellow-200/60 group-hover:scale-110 group-hover:bg-yellow-100/80 transition-all duration-300 shadow-2xs">
                {getIcon(stat.id)}
              </div>
              
              <Counter value={stat.value} suffix={stat.suffix} />
              
              <p className="text-xs sm:text-sm text-slate-700 font-sans font-semibold mt-2 max-w-[130px] leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
