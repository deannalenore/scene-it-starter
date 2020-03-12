document.addEventListener('DOMContentLoaded', function () {
    //    var moviesContainer = document.getElementById("movies")
    //    moviesContainer.innerHTML = renderMovies(movieData)
        var form = document.getElementById("search-form")
        form.addEventListener("submit", function (e) {
        e.preventDefault();
        var movieInput = e.target.elements[0].value
        var searchArray = movieData.filter(function (element) {
        return element.Title.includes(movieInput)})
        console.log(searchArray)
        var moviesContainer = document.getElementById("movies")
        moviesContainer.innerHTML = renderMovies(searchArray)
    });
  });
  ​
  function saveToWatchlist(imdbID) {
    console.log("Save to watchlist function was triggered")
    ​
    var movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;
    });
    var watchlistJSON = localStorage.getItem(watchlist);
    var watchlist = JSON.parse(watchlistJSON);
    ​
    if (watchlist === null){
        return watchlist = [];
    }
    ​
    watchlist.push(movie);
}

function renderMovies(movieArray) {
    var movieTitles = movieArray.map(function (currentMovie) {
      return `<div class ="card">
        <img src = "" class="card-img-top" alt="...">
        <div class = "card-body">
            <h3 class = "card-title"> ${currentMovie.Title}</h3>
            <h4 class = "card-subtitle mb-2 text-muted">${currentMovie.Year}</h4>
            <button onclick='saveToWatchlist("${currentMovie.imdbID}")'>Add</button>
        </div>
    </div>	`
    }).join("")
    console.log("the rendered movies are " + movieTitles)
    return movieTitles
  }