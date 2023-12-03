import fs from 'fs'

type WordToNumber = { [key: string]: string }

const inputs: { [key: string]: string | undefined } = {};

const wordToNumber: WordToNumber = {
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

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 1/input.txt', (err, data) => {
	if (err) throw err;
	inputs.test = data.toString()
	const answerTry = calibrateDocument(inputs.test)

	console.log(`Your answer is ${answerTry}`)
})

function stringOfNumbers(calibrationLine: string): string[] {
	const numberString = calibrationLine.matchAll(/(?=(one|two|three|four|five|six|seven|eight|nine|[0-9]))/g)
	const numberStringArray: string[] = []

	for (const match of numberString) {
		numberStringArray.push(match[1])
	}

	const numberArray = numberStringArray.map((element) => {
		return Number.isNaN(Number(element)) ? wordToNumber[element] : element
	})

	return numberArray;
}

function calibrateDocument(document: string): number {
	const documentLines = document.split(/\r?\n/)
	documentLines.pop()
	const calibrationValues = documentLines.map((calibrationLine) => {
		const numbers = stringOfNumbers(calibrationLine)
		return `${numbers[0]}${numbers[numbers.length - 1]}`;
	})

	return calibrationValues.reduce((accumulator, currentValue) =>
		accumulator + Number(currentValue), 0
	)
}
