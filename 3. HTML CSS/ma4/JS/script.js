// When the user scrolls the page, execute myFunction
window.onscroll = function() {StickyHeader()};

// Get the header
var header = document.getElementById("section-a");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function StickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var getid = document.getElementById("open-modal");
    getid.addEventListener("click", showmodal);

var getid = document.getElementById("closebt");
    getid.addEventListener("click", hidemodal);
    var getid = document.getElementById("cbutton");
        getid.addEventListener("click", hidemodal);

function showmodal() {
    var mbg = document.getElementById("modal-bg");
    if (mbg) { mbg.style.display = "flex"; }
}

function hidemodal() {
    var mbg = document.getElementById("modal-bg");
    if (mbg) { mbg.style.display = "none"; }
}
