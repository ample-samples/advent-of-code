import fs from 'fs'

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 2/testInput.txt', (err, data) => {
	if (err) throw err;
	const inputs = data
		.toString()
		.split('\n')
	inputs.pop()

	const formattedInputs = inputs.map(element => {
		return element
			.slice(element.indexOf(':') + 2)
			.split(';')
			.map(element => element.split(','))
	});

	const answerTry = null;
	for (let i = 0; i < formattedInputs.length; i++) {
		console.log(`formattedInputs[${i}]`, formattedInputs[i]);

	}
	console.log({ inputs })

	console.log(`Your answer is ${answerTry}`)
})


