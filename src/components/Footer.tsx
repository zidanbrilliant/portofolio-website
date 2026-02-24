import React from 'react';
import { CONTENT } from '../data/content';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="font-display font-extrabold text-2xl tracking-tighter mb-2">
            ZB<span className="text-muted">.</span>
          </div>
          <p className="text-sm text-muted font-light">
            © {new Date().getFullYear()} {CONTENT.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          {CONTENT.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest hover:text-muted transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="text-sm text-muted font-medium">
          Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
}
