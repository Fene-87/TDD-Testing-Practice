const stringLength = (string) => {
    if(string.length < 1 || string.length > 10) {
        return 'invalid';
    } 
    return string.length
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

class Calculator {
    static add = (a, b) => a + b;
    static subtract = (a, b) => a - b;
    static divide = (a, b) => a / b;
    static multiply = (a, b) => a * b;

}

const capitalize = (string) => {
    const newStr = string.charAt(0).toUpperCase() + string.slice(1);
    return newStr;
    
}

console.log(capitalize('mark'));

module.exports = { stringLength, reverseString, Calculator, capitalize }