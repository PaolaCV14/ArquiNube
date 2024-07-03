let strategy=document.getElementById("strategy");
let sports=document.getElementById("sports");
let action=document.getElementById("action");
let fight=document.getElementById("fight");

let gami ={
    "gameid": 1,
    "title": "hola",
    "imageurl": "",
    "description": "mundo",
    "price": "69",
    "category": "strategy"
};

let lstrategy=[gami];
let lsports=[];
let laction=[];
let lfight=[];



console.log(lstrategy[0]);

let datos;
let idxst=0;
let idxsp=0;
let idxa=0;
let idxf=0;

function inicio(){
    //recuperacion de los datos y filtrado por categorias
 /** */
    requestgames("strategy", idxe);

    //display en pantalla
    mostrar("strategy", idxst);
    mostrar("sports", idxsp);
    mostrar("action", idxa);
    mostrar("fight", idxf);


}

function mas(cat){
    switch ( cat){
        case "strategy":
            idxe=+5;
            mostrar(cat, idxst);
            break;
        case "action":
            idxa=+5;
            mostrar(cat, idxa);
        break;
        case "sports":
            idxc=+5;
            mostrar(cat, idxsp);
        break;
        case "fight":
            idxc=+5;
            mostrar(cat, idxf);
        break;
    }
    mostrar(cat);
}

function menos(cat){
    switch ( cat){
        case "strategy":
            idxe-5>=0?idxe=-5:idxe;
            mostrar(cat, idxst);
            break;
        case "action":
            idxa-5>=0?idxa=-5:idxa;
            mostrar(cat, idxa);
        break;
        case "sports":
            idxc-5>=0?idxc=-5:idxc;
            mostrar(cat, idxsp);
            break;
        case "fight":
            idxc=+5;
            mostrar(cat, idxf);
        break;
    }  
}

function requestgames(cat, idx){
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:3000/'+cat+'/'+idx;
    xhr.open('GET', url);
    xhr.send();
    xhr.onload=function(){
        if (xhr.status!=200){
            alert(xhr.status+':'+ xhr.statusText)
        }else{
            let juegos=JSON.parse(xhr.response);
            for(let x of juegos){
                if (x.categoria==cat){
                    switch ( cat){
                        case "strategy":
                            lstrategy.push(x);
                            break;
                        case "action":
                            laction.push(x);
                        break;
                        case "sports":
                            lsports.push(x);
                        break;
                        case "fight":
                            lfight.push(x);
                        break;

                    }
                }  
               
            }

        }
    };
}



function card(cat, idx){
    
    let game;

    switch ( cat){
        case "strategy":
            game=lstrategy[idx];
            break;
        case "action":
            game=laction[idx];
        break;
        case "sports":
            game=lsports[idx];
        break;
        case "fight":
            game=lfight[idx];
        break;

    }
    console.log(JSON.stringify(game));
    let gameObj ={
        "gameid": game.gameid,
        "title": game.title,
        "imageurl": game.imageurl,
        "description": game.description,
        "price": game.price,
        "category": game.category
    }

    sessionStorage.setItem("Game", JSON.stringify(gameObj));

}

function mostrar(cat, idx){
    
    switch(cat){
        case "strategy":
            strategy.innerHTML=``;
            strategy.innerHTML+=`
            <th>
                <div class="mini-card">
                    <i class="fa-solid fa-chess-board"></i>
                    
                    <h3>Strategy</h3>
                </div>
            </th>
            <th style="width: 2cap; padding: 0cap;">
                <button style="background-color: white;" onclick="menos('strategy')">next</button>
            </th>`;
            for(let i=idx; i<=idx+4; i++){
                strategy.innerHTML+=`
                <th class="videojuegos">
                <div class="card" onclick="card('strategy', i)">
                    <figure>
                        <img src=${lstrategy[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${lstrategy[i].title}</h3>
                        <p>$${lstrategy[i].price} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
                </th>`;
            }
        
        break;
        case "action":
            action.innerHTML=``;
            action.innerHTML+=`
            <th>
                <div class="mini-card">
                    <i class="fa-solid fa-chess-board"></i>
                    
                    <h3>Strategy</h3>
                </div>
            </th>
            <th style="width: 2cap; padding: 0cap;">
                <button style="background-color: white;" onclick="menos('action')">next</button>
            </th>`;
            for(let i=idx; i<=idx+4; i++){
                action.innerHTML+=`
                <th class="videojuegos">
                <div class="card" onclick="card('action', i)">
                    <figure>
                        <img src=${laction[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${laction[i].title}</h3>
                        <p>$${laction[i].price} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
                </th>`;
            }        
        break;
        case "sports":
            sports.innerHTML=``;
            sports.innerHTML+=`
            <th>
                <div class="mini-card">
                    <i class="fa-solid fa-chess-board"></i>
                    
                    <h3>Strategy</h3>
                </div>
            </th>
            <th style="width: 2cap; padding: 0cap;">
                <button style="background-color: white;" onclick="menos('sports')">next</button>
            </th>`;
            for(let i=idx; i<=idx+4; i++){
                sports.innerHTML+=`
                <th class="videojuegos">
                <div class="card" onclick="card('sports', i)">
                    <figure>
                        <img src=${lsports[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${lsports[i].title}</h3>
                        <p>$${lsports[i].price} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
                </th>`;
            }
        
        break;
        case "fight":
            fight.innerHTML=``;
            fight.innerHTML+=`
            <th>
                <div class="mini-card">
                    <i class="fa-solid fa-chess-board"></i>
                    
                    <h3>Strategy</h3>
                </div>
            </th>
            <th style="width: 2cap; padding: 0cap;">
                <button style="background-color: white;" onclick="menos('fight')">next</button>
            </th>`;
            for(let i=idx; i<=idx+4; i++){
                fight.innerHTML+=`
                <th class="videojuegos">
                <div class="card" onclick="card('fight', i)">
                    <figure>
                        <img src=${lfight[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${lfight[i].title}</h3>
                        <p>$${lfight[i].price} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
                </th>`;
            }
        
        break;

    }

}
