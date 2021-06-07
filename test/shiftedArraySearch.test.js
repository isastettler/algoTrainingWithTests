const { shiftedArrSearch, binarySearch, binaryShiftedArrSearch } = require("../shiftedArraySearch");

const { assert, expect } = require("chai");

describe("shiftedArraySearch", function () {
	it("should return a numer", function () {
		const returnVal = shiftedArrSearch([9, 12, 17, 2, 4, 5, ], 2);
		assert.strictEqual(typeof returnVal, typeof 2);
	});
	it("should return the index of the searched number in the array", function () {
		assert.strictEqual(shiftedArrSearch([9, 12, 17, 2, 4, 5], 2), 3);
	});
	it("should return -1 if the search number does not exist in the array", function () {
		assert.strictEqual(shiftedArrSearch([9, 12, 17, 2, 4, 5], 8), -1);
	});
});

describe("binarySearch", function () {
	it("should return a number", function () {
		const returnVal = binarySearch([2, 4, 5, 9, 12, 17], 2);
		expect(typeof returnVal).to.equal("number");
	});
	it("should return the index of the searched number given a sorted array", function () {
		assert.strictEqual(shiftedArrSearch([2, 4, 5, 9, 12, 17], 5), 2);
	});
	it("should return -1 if the search number does not exist in the array", function () {
		assert.strictEqual(binarySearch([2, 4, 5, 9, 12, 17], 8), -1);
	});
});

describe("approach using binary search", function () {
	it("should return a numer", function () {
		const returnVal = binaryShiftedArrSearch([9, 12, 17, 2, 4, 5], 2);
		assert.strictEqual(typeof returnVal, typeof 2);
	});
	it("should return the index of the searched number in the array", function () {
		assert.strictEqual(binaryShiftedArrSearch([9, 12, 17, 2, 4, 5], 2), 3);
	});
	it("should return -1 if the search number does not exist in the array", function () {
		assert.strictEqual(binaryShiftedArrSearch([9, 12, 17, 2, 4, 5], 8), -1);
	});
	it("should return correct value if array is sorted", function () {
		assert.strictEqual(shiftedArrSearch([2, 4, 5, 9, 12, 17], 5), 2);
	});
})
