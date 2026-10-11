import React from 'react';
import {
  ArrowRight, Download, Check, Star, Users, Laptop, FileCheck, UserCheck,
  BookOpen, Globe2, Lightbulb, FileText, BarChart3, Target, Trophy,
  ShieldCheck, GraduationCap, Award, ChevronRight, Globe,
} from 'lucide-react';
import {
  ACADEMY_INFO, CORE_PROGRAMS, EXAM_PREP_PROGRAMS, BENEFITS, JOURNEY_STEPS, WHY_US_POINTS,
  STATS, STATS_VERIFIED, INSTRUCTOR, INSTRUCTOR_VERIFIED,
  TESTIMONIALS, TESTIMONIALS_VERIFIED,
} from '../data/academyData';
import { RevealOnScroll } from '../components/ScrollEffects';

const icons = {
  Users, Laptop, FileCheck, UserCheck, BookOpen, Globe2,
  Lightbulb, FileText, BarChart3, Target, Trophy,
};

const TONES = {
  teal:   { bar: 'bg-[#0284C7]', tint: 'from-[#F0F9FF]', text: 'text-[#0284C7]', badge: 'bg-sky-100 text-[#0369A1]', btn: 'bg-[#002B66] hover:bg-[#0284C7]', tick: 'text-[#0284C7]' },
  sky:    { bar: 'bg-[#0284C7]', tint: 'from-[#F0F9FF]', text: 'text-[#0284C7]', badge: 'bg-sky-100 text-[#0369A1]', btn: 'bg-[#002B66] hover:bg-[#0284C7]', tick: 'text-[#0284C7]' },
  blue:   { bar: 'bg-[#003882]', tint: 'from-[#EFF6FF]', text: 'text-[#003882]', badge: 'bg-blue-100 text-[#003882]', btn: 'bg-[#002B66] hover:bg-[#0284C7]', tick: 'text-[#0284C7]' },
  orange: { bar: 'bg-[#FF6A00]', tint: 'from-[#FFF7ED]', text: 'text-[#FF6A00]', badge: 'bg-orange-100 text-[#C2410C]', btn: 'bg-[#FF6A00] hover:bg-[#EA580C]', tick: 'text-[#FF6A00]' },
};

