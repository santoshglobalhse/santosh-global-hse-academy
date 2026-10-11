import React from 'react';
import { Check, ArrowRight, Users, Laptop, FileCheck } from 'lucide-react';
import { EXAM_PREP_PROGRAMS, JOURNEY_STEPS } from '../data/academyData';
import { PageHero, CtaBand, DISCLAIMER } from '../components/PageHero';

const bar = { teal: 'bg-[#0284C7]', sky: 'bg-[#0284C7]', blue: 'bg-[#003882]', orange: 'bg-[#FF6A00]' };
const tick = { teal: 'text-[#0284C7]', sky: 'text-[#0284C7]', blue: 'text-[#0284C7]', orange: 'text-[#FF6A00]' };

export default function CoursesPage({ onOpenEnquireModal }) {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Courses"
        title="Examination Preparation"
        accent="Courses"
        text="Focused training for the ASP®, CSP® and CRSP® examinations — structured sessions, practice questions and mock exams."
      />

      <section className="bg-[#F8FAFC] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {EXAM_PREP_PROGRAMS.map((p) => (
            <article key={p.id} className={`overflow-hidden rounded-2xl bg-white shadow-md border ${p.featured ? 'border-[#FF6A00] ring-2 ring-[#FF6A00]/20' : 'border-slate-200'} flex`}>
              <div className={`w-1.5 shrink-0 ${bar[p.tone] || bar.blue}`} />
              <div className="p-6 sm:p-8 grid gap-6 md:grid-cols-[1fr_1.2fr] items-center flex-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{p.badge}</span>
                    {p.featured && (
                      <span className="rounded-full bg-[#FF6A00] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        Flagship
                      </span>
                    )}
                  </div>
                  <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#002B66]">{p.code}</h2>
                  <p className="font-semibold text-slate-600">{p.fullName}</p>
                  <button onClick={() => onOpenEnquireModal(p.title)} className="mt-5 btn-primary">
                    Enquire about {p.code} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 stroke-[3] ${tick[p.tone] || tick.blue}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <p className="text-center text-xs text-slate-500 max-w-3xl mx-auto pt-2">{DISCLAIMER}</p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {[
            [Users, 'Instructor-Led Training', 'Structured sessions led by experienced HSE professionals.'],
            [Laptop, 'Flexible Learning Modes', 'Online and classroom delivery to suit your schedule.'],
            [FileCheck, 'Mock Exams & Review', 'Timed practice with detailed review of weak areas.'],
          ].map(([Icon, t, d]) => (
            <div key={t} className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7] ring-1 ring-sky-100"><Icon className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#002B66]">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002B66]">How every program is structured</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNEY_STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-3 rounded-xl bg-white p-4 border border-slate-200">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#002B66] text-xs font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
                <div><p className="font-bold text-[#002B66]">{s.title}</p><p className="text-sm text-slate-600">{s.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand onEnquire={onOpenEnquireModal} />
    </div>
  );
}
