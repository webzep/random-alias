# Random Alias Generator

## Sample
```js
	const { randomAlias } = require("random-alias")

	 const schemaExample = [
	 	{
			fromList: 'colors',
			minLetters: 1,
			maxLetters: 10,
		},
		{
			fromList: 'adjectives',
			minLetters: 1,
			maxLetters: 10,
		},
		{
			fromList: 'nouns',
			minLetters: 1,
			maxLetters: 10,
		},
	 ];

	 const optionsExample = {
	     delimiter: ' ',
	     possibilityCount: true
	 }

	const alias = randomAlias(schemaExample, optionsExample)
	 
	console.log(alias)

	//  Ouput
	// { word: 'loud convinced thongs', possibilities: 11811517172 }
```