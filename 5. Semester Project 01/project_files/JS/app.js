var menuBurger = document.getElementById('menuburger')
var sidenav_id = document.getElementById('sidenav_id')
    menuBurger.addEventListener("click", showsidenav);
    sidenav_id.addEventListener("click", hidesidenav);

function showsidenav() {
    var snav = document.getElementById("sidenav_id");
    if (snav) { snav.style.width = "200px"; }
}

function hidesidenav() {
    var snav = document.getElementById("sidenav_id");
    if (snav) { snav.style.width = "0px"; }
}



/*  var audioalert = new Audio('../alarm.wav');
    audioalert.play(); */
