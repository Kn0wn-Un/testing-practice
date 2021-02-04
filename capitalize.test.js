const capitalize = require('./capitalize');

test('capitalizes', () => {
	expect(capitalize('hello!')).toBe('Hello!');
});
test('capitalizes1', () => {
	expect(capitalize('1hello world!')).toBe('1hello world!');
});
test('rejects other datatypes', () => {
	expect(capitalize(1)).toBe('err');
	expect(capitalize(1.0004)).toBe('err');
	expect(capitalize({ one: 1 })).toBe('err');
	expect(capitalize([1, 2, 3, 4])).toBe('err');
});
test('rejects spaces', () => {
	expect(capitalize(' ')).toBe('');
});
test('trims', () => {
	expect(capitalize(' hello! ')).toBe('Hello!');
});
