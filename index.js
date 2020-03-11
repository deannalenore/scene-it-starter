document.addEventListener('DOMContentLoaded', function() {      
   function renderMovies(movieArray){
       var movieTitles = movieArray.map(function(currentMovie){
        return `<div class ="card">
        <img src = "" class="card-img-top" alt="...">
        <div class = "card-body">
            <h3 class = "card-title"> ${currentMovie.Title}</h3>
            <h4 class = "card-subtitle mb-2 text-muted">${currentMovie.Year}</h4>
            <button onclick = "saveToWatchlist("${currentMovie.imdbID}")">Add</button>
        </div>
    </div>	`
    }).join("")
return movieTitles
   } 

   //    var moviesContainer = document.getElementById("movies")
//    moviesContainer.innerHTML = renderMovies(movieData)
   var form = document.getElementById("search-form")
   form.addEventListener("submit", function(e){
       e.preventDefault();
   var movieInput = e.target.elements[0].value.toUpperCase() 
   var searchArray = movieData.filter((element)=>{
       return element.Title.toUpperCase().includes(movieInput) 
   })
   console.log(searchArray)
      var moviesContainer = document.getElementById("movies")
   moviesContainer.innerHTML = renderMovies(searchArray)
})
    
        //var movie = movieData.find(function(currentMovie){
            //return currentMovie.imdbID == imdbID;
        //});
        //var watchlistJSON = localStorage.getItem(watchlist);
        //var watchlist = JSON.parse(watchlistJSON);

        //if (watchlist === null){
            //return watchlist = [];
        //}
        
        //watchlist.push(movie);



    
});
function saveToWatchlist(imdbID){

}