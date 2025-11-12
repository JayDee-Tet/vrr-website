export const playSound = (soundFile: string, volume: number = 0.5) => {
  const audio = new Audio(soundFile);
  audio.volume = volume;
  audio.play().catch(error => {
    console.log('Audio playback failed:', error);
  });
};

export const preloadSound = (soundFile: string) => {
  const audio = new Audio(soundFile);
  audio.load();
  return audio;
};

export const sounds = {
  windowOpen: '/music/window-open.mp3',
  windowClose: '/music/window-close.mp3',
  rickRoll: '/music/rick-roll.mp3',
};