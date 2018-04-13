$('#btn-search').click(function()){
	var pokemon = $('#pokemon-search-input').val();
	var url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
	request(url);
}

function request(url){
	$.ajax({
		url: url
	}).success (function(){
		loadPokemon(response)
	})
}

function loadPokemon(response){
	var response = response;
	var html = "";
	html += "<div class col-md2>" + "<h2>" + 
}









