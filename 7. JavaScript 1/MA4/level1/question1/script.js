var button = document.getElementById('button');
button.addEventListener('click', eventClickFunc);

function alertOnclick() {
    alert('This alert is from a function in the script.js file. called by the onclick event');
}

function eventClickFunc() {
    alert('This alert is from a function in the script.js file. called by the eventlistener');
}