let audioURL = new URL('../assets/sounds/backgroundMusic.mp3', import.meta.url);
const audioMusic = new Audio(audioURL.toString());

audioMusic.autoplay = true;

audioMusic.volume = 1;
audioMusic.loop = true;

window.onload = () => {
  audioMusic.load();
  audioMusic.play();
};

section1.addEventListener('click', (e) => {
  audioMusic.play();
});
section2.addEventListener('click', (e) => {
  audioMusic.play();
});
section3.addEventListener('click', (e) => {
  audioMusic.play();
});
section4.addEventListener('click', (e) => {
  audioMusic.play();
});
section5.addEventListener('click', (e) => {
  audioMusic.play();
});
