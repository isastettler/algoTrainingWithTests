/* A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset
and you don’t have a pre-shifted copy of it.
For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that
finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1.
Assume that the offset can be any value between 0 and arr.length - 1.

Explain your solution and analyze its time and space complexities. */
// EXAMPLE:
/* input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr */

const { expect } = require("chai");

//Force brut approach:
function shiftedArrSearch(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) return i;
	}
	return -1;
}

//regular binayr search implementation
//---- First approach ------
// function binarySearch(arr, num, left = 0, right = arr.length - 1) {
// 	if (left > right) return -1;

// 	let middle = Math.floor((left + right) / 2);
// 	if (arr[middle] === num) return middle;
// 	if (arr[middle] < num) {
// 		left = middle + 1;
// 		return binarySearch(arr, num, left, right);
// 	} else {
// 		right = middle - 1;
// 		return binarySearch(arr, num, left, right);
// 	}
// }
function binarySearch(arr, num, left = 0, right = arr.length - 1) {
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		if (arr[middle] === num) return middle;
		if (arr[middle] < num) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	return -1;
}
//use binary search for optimized time complexity
//----First solution -------
// function binaryShiftedArrSearch(arr, num) {
// 	let pivot = findPivot(arr);
// 	if (pivot > 0) {
// 		let left = binarySearch(arr, num, 0, pivot - 1);
// 		let right = binarySearch(arr, num, pivot, arr.length - 1);
// 		if (left > right) return left;
// 		return right;
// 	} else {
// 		binarySearch(arr, num, 0, arr.length - 1);
// 	}
// }
function binaryShiftedArrSearch(arr, num) {
	let pivot = findPivot(arr);
	if (num > arr[0] && num < arr[pivot - 1]) {
		return binarySearch(arr, num, 0, pivot - 1);
	} else {
		return binarySearch(arr, num, pivot, arr.length - 1);
	}
}
//--- First solution------
// function findPivot(arr, start = 0, end = arr.length - 1) {
// 	//I know that I have found the pipvot index
// 	let middle = Math.floor((start + end) / 2);
// 	//if the number to the left is greater than the one I am looking at
// 	if (arr[middle - 1] > arr[middle]) return middle;
// 	if (middle <= 0 || middle >= arr.length - 1) return 0;
// 	let leftValue = findPivot(arr, start, middle - 1);
// 	let rightValue = findPivot(arr, middle + 1, end);
// 	if (leftValue > rightValue) return leftValue;
// 	return rightValue;
// }

//try to use while loops instead of recursion for binaryShiftedArr approach
function findPivot(arr, start = 0, end = arr.length - 1) {
	let middle = Math.floor((start + end) / 2);
	while (arr[middle] > arr[middle - 1] && middle > 0) {
		if (arr[middle] > arr[end]) {
			middle = Math.floor((middle + end) / 2);
		} else {
			middle = Math.floor((start + middle) / 2);
		}
	}
	return middle;
}

module.exports = { shiftedArrSearch, binarySearch, binaryShiftedArrSearch };
