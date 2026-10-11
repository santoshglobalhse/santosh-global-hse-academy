import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Globe2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { EXAM_PREP_PROGRAMS } from '../data/academyData';

export default function Footer({ setCurrentPage, onOpenEnquireModal }) {
  const go = (id) => { setCurrentPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const links = [
    ['home', 'Home'], ['about', 'About Us'], ['services', 'Services'], ['why-choose-us', 'Why Us'], ['contact', 'Contact'],
  ];
  return (
    <footer className="bg-[#00142E] text-slate-300">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#003882] via-[#38BDF8] to-[#FF6A00]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="inline-flex items-center bg-white rounded-xl px-3.5 py-2 shadow-sm border border-white/20">
            <img 
              src="/images/santosh-logo-transparent.png" 
              alt="SANTOSH Global HSE Academy" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <p className="text-sm max-w-md font-semibold text-white">
            Specialised Academy for NextGen Trainings in Occupational Safety and Health
          </p>
          <p className="text-sm max-w-md">
            Professional training and examination preparation for the ASP®, CSP® and CRSP® safety certifications.
          </p>
          <p className="text-xs text-slate-400 max-w-md">
            Independent training provider. The ASP®, CSP® and CRSP® credentials are awarded solely by their respective certifying bodies.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map(([id, label]) => (
              <li key={id}><button onClick={() => go(id)} className="hover:text-[#38BDF8] transition-colors cursor-pointer">{label}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Courses</h4>
          <ul className="space-y-2 text-sm">
            {EXAM_PREP_PROGRAMS.map((p) => (
              <li key={p.id} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />{p.title}</li>
            ))}
          </ul>
          <button onClick={() => onOpenEnquireModal()} className="btn-orange mt-5 text-sm">
            Enquire Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400 px-4">
        &copy; {new Date().getFullYear()} SANTOSH Global HSE Academy · Business hours 24/7 · Accessible worldwide · All rights reserved.
      </div>
    </footer>
  );
}
