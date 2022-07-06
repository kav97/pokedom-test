import pokemonArray from "./data/pokemon.js";

const container = document.querySelector(".card-container");
console.log(container);

// function to capitalise first letter of name
const capitaliseName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

// function that iterates through each object in the pokemon array and returns its details
const addPokemon = () => {
    pokemonArray.forEach(pokemon => {

        pokemon.name = capitaliseName(pokemon.name);
        
        container.innerHTML += `
        <div class="card">
            <img src="${pokemon.sprite}">
            <div class="card__content">
                <h2 class="card__heading"> ${pokemon.name} </h2>
                <div class="card__text"> ${pokemon.name} #${pokemon.id} 
                is a ${pokemon.types.join(" & ")} type pokemon.</div>
            </div>
        </div>`; 
    });
};

// event listener that calls the addPokemon function when the page loads
container.addEventListener("load", addPokemon());

