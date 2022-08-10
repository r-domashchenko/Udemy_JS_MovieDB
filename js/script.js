"use strict";

let numberOfFilms;

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        numberOfFilms = +prompt(`Скільки фільмів ви вже подивились?`, ``);
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt(`Скільки фільмів ви вже подивились?`, ``);
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDb.genres[i - 1] = prompt(`Ваш улюблений жанр під номером: &{i}`);
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < numberOfFilms; i++) {
            const lastFilm = prompt(`Останній фільм`, ``).trim(),
                numberOfStars = prompt(`На скільки зірок оціните?`, ``);

            if (lastFilm != null && numberOfStars != null && lastFilm != '' && numberOfStars != '' && lastFilm.length < 50) {
                personalMovieDb.movies[lastFilm] = numberOfStars;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDb.count <= 10) {
            console.log('дуже мало дивились');
        } else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30) {
            console.log('знаєтесь у фільмах');
        } else if (personalMovieDb.count > 31) {
            console.log('Ви - кіноман!');
        } else {
            console.log('error');
        }
    },

    detectPersonalLevel: function () {
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
}