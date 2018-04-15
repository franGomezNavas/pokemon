$('#btn-search').click(function(){
	var pokemon = $('#pokemon-search-input').val();
	var url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
	request(url, "load-pokemon")
	request(url);
}

function request(url, action){
	$.ajax({
		url: url
		type: 'GET';
		dataType: 'JSON';
		success: function(response){
						if (action === "load-pokemon"){
							loadPokemon(response);
						} else if (action === "filter-pokemon"){
							filterPokemon(response);
						} else if (action === "evolution-pokemon" ){
							evolutionPokemon(response);
						} else {
							alert('No hay busqueda');
						}
					}
			})
} // fin de request

function handleResponse(response, action){
		if(action === "load-pokemon"){
			loadPokemon(response)
		}
		if(action === "filter-pokemon"){
			filterPokemon(response)
		}
} // fin de handleResponse

function loadPokemon(response){
	var response = response;
	var html = "";
	html += "<div class col-md2>" + "<h2>" + response.name + '</h2>' + 
	'<img src="' + response.sprites.front_shiny + '" alt=" image de pokemon"' + 
	'<div class="description">type: ';

	for (var i = 0; i < response.types.length; i++){
		html += response.types[i].type.name;
	}

	html+= '<span>Weight: ' + response.weight + '</span>' + 
				 '<span>Height: ' + response.height + '</span>' +
				 // enlace para abrir modal para evolution
				 	'</div>' +
				 '</div>';

	$('#pokemon-list').append(html);

 } // fin de loadPokemon

 $('#dropdown-menu').change(function(){
 	var type = $('#dropdown-menu').val();
 	var url = "https://pokeapi.co/api/v2/type/" + type;
 	request(url, "filter-pokemon")
 })

function filterPokemon(array){
	$('#pokemon-list').empty();

	array.forEach(function(pokemon){
		request(pokemon.pokemon.url, 'load-pokemon')
	})
} // fin de filterPokemon









