// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

let url = `https://api.magicthegathering.io/v1/cards/${id}`;

fetch(url)
.then(function(resp) {
    return resp.json();    
})
.then(function(data) {
    return drawCards(data);
})
function drawCards(data) {
    var img = "";
    if (data.card.imageUrl == undefined) {
        img = `<img src="https://via.placeholder.com/223x310" width="100%">`;      
    } 
    else {
        img = `<img src="${data.card.imageUrl}" width="100%">`;
    }
    document.getElementById('cardImage').innerHTML = img;

    var cardDetail = "";
    cardDetail = `<h2>${data.card.name}</h2>` +
                  `<div><b>About:  </b>${data.card.text}</div>` +
                  `<div><b>Rarity: </b>${data.card.rarity}</div>` +
                  `<div><b>Color: </b>${data.card.colors[0]}</div>`;
    document.getElementById('cardDetails').innerHTML = cardDetail;
}

    



