import { backgroundMusic } from "../data/audio/music";
import {
  getLightWeaponSound,
  getPunchSound,
  soundEffects,
} from "../data/audio/sound-effects";

const SoundManager = {
  playBackgroundMusic(name) {
    if (backgroundMusic[name]) {
      backgroundMusic[name].play();
    }
  },
  stopBackgroundMusic(name) {
    if (backgroundMusic[name]) {
      backgroundMusic[name].stop();
    }
  },
  playSoundEffect(name) {
    if (soundEffects[name]) {
      soundEffects[name].play();
    }
  },
};

export default function playAudio(type, name) {
  // Play music by name
  if (type === "MUSIC") {
    SoundManager.playBackgroundMusic(name).play;
  }

  // Get sound from function or call by name
  if (type === "SOUND") {
    let sound;

    switch (name) {
      case "getLightWeaponSound":
        sound = getLightWeaponSound();
        break;

      default:
        {
          SoundManager.playSoundEffect(name);
        }
        return;
    }

    SoundManager.playSoundEffect(sound);
  }
}
