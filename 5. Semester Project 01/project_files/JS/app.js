// Chaching DOM elements I need
var menuBurger = document.getElementById('menuburger')
var sidenav_id = document.getElementById('sidenav_id')
var main = document.getElementById('main')
    menuBurger.addEventListener("click", changesidenav);
    sidenav_id.addEventListener("click", hidesidenav);
    main.addEventListener("click", hidesidenav);

// changes based on the navigation bar existance
var nav_open = false;


function changesidenav() {
    var snav = document.getElementById("sidenav_id");
    if (snav && nav_open == false ) {
      snav.style.width = "200px";
      nav_open = true;
    //  console.log(nav_open);
    }
    else {
      snav.style.width = "0px";
      nav_open = false;
    //  console.log(nav_open);
    }
}

function hidesidenav() {
    var snav = document.getElementById("sidenav_id");
    if (snav) { snav.style.width = "0px"; }
}
