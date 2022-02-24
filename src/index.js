module.exports = function toReadable(number) {
    let a = {
        0 : 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

        if (number <= 20) {
            return a[number]; 
        } else if (number > 20 && number < 99 && String(number)[1] == 0) {
            return a[Number(String(number)[0] + 0)];
        } else if (number > 20 && number <= 99 && String(number)[1] !== 0) {
            return a[Number(String(number)[0] + 0)] + ' ' + a[Number(String(number)[1])];
        } else if (number > 99 && String(number)[1] == 0 && String(number)[2] == 0) {
            return a[Number(String(number)[0])] + ' hundred';            
        } else if (number > 99 && Number(String(number)[1] + String(number)[2]) == 19) {
            return a[Number(String(number)[0])] + ' hundred ' + a[Number(String(number)[1] + String(number)[2])];
        } else if (number > 99 && String(number)[1] !== 0 && String(number)[2] == 0) {
            return a[Number(String(number)[0])] + ' hundred ' + a[Number(String(number)[1] + 0)];
        } else if (number > 99 && String(number)[1] == 0 && String(number)[2] !== 0) {
            return a[Number(String(number)[0])] + ' hundred ' + a[Number(String(number)[2])];
        } else if (number > 99 && String(number)[1] !== 0 && String(number)[2] !== 0 && Number(String(number)[1] + String(number)[2]) < 19) {
            return a[Number(String(number)[0])] + ' hundred ' + a[Number(String(number)[1] + String(number)[2])];
        } else if (number > 99 && String(number)[1] !== 0 && String(number)[2] !== 0) {
            return a[Number(String(number)[0])] + ' hundred ' + a[Number(String(number)[1] + 0)] + ' ' + a[Number(String(number)[2])];
        }
        
};