let title;
let imageUrl;
let description;


function getItems(){

    title = sessionStorage.getItem('title');
    imageUrl = sessionStorage.getItem('imageUrl');
    description = sessionStorage.getItem('description');


    sessionStorage.removeItem('title');
    sessionStorage.removeItem('imageUrl');
    sessionStorage.removeItem('description');
}



document.addEventListener('DOMContentLoaded', function() {
    getItems();
    let GameTitle= document.getElementById("GameTitle")
    let GameImage= document.getElementById("GameImage")
    let GameDescription= document.getElementById("GameDescription")
  



    
    
    GameTitle.innerText= title;
    GameImage.setAttribute("src", imageUrl);
    GameDescription.innerText= description;
  

});