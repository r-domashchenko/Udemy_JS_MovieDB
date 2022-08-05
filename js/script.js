"use strict";

const numberOfFilms = +prompt(`Скільки фільмів ви вже подивились?`, ``);

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < numberOfFilms; i++) {
    const lastFilm = prompt(`Останній фільм`, ``),
        numberOfStars = prompt(`На скільки зірок оціните?`, ``);

    if (lastFilm != null && numberOfStars != null && lastFilm != '' && numberOfStars != '' && lastFilm.length < 50) {
        personalMovieDb.movies[lastFilm] = numberOfStars;
    } else {
        i--;
    }
}

if (personalMovieDb.count <= 10) {
    console.log('дуже мало дивились');
} else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30) {
    console.log('знаєтесь у фільмах');
} else if (personalMovieDb.count > 31) {
    console.log('Ви - кіноман!');
} else {
    console.log('error');
}

console.log(personalMovieDb);