import fs from 'fs'

const inputs: { [key: string]: string | undefined } = {};

const wordToNumber = {
	one: '1',
	two: '2',
	three: '3',
	four: '4',
	five: '5',
	six: '6',
	seven: '7',
	eight: '8',
	nine: '9'
}

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 1/testInput.txt', (err, data) => {
	if (err) throw err;
	inputs.test = data.toString()
	const answerTry = calibrateDocument(inputs.test)
	const answerCorrect = 142

	console.log(`Your answer is${answerTry}\nThe expected answer is ${answerCorrect}`)
})

function stringOfNumbers(calibrationLine: string): string {
	const numberString = calibrationLine.match(/one|two|three|four|five|six|seven|eight|nine|[0-9]/)
	console.log(numberString)
	return ''
}

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
		return `${numbers[0]}${numbers[numbers.length - 1]}`;
	})

	console.log(calibrationValues)

	return calibrationValues.reduce((accumulator, currentValue) =>
		accumulator + Number(currentValue), 0
	)
}
