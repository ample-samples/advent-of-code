import fs from 'fs'

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 3/testInput.txt', (err, data) => {
	if (err) throw err;
	const inputs = data
		.toString()
		.split('\n')
	inputs.pop()

	console.log(inputs)

	const directions = [
		[-1, 1], [-1, 0], [-1, -1],
		[0, 1], [0, -1],
		[1, 1], [1, 0], [1, -1]
	]

})
