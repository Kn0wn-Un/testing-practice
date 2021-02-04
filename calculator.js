function calc(x, y, op) {
	if (
		typeof op !== 'string' ||
		typeof x !== 'number' ||
		typeof y !== 'number'
	)
		return 'err';
	if (op === 'add') return x + y;
	else if (op === 'sub') return x - y;
	else if (op === 'mul') return x * y;
	else if (op === 'div') {
		if (y !== 0) return x / y;
		else return 'cannot divide by 0';
	} else return 'err';
}

module.exports = calc;
