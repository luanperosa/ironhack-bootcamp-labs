/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const movies = require("./data.js"); //requerindo a variavel q esta exportada do arquivo data.js

const turnHoursToMinutes = movies => movies.map(movie => {
  if (typeof movie.duration === "number") return movie;

  let hours = 0;
  let minutes = 0;
  const movieDuration = movie.duration.match(/(\d+)/g);
  const thereHours = movie.duration.indexOf("h") !== -1;
  const thereMinutes = movie.duration.indexOf("min") !== -1;
  
  if(thereHours){
    hours = parseInt(movieDuration[0], 10) * 60; 
  }
  if(thereHours && thereMinutes) {
    minutes = parseInt(movieDuration[1], 10);
  } else if(thereMinutes) {
    minutes = parseInt(movieDuration[0], 10);
  }

  const newMovie = {...movie};
  newMovie.duration = hours + minutes;

  return newMovie;
});

// Get the average of all rates with 2 decimals 
  const averageRates = movies => {
    let average = 0;

    movies.forEach(movie => {
      if(movie.rate !== ""){
        average += parseFloat(movie.rate);
      }
    });
    average = (average / movies.length).toFixed(2);
    return parseFloat(average);
  };
  

// Get the average of Drama Movies
const ratesAverage = movies => {
  let average = 0;

  movies.forEach(movie => {
    if (movie.rate !== "") {
      average += parseFloat(movie.rate);
    }
  });

  average = (average / movies.length).toFixed(2);
  return parseFloat(average);
};

// Get the average of Drama Movies
const dramaMoviesRate = movies => {
  const dramaMovies = movies.filter(movie => {
    for (let i = 0; i < movie.genre.length; i += 1) {
      if (movie.genre[i] === "Drama") {
        return true;
      }
    }
    return false;
  });

  return dramaMovies.length === 0 ? undefined : ratesAverage(dramaMovies);
};

// Order by time duration, in growing order
const orderByDuration = moviesArray => {
  durationArray = turnHoursToMinutes(moviesArray);
  durationArray.sort((movie1, movie2) => {
    if (movie1.duration === movie2.duration) {
      if (movie1.title < movie2.title) {
        return -1;
      } else if (movie1.title > movie2.title) {
        return 1;
      } else {
        return 0;
      }
    }
    return movie1.duration - movie2.duration;
  });

  return durationArray;
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = movies => {
  if (movies.length === 0) return undefined;

  const dramaMovies = movies.filter(movie => {
    const genreTitle = movie.genre;
    const directorName = movie.director;

    if (directorName === "Steven Spielberg") {
      for (let i = 0; i < genreTitle.length; i++) {
        if (genreTitle[i] === "Drama") {
          return true;
        }
      }
      return false;
    }
  });

  return dramaMovies.length !== 0
    ? `Steven Spielberg directed ${dramaMovies.length} drama movies!`
    : `Steven Spielberg directed 0 drama movies!`;
};

// Order by title and print the first 20 titles
const orderAlphabetically = moviesArray => {
  moviesArray.sort((movie1, movie2) => {
    const movieTitle1 = movie1.title.toLowerCase();
    const movieTitle2 = movie2.title.toLowerCase();

    if (movieTitle1 < movieTitle2) {
      return -1;
    } else if (movieTitle1 > movieTitle2) {
      return 1;
    } else {
      return 0;
    }
  });

  const namesArray = moviesArray.map(movie => movie.title);

  return namesArray.length >= 20
    ? (smallArray = namesArray.slice(0, 20))
    : namesArray;
};

// Best yearly rate average

const bestYearAvg = movies => {
  if (movies.length === 0) return undefined;

  const yearlyAverages = {};

  movies.forEach(movie => {
    if (!yearlyAverages[movie.year]) {
      yearlyAverages[movie.year] = { movies: 1, rate: parseFloat(movie.rate) };
    } else {
      yearlyAverages[movie.year].movies += 1;
      yearlyAverages[movie.year].rate += parseFloat(movie.rate);
      yearlyAverages[movie.year].rate /= yearlyAverages[movie.year].movies;
    }
  });

  const years = Object.keys(yearlyAverages);

  let bestAverage = 0;
  let bestYear = 0;

  years.forEach(year => {
    const yearRate = yearlyAverages[year].rate;

    if (yearRate > bestAverage) {
      bestAverage = yearRate;
      bestYear = year;
    }
  });

  return `The best year was ${bestYear} with an average rate of ${bestAverage}`;
};