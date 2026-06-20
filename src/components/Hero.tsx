import { Heart } from 'lucide-react';
import { filmReelImages } from '../data/content';

/**
 * Duplication makes the CSS marquee loop seamlessly.
 * The @keyframes translateX(-50%) animation only works if the
 * visible track contains exactly two copies of the same image set.
 */
const duplicatedReel = [...filmReelImages, ...filmReelImages];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950">
      {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-20 pb-10 text-center md:pt-28">
        {/* ── Small pill badge ── */}
        <div className="animate-gentle-bob mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-800/60 px-5 py-2 text-sm font-medium tracking-wide text-gold-400 backdrop-blur-sm">
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
            A Small father's day gift to You
          </span>
        </div>

        {/* ── Script tagline ── */}

        {/* ── Main heading ── */}
        <h1 className="font-serif text-5xl font-bold leading-tight text-cream-50 text-shadow-soft sm:text-6xl md:text-7xl lg:text-8xl">
          Happy
          <span className="block bg-gradient-to-r from-gold-400 to-rose-400 bg-clip-text text-transparent">
            Father&apos;s Day!
          </span>
        </h1>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-6 max-w-xl text-base text-cream-200/70 md:text-lg">
          A scrapbook of moments, memories, and love — celebrating the person
          who taught us everything that matters.
        </p>

        {/* ── Scroll hint ── */}
        <div className="mt-10 flex justify-center">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-navy-300/50 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-navy-300" />
          </div>
        </div>
      </div>

      {/* ── Auto-scrolling Film Reel ── */}
      <div className="film-strip py-4">
        <div className="film-reel-track gap-3 px-2">
          {duplicatedReel.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-36 w-52 shrink-0 overflow-hidden rounded-sm bg-navy-950 shadow-lg sm:h-44 sm:w-64"
            >
              {/* REPLACE: swap image.src with your own photo path, e.g. "/photos/walking.jpg" */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
