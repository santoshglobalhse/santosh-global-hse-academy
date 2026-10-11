import React, { useState } from 'react';
import { Send, CheckCircle2, Globe2, Clock, Users } from 'lucide-react';
import { EXAM_PREP_PROGRAMS, CORE_PROGRAMS } from '../data/academyData';
import { PageHero } from '../components/PageHero';

export default function ContactPage({ setCurrentPage, onShowToast }) {
  const empty = {
    name: '', email: '', phone: '', organisation: '',
    interestedTraining: EXAM_PREP_PROGRAMS[0].title, message: '',
  };
  const [formData, setFormData] = useState(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onShowToast) onShowToast(`Enquiry sent successfully for ${formData.name}. Our 24/7 team will reach out promptly.`);
    }, 600);
  };

  const handleReset = () => { setFormData(empty); setSubmitted(false); };

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Contact"
        title="Start your"
        accent="exam-preparation journey"
        text="Tell us which examination you are preparing for and our team will guide you on the right program."
      />
      <section className="bg-[#F8FAFC] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-4">
            {[
              [Globe2, 'Accessible Worldwide', 'Open to learners all over the world.'],
              [Clock, 'Business Hours 24/7', 'Enquiries are welcome at any time.'],
              [Users, 'Dedicated Learner Support', 'Personal guidance from enquiry through to exam day.'],
            ].map(([Icon, t, d]) => (
              <div key={t} className="flex gap-4 rounded-2xl bg-white border border-slate-200 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0284C7] ring-1 ring-sky-100"><Icon className="w-5 h-5" /></div>
                <div><p className="font-bold text-[#002B66]">{t}</p><p className="text-sm text-slate-600">{d}</p></div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <CheckCircle2 className="w-16 h-16 mx-auto text-[#0284C7]" />
                <h3 className="text-2xl font-bold text-[#002B66]">Thank You, {formData.name}</h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto">
                  Your enquiry regarding <strong>{formData.interestedTraining}</strong> has been received. We will contact you at {formData.email}.
                </p>
                <button onClick={handleReset} className="btn-primary">Send Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#002B66]">
                        Enquiry Form
                      </h3>
                      <p className="text-xs text-slate-500 font-normal">
                        Please provide your details below and our team will provide full training guidance.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 transition-all placeholder:text-slate-400 shadow-sm"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 transition-all placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 234 567 890"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 transition-all placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Organisation & Interested Training */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Organisation / Employer *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          placeholder="Company or Freelance"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 transition-all placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Interested Training Program *
                        </label>
                        <select
                          value={formData.interestedTraining}
                          onChange={(e) => setFormData({ ...formData, interestedTraining: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 transition-all cursor-pointer shadow-sm"
                        >
                          {EXAM_PREP_PROGRAMS.map((prog) => (
                            <option key={prog.id} value={prog.title}>
                              {prog.title}
                            </option>
                          ))}
                          {CORE_PROGRAMS.map((prog) => (
                            <option key={prog.id} value={prog.title}>{prog.title}</option>
                          ))}
                          <option value="General Training Enquiry">
                            General Training Enquiry
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Message / Requirements *
                      </label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please specify your training objectives, team size, or preferred timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 transition-all placeholder:text-slate-400 shadow-sm"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      {/* Exact CTA Label Requested */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-orange w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>{loading ? 'Submitting...' : 'Send Enquiry'}</span>
                      </button>
                    </div>
                  </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
