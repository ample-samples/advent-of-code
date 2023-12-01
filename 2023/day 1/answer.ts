import fs from 'fs'

const inputs: { [key: string]: string | undefined } = {};

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 1/input.txt', (err, data) => {
	if (err) throw err;
	inputs.test = data.toString()
	const answerTry = calibrateDocument(inputs.test)
	const answerCorrect = 142

		console.log(`Success! The answer is ${answerTry}`)
})


function calibrateDocument(document: string): number {
	const documentLines = document.split(/\r?\n/)
	documentLines.pop()
	const calibrationValues = documentLines.map((calibrationLine) => {
		const numbers: string[] = []
		for (const char of calibrationLine) {
			if (/^[0-9]*$/.test(char)) {
				numbers.push(char)
			}
		}
		return `${numbers[0]}${numbers[numbers.length-1]}`;
	})

	console.log(calibrationValues)

	return calibrationValues.reduce((accumulator, currentValue) => 
		accumulator + Number(currentValue), 0
	)
}
