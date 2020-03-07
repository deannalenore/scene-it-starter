document.addEventListener('DOMContentLoaded', function() {      
   function renderMovies(movieArray){
       var movieTitles = movieArray.map(function(currentMovie){
        return `<div class ="card">
        <img src = "" class="card-img-top" alt="...">
        <div class = "card-body">
            <h3 class = "card-title"> ${currentMovie.Title}</h3>
            <h4 class = "card-subtitle mb-2 text-muted">${currentMovie.Year}</h4>
            <button>Add</button>
        </div>
    </div>	`
    })
return movieTitles
   } 
   var title = renderMovies(movieData)
   console.log(title.join(''))
   var moviesContainer = document.getElementById("movies")
    moviesContainer.innerHTML = title.join('')
});

