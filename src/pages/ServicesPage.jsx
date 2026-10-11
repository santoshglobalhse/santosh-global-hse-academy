import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CORE_PROGRAMS } from '../data/academyData';
import { PageHero, CtaBand } from '../components/PageHero';

export default function ServicesPage({ onOpenEnquireModal }) {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Services"
        title="Health, Safety & Environment"
        accent="Courses"
        text="Professional trainings in HSE, fire and safety, risk assessment, incident investigation, safety management and emergency response."
      />
      <section className="bg-[#F8FAFC] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_PROGRAMS.map((c) => (
            <article key={c.id} className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] hover:shadow-md transition-all">
              <img src={c.image} alt={c.title} className="h-44 w-full object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-[#002B66]">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.shortDescription}</p>
                <ul className="mt-4 space-y-2 flex-1">
                  {c.learningAreas.slice(0, 3).map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#0284C7] stroke-[3]" />{a}
                    </li>
                  ))}
                </ul>
                <button onClick={() => onOpenEnquireModal(c.title)} className="mt-5 btn-primary">
                  Enquire <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand onEnquire={onOpenEnquireModal} />
    </div>
  );
}
