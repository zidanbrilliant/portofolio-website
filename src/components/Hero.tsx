import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { CONTENT } from '../data/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-ink/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full border border-border text-xs font-semibold mb-6 tracking-widest uppercase bg-ink/5">
            {CONTENT.role}
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tighter">
            {CONTENT.name.split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? 'text-muted block' : 'block'}>
                {word}
              </span>
            ))}
          </h1>
          <p className="text-xl text-muted max-w-lg mb-10 leading-relaxed font-light">
            {CONTENT.valueProp}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-ink text-bg rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href={CONTENT.socials.find(s => s.name === 'Resume')?.url}
              download="Muhammad_Zidan_Brilliant_Resume.pdf"
              className="px-8 py-4 border border-border rounded-full font-bold flex items-center gap-2 hover:bg-ink/5 transition-all"
            >
              Resume <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6">
            {CONTENT.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-ink/5 transition-all"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-6">
            {CONTENT.metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`p-8 rounded-3xl border border-border glass ${i % 2 === 1 ? 'mt-12' : ''}`}
              >
                <div className="text-4xl font-black mb-2 tracking-tighter">{metric.value}</div>
                <div className="text-sm text-muted uppercase tracking-widest font-bold">{metric.label}</div>
              </div>
            ))}
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-ink/5 rounded-full rotate-12" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-ink/5 rounded-full -rotate-12" />
        </motion.div>
      </div>
    </section>
  );
}
