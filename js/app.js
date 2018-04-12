$(document).ready(function() {



var searchPk = $('#searchPk');
var btn = $('#request');

btn.on('click', function(){
	console.log('funciono')
})

var main = $("#main");
var pokemon;

$.ajax({
	url: "http://pokeapi.co/api/v2/pokemon/5/",
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
									'<p class = "name"><strong>Name:</strong>' + pokemon.name + '</p>' +
									'<p class = "type"><strong>Club:</strong>' + pokemon.types[0].type.name + '</p>' +
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

})

					// var listItem = 
					// '<div class = "pk-card">' + 
					// 	'<div class = "row">' +
					// 		'<div class = "col-md-3">' +
					// 			'<img src = "' + pokemon.imageUrl + '" class = "footbaler-img">' +
					// 		'</div>' +
					// 		'<div class = "col-md-8">' +
					// 			'<div class = "pk-details">' +
					// 				'<p class = "name"><strong>Name:</strong>' + pokemon.name + '</p>' +
					// 				'<p class = "type"><strong>Club:</strong>' + pokemon.type + '</p>' +
					// 			'</div>' +
					// 		'</div>' +
					// 	'</div>' +
					// '</div>';

					// main.append(listItem);



// 		if(response.success){
// 				var pokemon = response.pokemon;
// 				console.log(pokemon)
// 				for(var i = 0; i < pokemon.length; i++) {

// 					var listItem = 
// 					'<div class = "pokemon-card">' + 
// 						'<div class = "row">' +
// 							'<div class = "col-md-3">' +
// 								'<img src = "' + pokemon[i].imageUrl + '" class = "footbaler-img">' +
// 							'</div>' +
// 							'<div class = "col-md-8">' +
// 								'<div class = "pokemon-details">' +
// 									'<p class = "name"><strong>Name:</strong>' + pokemon[i].name + '</p>' +
// 									'<p class = "type"><strong>Club:</strong>' + pokemon[i].type + '</p>' +
// 								'</div>' +
// 							'</div>' +
// 						'</div>' +
// 					'</div>';

// 					main.append(listItem);

// 				}
// 			} else {
// 					console.log('ha habido algún problema con los datos remotos')
// 				}


			