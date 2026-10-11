import React from 'react';
import { Check } from 'lucide-react';
import { WHY_US_POINTS, JOURNEY_STEPS } from '../data/academyData';
import { PageHero, CtaBand } from '../components/PageHero';

export default function WhyChooseUsPage({ onOpenEnquireModal }) {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Why Us"
        title="Why SANTOSH"
        accent="Global HSE Academy?"
        text="More than training. A career partner — focused on one thing: getting serious HSE professionals exam-ready."
      />
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002B66] mb-6">More than training. A career partner.</h2>
          <ul className="space-y-4">
            {WHY_US_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-lg font-semibold text-[#002B66]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6A00]"><Check className="w-4 h-4 text-white stroke-[3]" /></span>
                {p}
              </li>
            ))}
          </ul>
          </div>
          <img src="/images/mock_exam.jpg" alt="Safety practitioners taking computer-based mock exams in modern training facility" className="rounded-2xl shadow-lg w-full object-cover" loading="lazy" />
        </div>
      </section>
      <section className="bg-[#F8FAFC] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002B66]">Your journey with us</h2>
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
