const { stringLength, reverseString, Calculator, capitalize } = require('./testing')

//Task One
test('Check for length of string with 1-9 characters', () => {
    expect(stringLength('Mark')).toBe(4);
});

test('Check for length of String with more than 9 characters', () => {
    expect(stringLength('Markosndnfvjn')).toBeTruthy();
});

//Task Two
test('Check if string is reversed', () => {
    const name = 'Mark'
    expect(reverseString(name)).toBe('kraM');
})

//Task Three
describe('Calculator functions', () => {
    test('Check if addition is properly carried out', () => {
        expect(Calculator.add(2, 3)).toBe(5);
    });

    test('Check if subtraction is properly carried out', () => {
        expect(Calculator.subtract(4, 3)).toBe(1);
    });

    test('Check if division is properly carried out', () => {
        expect(Calculator.divide(15, 3)).toBe(5);
    });

    test('Check if multiplication is properly carried out', () => {
        expect(Calculator.multiply(2, 3)).toBe(6);
    });
})

//Task Four
test('Check if string is properly capitalized', () => {
    expect(capitalize('mark')).toBe('Mark');
})