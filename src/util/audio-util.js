import { soundPaths } from "../data/audio/sound-effects";

// const SoundManager = {
//   playBackgroundMusic(name) {
//     if (backgroundMusic[name]) {
//       backgroundMusic[name].play();
//     }
//   },
//   stopBackgroundMusic(name) {
//     if (backgroundMusic[name]) {
//       backgroundMusic[name].stop();
//     }
//   },
//   playSoundEffect(category, soundName) {
//     console.log(soundPaths);
//     console.log(category);
//     console.log(soundName);

//     console.log(soundPaths.category.soundName);

//     if (soundPaths[category][soundName]) {
//       console.log("YES");
//       soundPaths[category][soundName].play();
//     }
//   },
// };

export default async function playSoundEffect(getSound, category, name = null) {
  // Get a random sound from the category
  if (getSound) {
    const soundName = getRandomSound(soundPaths[category]);
    const sound = await loadSound(category, soundName);
    sound.play();
  }

  // Play a specific sound in a category
  if (!getSound) {
    const sound = await loadSound(category, name);
    sound.play();
  }
  return;
}

function getRandomSound(obj) {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

const soundCache = {};

const loadSound = (category, soundName) => {
  const key = `${category}.${soundName}`;
  if (!soundCache[key]) {
    soundCache[key] = new Howl({
      src: [soundPaths[category][soundName]],
      volume: 1.0,
    });
    console.log(soundPaths[category][soundName]);
  }
  return soundCache[key];
};
