import React from 'react';

const projects = [
  {id:1,title:'Project A',desc:'Backend API with FastAPI',tags:['FastAPI','Postgres'],repo:'#'},
  {id:2,title:'Project B',desc:'Data analytics dashboard',tags:['Python','Pandas'],repo:'#'},
];

export default function Projects(){
  return (
    <section id="projects" className="py-24 max-w-[1200px] mx-auto px-8">
      <h2 className="text-4xl font-extrabold">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.id} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.04)] p-4 rounded-lg">
            <div className="text-xl font-bold">{p.title}</div>
            <div className="mt-2 text-[#CBD5E1]">{p.desc}</div>
            <div className="mt-3 flex gap-2 text-sm">{p.tags.map(t=> <span key={t} className="px-2 py-1 bg-[rgba(0,217,255,0.04)] rounded">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}