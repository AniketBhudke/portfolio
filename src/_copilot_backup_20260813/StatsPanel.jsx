import React from 'react';
import { GraduationCap, Code, Cloud, Database, BarChart2, Zap } from 'lucide-react';

const items = [
  {icon: <GraduationCap size={28} className='text-[#00D9FF]' />, title: 'M.C.A.', sub: 'Data Science\n2025 – 2027'},
  {icon: <Code size={28} className='text-[#00D9FF]' />, title: '10+', sub: 'Projects\nCompleted'},
  {icon: <Cloud size={28} className='text-[#00D9FF]' />, title: 'AWS', sub: 'EC2, S3\n& Cloud Basics'},
  {icon: <Database size={28} className='text-[#00D9FF]' />, title: 'SQL', sub: 'Database Design\n& Optimization'},
  {icon: <BarChart2 size={28} className='text-[#00D9FF]' />, title: 'Data', sub: 'Analysis &\nVisualization'},
  {icon: <Zap size={28} className='text-[#00D9FF]' />, title: 'FastAPI', sub: 'REST API\nDevelopment'},
];

export default function StatsPanel(){
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-md border border-[rgba(0,180,255,0.06)] rounded-xl p-4 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 items-stretch">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-start gap-4 px-4 py-6 border-l md:border-l-0 md:border-r md:first:border-l-0 md:last:border-r-0 border-[rgba(255,255,255,0.02)]">
              <div className="w-12 h-12 flex items-center justify-center bg-[rgba(0,217,255,0.04)] rounded-lg">
                {it.icon}
              </div>
              <div>
                <div className="text-white font-bold text-xl">{it.title}</div>
                <div className="text-[#94A3B8] text-sm whitespace-pre-line">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
