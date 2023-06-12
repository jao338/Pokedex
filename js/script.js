const pokemonNome = document.querySelector('.pokemon-nome');
const pokemonNum = document.querySelector('.pokemon-num');
const pokemonImg = document.querySelector('.pokemon-img');

const form = document.querySelector('.busca');

const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();

    return data;

}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    pokemonNome.innerHTML = data.name;
    pokemonNum.innerHTML = data.id;
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon('150')    