
var main = $("#main");
var pokemon;

$.ajax({
	url: "http://pokeapi.co/api/v2/pokemon/1",
	type: "GET",
	dataType: "JSON",
	success: handleResponse
})
function handleResponse(response){
	pokemon = response;
	showPokemon(pokemon)
}

function showPokemon(pokemon){
	alert(pokemon.name)
}