import fs from "fs"

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 4/input.txt', (err, data) => {
	if (err) throw err;
	const inputs = data
		.toString()
		.split('\n');
	inputs.pop();

	const cards: string[][][] = [];
	for (const element of inputs) {
		const cardLeftNums = element
			.slice(element.indexOf(':') + 1)
			.split('|')[0]
			.split(/\ +/)
			.filter((x) => x !== '');

		const cardRightNums = element
			.slice(element.indexOf(':') + 1)
			.split('|')[1]
			.split(/\ +/)
			.filter((x) => x !== '');

		cards.push([cardLeftNums, cardRightNums]);
	}

	let sum = 0;
	for (const card of cards) {
		let winningNumCount = 0;
		for (const leftNum of card[0]) {
			for (const rightNum of card[1]) {
				if (leftNum === rightNum) {
					winningNumCount++
				}
			}
		}
		if (winningNumCount === 0) {
			sum += 0
		} else {
			sum += 2 ** (winningNumCount - 1)
		}
	}

	console.log(sum)
})
