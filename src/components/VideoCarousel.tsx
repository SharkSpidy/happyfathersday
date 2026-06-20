import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Film } from 'lucide-react';
import { videoClips } from '../data/content';

export function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /** Scroll one card width left or right. */
  const scrollByCard = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('article')?.clientWidth ?? 320;
    const gap = 24;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    });
  };

  /** Track which card is centered for the active-dot indicator. */
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('article')?.clientWidth ?? 320;
    const gap = 24;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(newIndex, videoClips.length - 1)));
  };

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 px-6 py-20 md:py-28"
    >
      {/* ── Decorative glows ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* ── Section heading ── */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-800/50 px-5 py-2 text-sm font-medium tracking-wide text-gold-400 backdrop-blur-sm">
              <Film className="h-4 w-4" />
              On Screen
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold text-cream-50 md:text-5xl">
            Moments on Camera
          </h2>
          <p className="mt-4 text-base text-cream-200/70">
            Swipe through some of our favorite moving memories. Click a video
            to play.
          </p>
        </div>

        {/* ── Carousel controls (desktop) ── */}
        <div className="mx-auto mb-6 flex max-w-6xl items-center justify-between px-2">
          <button
            onClick={() => scrollByCard('left')}
            aria-label="Previous video"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-300/20 bg-navy-800/50 text-cream-50 transition-all hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400 disabled:cursor-not-allowed disabled:opacity-30"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* ── Progress dots ── */}
          <div className="flex gap-2">
            {videoClips.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gold-400'
                    : 'w-2 bg-navy-300/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollByCard('right')}
            aria-label="Next video"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-300/20 bg-navy-800/50 text-cream-50 transition-all hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400 disabled:cursor-not-allowed disabled:opacity-30"
            disabled={activeIndex === videoClips.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* ── Scroll-snap carousel ── */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="snap-carousel flex gap-6 overflow-x-auto scroll-smooth px-[max(1.5rem,calc((100vw-64rem)/2))] pb-4"
        >
          {videoClips.map((clip, index) => (
            <article
              key={clip.src}
              className="snap-item group relative w-[300px] shrink-0 overflow-hidden rounded-2xl border border-navy-300/10 bg-navy-800 shadow-2xl transition-all duration-500 hover:border-gold-500/30 sm:w-[360px] md:w-[420px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* ── Video player ── */}
              <div className="relative aspect-video overflow-hidden bg-black">
                {/*
                  REPLACE: swap clip.src with your own video file, e.g. "/videos/birthday.mp4"
                  REPLACE: swap clip.poster with your own thumbnail, e.g. "/photos/birthdaythumb.jpg"
                */}
                <video
                  src={clip.src}
                  poster={clip.poster}
                  controls
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* ── Caption area ── */}
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-gold-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-cream-50">
                    {clip.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-cream-200/60">
                  {clip.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
