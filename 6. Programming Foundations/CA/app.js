/*var skipLast = 1;
var playpause = 2;
var skipNext = 3;
var shuffle = 4;
var repeat = 5;
var volumeUp = 6;
var volumeDown = 7;
var whatsPlaying = 8;
var addFav = 9;
var togglePL = 10;
var desc = 11;
let playing = false,
    suffled = false,
    repeatState = 1,
    playlistToggled = false;
/*  Golbal variables to add extra controls to the function */





let audio = new Audio('/tracks/glitch-flight-track.mp3')
let seekBar = document.getElementById('seek-bar');
let playButton = document.getElementById('playpause');
let fillBar = document.getElementById('fill');

audio.volume = 0.5;

audio.addEventListener('play', () => {
  playButton.src = "icons/pause.svg";
});
audio.addEventListener('pause', () => {
  playButton.src = "icons/play.svg";
});
audio.addEventListener('timeupdate', () => {
  let p = audio.currentTime / audio.duration;
  fillBar.style.width = p * 100 + '%'
});

function volumeUpDown(val) {
  audio.volume = val/1000;
}




let mouseDown = false;
function clamp (min, val, max) {
  return Math.min(Math.max(min, val), max)
}

function getP(e) {
  let p = (e.clientX - seekBar.offsetLeft) / seekBar.clientWidth;
  p = clamp(0, p, 1);
  return p;
}

seekBar.addEventListener('mousedown', (e) => {
  mouseDown = true;
  let p = getP(e); 
  fillBar.style.width = p * 100 + '%';
});

window.addEventListener('mousemove', (e) => {
  if(!mouseDown) return;
  let p = getP(e)
  fillBar.style.width = p * 100 + '%';
});

window.addEventListener('mouseup', (e) => {
  if(!mouseDown) return;

  mouseDown = false;

  let p = getP(e);

  fillBar.style.width = p * 100 + '%'; 

  audio.currentTime = p * audio.duration;
});


function  mediaPlayer(a) {
switch (a) {
  case 1:
    //console.log(a);
    console.log("Skipping to previous song");
    break;

  case 2:
      if (audio.paused) {
        audio.play();
        
        console.log("Playing song")
      } else {
        audio.pause();
        
        console.log("Pausing song");
      }
  break;

  case 3:
    //console.log(a);
    console.log("Skipping to next song");
    break;

  case 4:
    //console.log(a);
    if (suffled == false) {
      console.log("Shuffling playlist");
      suffled = true;
    }
    else {
      console.log("Playlist un-suffled");
      suffled = false;
    }
    break;

  case 5:
    //console.log(a);
    repeatState++;
    switch (repeatState) {
      case 2:
          console.log("Repeat toggled to: repeat list");
        break;
      case 3:
          console.log("Repeat toggled to: Repeat song");

        break;
      default:
        repeatState = 1;
        console.log("Repeat toggled to: none");
    }
    break;

  case 6:
    //console.log(a);
    console.log("Turning Volume up");
    break;

  case 7:
    //console.log(a);
    console.log("Turning Volume down");
    break;

  case 8:
    //console.log(a);
    console.log("Now playing:");
    console.log("Song:   %{songName}");
    console.log("Album:  %{albumName}");
    console.log("Artist: %{artistName}");
    break;

  case 9:
    //console.log(a);
    console.log("Adding song to favorites");
    break;

  case 10:
    //console.log(a);
    if (playlistToggled == false) {
      console.log("Showing Playlist");
      playlistToggled = true;
    }
    else {
      console.log("Hiding playlist");
      playlistToggled = false;
    }
    break;

  default:
    console.log("Please use one of the following parameters to mediaPlayer();");
    console.log("You can also use 1 - 11 as shorthands");
    console.log("-------------------------------");
    console.log("1. skipLast: Skip song backwards");
    console.log("2. playpause: play/pause song");
    console.log("3. skipNext: skip song forward");
    console.log("4. shuffle: Shuffle playlist");
    console.log("5. repeat: Repeat list/repeat song");
    console.log("6. volumeUp: volume control down");
    console.log("7. volumeDown: volume control up");
    console.log("8. whatsPlaying: get artist, album and songname");
    console.log("9. addFav: favourite song");
    console.log("10. togglePL: toggle playlist");
    console.log("11. desc: bring up instructions");
  }
}