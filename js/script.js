"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Скільки фільмів ви вже подивились?`, ``);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Скільки фільмів ви вже подивились?`, ``);
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDB(personalMovieDb.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш улюблений жанр під номером: &{i}`);
    }
}

writeYourGenres

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        const lastFilm = prompt(`Останній фільм`, ``),
            numberOfStars = prompt(`На скільки зірок оціните?`, ``);

        if (lastFilm != null && numberOfStars != null && lastFilm != '' && numberOfStars != '' && lastFilm.length < 50) {
            personalMovieDb.movies[lastFilm] = numberOfStars;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count <= 10) {
        console.log('дуже мало дивились');
    } else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30) {
        console.log('знаєтесь у фільмах');
    } else if (personalMovieDb.count > 31) {
        console.log('Ви - кіноман!');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

console.log(personalMovieDb);