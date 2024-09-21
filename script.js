const pokemonname = document.querySelector(".pokemon__name");
const pokemonnumber = document.querySelector(".pokemon__number");
const pokemonimage = document.querySelector(".pokemon__image");


const form = document.querySelector(".form");
const imput = document.querySelector(".input__search");

const buttonNext = document.querySelector(".button--next");
const buttonprev = document.querySelector(".button--prev");

let searchPokemon = 1;
async function fetchPokemon(pokemon){
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
   
    return data;
    
}

// Com async/await, a função fetchPokemon aguarda o resultado da chamada à API antes de continuar.

async function Renderpokemon (pokemon) {

    pokemonname.innerHTML = 'Loading...';
    pokemonnumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);
   

    pokemonname.innerHTML = data.name;
    pokemonnumber.innerHTML = data.id;
    pokemonimage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    imput.value = '';
    searchPokemon = data.id;
    

}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    Renderpokemon(imput.value.toLowerCase());
    

});

buttonprev.addEventListener('click', ()=>{
    searchPokemon -=1;
   Renderpokemon(searchPokemon);
    
});
buttonNext.addEventListener('click', ()=>{
   searchPokemon +=1;
   Renderpokemon(searchPokemon);
    
});
Renderpokemon(searchPokemon);

