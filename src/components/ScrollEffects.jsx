import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUp, 
  MessageSquare, 
  Clock, 
  Search, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

/**
 * ScrollProgressBar: Top-of-page reading progress indicator
 */
export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#003882] via-[#38BDF8] to-[#FF6A00] transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

/**
 * RevealOnScroll: IntersectionObserver animation wrapper
 * Triggers smooth entry transitions when scrolled into view
 */
export function RevealOnScroll({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '',
  threshold = 0.15 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8';
      case 'fade-in':
        return isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95';
      case 'slide-left':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8';
      case 'slide-right':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * CountUpNumber: Smoothly animates numbers when visible
 */
export function CountUpNumber({ end, duration = 1600, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    // Parse numeric value if possible
    const num = parseFloat(end);
    if (isNaN(num)) {
      setCount(end);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * num);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(num);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="font-extrabold tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

/**
 * FloatingDock: Modern floating quick navigation bar with back-to-top & quick enquire
 */
export function FloatingDock({ onOpenEnquire, onNavigate }) {
  const [showDock, setShowDock] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      setShowDock(scrollY > 300);
      if (totalScroll > 0) {
        setScrollProgress((scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showDock) return null;

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      
      {/* 24/7 Live Desk Pill */}
      <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-xs font-semibold text-[#002B66] shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>24/7 Desk Active</span>
      </div>

      {/* Quick Enquire Floating Button */}
      <button
        onClick={() => onOpenEnquire()}
        className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#FF6A00] hover:bg-[#EA580C] text-white text-xs font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
        title="Open 24/7 Training Enquiry"
      >
        <MessageSquare className="w-4 h-4 stroke-[2.5]" />
        <span className="hidden sm:inline">Enquire Now</span>
      </button>

      {/* Circular Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#002B66] flex items-center justify-center shadow-xl hover:shadow-2xl border border-slate-200 transition-all hover:scale-110 active:scale-95 cursor-pointer group shrink-0"
        aria-label="Scroll to top"
      >
        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 36 36">
          <path
            className="text-slate-100"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-[#0284C7] transition-all duration-150"
            strokeDasharray={`${scrollProgress}, 100`}
            strokeWidth="3"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <ArrowUp className="w-4 h-4 stroke-[2.5] relative z-10 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
