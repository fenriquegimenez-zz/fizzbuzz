const fizzbuzz = require("./fizzbuzz.js")

describe("fizzbuzz", () => {
	test("test", () => {
		expect(true).toBe(true)
	})
	test("should print an error if the input is not a number", () => {
		const expected = "The input must be a number" 
		const result = fizzbuzz("cualquier cosa")
		expect(result).toBe(expected)
	})
	test("Should print 0 if the input is 0", () => {
		const expected = 0
		const result = fizzbuzz(0)
		expect(result).toBe(expected)
	})
	test("Should print fizzbuzz if the input is multiple of 3 and 5", () => {
		const expected = "fizzbuzz"
		const result = fizzbuzz(15)
		expect(result).toBe(expected)
	})
	test("Should print fizz if the input is multiple of 3", () => {
		const expected = "fizz"
		const result = fizzbuzz(3)
		expect(result).toBe(expected)
	})
	test("Should print buzz if the input is multiple of 5", () => {
		const expected = "buzz"
		const result = fizzbuzz(5)
		expect(result).toBe(expected)
	})
})
