const { TestScheduler } = require('jest');
const calc = require('./calculator');

test('calculates', () => {
	expect(calc(1, 2, 'add')).toBe(3);
	expect(calc(1, 2, 'sub')).toBe(-1);
	expect(calc(2, 3, 'mul')).toBe(6);
	expect(calc(4, 2, 'div')).toBeCloseTo(2.0);
	expect(calc(3, 2, 'div')).toBeCloseTo(1.5);
});
test('cannot divide by zero', () => {
	expect(calc(1, 0, 'div')).toBe('cannot divide by 0');
});
test('invalid operation', () => {
	expect(calc(1, 2, '')).toBe('err');
	expect(calc(1, 2, 'wdw')).toBe('err');
	expect(calc(1, 2, 1)).toBe('err');
	expect(calc('1', '2', 1)).toBe('err');
});
test('invalid operands', () => {
	expect(calc(1, '2', 'add')).toBe('err');
	expect(calc({ one: 1 }, 2, 'add')).toBe('err');
	expect(calc([1], 2, 'add')).toBe('err');
});
