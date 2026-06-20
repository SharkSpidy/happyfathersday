import { Camera, Heart } from 'lucide-react';
import { memoryPhotos } from '../data/content';

export function Memories() {
  return (
    <section
      id="memories"
      className="relative bg-gradient-to-b from-navy-950 to-navy-900 px-6 py-20 md:py-28"
    >
      {/* ── Section heading ── */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-800/50 px-5 py-2 text-sm font-medium tracking-wide text-gold-400 backdrop-blur-sm">
            <Camera className="h-4 w-4" />
            Captured Moments
          </span>
        </div>
        <h2 className="font-serif text-4xl font-bold text-cream-50 md:text-5xl">
          Our Favorite Memories
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-navy-300/40" />
          <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
          <span className="h-px w-12 bg-navy-300/40" />
        </div>
        <p className="mt-4 text-base text-cream-200/70">
          Smiles, silly faces, and pure good vibes — nothing but fun in this feed.
        </p>
      </div>

      {/* ── Masonry-style responsive gallery ── */}
      <div className="mx-auto max-w-6xl">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {memoryPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="
                group break-inside-avoid overflow-hidden rounded-2xl
                bg-navy-800 p-3 shadow-lg ring-1 ring-navy-300/10
                transition-all duration-500 hover:-translate-y-2
                hover:shadow-2xl hover:ring-gold-500/30
              "
            >
              <div className="relative overflow-hidden rounded-xl">
                {/* REPLACE: swap photo.src with your own photo path, e.g. "/photos/walking-trail.jpg" */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
