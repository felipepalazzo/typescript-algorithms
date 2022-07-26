import { getNthFib } from './fibonacci'

test('getNthFib', () => {
	// fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
	expect(getNthFib(0)).toEqual(0)
	expect(getNthFib(1)).toEqual(1)
	expect(getNthFib(2)).toEqual(1)
	expect(getNthFib(3)).toEqual(2)
	expect(getNthFib(4)).toEqual(3)
	expect(getNthFib(5)).toEqual(5)
	expect(getNthFib(6)).toEqual(8)
	expect(getNthFib(7)).toEqual(13)
	expect(getNthFib(8)).toEqual(21)
	expect(getNthFib(9)).toEqual(34)
	expect(getNthFib(10)).toEqual(55)
})
