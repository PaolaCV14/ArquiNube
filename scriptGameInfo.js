
updatePage()
function updatePage(){
    let Game = JSON.parse(sessionStorage.getItem("Game"));

    let GameTitle= document.getElementById("GameTitle")
    let GameImage= document.getElementById("GameImage")
    let GameDescription= document.getElementById("GameDescription")
    let Gameprice= document.getElementById("Gameprice")
    
    GameTitle.innerText= Game.title;
    GameImage.setAttribute("src", Game.imageurl);
    GameDescription.innerText= Game.description;
    Gameprice.innerText= Game.price;
}


function createTest(){
    let gameObj ={
        "gameid": 21,
        "title": "God of War Ragnarok",
        "imageurl": "https://i.3djuegos.com/juegos/17544/god_of_war_ragnarok/fotos/ficha/god_of_war_ragnarok-5732812.jpg",
        "description": "The highly anticipated sequel to the critically acclaimed 2018 God of War, featuring Kratos and Atreus' journey through the frozen realms of Norse mythology.",
        "price": "$69.99",
        "category": "action"
    }
    sessionStorage.setItem("Game", JSON.stringify(gameObj));
    console.log(sessionStorage.getItem("Game"));
    updatePage()
}
