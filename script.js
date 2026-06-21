let i = 0;

const text =
"It started as something small… but somehow became something I always look forward to.";

const music = document.getElementById("music");

/* 💌 START STORY */
function startStory() {
  document.getElementById("intro").style.display = "none";

  music.play();
  fadeInMusic();

  nextScene(1);
  typeWriter();
}

/* 🎬 SCENE SWITCH */
function nextScene(n) {
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  document.getElementById("scene" + n).classList.add("active");

  if (n === 5) {
    setTimeout(() => fadeOutMusic(), 2000);
  }
}

/* ⌨️ TYPEWRITER */
function typeWriter() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 55);
  }
}

/* 🎵 FADE IN MUSIC */
function fadeInMusic() {
  music.volume = 0;
  let v = 0;

  let fade = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 80);
}

/* 🎵 FADE OUT MUSIC */
function fadeOutMusic() {
  let v = music.volume;

  let fade = setInterval(() => {
    if (v > 0) {
      v -= 0.02;
      music.volume = v;
    } else {
      music.pause();
      clearInterval(fade);
    }
  }, 80);
}