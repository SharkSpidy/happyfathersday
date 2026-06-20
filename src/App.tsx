import { Hero } from './components/Hero';
import { Memories } from './components/Memories';
import { VideoCarousel } from './components/VideoCarousel';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Hero />
      <main>
        <Memories />
        <VideoCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
