/*
    Nth Fibonacci

    Write a function that takes in an integer `n`  and returns the nth Fibonacci number.
*/

export function getNthFib(n: number): number {
	if (n === 0) {
		return 0
	}
	if (n === 2 || n === 1) {
		return 1
	}

	return getNthFib(n - 2) + getNthFib(n - 1)
}
