"use strict";

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDb.count = +prompt(`Скільки фільмів ви вже подивились?`, ``);
        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt(`Скільки фільмів ви вже подивились?`, ``);
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

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
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

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш улюблений жанр під номером: &{i}`);
            
            if (genre === '' || genre === null) {
                console.log(`Не введені дані`);
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre;
            }
        }

        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Улюблений жанр# ${i+1} - це ${item}`);
        });

    },

    toggleVisibleMyDB: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    }
};