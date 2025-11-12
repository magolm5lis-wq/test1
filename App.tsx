import React from 'react';
import Snowfall from './components/Snowfall';
import Header from './components/Header';
import EventSection from './components/EventSection';
import MusicPlayer from './components/MusicPlayer';
import Countdown from './components/Countdown';
import { MicrophoneIcon, GiftIcon, GlobeAltIcon, MusicalNoteIcon, SparklesIcon, TrophyIcon } from './components/Icons';

const App: React.FC = () => {
  const eventDate = "2025-12-11T18:00:00";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-sky-900 text-white overflow-hidden">
      <Snowfall />
      <MusicPlayer />
      
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16">
        <Header />

        <div className="my-12 sm:my-16">
          <Countdown targetDate={eventDate} />
        </div>

        <main>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <EventSection 
              title="🎤 Xmas Interview with Program Leads"
              icon={<MicrophoneIcon />}
              color="bg-rose-600/20 border-rose-500"
            >
              <p className="text-rose-100">
                Get ready for an exclusive and fun-filled interview session with our program leads! Discover their favorite holiday memories, secret talents, and hear their special year-end message for the team. A great way to get to know the people behind the scenes!
              </p>
            </EventSection>

            <EventSection 
              title="🌍 Xmas Quiz: World's Traditions"
              icon={<GlobeAltIcon />}
              color="bg-emerald-600/20 border-emerald-500"
            >
              <p className="text-emerald-100">
                How well do you know holiday traditions from around the globe? Team up and test your knowledge in this exciting quiz. From festive foods to unique celebrations, it's a journey around the world from the comfort of your seat!
              </p>
            </EventSection>

            <EventSection 
              title="🎶 'Name the Tune' Quiz"
              icon={<MusicalNoteIcon />}
              color="bg-sky-600/20 border-sky-500"
            >
              <p className="text-sky-100">
                Are you a music lover? Get your ears ready for our "Name the Tune" challenge! We'll be playing classic Christmas jingles and modern holiday hits. Be the first to guess the song and artist to score points for your team.
              </p>
            </EventSection>

            <EventSection 
              title="🏆 Prizes & Goodies"
              icon={<TrophyIcon />}
              color="bg-amber-600/20 border-amber-500"
            >
              <p className="text-amber-100">
                Victories shall be rewarded! The sharpest minds and quickest ears in our quizzes will walk away with amazing awards. We have a sleigh-full of goodies and prizes for the winners. Get your game face on!
              </p>
            </EventSection>
            
            <div className="lg:col-span-2">
              <EventSection 
                title="✨ And Many Surprises!"
                icon={<GiftIcon />}
                color="bg-purple-600/20 border-purple-500"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <SparklesIcon className="w-16 h-16 text-purple-300 flex-shrink-0" />
                  <div>
                    <p className="text-purple-100">
                      We believe the best gifts are surprises! The organizing committee has some secret festive fun up their sleeves. Expect the unexpected, share in the laughter, and create unforgettable memories. We guarantee you a wonderful time filled with joy and holiday cheer!
                    </p>
                  </div>
                </div>
              </EventSection>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;