$(document).ready(() => {
	

  	const input = $("#input"); // get input
  	const searchForm = $("#searchForm"); // get form
  	const outputMovies = $("#output"); // get output
  	
  	//add eventlistener
  	searchForm.submit((e) => {
  		e.preventDefault();
  		let searchText = input.val();
  		getMovies(searchText);
  	})


  	 // get movies depends on search text
  	const getMovies = (searchText) => {

  		//setting for the api call
  		let settings = {
  		"url": "https://imdb-api.com/en/API/Search/k_97t2tysq/" + searchText ,
  		"method": "GET",
  		"timeout": 0,
		};

		let output = "";
 		
 		//get response array and return a template for each movie
		$.ajax(settings).done((response) => {
  			let movies = response.results;
  			movies.forEach((movie) => {
  				 output += `
  					<div id="movie" class="card my-3 bg-dark text-center text-light col-md-3">
  						<img class="car-img-top img"src="${movie.image}">
  						<div class="card-body">
  							<h5 class="card-title">${movie.title}</h5>
  							<p class="card-text">${movie.description}</p>
  						</div>
  						
  					</div>
  				`
  				console.log(movie);
  				
  			})
  			outputMovies.html(output); //update the UI with the new output
		});
  		}
})