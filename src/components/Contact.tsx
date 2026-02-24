import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTENT } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.02] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Let's <span className="text-muted">Work</span> Together
            </h2>
            <p className="text-xl text-muted font-light mb-12 max-w-md">
              Currently open to new opportunities in AI Engineering and Data Science. Let's build something intelligent.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl border border-border group-hover:bg-ink group-hover:text-bg transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted">Email</div>
                  <a href={`mailto:${CONTENT.socials.find(s => s.name === 'Email')?.url}`} className="text-lg font-bold hover:text-muted transition-colors">
                    zidanbrilliant@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl border border-border group-hover:bg-ink group-hover:text-bg transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted">Phone</div>
                  <div className="text-lg font-bold">+62 853 3371 4307</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl border border-border group-hover:bg-ink group-hover:text-bg transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted">Location</div>
                  <div className="text-lg font-bold">Mataram, West Nusa Tenggara</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2rem] border border-border glass"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-ink/5 border border-border rounded-xl focus:outline-none focus:border-ink transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-4 bg-ink/5 border border-border rounded-xl focus:outline-none focus:border-ink transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-ink/5 border border-border rounded-xl focus:outline-none focus:border-ink transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-4 bg-ink/5 border border-border rounded-xl focus:outline-none focus:border-ink transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-5 bg-ink text-bg rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
