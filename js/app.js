//buscar pokemon general

function buscarPokemon() {
	var input = $("#searchPk").val();
	var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + input + '/';
	getPokemon(pokeUrl);

};

// buscar pokemon por tipo

function buscarPokemonType() {
	var value = $(".form-control").val();
	console.log('input')
	console.log(value)
	pokeUrlType = 'https://pokeapi.co/api/v2/type/' + value + '/';
	getPokemonType(pokeUrlType);

}

// termina buscar pokemon por tipo


var pokeUrl = "https://pokeapi.co/api/v2/pokemon/1/";
var pokeUrlType = "https://pokeapi.co/api/v2/type/1/";



$(document).ready(function() {})

function getPokemon(pokeUrl) {
		// body...
	
var searchPk = $('#searchPk');
var inputType = $('')
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
									'<p class = "name"><strong>Nombre: </strong>' + pokemon.name + '</p>' +
									'<p class = "type"><strong>Tipo: </strong>' + pokemon.types[0].type.name + '</p>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

	main.append(listItem);
	showPokemon(pokemon)
} // finaliza handleResponse(response)


function showPokemon(pokemon){
	console.log(pokemon.name)
}

} // finaliza function getPokemon(pokeUrl))



// =======  DUPLICADO  PIRATA  ============== //


function getPokemonType(pokeUrlType) {
		// tipos de pokemon

var searchPkType = $("form-control");
var inputType = $('');
var btnType = $('searchPkType');

var main = $("#main");
var pokemon;

$.ajax({
	url: pokeUrlType,
	type: "GET",
	dataType: "JSON",
	success: handleResponse,
})

function handleResponse(response){
	var response = response;

	var listItem = "";
	listItem += '<div class = "pk-card">' + 
										'<div class = "row">' +
											'<div class = "col-md-3">' +
													// '<img src = "' + pokemon.sprites.front_default + '" class = "pk-img">' +
											'</div>' +
											'<div class = "col-md-8">' +
												'<div class = "pk-details">' +
													'<p class = "name"><strong>Nombre: </strong>' + response.pokemon[0].pokemon.name + '</p>' +
												// '<p class = "type"><strong>Tipo: </strong>' + type.types[0].type.name + '</p>' +
													'</div>' +
												'</div>' +
											'</div>' +
										'</div>';

		for (var i = 0; i < response.pokemon.length; i ++){
	 		listItem += response.pokemon[i].pokemon.name;
	 	}


	$('#main').append(listItem);
	showPokemon(response)
} // finaliza handleResponse(response)


function showPokemon(pokemon){
	console.log(pokemon.name)
}

}




			
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
