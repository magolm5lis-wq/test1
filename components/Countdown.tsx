import React, { useState, useEffect, useMemo } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  
  return null;
};

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-24 h-24 sm:w-32 sm:h-32 border border-white/20 shadow-md">
        <span className="font-heading text-4xl sm:text-5xl text-amber-300 drop-shadow-md">
            {String(value).padStart(2, '0')}
        </span>
        <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-300 mt-1">
            {label}
        </span>
    </div>
);


const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  
  const timerComponents = useMemo(() => {
    if (!timeLeft) {
      return (
        <div className="text-center">
            <h2 className="font-heading text-5xl sm:text-6xl text-emerald-300 drop-shadow-lg">
                The Celebration is Here!
            </h2>
            <p className="mt-2 text-lg text-slate-200">We hope you're having a wonderful time!</p>
        </div>
      );
    }

    return (
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
    );
  }, [timeLeft]);

  return (
    <section className="text-center">
        <h2 className="font-heading text-3xl sm:text-4xl text-slate-100 mb-6 drop-shadow">
            Counting down to the big day!
        </h2>
        {timerComponents}
    </section>
  );
};

export default Countdown;