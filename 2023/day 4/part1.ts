import fs from "fs"

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 4/testInput.txt', (err, data) => {
	if (err) throw err;
	const inputs = data
		.toString()
		.split('\n')
	inputs.pop()
	console.log(inputs)

	const cards: string[][] = []
	for (const element of inputs) {
		const card = element.slice(element.indexOf(':') + 1).split('|')
		cards.push(card)
	}


	console.log(cards)
})
