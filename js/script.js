"use strict";

function getMathResult(num, progression) {

    if (typeof (progression) !== 'number' || progression <= 0) {
        console.log(num);
        return num;
        
    }

    let str = '';

    for (let i = 1; i <= progression; i++) {
        if (i === progression) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    console.log(str);
    return str;
}

getMathResult(10, 5);


// Exercise 7*

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }
        
    let volume = 0,
        square = 0;

    volume = length * length * length;
    square = 6 * (length * length);
    return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
}

console.log(calculateVolumeAndArea.volume);
calculateVolumeAndArea(6);


function getCoupeNumber(num) {
    if (typeof (num) !== 'number' || !Number.isInteger(num) || num < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (num === 0 || num > 36) {
        return "Таких мест в вагоне не существует";
    }
    return Math.ceil(num / 4);

}

// Exercise 8*

function getTimeFromMinutes(time) {

    if (typeof (time) !== 'number' || !Number.isInteger(time) || time < 0) {
        return "Ошибка, проверьте данные";
    }

}

getTimeFromMinutes(150);




