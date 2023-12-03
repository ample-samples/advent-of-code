import fs from 'fs'

// GameSets contain CubeSets
type CubeSet = {
	red: number,
	green: number,
	blue: number,
}

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 2/input.txt', (err, data) => {
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

	function mapGameSetElelemtToCubeSetObject(cubeSetArr: string[]): CubeSet {

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
		return cubeSet
	}


	const cubeSetsAreValid = gameSets.map(gameSet => {
		const cubeSetIsValid = gameSet.flatMap(cubeSetStrArr => {
			const cubeSet = mapGameSetElelemtToCubeSetObject(cubeSetStrArr)
			if (cubeSet.red <= 12 && cubeSet.green <= 13 && cubeSet.blue <= 14) {
				return true;
			} else {
				return false;
			}
		}).reduce((prevEl, currentEl) => prevEl && currentEl)

		return cubeSetIsValid
	})

	let gameSum = 0;
	cubeSetsAreValid.forEach((cubeSetIsValid, cubeSetIndex) => {
		if (cubeSetIsValid) gameSum += cubeSetIndex + 1;
	})

	console.log(`Your answer is ${gameSum}`)
})
