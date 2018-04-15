$('#btn-search').click(function(e){
	e.preventDefault(e)
	var pokemon = $('#searchPk').val();
	var url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
	request(url, "load-pokemon");
});

function request(url, action){
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'JSON', 
	 	success: function (response){
								if(action ==="load-pokemon") {
									loadPokemon(response)
								} else if(action ==="filter-pokemon") {
									filterPokemon(response)
								} else if(action === 'evolution-pokemon') {
									evolutionPokemon(response)
								} else {
									alert('no hay busqueda')
								}

							}
						})
	};	


function loadPokemon(response){
	var response = response;
	//console.log(response)

	 var html = "";
	 html += '<div class="col-md-12">' +
	 					'<h2>' +  response.name +  '</h2>' +
	 					'<img src="' + response.sprites.front_shiny + '" alt="image de pokemon">' +
	 					'<div class="description">Type: ';

	 	for (var i = 0; i < response.types.length; i ++){
	 		html += response.types[i].type.name;
	 	}

	 	html += '<span>Weight: ' + response.weight + '</span>' +
	 					'<span>Height: ' + response.height + '</span>' +
	 					// Enlace para abrir modal para evolutions
	 					'</div>' +
	 				'</div>';
	 	$('#pokemon-list').append(html);
}

$('#dropdown-menu').change(function(){
	var type = $('#dropdown-menu').val();
	var url = 'https://pokeapi.co/api/v2/type/' + type;
	request(url, "filter-pokemon")
})

function filterPokemon(array){
	$('#pokemon-list').empty();
	console.log(array)
	 array.forEach(function(pokemon){
		request(pokemon.pokemon.url,"load_pokemon");
	});
}













