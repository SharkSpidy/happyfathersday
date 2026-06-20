/* ============================================================
   DATA — Replace these placeholder URLs with your own files
   ============================================================
   To use your own photos and videos:

   1. Place image files in:  public/assets/images/
   2. Place video files in:  public/assets/videos/
   3. Replace each src string below with the local path,
      e.g. src: '/assets/images/family-beach.jpg'
   ============================================================ */

export interface FilmReelImage {
  src: string;
  alt: string;
}

/* ── Film Reel images (hero strip) ──  */
/* Duplicate the array in the component for seamless loop.
   Use landscape-oriented photos for best effect. */
export const filmReelImages: FilmReelImage[] = [
  {
    src: '/assets/images/1.jpg',
    alt: 'Father and child walking together',
  },
  {
    src: '/assets/images/2.jpg',
    alt: 'Family enjoying a day outdoors',
  },
  {
    src: '/assets/images/3.jpg',
    alt: 'Dad holding his newborn baby',
  },
  {
    src: '/assets/images/4.jpg',
    alt: 'Father and son laughing together',
  },
  {
    src: '/assets/images/5.jpg',
    alt: 'Dad teaching kid to ride a bike',
  },
  {
    src: '/assets/images/6.jpg',
    alt: 'Father carrying child on shoulders',
  },
  {
    src: '/assets/images/7.jpg',
    alt: 'Father and daughter at sunset',
  },
  {
    src: '/assets/images/8.jpg',
    alt: 'Family hiking together',
  },
  {
    src: '/assets/images/9.jpg',
    alt: 'Dad and kids playing in park',
  },
  {
    src: '/assets/images/10.jpg',
    alt: 'Father reading to his children',
  },
];

export interface MemoryPhoto {
  src: string;
  alt: string;
  caption: string;
}

/* ── Memories gallery photos ── */
export const memoryPhotos: MemoryPhoto[] = [
  {
    src: '/assets/images/11.jpg',
    alt: 'Father and child walking together',
    caption: 'Our favorite walking trail — you always let me set the pace.',
  },
  {
    src: '/assets/images/12.jpg',
    alt: 'Family enjoying a day outdoors',
    caption: 'The day you first held me — forever etched in time.',
  },
  {
    src: '/assets/images/13.jpg',
    alt: 'Dad holding his newborn baby',
    caption: 'Summer was always soo much better with you by my side.',
  },
  {
    src: '/assets/images/14.jpg',
    alt: 'Father and son laughing together',
    caption: 'Your laugh fills every room. I hear it even now.',
  },
  {
    src: '/assets/images/15.jpg',
    alt: 'Dad teaching kid to ride a bike',
    caption: 'From up there, the world looked so big — and so did you.',
  },
  {
    src: '/assets/images/16.jpg',
    alt: 'Father carrying child on shoulders',
    caption: 'You held the seat until I didn\'t need you to. Thank you.',
  },
  {
    src: '/assets/images/17.jpg',
    alt: 'Father and daughter at sunset',
    caption: 'Golden hour with you is still my favorite light.',
  },
  {
    src: '/assets/images/18.jpg',
    alt: 'Family hiking together',
    caption: 'Every mountain felt smaller with you beside me.',
  },
  {
    src: '/assets/images/19.jpg',
    alt: 'Dad and kids playing in park',
    caption: 'You taught me that play is serious business.',
  },
];

export interface VideoClip {
  src: string;
  poster: string;
  title: string;
  description: string;
}

/* ── Video carousel clips ── */
/* Replace src with your own .mp4/.webm files in public/videos/
   Replace poster with a thumbnail image for each video */
export const videoClips: VideoClip[] = [
  {
    /* REPLACE: '/assets/videos/V1.mp4' */
    src: '/assets/videos/V1.mp4',
    poster: '/assets/images/20.jpg',
    title: 'Blazes of Joy',
    description: 'A moment of pure excitement captured forever.',
  },
  {
    src: '/assets/videos/V2.mp4',
    poster: '/assets/images/21.jpg',
    title: 'Music and Laughter',
    description: 'The soundtrack of our lives is filled with your laughter and love.',
  },
  {
    src: '/assets/videos/V3.mp4',
    poster: '/assets/images/22.jpg',
    title: 'Just Having Fun',
    description: 'The best moments are unplanned. This proves it.',
  },
  {
    src: '/assets/videos/V4.mp4',
    poster: '/assets/images/23.jpg',
    title: 'Joyrides',
    description: 'Every car ride became an adventure with you driving.',
  },
  {
    src: '/assets/videos/V5.mp4',
    poster: '/assets/images/24.jpg',
    title: 'Sweet Times',
    description: 'Even the tough moments became our best stories.',
  },
  {
    src: '/assets/videos/V6.mp4',
    poster: '/assets/images/25.jpg',
    title: 'Sunshine Vibes',
    description: 'Bright smiles and carefree afternoons on repeat.',
  },
  {
    src: '/assets/videos/V7.mp4',
    poster: '/assets/images/26.jpg',
    title: 'Watching the game',
    description: 'Cheering together, every goal and every win felt bigger with you.',
  },
  {
    src: '/assets/videos/V8.mp4',
    poster: '/assets/images/27.jpg',
    title: 'Family Time',
    description: 'Quality time with the ones you love.',
  },
];
