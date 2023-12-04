import fs from "fs"

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 4/testInput.txt', (err, data) => {
	if (err) throw err;
	const inputs = data
		.toString()
		.split('\n');
	inputs.pop();
	console.log(inputs);

	const cards: string[][][] = [];
	for (const element of inputs) {
		const cardLeftNums = element.slice(element.indexOf(':') + 1).split('|')[0].split(/\ +/);
		cardLeftNums.pop();
		cardLeftNums.shift();

		const cardRightNums = element.slice(element.indexOf(':') + 1).split('|')[1].split(/\ +/);
		cardRightNums.pop();
		cardRightNums.shift();

		cards.push([ cardLeftNums, cardRightNums ]);
	}

	console.log(cards);

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
		sum += 2 ** winningNumCount
	}

	console.log(sum)
})
