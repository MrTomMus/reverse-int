module.exports = function reverse (n) {
    let reverseInt = Math.abs(n).toString().split('').reverse().join('');

    return +reverseInt;
}
