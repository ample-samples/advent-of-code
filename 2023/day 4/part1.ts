import fs from "fs"

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 4/testInput.txt', (err, data) => {
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

	console.log(cards);

	let sum = 0;
	for (const card of cards) {
		console.log(card);
		let winningNumCount = 0;
		for (const leftNum of card[0]) {
			for (const rightNum of card[1]) {
				if (leftNum === rightNum) {
					console.log(leftNum, rightNum);
					console.log("=== match ===");
					winningNumCount++
				}
			}
		}
		if (winningNumCount === 0) {
			console.log("This card is worth", 0, "points");
			sum += 0
		} else {
			console.log("This card is worth", 2 ** (winningNumCount - 1), "points");
			sum += 2 ** (winningNumCount - 1)
		}
	}

	console.log(sum)
})
