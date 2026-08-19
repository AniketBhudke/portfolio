import React from 'react';

export default function About(){
  return (
    <section id="about" className="py-24 max-w-[1200px] mx-auto px-8">
      <h2 className="text-4xl font-extrabold">About <span className="text-[#00D9FF]">Me</span></h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 text-[#CBD5E1] leading-relaxed text-lg">
          <p>I am an MCA Data Science student with practical experience building backend systems, REST APIs, and data-driven applications. My focus is on Python, FastAPI, PostgreSQL/SQL, cloud deployments (AWS EC2/S3), and creating scalable, production-ready services.</p>
          <p className="mt-4">I enjoy solving complex problems, designing reliable backend architectures, and integrating analytics into product flows. I participate in hackathons and research presentations, and I build clean, well-tested systems.</p>
        </div>
        <div className="md:col-span-1">
          <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.06)] p-6 rounded-xl">
            <h3 className="text-white font-bold">Technical Skills</h3>
            <ul className="mt-4 text-[#CBD5E1] space-y-2">
              {['Python','FastAPI','REST API','SQL','AWS','Data Analytics','Full-Stack'].map(s => (
                <li key={s} className="text-sm">• {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
