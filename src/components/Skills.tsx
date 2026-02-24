import React from 'react';
import { motion } from 'motion/react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell
} from 'recharts';
import { CONTENT } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-ink/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Technical Expertise</h2>
          <div className="h-1 w-20 bg-ink" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill Categories Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-border glass"
          >
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest">Skill Distribution</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CONTENT.skills.categories}>
                  <PolarGrid stroke="currentColor" strokeOpacity={0.1} />
                  <PolarAngleAxis dataKey="name" tick={{ fill: 'currentColor', fontSize: 12, fontWeight: 500 }} />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="currentColor"
                    fill="currentColor"
                    fillOpacity={0.2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Experience Focus Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl border border-border glass"
          >
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest">Experience Focus</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CONTENT.skills.experienceFocus} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: 'currentColor', fontSize: 12, fontWeight: 600 }}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                    {CONTENT.skills.experienceFocus.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill="currentColor" 
                        fillOpacity={0.8 - index * 0.2} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Tools Grid */}
        <div className="mt-16">
          <h3 className="text-sm font-bold mb-8 uppercase tracking-widest text-muted">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {CONTENT.skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2 rounded-full border border-border text-sm font-medium hover:bg-ink hover:text-bg transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
