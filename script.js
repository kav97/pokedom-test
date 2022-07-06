import pokemonArray from "./data/pokemon.js";

const container = document.querySelector(".card-container");
console.log(container)

const addPokemon = () => {
    pokemonArray.forEach(pokemon => {
        container.innerHTML += `
        <div class="card">
            <img src="${pokemon.sprite}">
            <div class="card__content">
                <h2 class="card__heading"> ${pokemon.name} </h2>
                <div class="card__text"> ${pokemon.name} #${pokemon.id} 
                is a ${pokemon.types.join(" & ")} type pokemon.</div>
            </div>
        </div>`; 
    })
};

container.addEventListener("load", addPokemon());

