import { Howl } from "howler";

export let currentMusic = null;

// musicPaths.js
export const musicPaths = {
  returnOfTheFallen: "src/assets/audio/music/returnOfTheFallen.mp3",
  timeToFaceThem: "src/assets/audio/music/timeToFaceThem.mp3",
  finalBrigade: "src/assets/audio/music/finalBrigade.mp3",
  basementNightmare: "src/assets/audio/music/basementNightmare.mp3",
  birthOfaKnight: "src/assets/audio/music/birthOfaKnight.mp3",
  theEternalWar: "src/assets/audio/music/theEternalWar.mp3",
  deepTunnels: "src/assets/audio/music/deepTunnels.mp3",
  edgeOfFear: "src/assets/audio/music/edgeOfFear.mp3",
  pileOfBones: "src/assets/audio/music/pileOfBones.mp3",
  passedDanger: "src/assets/audio/music/passedDanger.mp3",
  spiderInvasion: "src/assets/audio/music/spiderInvasion.mp3",
  fightThrough: "src/assets/audio/music/fightThrough.mp3",
  imminentDarkness: "src/assets/audio/music/imminentDarkness.mp3",
  hauntedOutpost: "src/assets/audio/music/hauntedOutpost.mp3",
  hiddenCapacity: "src/assets/audio/music/hiddenCapacity.mp3",
  mindReading: "src/assets/audio/music/mindReading.mp3",
  unfinishedBusiness: "src/assets/audio/music/unfinishedBusiness.mp3",
  weCantStopThem: "src/assets/audio/music/weCantStopThem.mp3",
  threeThousandYearsOld: "src/assets/audio/music/threeThousandYearsOld.mp3",
  crypta: "src/assets/audio/music/crypta.mp3",
  claustrofobia: "src/assets/audio/music/claustrofobia.mp3",
  creepyThoughts: "src/assets/audio/music/creepyThoughts.mp3",
  mazeHeist: "src/assets/audio/music/mazeHeist.mp3",
  theEndOfTheWorld: "src/assets/audio/music/theEndOfTheWorld.mp3",
  droneDungeon: "src/assets/audio/music/droneDungeon.mp3",
  droneDarkHor1: "src/assets/audio/music/droneDarkHor1.mp3",
  droneDarkMys24: "src/assets/audio/music/droneDarkMys24.mp3",
  heartbeatFastLow: "src/assets/audio/sound-effects/heartbeatFastLow.mp3",
  intangibleAscension: "src/assets/audio/music/intangibleAscension.mp3",
  warningSignal: "src/assets/audio/music/warningSignal.mp3",
  migrano: "src/assets/audio/music/migrano.mp3",
};


const loadSound = (src, options = {}) => {
  return new Howl({
    src: [src],
    ...options,
  });
};

export const backgroundMusic = {
  returnOfTheFallen: () =>
    loadSound(musicPaths.returnOfTheFallen, { loop: true, volume: 0 }),
  timeToFaceThem: () =>
    loadSound(musicPaths.timeToFaceThem, { loop: true, volume: 0 }),
  finalBrigade: () =>
    loadSound(musicPaths.finalBrigade, { loop: true, volume: 0 }),
  basementNightmare: () =>
    loadSound(musicPaths.basementNightmare, { loop: true, volume: 0 }),
  birthOfaKnight: () =>
    loadSound(musicPaths.birthOfaKnight, { loop: true, volume: 0 }),
  theEternalWar: () =>
    loadSound(musicPaths.theEternalWar, { loop: true, volume: 0 }),
  deepTunnels: () =>
    loadSound(musicPaths.deepTunnels, { loop: true, volume: 0 }),
  edgeOfFear: () => loadSound(musicPaths.edgeOfFear, { loop: true, volume: 0 }),
  pileOfBones: () =>
    loadSound(musicPaths.pileOfBones, { loop: true, volume: 0 }),
  passedDanger: () =>
    loadSound(musicPaths.passedDanger, { loop: true, volume: 0 }),
  spiderInvasion: () =>
    loadSound(musicPaths.spiderInvasion, { loop: true, volume: 0 }),
  fightThrough: () =>
    loadSound(musicPaths.fightThrough, { loop: true, volume: 0 }),
  imminentDarkness: () =>
    loadSound(musicPaths.imminentDarkness, { loop: true, volume: 0 }),
  hauntedOutpost: () =>
    loadSound(musicPaths.hauntedOutpost, { loop: true, volume: 0 }),
  hiddenCapacity: () =>
    loadSound(musicPaths.hiddenCapacity, { loop: true, volume: 0 }),
  mindReading: () =>
    loadSound(musicPaths.mindReading, { loop: true, volume: 0 }),
  unfinishedBusiness: () =>
    loadSound(musicPaths.unfinishedBusiness, { loop: true, volume: 0 }),
  weCantStopThem: () =>
    loadSound(musicPaths.weCantStopThem, { loop: true, volume: 0 }),
  threeThousandYearsOld: () =>
    loadSound(musicPaths.threeThousandYearsOld, { loop: true, volume: 0 }),
  crypta: () => loadSound(musicPaths.crypta, { loop: true, volume: 0 }),
  claustrofobia: () =>
    loadSound(musicPaths.claustrofobia, { loop: true, volume: 0 }),
  creepyThoughts: () =>
    loadSound(musicPaths.creepyThoughts, { loop: true, volume: 0 }),
  mazeHeist: () => loadSound(musicPaths.mazeHeist, { loop: true, volume: 0 }),
  theEndOfTheWorld: () =>
    loadSound(musicPaths.theEndOfTheWorld, { loop: true, volume: 0 }),
  droneDungeon: () =>
    loadSound(musicPaths.droneDungeon, { loop: true, volume: 0 }),
  droneDarkHor1: () =>
    loadSound(musicPaths.droneDarkHor1, { loop: true, volume: 0 }),
  droneDarkMys24: () =>
    loadSound(musicPaths.droneDarkMys24, { loop: true, volume: 0 }),
  heartbeatFastLow: () =>
    loadSound(musicPaths.heartbeatFastLow, { loop: true, volume: 0 }),
  intangibleAscension: () =>
    loadSound(musicPaths.intangibleAscension, { loop: true, volume: 0 }),
  migrano: () => loadSound(musicPaths.migrano, { loop: true, volume: 0 }),
  warningSignal: () =>
    loadSound(musicPaths.warningSignal, { loop: true, volume: 0 }),
};

const FADE_DURATION = 2000; // Duration of the fade in milliseconds
const MAX_VOLUME = 0.15; // Maximum volume level

export const playMusic = (musicFunc) => {
  if (currentMusic) {
    currentMusic.fade(currentMusic.volume(), 0, FADE_DURATION);
    currentMusic.once("fade", () => {
      currentMusic.stop();
      // Start the new music only after the current music has stopped
      currentMusic = musicFunc();
      currentMusic.play();
      currentMusic.fade(0, MAX_VOLUME, FADE_DURATION); // Fade in to MAX_VOLUME
    });
  } else {
    // If there is no current music, just play the new music
    currentMusic = musicFunc();
    currentMusic.play();
    currentMusic.fade(0, MAX_VOLUME, FADE_DURATION); // Fade in to MAX_VOLUME
  }
};
