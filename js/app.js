var searchPk = $('#searchPk');
var btn = $('#request');



var main = $("#main");
var pokemon;

$.ajax({
	url: "http://pokeapi.co/api/v2/pokemon/",
	type: "GET",
	dataType: "JSON",
	success: handleResponse
})
function handleResponse(response){
	pokemon = response;
	showPokemon(pokemon)
}

function showPokemon(pokemon){
	var i;
	var pokemon20 = pokemon.results[i];
	for(i = 0; i < pokemon.length; i++){
	console.log(pokemon20.name);
	}
}

btn.on('click', function(){
	console.log('funciono');
	alert(searchPk.val());
})

//EVENTO



// searchPk.keypress(function( event ) {
//   if ( event.which == 13 ) {
//      alert(searchPk.val());
//   }
// })
