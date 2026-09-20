import React from 'react';

const StorageAdvisorMark = ({ className = 'h-28 w-28' }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="storageAdvisorBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="55%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="39" rx="27" ry="10" fill="none" stroke="url(#storageAdvisorBlue)" strokeWidth="7" />
    <path d="M33 39v19c0 6 12 11 27 11s27-5 27-11V39M33 58v19c0 6 12 11 27 11s27-5 27-11V58" fill="none" stroke="url(#storageAdvisorBlue)" strokeWidth="7" />
    <path d="M24 82c14 14 39 18 61 9 10-4 18-11 23-20" fill="none" stroke="#e0f2fe" strokeWidth="5" strokeLinecap="round" />
    <path d="M99 64l10 7-12 3" fill="#38bdf8" />
    <path d="M18 43c7-14 22-23 39-25" fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" opacity=".8" />
  </svg>
);

export default StorageAdvisorMark;
