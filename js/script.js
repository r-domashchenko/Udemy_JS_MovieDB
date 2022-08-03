use strict;

const numberOfFilms = +prompt(`Скільки фільмів ви вже подивились?`, ``);

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt(`Останній фільм`, ``),
    b = prompt(`На скільки оціните?`, ``),
    c = prompt(`Останній фільм`, ``),
    d = prompt(`На скільки оціните?`, ``);

personalMovieDb.movies[a] = b;