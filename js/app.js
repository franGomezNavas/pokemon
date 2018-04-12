function buscarPokemon() {
	var input = $("#searchPk").val();
	pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + input + '/';
	getPokemon(pokeUrl);

}

var pokeUrl = "https://pokeapi.co/api/v2/pokemon/1/";

$(document).ready(function() {})
	function getPokemon(pokeUrl) {
		// body...
	

var searchPk = $('#searchPk');
var btn = $('#request');

var main = $("#main");
var pokemon;

$.ajax({
	url: pokeUrl,
	type: "GET",
	dataType: "JSON",
	success: handleResponse,
})

function handleResponse(response){
	pokemon = response;

	var listItem = 
					'<div class = "pk-card">' + 
						'<div class = "row">' +
							'<div class = "col-md-3">' +
								'<img src = "' + pokemon.sprites.front_default + '" class = "pk-img">' +
							'</div>' +
							'<div class = "col-md-8">' +
								'<div class = "pk-details">' +
									'<p class = "name"><strong>Name: </strong>' + pokemon.name + '</p>' +
									'<p class = "type"><strong>Club: </strong>' + pokemon.types[0].type.name + '</p>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

	main.append(listItem);
	showPokemon(pokemon)
}


function showPokemon(pokemon){
	console.log(pokemon.name)
}

} // finaliza el document.ready(function())












			
// 	var i;
// 	var pokemon20 = pokemon.results[i];
// 	for(i = 0; i < pokemon.length; i++){
// 	console.log(pokemon20.name);
// 	}
// }




//EVENTO

// searchPk.keypress(function( event ) {
//   if ( event.which == 13 ) {
//      alert(searchPk.val());
//   }
// })
