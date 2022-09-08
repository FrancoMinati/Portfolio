//Re acomodamiento de columnas
function ponerColumna() {
    let stackT = document.querySelector("#t-stack")
    let logoHtml = document.querySelector("#logo-1")
    window.innerWidth < 1000 ? (
        stackT.classList.add("flex-column", "align-items-center"),
        document.querySelector("#logos-col-1").classList.add("flex-column"),
        document.querySelector("#logos-col-2").classList.remove("justify-content-center"),
        document.querySelector("#logos-col-2").classList.add("flex-column"))
        : (stackT.classList.remove("flex-column", "align-items-center"),
            document.querySelector("#logos-col-2").classList.add("justify-content-center"),
            document.querySelector("#logos-col-1").classList.remove("flex-column"),
            document.querySelector("#logos-col-2").classList.remove("flex-column"))
}
//Cargo los colores e imagenes de las tarjetas desde un json para no tener que cargarlas con estilos en linea o crear demasiadas clases,
//ademas podria permitirme escalar las tarjetas a futuro simplemente agregando al json
function chargeCardImages(){
    const cards=document.querySelectorAll(".card-front");
    const cardsBack=document.querySelectorAll(".card-back")
    const xhttp= new XMLHttpRequest();
    xhttp.open('GET',"/CSSBase/images.json",true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            let urls=JSON.parse(this.responseText);
            for(let i=0;i<cards.length;i++){
                let url=urls[i].url;
                let color=urls[i].color;
                cards[i].style.backgroundImage=url
                cardsBack[i].style.backgroundColor=color;
            }
        }
    
    }
}


export {chargeCardImages};