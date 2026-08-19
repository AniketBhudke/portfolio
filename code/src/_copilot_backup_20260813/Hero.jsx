import React from 'react';
import { Download, Mail } from 'lucide-react';
import SocialLinks from './SocialLinks';
import StatsPanel from './StatsPanel';
import profilePic from '../assets/profile.png';

export default function Hero(){
  return (
    <section id="home" className="relative min-h-screen flex items-center max-w-[1400px] mx-auto px-8 pt-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <p className="uppercase text-[#00D9FF] tracking-widest font-semibold mb-4">HELLO, I'M</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Aniket <span className="text-[#00D9FF]">Bhudke</span></h1>
          <p className="mt-3 text-xl text-slate-300">M.C.A. – Data Science <span className="text-[#00D9FF]">(Python Backend & Full-Stack)</span></p>
          <p className="mt-2 uppercase text-[#00D9FF] tracking-wider text-sm">MIT COLLEGE OF MANAGEMENT PUNE  •  2025 – 2027</p>

          <div className="h-0.5 w-16 bg-[#00D9FF] mt-6 rounded-sm shadow-sm shadow-[#00D9FF]/20" />

          <p className="mt-6 text-[#CBD5E1] max-w-xl leading-relaxed text-lg">Motivated and detail-oriented MCA (Data Science) student skilled in
          Python, FastAPI, REST API design, and data analytics.
          I build scalable backend services and full-stack applications,
          and have hands-on experience with cloud deployments (AWS EC2 & S3)
          and relational databases.</p>

          <div className="mt-8 flex gap-4">
            <a href="/Aniket_Bhudke_Resume.pdf" className="inline-flex items-center justify-center gap-2 w-[230px] h-14 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#2563EB] text-white font-semibold shadow-lg hover:-translate-y-1 transition-transform">
              View Resume <Download size={16} />
            </a>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="inline-flex items-center gap-2 w-[220px] h-14 rounded-lg border border-[#00D9FF]/20 text-white font-semibold hover:-translate-y-1 transition-transform">
              Contact Me <Mail size={16} />
            </button>
          </div>

          <div className="mt-6">
            <SocialLinks />
          </div>

        </div>

        <div className="md:col-span-5 flex justify-center">
          <div className="relative">
            {/* SVG rings */}
            <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#071225] to-transparent flex items-center justify-center shadow-2xl">
              <svg viewBox="0 0 360 360" className="w-[420px] h-[420px]">
                <defs>
                  <linearGradient id="g1b" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="#00D9FF" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
                <circle cx="180" cy="180" r="170" fill="none" stroke="#06202d" strokeWidth="18" />
                <circle cx="180" cy="180" r="150" fill="none" stroke="#03131b" strokeWidth="10" />
                <circle cx="180" cy="180" r="136" fill="none" stroke="url(#g1b)" strokeWidth="10" />
                <circle cx="180" cy="180" r="120" fill="#020817" />
                <circle cx="180" cy="180" r="118" fill="none" stroke="#0ea5bf" strokeWidth="6" />
              </svg>

              <img src={profilePic} alt="Aniket Bhudke" className="absolute w-[260px] h-[260px] rounded-full object-cover" />

              {/* orbit dots */}
              <span className="absolute w-3 h-3 rounded-full bg-[#00D9FF] left-[70%] top-[20%] shadow-[0_0_16px_rgba(0,217,255,0.25)] animate-[spin_9s_linear_infinite]" />
              <span className="absolute w-2 h-2 rounded-full bg-[#39E88B] left-[18%] top-[78%] shadow-[0_0_12px_rgba(57,232,139,0.15)] animate-[spin_12s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-24 px-8">
        <StatsPanel />
      </div>
    </section>
  );
}
