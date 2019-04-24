var section = document.querySelectorAll('section');
let url = "https://jsonplaceholder.typicode.com/todos";
//drawCards();

fetch(url)
.then(function(resp) {
    return resp.json();    
})
.then(function(data) {
    return drawCards(data);
})

function drawCards(data) {
    var card;
    for (let index = 0; index < data.length; index++) {     
        card = `<div class="card_frame">`;
        card += `<img src="IMG/user${data[index].userId}.jpg" alt="user profile img" class="card_user_img">` +
        `<div class="card_header">` +
        `<h2>UserID: ${data[index].userId}</h2>` +
        `</div>` +
        `<div class="card_body">` +
        `<p>${data[index].title}</p>`;

        if (data[index].completed === true) {
            card += `<img src="IMG/true.png" alt="card task completed status symbol" class="card_completed">`;
        } else {
            card += `<img src="IMG/false.png" alt="card task completed status symbol" class="card_completed">`;
        }
        card += `</div>` +
            `<div class="card_info">` +
            `<p>CardId: ${data[index].id}</p>` +
            `</div> </div>`;
        switch (data[index].userId) {
            case 1:
                section[0].innerHTML += card;
                break;

            case 2:
                section[1].innerHTML += card;
                break;

            case 3:
                section[2].innerHTML += card;
                break;

            case 4:
                section[3].innerHTML += card;
                break;
            
            case 5:
                section[4].innerHTML += card;
                break;

            case 6:
                section[5].innerHTML += card;
                break;

            case 7:
                section[6].innerHTML += card;
                break;

            case 8:
                section[7].innerHTML += card;
                break;

            case 9:
                section[8].innerHTML += card;
                break;

            case 10:
                section[9].innerHTML += card;
                break;

            default:
                    console.log("something is not right");
                    
                break;
        }    
    }

}