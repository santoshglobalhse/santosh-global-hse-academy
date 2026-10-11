import React from 'react';
import { ArrowRight } from 'lucide-react';

export function PageHero({ eyebrow, title, accent, text, image = '/images/hero_refinery.jpg' }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#001838] text-white">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-right opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001838] via-[#001838]/95 to-[#001838]/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#38BDF8] uppercase">{eyebrow}</p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-tight text-white">
          {title} {accent && <span className="text-[#38BDF8]">{accent}</span>}
        </h1>
        {text && <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed">{text}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ onEnquire, title = 'Ready to Advance Your HSE Career?' }) {
  return (
    <section className="bg-[#001838] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h2>
          <p className="mt-2 text-slate-200 max-w-xl">
            Structured preparation, expert guidance and dedicated support for your ASP®, CSP® and CRSP® examination journey.
          </p>
        </div>
        <button onClick={() => onEnquire()} className="btn-orange self-start md:self-auto shrink-0">
          Enquire Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export const DISCLAIMER =
  'SANTOSH Global HSE Academy provides independent training and examination preparation. The ASP®, CSP® and CRSP® credentials are awarded solely by their respective certifying bodies.';
