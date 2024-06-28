let strategy=document.getElementById("strategy");

let estrategia;
let accion;
let cooperativo;
let idxe=0;
let idxc=0;
let idxa=0;

function inicio(){
    //recuperacion de los datos y filtrado por categorias
 /** */
    requestgames("estrategia", idxe);
    requestgames("cooperativo", idxc);
    requestgames("accion", idxa);
    //display en pantalla
    mostrar("estrategia");


}

function mas(cat){
    switch ( cat){
        case "estrategia":
            idxe=+5;
            requestgames(cat, idxe);
            break;
        case "accion":
            idxa=+5;
            requestgames(cat, idxa);
        break;
        case "cooperativo":
            idxc=+5;
            requestgames(cat, idxc);
        break;

    }
    mostrar(cat);
}

function menos(cat){
    switch ( cat){
        case "estrategia":
            idxe-5>=0?idxe=-5:idxe;
            requestgames(cat, idxe);
            break;
        case "accion":
            idxa-5>=0?idxa=-5:idxa;
            requestgames(cat, idxa);
        break;
        case "cooperativo":
            idxc-5>=0?idxc=-5:idxc;
            requestgames(cat, idxc);
        break;
    }
    mostrar(cat);
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
                        case "estrategia":
                            estrategia.push(x);
                            break;
                        case "accion":
                            accion.push(x);
                        break;
                        case "cooperativo":
                            cooperativo.push(x);
                        break;

                    }
                }
               
            }


        }
    };
}


function mostrar( cat){
    switch(cat){
        case "estrategia":
            strategy.innerHTML=``;
            strategy.innerHTML+=`
            <th>
                <div class="mini-card">
                    <i class="fa-solid fa-chess-board"></i>
                    
                    <h3>Strategy</h3>
                </div>
            </th>
            <th style="width: 2cap; padding: 0cap;">
                <button style="background-color: white;" onclick="menos('estrategia')">next</button>
            </th>
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${estrategia[0].imagen} >
                    </figure>
                    <div class="contenido-card">
                        <h3>FC24</h3>
                        <p>$${estrategia[0].precio} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
            </th>
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${estrategia[1].imagen} class="card-img-top img-fluid" >
                    </figure>
                    <div class="contenido-card">
                        <h3>The Last Of Us</h3>
                        
                        <p>$${estrategia[1].precio} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
                
            </th>
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${estrategia[2].imagen}   class="card-img-top img-fluid">
                    </figure>
                    <div class="contenido-card">
                        <h3>Resumen</h3>
                        <p> $${estrategia[2].precio} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
            </th>
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${estrategia[3].imagen}   class="card-img-top img-fluid">
                    </figure>
                    <div class="contenido-card">
                        <h3>Resumen</h3>
                        <p> $${estrategia[3].precio} mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
            </th>
            <th class="videojuegos">
                <div class="card">
                    <figure>
                        <img src=${estrategia[4].imagen}   class="card-img-top img-fluid">
                    </figure>
                    <div class="contenido-card">
                        <h3>Resumen</h3>
                        <p> $${estrategia[4].precio}  mxn</p>
                        <a href="ingresos"></i><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="ingresos"></i><i class="fa-solid fa-circle-info"></i></i></a>
                    </div>
                </div>
            </th>
            <th style="width: 2cap;">
                <button style="background-color: white;" onclick="mas('estrategia')">next</button>
            </th>
            
            `;

        break;
        case "accion":
        break;
        case "cooperativo":
        break;

    }

}
