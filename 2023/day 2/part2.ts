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
		.split('\n');
	inputs.pop();

	const gameSets = inputs.map(element => {
		return element
			.slice(element.indexOf(':') + 2)
			.split(';')
			.map(element => element.split(','));
	});

	function mapGameSetElelemtToCubeSetObject(cubeSetArr: string[]): CubeSet {

		const cubeSet: CubeSet = {
			red: 0,
			green: 0,
			blue: 0,
		};

		for (const cubeCountStr of cubeSetArr) {
			const regexMatch = cubeCountStr.matchAll(/\w+/g);
			const propsToUpdate: string[] = [];
			for (const match of regexMatch) {
				propsToUpdate.push(match[0]);
			}

			if (propsToUpdate[1] === 'red') {
				cubeSet.red = Number(propsToUpdate[0]);

			} else if (propsToUpdate[1] === 'green') {
				cubeSet.green = Number(propsToUpdate[0]);

			} else if (propsToUpdate[1] === 'blue') {
				cubeSet.blue = Number(propsToUpdate[0]);
			}

		}
		return cubeSet;
	}

	const cubeSets = gameSets.map(gameSet => {
		const cubeSets = gameSet.flatMap(cubeSetStrArr => {
			const cubeSet = mapGameSetElelemtToCubeSetObject(cubeSetStrArr);
			return cubeSet;
		})
		return cubeSets;
	})

	let cubeSetPowerSum = 0;
	for (const [cubeSetIndex, cubeSet] of cubeSets.entries()) {
		// console.log(cubeSetIndex, cubeSet)
		const minimumCubeSet: CubeSet = {
			red: 0,
			green: 0,
			blue: 0,
		}

		for (let i = 0; i < cubeSet.length; i++) {
			const element = cubeSet[i];
			if (element.red > minimumCubeSet.red) {
				minimumCubeSet.red = element.red
			}
			if (element.green > minimumCubeSet.green) {
				minimumCubeSet.green = element.green
			}
			if (element.blue > minimumCubeSet.blue) {
				minimumCubeSet.blue = element.blue
			}
		}
		const cubeSetPower = minimumCubeSet.red * minimumCubeSet.green * minimumCubeSet.blue;
		cubeSetPowerSum += cubeSetPower;
	}
	console.log("sum", cubeSetPowerSum)

	// console.log("cubeSets", cubeSets)
	// console.log(`Your answer is ${gameSum}`)
})
