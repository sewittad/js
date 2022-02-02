function getpokemon(name){
return fetch("https://pokeapi.co/api/v2/pokemon/${name}")
.then(function(data) {
    return data.json();
}).then(function(data){
    const pokemonName: Element
    pokemonName.innerHTML=data.name;
    pokemonID.innerHTML=data.id;
    Image.src +data.sprites.front_shiny;
    return data;
});
}
getpokemon('mewtwo');
const input=document.querySelector('input');
const button=document.querySelector('button');
const pokemonName=document.querySelector('#pokemon-name');
const img=document.querySelector('img');
const pokemonID=document.querySelector('#pokemon-id');
console.log( input, button, pokemonName, img, pokemonID);
button.addEventListener('click', function(){
    getpokemon(input.value);{

})



















)