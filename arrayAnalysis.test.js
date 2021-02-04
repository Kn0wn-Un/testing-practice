const arrayAnalysis = require('./arrayAnalysis');

test('rejects wrong inputs', () => {
	expect(arrayAnalysis(1)).toBe('err');
	expect(arrayAnalysis({ one: 1 })).toBe('err');
	expect(arrayAnalysis('[1, 2, 3]')).toBe('err');
	expect(arrayAnalysis([1, 8, 3, 4, 2, '6'])).toBe('err');
});

test('does analysis', () => {
	expect(arrayAnalysis([0])).toEqual({
		average: 0,
		min: 0,
		max: 0,
		length: 1,
	});
	expect(arrayAnalysis([])).toEqual({
		average: 0,
		min: 0,
		max: 0,
		length: 0,
	});
	expect(arrayAnalysis([1, 8, 0, -8, -1])).toEqual({
		average: 0,
		min: -8,
		max: 8,
		length: 5,
	});
	expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
