// Add your API endpoint here
var API_ENDPOINT = "https://uyasnu8ek4.execute-api.us-east-1.amazonaws.com/games";

var strategy = [];
var sports = [];
var fight = [];
var action = [];


function getPrev(x){
    switch(x){
        case "strategy":
            let s = strategy.pop();
            strategy.unshift(s);
            loadStrategy();
            break;
        case "sports":
            let sp = sports.pop();
            sports.unshift(sp);
            loadSports();
            break;
        case "action":
            let a = action.pop();
            action.unshift(a);
            loadAction();
            break;
        case "fight":
            let f = fight.pop();
            fight.unshift(f);
            loadFight();
            break;
    }
}

function getNext(x){
    switch(x){
        case "strategy":
            let s = strategy.shift();
            strategy.push(s);
            loadStrategy();
            break;
        case "sports":
            let sp = sports.shift();
            sports.push(sp);
            loadSports();
            break;
        case "action":
            let a = action.shift();
            action.push(a);
            loadAction();
            break;
        case "fight":
            let f = fight.shift();
            fight.push(f);
            loadFight();
            break;
    }
}

function setSession(title, imageUrl, description, price) {
    sessionStorage.setItem('title', decodeURIComponent(title));
    sessionStorage.setItem('imageUrl', decodeURIComponent(imageUrl));
    sessionStorage.setItem('description', decodeURIComponent(description));
    sessionStorage.setItem('price', decodeURIComponent(price));
}

function logOut(){
    sessionStorage.clear();
    alert("See you soon!")
    window.location.href = 'index.html';
}
function showModal() {
    var API_BUY = "https://vzorpy8d2f.execute-api.us-east-1.amazonaws.com/buy";
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var confirmButton = document.getElementById("confirmPurchase");
    var cancelButton = document.getElementById("cancelPurchase");

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    };

    confirmButton.onclick = function() {
        let dataBuy = {
            email: sessionStorage.getItem('user'),
            game: sessionStorage.getItem('title'),
            price: sessionStorage.getItem('price')
        };

        console.log("confirmado");
        console.log(dataBuy);

        // Uncomment this section when you are ready to make the API call
        
        fetch(API_BUY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBuy)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Game purchased successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error purchasing game.');
        });
        

        modal.style.display = "none";
    };

    cancelButton.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Ensure your other functions (like validBuy, loadStrategy, etc.) are correctly implemented as per your application's logic.


function validBuy(title, imageUrl, description, price){
    console.log("what up");
    let valid = sessionStorage.getItem('user');
    if(valid == null){
        alert("Please log in first to purchase");
    }
    else{
        setSession(title, imageUrl, description, price);
        showModal();
    }
    
}


// Define the loadCards function
function loadStrategy() {
    let strategyContainer = document.getElementById('strategy');
    strategyContainer.innerHTML = `
        <th style="width: 2cap; padding: 0cap;">
            <button style="background-color: black;" onclick="getPrev('strategy')">
                <i class="fa-solid fa-backward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;

    for (let i = 0; i < Math.min(strategy.length, 5); i++) {
        strategyContainer.innerHTML += `
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src="${strategy[i].imageurl}">
                    </figure>
                    <div class="contenido-card">
                        <h3>${strategy[i].title}</h3>
                        <p>${strategy[i].price} mxn</p>
                        <a onclick="validBuy('${strategy[i].title}', '${strategy[i].imageurl}', '${strategy[i].description}', '${strategy[i].price}')"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="gameInfo.html" onclick="setSession('${strategy[i].title}', '${strategy[i].imageurl}', '${strategy[i].description}', '${strategy[i].price}')"><i class="fa-solid fa-circle-info"></i></a>
                    </div>
                </div>
            </th>`;
    }

    strategyContainer.innerHTML += `
        <th style="width: 2cap; padding: 20px;">
            <button id="nextStrategy" style="background-color: black;" onclick="getNext('strategy')">
                <i class="fa-solid fa-forward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;
}

