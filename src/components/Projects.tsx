import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { CONTENT } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Projects</h2>
            <div className="h-1 w-20 bg-ink" />
          </div>
          <p className="text-muted max-w-md font-light">
            A showcase of end-to-end AI solutions, from automated ETL pipelines to LLM-powered business agents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CONTENT.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl border border-border glass hover:border-ink/20 transition-all overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-ink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted mb-2">{project.date}</div>
                  <h3 className="text-2xl font-black tracking-tight group-hover:translate-x-1 transition-transform">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.links.repo && (
                    <a 
                      href={project.links.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-ink hover:text-bg transition-all"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-ink hover:text-bg transition-all"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3">Problem & Approach</h4>
                  <p className="text-sm text-muted leading-relaxed italic">
                    {project.problem}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-md bg-ink/5 text-[10px] font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-border flex flex-wrap gap-4">
                  {project.metrics.map(m => (
                    <div key={m} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink" />
                      <span className="text-xs font-bold uppercase tracking-tighter">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
