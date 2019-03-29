const assert = require('assert')
const sample = require('./main')

const numbers = [ 1, 2, 3 ]

const functionExists = () => {
	assert(typeof sample.average === 'function', 'La función no existe')
}

const functionReturnsANumber = () => {
	assert(typeof sample.average(numbers) === 'number', 'La función no retorna un numero')
}

const functionReturnsAverage = () => {
	assert(sample.average(numbers) === 2, 'La función no retorna el average')
}

functionExists()
functionReturnsANumber()
functionReturnsAverage()
