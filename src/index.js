module.exports = function reverse(n) {
    if (n < 0) {
        n * -1;
    }

    let numbToStr = String(n);
    let reverseN = '';

    for (let i = numbToStr.length - 1; i >= 0; i--) {
        reverseN += numbToStr[i];
    }

    return parseInt(reverseN);
}
