
import React, { useState, useRef, useCallback } from 'react';
import { PlayIcon, PauseIcon } from './Icons';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <>
      {/* Royalty-free music placeholder. Replace with your desired audio file. */}
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/11/22/audio_1e98c2128b.mp3" loop />
      <button
        onClick={togglePlay}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-amber-400/80 backdrop-blur-md text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </>
  );
};

export default MusicPlayer;
