import React from 'react';

export default function Resume(){
  return (
    <section id="resume" className="py-24 max-w-[1200px] mx-auto px-8">
      <h2 className="text-4xl font-extrabold">My <span className="text-[#00D9FF]">Resume</span></h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-4 bg-[rgba(255,255,255,0.02)] p-4 rounded-lg border border-[rgba(0,180,255,0.04)]">
            <div className="font-bold">M.C.A. – Data Science</div>
            <div className="text-sm text-[#94A3B8]">MIT College of Management Pune • 2025 – 2027</div>
            <div className="mt-2 text-[#CBD5E1]">Specializing in Data Science foundations, RESTful API design, database management, and scalable cloud-based backend services.</div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Technical Skills</h3>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {['Python','FastAPI','REST API','SQL','AWS','Data Analytics','React','Docker'].map(s=> (
              <div key={s} className="bg-[rgba(255,255,255,0.02)] p-3 rounded-md text-sm">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
