function capitalize(x) {
	if (typeof x !== 'string') return 'err';
	x = x.trim();
	if (x[0] >= 'a' && x[0] <= 'z') x = x[0].toUpperCase() + x.slice(1);
	return x;
}

module.exports = capitalize;
