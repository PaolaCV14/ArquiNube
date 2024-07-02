let strategy=document.getElementById("strategy");
let sports=document.getElementById("sports");
let action=document.getElementById("action");
let fight=document.getElementById("fight");

let datos;
let idxe=0;
let idxc=0;
let idxa=0 ;

function inicio(){
    //recuperacion de los datos y filtrado por categorias
 /** */
    requestgames("strategy", idxe);
    requestgames("sports", idxc);
    requestgames("action", idxa);
    requestgames("fight", idxa);
    //display en pantalla
    mostrar("strategy");


}

function mas(cat){
    switch ( cat){
        case "strategy":
            idxe=+5;
            requestgames(cat, idxe);
            break;
        case "action":
            idxa=+5;
            requestgames(cat, idxa);
        break;
        case "sports":
            idxc=+5;
            requestgames(cat, idxc);
        break;
        case "fight":
            idxc=+5;
            requestgames(cat, idxc);
        break;
    }
    mostrar(cat);
}

function menos(cat){
    switch ( cat){
        case "strategy":
            idxe-5>=0?idxe=-5:idxe;
            requestgames(cat, idxe);
            break;
        case "action":
            idxa-5>=0?idxa=-5:idxa;
            requestgames(cat, idxa);
        break;
        case "sports":
            idxc-5>=0?idxc=-5:idxc;
            requestgames(cat, idxc);
        break;
        case "fight":
            idxc=+5;
            requestgames(cat, idxc);
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
            /**for(let x of juegos){
                if (x.categoria==cat){
                    switch ( cat){
                        case "strategy
            ":
                            strategy
                .push(x);
                            break;
                        case "action":
                            action.push(x);
                        break;
                        case "sports":
                            sports.push(x);
                        break;

                    }
                }  
               
            }*/
           if (cat==juegos.category){
             datos.push();
           }


        }
    };
    mostrar(cat);
}


function mostrar(cat){
    
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
            for(let i=0; i<=4; i++){
                strategy.innerHTML+=`
                <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${datos[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${datos[i].title}</h3>
                        <p>$${datos[i].price} mxn</p>
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
            for(let i=0; i<=4; i++){
                action.innerHTML+=`
                <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${datos[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${datos[i].title}</h3>
                        <p>$${datos[i].price} mxn</p>
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
            for(let i=0; i<=4; i++){
                sports.innerHTML+=`
                <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${datos[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${datos[i].title}</h3>
                        <p>$${datos[i].price} mxn</p>
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
            for(let i=0; i<=4; i++){
                fight.innerHTML+=`
                <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${datos[i].imageurl} >
                    </figure>
                    <div class="contenido-card">
                        <h3>${datos[i].title}</h3>
                        <p>$${datos[i].price} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
                </th>`;
            }
        
        break;

    }

}
