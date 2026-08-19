import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const items = ['home','about','resume','services','projects','credentials','contact'];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(2,8,23,0.9)] backdrop-blur-sm border-b border-[rgba(0,180,255,0.06)] h-20">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#39E88B] shadow-[0_0_12px_rgba(0,217,255,0.18)]" />
          <span className="text-white font-extrabold text-xl tracking-tight">Aniket</span>
          <span className="ml-1 text-[#00D9FF] font-extrabold">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {items.map((it) => (
            <button key={it} onClick={() => document.getElementById(it)?.scrollIntoView({behavior:'smooth'})} className={`text-sm font-medium ${it==='home' ? 'text-[#00D9FF] underline underline-offset-8 decoration-[#00D9FF] decoration-1' : 'text-[#CBD5E1] hover:text-[#00D9FF]'} transition-all`}>{it === 'credentials' ? 'Credentials' : it.charAt(0).toUpperCase()+it.slice(1)}</button>
          ))}
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 border rounded border-[rgba(255,255,255,0.04)]">☰</button>
        </div>
      </div>
    </header>
  );
}
