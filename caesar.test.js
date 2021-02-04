const { TestScheduler } = require('jest');
const cipher = require('./caesar');

test('rejects invalid inputs', () => {
	expect(cipher('z')).toBe('err');
	expect(cipher(1, 1)).toBe('err');
	expect(cipher(1, 'z')).toBe('err');
	expect(cipher('z', -1)).toBe('err');
});
test('encrypts', () => {
	expect(cipher('a', 1)).toBe('b');
	expect(cipher('1', 1)).toBe('1');
	expect(cipher('123!!aabbcc!!321', 1)).toBe('123!!bbccdd!!321');
	expect(cipher('A', 1.4)).toBe('B');
	expect(cipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 23)).toBe(
		'XYZABCDEFGHIJKLMNOPQRSTUVW'
	);
	expect(cipher('ATTACK AT ONCE!', 4)).toBe('EXXEGO EX SRGI!');
});
test('wraps', () => {
	expect(cipher('a', 26)).toBe('a');
	expect(cipher('Z', 1.6)).toBe('B');
});
