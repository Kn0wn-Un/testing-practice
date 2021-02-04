const { TestScheduler } = require('jest');

function cipher(text, shift) {
	if (typeof text !== 'string' || typeof shift !== 'number') return 'err';
	shift = Math.round(shift);
	if (shift < 0) return 'err';
	while (shift >= 26) {
		shift %= 26;
	}
	let enc = [];
	for (let i = 0; i < text.length; i++) {
		if (
			!(
				(text[i] >= 'a' && text[i] <= 'z') ||
				(text[i] >= 'A' && text[i] <= 'Z')
			)
		) {
			enc[i] = text[i];
			continue;
		}

		enc[i] = String.fromCharCode(text.charCodeAt(i) + shift);
		if (text[i] >= 'a' && text[i] <= 'z' && enc[i] > 'z')
			enc[i] = String.fromCharCode(text.charCodeAt(i) - 26 + shift);
		if (text[i] >= 'A' && text[i] <= 'Z' && enc[i] > 'Z')
			enc[i] = String.fromCharCode(text.charCodeAt(i) - 26 + shift);
	}
	enc = enc.join('');
	return enc;
}

module.exports = cipher;
