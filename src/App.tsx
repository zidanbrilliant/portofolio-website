/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">About Me</h2>
                <p className="text-xl text-muted leading-relaxed font-light mb-8">
                  I am a passionate AI Engineer and Data Scientist dedicated to leveraging data and AI to deliver actionable business insights. My journey in Informatics Engineering has equipped me with the skills to build end-to-end data solutions that are both robust and scalable.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Focus Areas</h4>
                    <ul className="text-sm text-muted space-y-2">
                      <li>• Generative AI & LLMs</li>
                      <li>• Predictive Analytics</li>
                      <li>• Data Engineering Pipelines</li>
                      <li>• UI/UX for Data Apps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-2">What I Build</h4>
                    <ul className="text-sm text-muted space-y-2">
                      <li>• Intelligent Agents</li>
                      <li>• Real-time Dashboards</li>
                      <li>• Automated ETL Workflows</li>
                      <li>• ML Classification Models</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-700 bg-ink/5">
                  <img 
                    src="/profile.JPG" 
                    alt="Muhammad Zidan Brilliant" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-8 glass rounded-3xl border border-border hidden md:block">
                  <div className="text-sm font-bold uppercase tracking-widest mb-1">Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold tracking-tight">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
