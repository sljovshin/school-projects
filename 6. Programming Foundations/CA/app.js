/*  Control variables  */
var skipLast = 1;
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
/*  Golbal variables to add extra controls to the function */
var playing = false;
var suffled = false;
var repeatState = 1;
var playlistToggled = false;


mediaPlayer(desc);


function  mediaPlayer(a) {
switch (a) {
  case 1:
    //console.log(a);
    console.log("Skipping to previous song");
    break;

  case 2:
    //console.log(a);
    if (playing == false) {
      console.log("Playing song");
      playing = true;
    }
    else {
      console.log("Pausing song");
      playing = false;
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
