import React from 'react';
import { Mail } from 'lucide-react';

export default function SocialLinks(){
  const btnClass = 'w-14 h-14 rounded-full border border-[rgba(0,180,255,0.12)] flex items-center justify-center text-[#CBD5E1] hover:text-[#00D9FF] hover:border-[#00D9FF] transition-transform';
  return (
    <div className="flex items-center gap-4">
      <a href="https://github.com/AniketBhudke" className={btnClass} aria-label="GitHub">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.95 10.95 0 0112 6.84c.97.005 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.13 0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/aniket-bhudke-389b592b0/" className={btnClass} aria-label="LinkedIn">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1 .9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17H5v-8h3v8zM6.5 8.5C5.67 8.5 5 7.83 5 7s.67-1.5 1.5-1.5S8 6.17 8 7s-.67 1.5-1.5 1.5zM19 17h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-3v-8h3v1.1c.9-1 2.5-1.1 3.5-.8 1.4.4 2.5 1.8 2.5 3.7V17z" />
        </svg>
      </a>
      <a href="https://hackerrank.com/profile/bhudkea" className={btnClass} aria-label="HackerRank"><span className="text-[#00D9FF] font-bold">H</span></a>
      <a href="mailto:bhudkea@gmail.com" className={btnClass} aria-label="Email"><Mail /></a>
    </div>
  );
}
