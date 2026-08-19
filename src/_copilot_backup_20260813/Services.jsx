import React from 'react';

const services = [
  {title:'Python Backend Development', desc: 'Building scalable backend services, REST APIs, and integrations.'},
  {title:'REST API Development', desc: 'Designing secure and documented APIs using best practices.'},
  {title:'FastAPI Development', desc: 'High-performance Python APIs using FastAPI.'},
  {title:'Data Analytics', desc: 'Data processing, analysis, and visualization.'},
  {title:'Database Design', desc: 'Schema design, optimization, and SQL tuning.'},
  {title:'Full-Stack Development', desc: 'End-to-end web development with modern stacks.'},
];

export default function Services(){
  return (
    <section id="services" className="py-24 max-w-[1200px] mx-auto px-8">
      <h2 className="text-4xl font-extrabold">Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.04)] p-6 rounded-lg hover:scale-[1.02] transition"> 
            <div className="text-xl font-bold text-white">{s.title}</div>
            <div className="mt-2 text-[#CBD5E1]">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
