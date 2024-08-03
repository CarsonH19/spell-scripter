import { Howl } from "howler";

export const musicPaths = {
  returnOfTheFallen: "src/assets/audio/music/Return of the Fallen.mp3",
  timeToFaceThem: "src/assets/audio/music/Time to Face Them.mp3",
  finalBrigade: "src/assets/audio/music/Final Brigade.mp3",
  basementNightmare: "src/assets/audio/music/Basement Nightmares.mp3",
  birthOfaKnight: "src/assets/audio/music/Birth of a Knight.mp3",
  theEternalWar: "src/assets/audio/music/The Eternal War.mp3",
  deepTunnels: "src/assets/audio/music/Deep Tunnels.mp3",
  edgeOfFear: "src/assets/audio/music/Edge of Fear.mp3",
  pileOfBones: "src/assets/audio/music/Pile of Bones.mp3",
  passedDanger: "src/assets/audio/music/Passed Danger.mp3",
  spiderInvasion: "src/assets/audio/music/Spider Invasion.mp3",
  fightThrough: "src/assets/audio/music/Fight Through.mp3",
  imminentDarkness: "src/assets/audio/music/Imminent Darkness.mp3",
  hauntedOutpost: "src/assets/audio/music/Haunted Outpost.mp3",
  hiddenCapacity: "src/assets/audio/music/Hidden Capacity.mp3",
  mindReading: "src/assets/audio/music/Mind Reading.mp3",
  unfinishedBusiness: "src/assets/audio/music/Unfinished Business.mp3",
  weCantStopThem: "src/assets/audio/music/We Can_t Stop Them.mp3",
  threeThousandYearsOld: "src/assets/audio/music/3000 Years Old.mp3",
  crypta: "src/assets/audio/music/Crypta.mp3",
  claustrofobia: "src/assets/audio/music/Claustrofobia.mp3",
  creepyThoughts: "src/assets/audio/music/Creepy Thoughts.mp3",
  mazeHeist: "src/assets/audio/music/Maze Heist.mp3",
  theEndOfTheWorld: "src/assets/audio/music/The End of the World.mp3",
  droneDungeon: "src/assets/audio/music/Drone Dungeon.mp3",
  droneDarkHor1: "src/assets/audio/music/Drone Dark Hor 1.mp3",
  droneDarkMys24: "src/assets/audio/music/Drone Dark Mys 24.mp3",
  heartbeatFastLow: "src/assets/audio/sound-effects/Heartbeat Fast Low.mp3",
};

export const backgroundMusic = Object.fromEntries(
  Object.entries(musicPaths).map(([key, path]) => [
    key,
    new Howl({
      src: [path],
      loop: true,
      volume: 0.5,
    }),
  ])
);
