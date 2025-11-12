import React, { useState, useEffect } from 'react';

interface Snowflake {
  id: number;
  style: React.CSSProperties;
}

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const newSnowflakes: Snowflake[] = Array.from({ length: 150 }).map((_, index) => {
        const size = Math.random() * 12 + 8; // From 8px to 20px
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * -20;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.7 + 0.3;

        return {
          id: index,
          style: {
            fontSize: `${size}px`,
            left: `${left}vw`,
            opacity: opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          },
        };
      });
      setSnowflakes(newSnowflakes);
    };

    createSnowflakes();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      {snowflakes.map(flake => (
        <div key={flake.id} className="snowflake" style={flake.style}>
          ❄️
        </div>
      ))}
    </div>
  );
};

export default Snowfall;