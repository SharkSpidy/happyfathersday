import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 px-6 py-20 text-center">
      {/* ── Decorative top divider ── */}
      <div className="mx-auto mb-12 flex max-w-2xl items-center justify-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-navy-300/40" />
        <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-navy-300/40" />
      </div>

      {/* ── Message ── */}
      <p className="font-script text-3xl text-gold-400 md:text-4xl">
        Thank you for everything, Dad.
      </p>


      {/* ── Signature ── */}
      <div className="mt-12 flex items-center justify-center gap-2 text-sm text-cream-200/60">
        <span>Made with</span>
        <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
        <span>from Boo</span>
      </div>
    </footer>
  );
}
