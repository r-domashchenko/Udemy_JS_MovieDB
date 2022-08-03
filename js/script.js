use strict;

const numberOfFilms = +prompt(`Скільки фільмів ви вже подивились?`, ``);

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}