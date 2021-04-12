const adjectives = require('./adjective-list')();
const nouns = require('./noun-list')();
const colors = require('./color-list')();

const randomAlias = (schema = [], options = {}) => {
	// Type checking
	if (schema.constructor !== Array)
		throw new Error('Function randomWord takes an Array of objects.');
	
	let allObjects = schema.some(
		(obj) => typeof obj === 'object' && obj !== null
	);

	if (!allObjects) throw new Error('Schema array can only contain objects.');


	const words = {
		adjectives,
		nouns,
		colors,
	};

	const lengths = {
		adjectives: adjectives.length,
		nouns: nouns.length,
		colors: colors.length,
	};

	let results = {
		word: '',
		possibilities: 1,
	};

	if (options.possibilityCount) {
		schema.forEach((obj) => (results.possibilities *= lengths[obj.fromList]));
	}

	let wordList = [];
	schema.forEach((obj) => {
		wordList.push(
			words[obj.fromList][Math.floor(Math.random() * lengths[obj.fromList])]
		);
	});

	results.word = wordList.join(options.delimiter);

	return results 
};

module.exports = randomAlias;