export default function HomePage({ setCurrentPage, onOpenEnquireModal }) {
  const scrollToPrograms = () =>
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  const enquire = (title = '') => onOpenEnquireModal(title);

  return (
    <div className="bg-white">
      {/* 4. HERO — EXECUTIVE SPLIT CARD HERO */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        {/* Background photo: Industrial workplace showing safety professionals on right */}
        <img
          src={ACADEMY_INFO.heroImage}
          alt="Safety professional in white helmet and hi-vis vest in industrial refinery"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_center] lg:object-right"
        />
        
        {/* Cinematic gradient overlay: keeps left dark for card anchoring while showing photo on right */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-black/20 to-transparent hidden lg:block" />
        <div className="absolute inset-0 -z-10 bg-slate-950/65 lg:hidden" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-18">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* SOLID FEATURE CARD (Left Block - Matched to SANTOSH Logo Sapphire & Sky Blue) */}
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="rounded-2xl p-6 sm:p-9 lg:p-10 shadow-2xl border border-sky-400/25 bg-gradient-to-br from-[#001838] via-[#002B66] to-[#003C8A] transition-all duration-300 relative overflow-hidden backdrop-blur-xs">
                
                {/* Subtle top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6A00] via-[#38BDF8] to-[#0284C7]" />

                {/* Eyebrow Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 text-[11px] font-bold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
                    BUILD YOUR GLOBAL HSE CAREER
                  </div>
                </div>

                {/* Main Headline (Executive Layout & Authority) */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.12] text-white tracking-tight">
                  Become a Recognised<br />
                  <span className="text-[#FF6A00]">Safety Professional</span>
                </h1>

                {/* Certifications Subheading */}
                <div className="mt-3.5">
                  <p className="text-xl sm:text-2xl font-black text-[#38BDF8] tracking-tight">
                    ASP® <span className="text-white/40 font-light mx-1">|</span> CSP® <span className="text-white/40 font-light mx-1">|</span> CRSP®
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-sky-100">
                    Exam Preparation &amp; Professional HSE Coaching
                  </p>
                </div>

                {/* Subtext Paragraph */}
                <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Join safety professionals worldwide gaining knowledge, certification readiness and credibility to build safer workplaces.
                </p>

                {/* Pillars line */}
                <div className="mt-4 pt-3.5 border-t border-white/15 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-200">
                  <span className="text-white font-semibold">Structured learning</span>
                  <span className="text-[#FF6A00] font-black">•</span>
                  <span className="text-white font-semibold">Expert instruction</span>
                  <span className="text-[#FF6A00] font-black">•</span>
                  <span className="text-white font-semibold">Mock examinations</span>
                  <span className="text-[#FF6A00] font-black">•</span>
                  <span className="text-white font-semibold">Career guidance</span>
                </div>

                {/* Dual Action Buttons (Solid White + Transparent Outline) */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    onClick={scrollToPrograms}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider bg-white text-[#002B66] hover:bg-sky-50 shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>EXPLORE PROGRAMS</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <button
                    onClick={() => enquire('Talk to an Advisor')}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-transparent hover:bg-sky-500/15 border-2 border-sky-200/90 text-white px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>TALK TO AN ADVISOR</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

                {/* Trust Location Bar inside card */}
                <div className="mt-6 pt-3.5 border-t border-white/15 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-slate-200">
                  <Globe className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span className="font-semibold text-white">Online &amp; Classroom Training</span>
                  <span className="text-white/40 mx-1 hidden sm:inline">|</span>
                  <span className="text-sky-100">India · Worldwide</span>
                </div>
              </div>
            </div>

            {/* Right side area gives space so the industrial safety professional photo shines through on desktop */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
          </div>
        </div>

        {/* Feature Icons Strip Bar directly below Hero */}
        <div className="border-t border-slate-200/80 bg-white/95 backdrop-blur-md text-[#002B66]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Users, title: 'Instructor-Led Training', desc: 'Expert HSE Specialists' },
              { icon: Target, title: 'Exam-Focused Practice', desc: 'ASP® · CSP® · CRSP® Blueprints' },
              { icon: Laptop, title: 'Flexible Learning', desc: 'Live Virtual & Classroom' },
              { icon: Globe2, title: 'Global Recognition', desc: 'India · Worldwide' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs bg-sky-50 text-[#0284C7] ring-1 ring-sky-100">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-extrabold text-[#002B66] leading-tight truncate">{title}</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5 truncate">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy tagline ribbon (highlighted) */}
      <section className="bg-gradient-to-r from-[#001838] via-[#002B66] to-[#0284C7] text-white border-y border-white/10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 text-center">
          <p className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
            <span className="text-[#38BDF8]">SANTOSH</span> — Specialised Academy for NextGen Trainings in Occupational Safety and Health
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium text-slate-200">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              24/7 Global Enquiry Desk
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-sky-200 font-medium">India · Worldwide</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-slate-200">Online &amp; Classroom Delivery</span>
          </div>
        </div>
      </section>

      {/* 5. PROGRAM CARDS */}
      <section id="programs" className="bg-[#F8FAFC] py-14 sm:py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66]">Examination Preparation Courses</h2>
            <p className="mt-3 text-slate-600">
              Professional coaching to prepare you for the ASP®, CSP® and CRSP® examinations.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {EXAM_PREP_PROGRAMS.map((p, i) => {
              const t = TONES[p.tone] || TONES.blue;
              return (
                <RevealOnScroll key={p.id} delay={i * 100} className="h-full">
                  <article
                    className={`relative h-full flex flex-col overflow-hidden rounded-2xl bg-white border shadow-lg ${
                      p.featured ? 'border-[#FF6A00] ring-2 ring-[#FF6A00]/25 shadow-xl lg:-translate-y-2' : 'border-slate-200/80'
                    }`}
                  >
                    <div className={`h-1.5 ${t.bar}`} />
                    <div className={`flex-1 flex flex-col p-6 sm:p-7 bg-gradient-to-b ${t.tint} to-white`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${t.badge}`}>
                          {p.badge}
                        </span>
                        {p.featured && (
                          <span className="rounded-full bg-[#FF6A00] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                            Flagship
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 text-3xl font-extrabold text-[#002B66]">{p.code}</h3>
                      <p className="text-sm font-semibold text-slate-600">{p.fullName}</p>
                      
                      <div className="mt-5 flex-1 flex flex-row items-end justify-between gap-3 min-h-[190px]">
                        <ul className="space-y-2.5 flex-1 min-w-0">
                          {p.points.map((pt) => (
                            <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <Check className={`w-4 h-4 mt-0.5 shrink-0 stroke-[3] ${t.tick}`} />
                              <span className="leading-snug">{pt}</span>
                            </li>
                          ))}
                        </ul>
                        {p.image && (
                          <div className="shrink-0 w-28 sm:w-32 flex justify-end items-end self-end">
                            <img
                              src={p.image}
                              alt={p.imageAlt || p.fullName}
                              className="w-full max-h-44 object-contain object-bottom drop-shadow-md rounded-xl"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => enquire(p.title)}
                        className={`mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition-colors cursor-pointer ${t.btn}`}
                      >
                        Explore {p.code} Program <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500 max-w-3xl mx-auto">
            SANTOSH Global HSE Academy provides independent training and examination preparation.
            The ASP®, CSP® and CRSP® credentials are awarded solely by their respective certifying bodies.
          </p>
        </div>
      </section>

      {/* Services: professional trainings */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66]">Professional Trainings</h2>
          <p className="mt-2 text-slate-600">Health, Safety and Environment courses for professionals and organisations.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_PROGRAMS.map((c) => (
              <button key={c.id} onClick={() => setCurrentPage('services')} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm hover:border-[#0284C7] hover:shadow-md transition-all cursor-pointer">
                <img src={c.image} alt="" className="h-16 w-16 rounded-lg object-cover" loading="lazy" />
                <span>
                  <span className="block font-bold text-[#002B66]">{c.title}</span>
                  <span className="block text-xs text-slate-500 line-clamp-2">{c.shortDescription}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS STRIP */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {BENEFITS.map((b) => {
            const Icon = icons[b.icon];
            return (
              <div key={b.title} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7] ring-1 ring-sky-100">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold text-[#002B66]">{b.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. STATS (verified figures only) */}
      {STATS_VERIFIED && (
        <section className="bg-gradient-to-r from-[#001838] via-[#002B66] to-[#003C8A] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-[#38BDF8]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. JOURNEY */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66]">Your Journey to Certification</h2>
          <p className="mt-2 text-slate-600">
            A simple and structured approach to help you move from preparation to exam readiness.
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4 relative">
            {JOURNEY_STEPS.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <li key={s.title} className="relative">
                  {i < JOURNEY_STEPS.length - 1 && (
                    <span className="hidden lg:block absolute top-6 left-14 right-0 border-t-2 border-dashed border-[#38BDF8]/40" />
                  )}
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#002B66] text-sm font-bold text-white ring-4 ring-white shadow-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className="w-7 h-7 text-[#0284C7]" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#002B66]">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 9. WHY US */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66]">Why SANTOSH Global HSE Academy?</h2>
            <p className="mt-2 text-xl font-bold text-[#0284C7]">More than training. A career partner.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We are committed to empowering HSE professionals with structured, exam-focused
              preparation and continuous professional guidance as they work towards their global
              certification goals.
            </p>
            <ul className="mt-6 space-y-3">
              {WHY_US_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 font-semibold text-[#002B66]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6A00]">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <button onClick={() => setCurrentPage('why-choose-us')} className="mt-8 btn-primary">
              Know More About Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="min-h-[280px] lg:min-h-full">
            <img
              src="/images/classroom_training.jpg"
              alt="HSE instructor leading an interactive certification workshop for a cohort of safety engineers"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 10. INSTRUCTOR (renders only once verified details are supplied) */}
      {INSTRUCTOR_VERIFIED && (
        <section className="py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-[280px_1fr] items-center">
            {INSTRUCTOR.photo && (
              <img src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} className="w-full rounded-2xl object-cover shadow-lg" loading="lazy" />
            )}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66]">Learn From Industry Experience</h2>
              <p className="mt-4 text-2xl font-bold text-[#002B66]">{INSTRUCTOR.name}</p>
              <p className="text-[#0284C7] font-semibold">{INSTRUCTOR.role}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">{INSTRUCTOR.bio}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {INSTRUCTOR.expertise.map((e) => (
                  <li key={e} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-[#0284C7] border border-sky-100">{e}</li>
                ))}
              </ul>
              <button onClick={() => setCurrentPage('about')} className="mt-6 btn-primary">
                View Instructor Profile <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 11. TESTIMONIALS (genuine only) */}
      {TESTIMONIALS_VERIFIED && TESTIMONIALS.length > 0 && (
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002B66]">What Our Learners Say</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.slice(0, 3).map((t) => (
                <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    {t.photo && <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />}
                    <div>
                      <figcaption className="font-bold text-[#002B66]">{t.name}</figcaption>
                      <p className="text-xs text-slate-500">{t.program} Candidate, {t.country}</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-sm text-slate-700">“{t.quote}”</blockquote>
                  <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6A00] text-[#FF6A00]" />
                    ))}
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#001838] text-white">
        <img
          src="/images/cta_sunset_plant.jpg"
          alt="Two safety professionals pointing toward an industrial plant at sunset"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001838] via-[#001838]/95 to-[#001838]/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-lg font-semibold text-[#38BDF8]">Ready to Advance Your HSE Career?</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">
            Join SANTOSH <span className="text-[#38BDF8]">Global HSE Academy</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-200">
            Get structured preparation, expert guidance and dedicated support for your ASP®, CSP®
            and CRSP® examination journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => enquire()} className="btn-orange">
              Enquire Now <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => enquire()} className="btn-outline-light">
              Download Brochure <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 bg-[#001026]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-100">
            {[
              [ShieldCheck, 'Build Your Knowledge', 'Get Prepared'],
              [Users, 'Learn from', 'Industry Experts'],
              [Award, 'Advance Your Career', 'Globally'],
              [Globe2, 'Join a Global', 'Learning Community'],
            ].map(([Icon, a, b]) => (
              <div key={a} className="flex items-center gap-3">
                <Icon className="w-7 h-7 text-[#38BDF8] shrink-0" />
                <span className="leading-tight">{a}<br />{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
