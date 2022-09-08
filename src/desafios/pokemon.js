const obtenerPokemon = document.querySelector("#pokeInput");
const buscarPokemon = document.querySelector("#pokeSubmit");
const pokeAPISection=document.querySelector("#proyectos-pokeAPI")
//La seccion se mantiene oculta hasta que se presione el circulo de proyectos de la pokeapi
pokeAPISection.addEventListener("click",()=>{
    document.querySelector("#pokeAPI").style.display="block";
});
buscarPokemon.addEventListener("click", () => {
    setTimeout(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${obtenerPokemon.value.toLowerCase()}/`)
            .then((res) => res.json())
            //llama a la funcion y usa un alert si todo sale bien
            .then((data) => {createPokemonCard(data),
                Swal.fire({
                icon: 'success',
                title: 'Enhorabuena',
                text: 'Aqui esta tu: '+obtenerPokemon.value+"!"
              })})
              //si la promesa no se cumpla tira el alert
              .catch(
                Swal.fire({
                    icon: 'error',
                    title: 'Rayos!',
                    text: 'No encontre tu pokemon!',
                    footer: '<p>Quizas escribiste mal su nombre</p>'
                  })
              )
    },1500)
        
    }
)
function createPokemonCard(pokemon) {
    const pokeGallery = document.querySelector("#pokeGallery")
    //Creacion del contenedor de la carta
    const cardHolder=document.createElement('div')
    cardHolder.classList.add("card-holder")
    //Creacion de la carta
    const pokeCard = document.createElement('div')
    pokeCard.classList.add("pokecard")
    //Frente de la pokeCarta
    const pokeCardF=document.createElement('div')
    pokeCardF.classList.add("card-front-poke")
    pokeCardF.innerHTML=` <img src="${pokemon.sprites.front_default}" class="pokeImg">
    <h2>${pokemon.name}</h2><span>${"#"+pokemon.id.toString().padStart(0,3)}</span>`
    
    
    //Parte trasera de la pokecarta
    //Ver mas tarde como hacer para ver si tiene mas tipos
    const pokeCardB=document.createElement('div')
    pokeCardB.classList.add("card-back-poke")
    pokeCardB.innerHTML=
    `<div class="card-back-body">
    <h2>${pokemon.name}</h2>
    <hr>
    <ul>
    <li>${"Tipo principal: "}${pokemon.types[0].type.name}</li>
    <li>${"Altura: "}${pokemon.height}</li>
    </ul>
    <a href="https://pokemon.fandom.com/es/wiki/${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}" target="_blank" class="btn-ref">Conocer mas</a> `
    
    pokeCard.appendChild(pokeCardF)
    pokeCard.appendChild(pokeCardB)
    cardHolder.append(pokeCard)
    pokeGallery.appendChild(cardHolder)
    
}

export * as pokemon from './pokemon.js'