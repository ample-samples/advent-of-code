import fs from "fs"

fs.readFile('/home/todd/Documents/advent-of-code/2023/day 5/input.txt', (err, data) => {
	if (err) throw err;
	const inputs = data
		.toString()
	.split("\n\n")
	.filter(x => x !== "");

	const seeds = inputs[0].substring(inputs[0].indexOf(" ") + 1);
	const seedToSoilMap = inputs[1].substring(inputs[1].indexOf("\n") + 1)
	const soilToFertilizerMap = inputs[2].substring(inputs[2].indexOf("\n") + 1)
	const fertilizerToWaterMap = inputs[3].substring(inputs[3].indexOf("\n") + 1)
	const waterToLightMap = inputs[4].substring(inputs[4].indexOf("\n") + 1)
	const lightToTemperatureMap = inputs[5].substring(inputs[5].indexOf("\n") + 1)
	const temperatureToHumidityMap = inputs[6].substring(inputs[6].indexOf("\n") + 1)
	const humidityToLocationMap = inputs[7].substring(inputs[7].indexOf("\n") + 1)



})
