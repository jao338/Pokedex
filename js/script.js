const pokemonNome = document.querySelector('.pokemon-nome');
const pokemonNum = document.querySelector('.pokemon-num');
const pokemonImg = document.querySelector('.pokemon-img');

const form = document.querySelector('.busca');
const input = document.querySelector('.busca-input');
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');

let buscaPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIresponse.status == 200){

        const data = await APIresponse.json();

        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonNome.innerHTML = 'Loading...';
    pokemonNum.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImg.style.display = 'block';
        pokemonNome.innerHTML = data.name;
        pokemonNum.innerHTML = data.id;
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
        buscaPokemon = data.id;

        input.value = '';

    }else{

        pokemonImg.style.display = 'none';
        pokemonNome.innerHTML = 'Not Found';
        pokemonNum.innerHTML = '';

        input.value = '';

    }

}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value.toLowerCase()); 
});

prev.addEventListener('click', (event) => {

    if(buscaPokemon > 1){

        buscaPokemon -= 1;
    
        renderPokemon(buscaPokemon);
    }

});

next.addEventListener('click', (event) => {

    buscaPokemon += 1;

    renderPokemon(buscaPokemon);
});



renderPokemon(buscaPokemon);
