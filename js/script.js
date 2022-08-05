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
    lastFilm = prompt(`Останній фільм`, ``);
    numberOfStars = prompt(`На скільки зірок оціните?`, ``);
    personalMovieDb.movies[lastFilm] = numberOfStars;
}

console.log(personalMovieDb.movies);
