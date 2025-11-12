
import React from 'react';

interface EventSectionProps {
  title: string;
  icon: React.ReactNode;
  color?: string;
  children: React.ReactNode;
}

const EventSection: React.FC<EventSectionProps> = ({ title, icon, color = 'bg-gray-700/20 border-gray-600', children }) => {
  return (
    <div 
      className={`p-6 rounded-2xl border backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${color}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-8 flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
      </div>
      <div className="text-slate-300 text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default EventSection;
