const obtenerPokemon = document.querySelector("#pokeInput");
const buscarPokemon = document.querySelector("#pokeSubmit");
const pokeAPISection = document.querySelector("#proyectos-pokeAPI")
const pokemonGallery = document.querySelector("#pokeGallery")

//La seccion se mantiene oculta hasta que se presione el circulo de proyectos de la pokeapi
/* pokeAPISection.addEventListener("click", () => {
    document.querySelector("#pokeAPI").style.display = "block";
});
 */
const cards = [];

buscarPokemon.addEventListener("click", () => {
    
    let pokemon = obtenerPokemon.value;
    setTimeout(() => {
        pedirPokemon(pokemon)
        pokemonGallery.style.visibility="visible"

    }, 1500)


})

//Pedir pokemon chequea si el pokemon que se pide por el label existe en la bd de pokeapi
async function pedirPokemon(pokemon) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`)
        const data = await res.json();
        //Si lo encuentra con verifyCardExistence chequea que no se haya solicitado antes la tarjeta
        //Si se cumple crea la tarjeta y muestra la existencia
        verifyCardExistence("p" + data.id.toString().padStart(0, 3))
            .then(res => {
                console.log(res);
                createPokemonCard(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Enhorabuena',
                    text: 'Aqui esta tu: ' + obtenerPokemon.value + "!"

                })
            })
            //Sino catch tira el error y la alerta
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Rayos!',
                    text: 'Ya existe esta tarjeta!',
                    footer: '<p>Prueba buscando otro pokemon</p>'
                })
            })
        //En caso de que no encuentre el pokemon muestra la otra alerta
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Rayos!',
            text: 'No encontre tu pokemon!',
            footer: '<p>Quizas escribiste mal su nombre</p>'
        })
    }
}

async function createPokemonCard(pokemon) {
    const pokeGallery = document.querySelector("#pokeGallery")
    //Creacion del contenedor de la carta
    const cardHolder = document.createElement('div')

    cardHolder.classList.add("poke-card-holder")
    //Creacion de la carta
    const pokeCard = document.createElement('div')
    //Id set por si es necesario trabajar con esto

    pokeCard.setAttribute("id", "p" + pokemon.id.toString().padStart(0, 3))

    pokeCard.classList.add("pokecard")
    //Frente de la pokeCarta
    const pokeCardF = document.createElement('div')
    pokeCardF.classList.add("card-front-poke")
    pokeCardF.innerHTML =
        `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" class="pokeImg">
    <h2>${pokemon.name}</h2><span class="poke-number">${pokemon.id.toString().padStart(0, 3)}</span>`
    const pokeCardElementF = document.createElement('div')
    pokeCardElementF.classList.add("poke-element-father");
    const pokeCardElementE1 = document.createElement('span')
    const pokeCardElementE2 = document.createElement('span')
    const pokeCardB = document.createElement('div')
    const pokeStats = document.createElement('div');
    pokeStats.classList.add("pokeStatsContainer")
    pokeStats.innerHTML =
        `<span class="pokeStats">HP</span><span>${pokemon.stats[0].base_stat}</span>
     <span class="pokeStats">ATK</span><span>${pokemon.stats[1].base_stat}</span>
     <span class="pokeStats">DEF</span><span>${pokemon.stats[2].base_stat}</span>
     <span class="pokeStats">SPD</span><span>${pokemon.stats[5].base_stat}</span>`
    pokeCardF.appendChild(pokeStats)
    const pokeBtnRotate = document.createElement("button")

    pokeBtnRotate.classList.add("poke-rotate-btn-f")
    pokeBtnRotate.innerHTML = `<i class="bi bi-arrow-left-short"></i>`
    pokeCardF.appendChild(pokeBtnRotate)


    checkTypes(pokemon)
        .then(() => {

            pokeCardElementF.appendChild(pokeCardElementE1);
            pokeCardElementF.appendChild(pokeCardElementE2);
            pokeCardF.appendChild(pokeCardElementF);
            pokeCardElementE1.classList.add("poke-element-p");
            pokeCardElementE2.classList.add("poke-element-s");
            pokeCardElementE1.innerHTML = `${pokemon.types[0].type.name}`
            pokeCardElementE2.innerHTML = `${pokemon.types[1].type.name}`


        })
        .catch(() => {
            pokeCardElementF.appendChild(pokeCardElementE1);
            pokeCardF.appendChild(pokeCardElementF);
            pokeCardElementE1.classList.add("poke-element-p");
            pokeCardElementE1.innerHTML = `${pokemon.types[0].type.name}`
        })
    await getTypeColor(pokemon)
        .then((res) => {
            setBgProperties(pokeCardF, res),
                setBgProperties(pokeCardB, res),
                setBgPropertiesE(pokeCardElementE1, res[0]),
                setBgPropertiesE(pokeCardElementE2, res[1])
        })
        .catch(res2 => {
            setBgProperties(pokeCardF, res2),
                setBgProperties(pokeCardB, res2),
                setBgPropertiesE(pokeCardElementE1, res2)
        })







    //Parte trasera de la pokecarta
    //Ver mas tarde como hacer para ver si tiene mas tipos

    pokeCardB.classList.add("card-back-poke")
    pokeCardB.innerHTML +=
        `<h2 class="pokeName">${pokemon.name}</h2>
        <div class="card-back-poke-body">
    
    <h2>Caracteristicas</h2>
    <h3>Altura</h3>
    <p>${pokemon.height / 10} mts</p>
    <h3>Peso</h3>
    <p>${pokemon.weight / 10} kgs</p>
    <h3>Especie</h3>
    <p>${pokemon.species.name}</p>
    <h3>Habilidad</h3>
    <p>${pokemon.abilities[0].ability.name}</p>
    
    
     `
    const pokeBtnRotateB = document.createElement("button")
    pokeBtnRotateB.classList.add("poke-rotate-btn-b")
    pokeBtnRotateB.innerHTML = `<i class="bi bi-arrow-right-short"></i>`
    pokeCardB.appendChild(pokeBtnRotateB)

    pokeCard.appendChild(pokeCardF)
    pokeCard.appendChild(pokeCardB)
    cardHolder.append(pokeCard)
    pokeGallery.appendChild(cardHolder)

    cards.push(
        pokeBtnRotate.addEventListener("click", () => {
            pokeCard.classList.toggle("fliper")
        })
    )
    cards.push(
        pokeBtnRotateB.addEventListener("click", () => {
            console.log("taka taka")
            pokeCard.classList.toggle("fliper")
        })
    )


}
/* <a href="https://pokemon.fandom.com/es/wiki/${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}" target="_blank" class="btn-ref">Conocer mas</a>
 */
function checkTypes(id) {
    return new Promise((resolve, reject) => {
        if (id.types.length === 2) {
            resolve();
        } else {
            reject();
        }
    })


}
function verifyCardExistence(id) {
    return new Promise((resolve, reject) => {
        if (document.querySelector("#" + id) === null) {
            resolve('No existe la tarjeta');
        } else {
            reject('Ya existe la tarjeta');
        }
    })
}
async function getTypeColor(pokemon) {
    const res = await fetch('./pokemonColor.json')
    const color = await res.json();
    return new Promise((resolve, reject) => {
        checkTypes(pokemon)
            .then(() => {
                let colors = [];
                colors.push(analizePokemonJSON(pokemon, 0, color))
                colors.push(analizePokemonJSON(pokemon, 1, color))
                resolve(colors);
            })
            .catch(() => {
                reject(analizePokemonJSON(pokemon, 0, color));
            })
    })

}

function analizePokemonJSON(pokemon, n, colorArray) {
    for (let pokeType of colorArray) {
        let tipo = pokeType.type;
        let color = pokeType.color;
        if (tipo == pokemon.types[n].type.name) {

            return color;
        }
    }
}
function setBgProperties(nodo, color) {

    color.length == 2 ?
        (nodo.style.background = `radial-gradient(circle at 50% 0%,${color[0]} 20%, ${color[1]} 100%)`) :
        (nodo.style.background = `radial-gradient(circle at 50% 0%,${color} 20%, white 100%)`)




}
function setBgPropertiesE(nodo, color) {
    nodo.style.background = `${color}`;
    nodo.style.backgroundClip = "content-box";


}


export * as pokemon from './pokemon.js'