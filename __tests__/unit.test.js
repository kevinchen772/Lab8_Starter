// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('1 is not phonenumber', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});

test('00 is not phonenumber', () => {
    expect(functions.isPhoneNumber('00')).toBe(false);
});

test('858-539-3399 is phonenumber', () => {
    expect(functions.isPhoneNumber('858-539-3399')).toBe(true);
});

test('858-539-1122 is phonenumber', () => {
    expect(functions.isPhoneNumber('858-539-1122')).toBe(true);
});

test('kevin@gmail.com is email', () => {
    expect(functions.isEmail('kevin@gmail.com')).toBe(true);
});

test('kevin@outlook.com is email', () => {
    expect(functions.isEmail('kevin@outlook.com')).toBe(true);
});

test('kevin.com is not email', () => {
    expect(functions.isEmail('kevin.com')).toBe(false);
});

test('kevin77777.com is not email', () => {
    expect(functions.isEmail('kevin77777.com')).toBe(false);
});

test('1234 is not a Strong Password', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});

test('qqq is not a Strong Password', () => {
    expect(functions.isStrongPassword('qqq')).toBe(false);
});

test('q123qq is a Strong Password', () => {
    expect(functions.isStrongPassword('q123qq')).toBe(true);
});

test('i1kdjflas is a Strong Password', () => {
    expect(functions.isStrongPassword('i1kdjflas')).toBe(true);
});

test('11/11/2001 is a date', () => {
    expect(functions.isDate('11/11/2001')).toBe(true);
});

test('11/11/2019 is a date', () => {
    expect(functions.isDate('11/11/2019')).toBe(true);
});

test('11 11 2019 is not a date', () => {
    expect(functions.isDate('11 11 2019')).toBe(false);
});

test('1111 is not a date', () => {
    expect(functions.isDate('1111')).toBe(false);
});

test('1111 is not a Hex Color', () => {
    expect(functions.isHexColor('1111')).toBe(false);
});

test('1 is not a Hex Color', () => {
    expect(functions.isHexColor('1')).toBe(false);
});

test('AF1234 is a Hex Color', () => {
    expect(functions.isHexColor('AF1234')).toBe(true);
});

test('FF0000 is a Hex Color', () => {
    expect(functions.isHexColor('FF0000')).toBe(true);
});