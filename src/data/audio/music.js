import { Howl, Howler } from 'howler';

// Background music
export const backgroundMusic = new Howl({
  src: ['/sounds/background-music.mp3'],
  loop: true,
  volume: 0.5
});
