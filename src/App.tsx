import { useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Memories } from './components/Memories';
import { VideoCarousel } from './components/VideoCarousel';
import { Footer } from './components/Footer';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = async () => {
      try {
        await audio.play();
      } catch {
        // Autoplay may be blocked by browser policies.
      }
    };

    tryPlay();
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      <Hero />
      <div className="fixed bottom-5 left-1/2 z-50 w-[min(92%,520px)] -translate-x-1/2 rounded-3xl border border-navy-300/30 bg-navy-950/90 p-3 shadow-2xl backdrop-blur-xl transition-opacity duration-300 hover:opacity-100 opacity-95">
        <audio
          ref={audioRef}
          controls
          autoPlay
          loop
          preload="auto"
          className="w-full rounded-3xl bg-navy-950/90 text-cream-50"
        >
          <source src="/assets/music/music.mp3" type="audio/mpeg" />
          Your browser does not support audio playback.
        </audio>
      </div>
      <main>
        <Memories />
        <VideoCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
