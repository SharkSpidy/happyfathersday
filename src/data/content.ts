/* ============================================================
   DATA — Replace these placeholder URLs with your own files
   ============================================================
   To use your own photos and videos:

   1. Place image files in:  public/photos/
   2. Place video files in:  public/videos/
   3. Replace each src string below with the local path,
      e.g. src: '/photos/family-beach.jpg'
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
    src: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&w=400',
    alt: 'Father and child walking together',
  },
  {
    src: 'https://images.pexels.com/photos/1661454/pexels-photo-1661454.jpeg?auto=compress&w=400',
    alt: 'Family enjoying a day outdoors',
  },
  {
    src: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&w=400',
    alt: 'Dad holding his newborn baby',
  },
  {
    src: 'https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&w=400',
    alt: 'Father and son laughing together',
  },
  {
    src: 'https://images.pexels.com/photos/2075812/pexels-photo-2075812.jpeg?auto=compress&w=400',
    alt: 'Dad teaching kid to ride a bike',
  },
  {
    src: 'https://images.pexels.com/photos/1246975/pexels-photo-1246975.jpeg?auto=compress&w=400',
    alt: 'Father carrying child on shoulders',
  },
  {
    src: 'https://images.pexels.com/photos/2187974/pexels-photo-2187974.jpeg?auto=compress&w=400',
    alt: 'Father and daughter at sunset',
  },
  {
    src: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&w=400',
    alt: 'Family hiking together',
  },
  {
    src: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&w=400',
    alt: 'Dad and kids playing in park',
  },
  {
    src: 'https://images.pexels.com/photos/2526029/pexels-photo-2526029.jpeg?auto=compress&w=400',
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
    src: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&w=800',
    alt: 'Father and child walking together',
    caption: 'Our favorite walking trail — you always let me set the pace.',
  },
  {
    src: 'https://images.pexels.com/photos/1661454/pexels-photo-1661454.jpeg?auto=compress&w=800',
    alt: 'Family enjoying a day outdoors',
    caption: 'That summer picnic where the ants joined us uninvited.',
  },
  {
    src: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&w=800',
    alt: 'Dad holding his newborn baby',
    caption: 'The day you first held me — forever etched in time.',
  },
  {
    src: 'https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&w=800',
    alt: 'Father and son laughing together',
    caption: 'Your laugh fills every room. I hear it even now.',
  },
  {
    src: 'https://images.pexels.com/photos/2075812/pexels-photo-2075812.jpeg?auto=compress&w=800',
    alt: 'Dad teaching kid to ride a bike',
    caption: 'You held the seat until I didn\'t need you to. Thank you.',
  },
  {
    src: 'https://images.pexels.com/photos/1246975/pexels-photo-1246975.jpeg?auto=compress&w=800',
    alt: 'Father carrying child on shoulders',
    caption: 'From up there, the world looked so big — and so did you.',
  },
  {
    src: 'https://images.pexels.com/photos/2187974/pexels-photo-2187974.jpeg?auto=compress&w=800',
    alt: 'Father and daughter at sunset',
    caption: 'Golden hour with you is still my favorite light.',
  },
  {
    src: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&w=800',
    alt: 'Family hiking together',
    caption: 'Every mountain felt smaller with you beside me.',
  },
  {
    src: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&w=800',
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
    /* REPLACE: '/videos/birthday.mp4' */
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster:
      'https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&w=800',
    title: 'Blazes of Joy',
    description: 'A moment of pure excitement captured forever.',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster:
      'https://images.pexels.com/photos/1661454/pexels-photo-1661454.jpeg?auto=compress&w=800',
    title: 'Great Escapes',
    description: 'Our family getaway adventures through the years.',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster:
      'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&w=800',
    title: 'Just Having Fun',
    description: 'The best moments are unplanned. This proves it.',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster:
      'https://images.pexels.com/photos/2075812/pexels-photo-2075812.jpeg?auto=compress&w=800',
    title: 'Joyrides',
    description: 'Every car ride became an adventure with you driving.',
  },
  {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster:
      'https://images.pexels.com/photos/2526029/pexels-photo-2526029.jpeg?auto=compress&w=800',
    title: 'Sweet Meltdowns',
    description: 'Even the tough moments became our best stories.',
  },
];