function loadSports() {
    let sportsContainer = document.getElementById('sports');
    sportsContainer.innerHTML = `
        <th style="width: 2cap; padding: 0cap;">
            <button style="background-color: black;" onclick="getPrev('sports')">
                <i class="fa-solid fa-backward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;

    for (let i = 0; i < Math.min(sports.length, 5); i++) {
        sportsContainer.innerHTML += `
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src="${sports[i].imageurl}">
                    </figure>
                    <div class="contenido-card">
                        <h3>${sports[i].title}</h3>
                        <p>${sports[i].price} mxn</p>
                        <a onclick="validBuy('${sports[i].title}', '${sports[i].imageurl}', '${sports[i].description}', '${sports[i].price}')"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="gameInfo.html" onclick="setSession('${sports[i].title}', '${sports[i].imageurl}', '${sports[i].description}', '${sports[i].price}')"><i class="fa-solid fa-circle-info"></i></a>
                    </div>
                </div>
            </th>`;
    }

    sportsContainer.innerHTML += `
        <th style="width: 2cap; padding: 20px;">
            <button id="nextSports" style="background-color: black;" onclick="getNext('sports')">
                <i class="fa-solid fa-forward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;
}

function loadAction() {
    let actionContainer = document.getElementById('action');
    actionContainer.innerHTML = `
        <th style="width: 2cap; padding: 0cap;">
            <button style="background-color: black;" onclick="getPrev('action')">
                <i class="fa-solid fa-backward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;

    for (let i = 0; i < Math.min(action.length, 5); i++) {
        actionContainer.innerHTML += `
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src="${action[i].imageurl}">
                    </figure>
                    <div class="contenido-card">
                        <h3>${action[i].title}</h3>
                        <p>${action[i].price} mxn</p>
                        <a onclick="validBuy('${action[i].title}', '${action[i].imageurl}', '${action[i].description}', '${action[i].price}')"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="gameInfo.html" onclick="setSession('${action[i].title}', '${action[i].imageurl}', '${action[i].description}', '${action[i].price}')"><i class="fa-solid fa-circle-info"></i></a>
                    </div>
                </div>
            </th>`;
    }

    actionContainer.innerHTML += `
        <th style="width: 2cap; padding: 20px;">
            <button id="nextAction" style="background-color: black;" onclick="getNext('action')">
                <i class="fa-solid fa-forward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;
}

function loadFight() {
    let fightContainer = document.getElementById('fight');
    fightContainer.innerHTML = `
        <th style="width: 2cap; padding: 0cap;">
            <button style="background-color: black;" onclick="getPrev('fight')">
                <i class="fa-solid fa-backward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;

    for (let i = 0; i < Math.min(fight.length, 5); i++) {
        fightContainer.innerHTML += `
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src="${fight[i].imageurl}">
                    </figure>
                    <div class="contenido-card">
                        <h3>${fight[i].title}</h3>
                        <p>${fight[i].price} mxn</p>
                        <a onclick="validBuy('${fight[i].title}', '${fight[i].imageurl}', '${fight[i].description}', '${fight[i].price}')"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="gameInfo.html" onclick="setSession('${fight[i].title}', '${fight[i].imageurl}', '${fight[i].description}', '${fight[i].price}')"><i class="fa-solid fa-circle-info"></i></a>
                    </div>
                </div>
            </th>`;
    }

    fightContainer.innerHTML += `
        <th style="width: 2cap; padding: 20px;">
            <button id="nextFight" style="background-color: black;" onclick="getNext('fight')">
                <i class="fa-solid fa-forward" style="color: #ffffff; font-size: 1.5em;"></i>
            </button>
        </th>`;
}

// Ensure to call loadStrategy, loadSports, loadAction, and loadFight after fetching data

    // Action cards
 


document.addEventListener('DOMContentLoaded', function() {
    let w = document.getElementById('welcome');
    if (sessionStorage.getItem('user') == null) {
        w.innerHTML = 'Log In first to start purchasing'; 
    }
    else {
        w.innerHTML = `Welcome ${sessionStorage.getItem('name')}`; 
    }
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            console.table(response);

            $.each(response, function(i, data) {
                switch(data['category']) {
                    case "strategy":
                        strategy.push(data);
                        break;
                    case "sports":
                        sports.push(data);
                        break;
                    case "fight":
                        fight.push(data);
                        break;
                    case "action":
                        action.push(data);
                        break;
                    default:
                        // Handle default case if necessary
                }
            });
            // Call loadCards after processing the response
            //loadCards();
            loadStrategy();
            loadSports();
            loadAction();
            loadFight();
            console.log(strategy);
            console.log(sports);
            console.log(fight);
            console.log(action);



            
        },
        error: function() {
            alert("Error retrieving game data.");
        }
    });


});
