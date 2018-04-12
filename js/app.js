
<<<<<<< HEAD
$.get({
	url: 'https://pokeapi.co/api/v2/pokemon/1',
	type: 'GET',
		dataType: 'JSON',
		success: function(response) {
			if(response.success){
				var pokemon = response.pokemon;
				console.log(pokemon)
			}
		}

})










// $(document).ready(function() {

// 	// The magic goes here
// 	var main = $('#main');

// 	$.ajax({
// 		url: 'https://pure-forest-79660.herokuapp.com/footballers',
// 		type: 'GET',
// 		dataType: 'JSON',
// 		success: function(response) {
	
// 			if(response.success){
// 				var footballers = response.footballers;
// 				console.log(footballers)
// 				for(var i = 0; i < footballers.length; i++) {

// 					var listItem = 
// 					'<div class = "footballer-card">' + 
// 						'<div class = "row">' +
// 							'<div class = "col-md-3">' +
// 								'<img src = "' + footballers[i].imageUrl + '" class = "footbaler-img">' +
// 							'</div>' +
// 							'<div class = "col-md-8">' +
// 								'<div class = "footballers-details">' +
// 									'<p class = "name"><strong>Name:</strong>' + footballers[i].name + '</p>' +
// 									'<p class = "club"><strong>Club:</strong>' + footballers[i].club + '</p>' +
// 								'</div>' +
// 							'</div>' +
// 						'</div>' +
// 					'</div>';

// 					main.append(listItem);

// 				}
// 			} else {
// 					console.log('ha habido algún problema con los datos remotos')
// 				}
// 			} 
// 		}) 
// })	
=======
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
>>>>>>> 6bd6629375c220f2fc27aff10437474c06891551
