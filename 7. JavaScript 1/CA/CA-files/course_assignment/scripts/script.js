// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

let url = "https://api.magicthegathering.io/v1/cards";

fetch(url)
.then(function(resp) {
    return resp.json();    
})
.then(function(data) {
    return drawCards(data);
})
function drawCards(data) {
    var card = "";
    var newCards = document.getElementById('cards');
    for (let i = 0; i < data.cards.length; i++) {
        card += `<div class="col-sm-4">` +
                `<div class="card-container">` +
                `<h4>${data.cards[i].name}</h4>`;
        if (data.cards[i].imageUrl == undefined){
        card += `<img src="https://via.placeholder.com/223x310" width="100%">`;      
        } 
        else {
        card += `<img src="${data.cards[i].imageUrl}" width="100%">`;
        }
        card += `<a href="card-specific.html?id=${data.cards[i].id}" class="btn btn-success">View More</a>` +
                `</div>` +
                `</div>`;
        newCards.innerHTML += card;
    }
}

var searchBT = document.getElementById('searchButton');
searchBT.addEventListener('click', filterSearch);
function filterSearch() {
    let searchword = document.getElementById('search').value;
    var newCards = document.getElementById('cards');
        newCards.innerHTML = "";
    fetch(url)
    .then(function(resp) {
        console.log("got result, converting to json");
        return resp.json();    
    })
    .then(function(data) {
        console.log("Converted to json");
        return drawCards(data);
    })
    function drawCards(data) {
        var card = "";
        var result = [];
        console.log(data);
        

/*
        
        for (let i = 0; i < data.cards.length; i++) { 
            if (data.cards[i].name === searchword) {
                console.log("found a match");
                result.push(data.cards[i]);
            }               
        }        
        for (let i = 0; i < result.length; i++) {
            card += `<div class="col-sm-4">` +
                    `<div class="card-container">` +
                    `<h4>${result[i].name}</h4>`;
            if (result[i].imageUrl == undefined){
            card += `<img src="https://via.placeholder.com/223x310" width="100%">`;      
            } 
            else {
            card += `<img src="${result[i].imageUrl}" width="100%">`;
            }
            card += `<a href="card-specific.html?id=${result[i].id}" class="btn btn-success">View More</a>` +
                    `</div>` +
                    `</div>`;
            newCards.innerHTML += card;
        }*/
    }
}


