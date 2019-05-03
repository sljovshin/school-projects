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
    let card = "";
    let newCards = document.getElementById('cards');
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
    }
    newCards.innerHTML += card;
}

let searchBT = document.getElementById('searchButton');
searchBT.addEventListener('click', filterSearch);
function filterSearch() {
    let searchword = document.getElementById('search').value;
    let newCards = document.getElementById('cards');
        newCards.innerHTML = "";

    fetch(url)
    .then(function(resp) {
        return resp.json();    
    })
    .then(function(data) {
        return drawCards(data);
    })
    function drawCards(data) {
        let filterResult = data.cards.filter(function (jsonCard) {
          return jsonCard.name.toLowerCase().includes(searchword.toLowerCase());
        });
        if (filterResult.length === 0) {
            newCards.innerHTML = `<h4> No card named \"${searchword}\", try something else </h4>`;
        }
        let card = "";
        for (let i = 0; i < filterResult.length; i++) {
            card += `<div class="col-sm-4">` +
                    `<div class="card-container">` +
                    `<h4>${filterResult[i].name}</h4>`;
            if (filterResult[i].imageUrl == undefined){
            card += `<img src="https://via.placeholder.com/223x310" width="100%">`;      
            } 
            else {
            card += `<img src="${filterResult[i].imageUrl}" width="100%">`;
            }
            card += `<a href="card-specific.html?id=${filterResult[i].id}" class="btn btn-success">View More</a>` +
                    `</div>` +
                    `</div>`;
        }
        newCards.innerHTML += card;    
    }
}


