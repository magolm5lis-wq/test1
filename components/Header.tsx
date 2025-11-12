import React from 'react';
import { CalendarIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-amber-300 drop-shadow-lg leading-tight">
        Closing of the Year<br/>DPDE Get Together
      </h1>
      <p className="mt-4 text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto">
        You're invited to our annual end-of-year celebration!
      </p>
      <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-amber-200 px-6 py-3 rounded-full border border-white/20 shadow-md">
        <CalendarIcon />
        <span className="font-bold text-lg">Coming this December!</span>
      </div>
    </header>
  );
};

export default Header;