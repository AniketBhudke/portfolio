import React from 'react';

export default function Credentials(){
  const creds = [
    {title:'Data Foundations', issuer:'Google', date:'2024'},
    {title:'Python Scripting', issuer:'Google', date:'2024'},
  ];
  return (
    <section id="credentials" className="py-24 max-w-[1200px] mx-auto px-8">
      <h2 className="text-4xl font-extrabold">Credentials</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {creds.map(c=> (
          <div key={c.title} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.04)] p-4 rounded-lg">
            <div className="text-lg font-bold">{c.title}</div>
            <div className="text-sm text-[#94A3B8]">{c.issuer} • {c.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
