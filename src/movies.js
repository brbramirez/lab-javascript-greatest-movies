// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = movies => movies.map(movie => movie.director);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let StevenSpielbergMovies = movies.filter((movie) => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama'));
  return StevenSpielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray == 0) return 0;
  let scoreSum = moviesArray.reduce((acc, curr) => {
  return acc + curr.score;
  }, 0);
  let averageScore = scoreSum / moviesArray.length;
  return Math.round(averageScore * 100) / 100 ;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
const dramaMovies = moviesArray.filter((movie) => 
movie.genre.includes("Drama"));
const sum = dramaMovies.reduce((acc, curr) => {
  return acc + curr.score;
}, 0);
const average = sum / moviesArray.length;
return +average.toFixed(2);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopied = [...moviesArray]; 
  moviesCopied.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesCopied;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
let movieTitles = moviesArray.map(movie => movie.title);
movieTitles = movieTitles.sort();
return movieTitles.slice(0, 20); 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newMoviesArray = [...moviesArray]; 
  return newMoviesArray.map(movie => {
    let movieduration = movie.duration.split(" ");
    movieduration = movieduration.replaceAll("[a-zA-Z]", "");
    movieduration = movieduration[0] * 60 + movieduration[1];
    movieduration = movieduration[0];
    movie.duration = movieduration;
    return movie;
  }
  );
} //didn't work ;(

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
