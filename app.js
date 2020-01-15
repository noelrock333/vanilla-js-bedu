function getPokemon() {
  let pokemonName = document.getElementById('pokemon-input').value;

  fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName.toLowerCase(), {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    if (data) {
      document.querySelector('#pokemon-name').innerHTML = data.name;
      document.querySelector('#pokemon-image').src = data.sprites.front_default;
      document.querySelector('#pokemon').style.display = 'block';
      let abilities = data.abilities.map(item => (item.ability.name));
      document.querySelector('#pokemon-abilities').innerHTML = abilities.join(', ');
    } else {
      document.querySelector('#pokemon').style.display = 'none';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

document.querySelector('#controls').addEventListener('submit', (event) => {
  event.preventDefault();
  getPokemon()
});