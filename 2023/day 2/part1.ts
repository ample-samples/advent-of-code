import fs from 'fs'

// GameSets contain CubeSets

type CubeCount = { red: number } |
{ green: number } |
{ blue: number }

type CubeSet = {
	red: number,
	green: number,
	blue: number,
}

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 2/testInput.txt', (err, data) => {
	if (err) throw err;
	const inputs = data
		.toString()
		.split('\n')
	inputs.pop()

	const gameSets = inputs.map(element => {
		return element
			.slice(element.indexOf(':') + 2)
			.split(';')
			.map(element => element.split(','))
	});

	const answerTry = null;

	for (let i = 0; i < gameSets.length; i++) {
		console.log(`gameSet [${i}]`, gameSets[i]);
	}

	const gameSetZero = gameSets[0];
	const gameSetZeroArr = gameSetZero.map(cubeSet => cubeSet);


	function mapCubeSetArrToCubeSetType(cubeSetArr: string[]): CubeSet {

		let cubeSet: CubeSet = {
			red: 0,
			green: 0,
			blue: 0,
		};
		cubeSetArr.forEach(cubeCountStr => {
			const regexMatch = cubeCountStr.matchAll(/\w+/g);
			const propsToUpdate: string[] = [];
			for (const match of regexMatch) {
				propsToUpdate.push(match[0]);
			}

			if (propsToUpdate[1] === 'red') {
				cubeSet.red = Number(propsToUpdate[0])

			} else if (propsToUpdate[1] === 'green') {
				cubeSet.green = Number(propsToUpdate[0])

			} else if (propsToUpdate[1] === 'blue') {
				cubeSet.blue = Number(propsToUpdate[0])
			}

		})
		console.log(cubeSet)
		return cubeSet
	}
	// console.log(`Your answer is ${answerTry}`)
})


