
const SoundManager = {
  playBackgroundMusic() {
    backgroundMusic.play();
  },
  stopBackgroundMusic() {
    backgroundMusic.stop();
  },
  playSoundEffect(name) {
    if (soundEffects[name]) {
      soundEffects[name].play();
    }
  }
};

export default SoundManager;