function revString(x) {
	if (typeof x !== 'string') return 'err';
	x = x.trim();
	return x.split('').reverse().join('');
}

module.exports = revString;
