import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { CONTENT } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-ink/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Experience Timeline */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase flex items-center gap-4">
                <Briefcase size={32} /> Experience
              </h2>
              <div className="h-1 w-20 bg-ink" />
            </div>

            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {CONTENT.experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full bg-bg border-4 border-ink z-10" />
                  <div className="mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{exp.role}</h3>
                  <div className="text-sm font-bold text-muted mb-4">{exp.company} • {exp.location}</div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="text-sm text-muted leading-relaxed font-light flex gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-muted shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-20">
            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase flex items-center gap-4">
                  <GraduationCap size={32} /> Education
                </h2>
                <div className="h-1 w-20 bg-ink" />
              </div>

              <div className="space-y-8">
                {CONTENT.education.map((edu, i) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl border border-border glass"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-black tracking-tight">{edu.school}</h3>
                        <div className="text-sm font-bold text-muted">{edu.degree}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold uppercase tracking-widest">{edu.period}</div>
                        <div className="text-sm font-black mt-1">GPA: {edu.gpa}</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-muted uppercase tracking-widest">{edu.location}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase flex items-center gap-4">
                  <Award size={32} /> Achievements
                </h2>
                <div className="h-1 w-20 bg-ink" />
              </div>

              <div className="space-y-4">
                {CONTENT.achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl border border-border glass flex items-center gap-4"
                  >
                    <div className="p-3 rounded-xl bg-ink text-bg">
                      <Award size={20} />
                    </div>
                    <p className="font-bold tracking-tight">{ach}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
