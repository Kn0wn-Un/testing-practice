function arrayAnalysis(arr) {
	if (!Array.isArray(arr)) return 'err';
	let sum = 0;
	let avg;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') return 'err';
		sum += arr[i];
	}
	const obj = {};
	obj.average = !arr.length ? 0 : sum / arr.length;
	obj.min = !arr.length ? 0 : Math.min(...arr);
	obj.max = !arr.length ? 0 : Math.max(...arr);
	obj.length = arr.length;
	return obj;
}

module.exports = arrayAnalysis;
