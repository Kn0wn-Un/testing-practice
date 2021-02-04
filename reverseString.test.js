const { TestScheduler } = require('jest');
const revString = require('./reverseString');
test('reverses string', () => {
	expect(revString('hello!')).toBe('!olleh');
	expect(revString(' abc ')).toBe('cba');
	expect(revString(' ')).toBe('');
});
test('rejects other datatypes', () => {
	expect(revString(1)).toBe('err');
	expect(revString({ one: 1 })).toBe('err');
	expect(revString([1, 2, 3])).toBe('err');
});
