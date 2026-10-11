import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { INSTRUCTOR, INSTRUCTOR_VERIFIED } from '../data/academyData';
import { PageHero, CtaBand, DISCLAIMER } from '../components/PageHero';

export default function AboutPage({ setCurrentPage, onOpenEnquireModal }) {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="About Us"
        title="A professional academy for"
        accent="serious HSE professionals"
        text="SANTOSH Global HSE Academy specialises in examination preparation for the ASP®, CSP® and CRSP® safety certifications."
      />

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-[#002B66]">More than training. A career partner.</h2>
            <div className="mt-5 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-4">
              <img src="/images/santosh-shield-transparent.png" alt="SANTOSH Shield" className="h-12 sm:h-14 w-auto object-contain shrink-0" />
              <div>
                <h3 className="font-extrabold text-[#002B66] text-base sm:text-lg">SANTOSH Global HSE Academy</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  <span className="font-bold text-[#003882]">S</span>pecialised <span className="font-bold text-[#003882]">A</span>cademy for <span className="font-bold text-[#003882]">N</span>extGen <span className="font-bold text-[#003882]">T</span>rainings in <span className="font-bold text-[#003882]">O</span>ccupational <span className="font-bold text-[#003882]">S</span>afety and <span className="font-bold text-[#003882]">H</span>ealth
                </p>
              </div>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We help safety professionals build the knowledge, confidence and exam readiness they need
              for professional safety certification examinations, through structured instructor-led
              sessions, practice questions, mock exams and mentorship — online and in the classroom.
            </p>
            <button onClick={() => setCurrentPage('courses')} className="mt-6 btn-primary">
              View Courses <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-200/80 bg-sky-50/60 p-6">
              <h3 className="font-bold text-[#002B66]">What we provide</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {['Training', 'Coaching', 'Examination preparation'].map((t) => (
                  <li key={t} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#0284C7] stroke-[3]" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-[#002B66]">What we do not do</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><X className="w-4 h-4 mt-0.5 text-slate-400 stroke-[3]" />Award the ASP®, CSP® or CRSP® credentials</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">{DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </section>

      {INSTRUCTOR_VERIFIED && (
        <section className="bg-[#F8FAFC] py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-[260px_1fr] items-center">
            {INSTRUCTOR.photo && <img src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} className="w-full rounded-2xl object-cover shadow-lg" />}
            <div>
              <h2 className="text-3xl font-extrabold text-[#002B66]">Learn From Industry Experience</h2>
              <p className="mt-3 text-2xl font-bold text-[#002B66]">{INSTRUCTOR.name}</p>
              <p className="font-semibold text-[#0284C7]">{INSTRUCTOR.role}</p>
              <p className="mt-3 text-slate-600">{INSTRUCTOR.bio}</p>
            </div>
          </div>
        </section>
      )}
      <CtaBand onEnquire={onOpenEnquireModal} />
    </div>
  );
}
