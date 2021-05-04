const telKeyMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r"],
    8: ["s", "t", "u"],
    9: ["v", "w", "x"],   
}
//First solution
function letterCombinations(digits){ //"23"
    let digitsArr = digits.split('');
    if(digits.length < 1) return [];
    let combinations = telKeyMap[digitsArr[0]]; //[a, b, c]
    for(let i = 1; i < digitsArr.length; i++){
        let currentCharacterCombinations = telKeyMap[digitsArr[i]]; //[d, e, f]
        let newCombinations = [];
        for(let j = 0; j < combinations.length; j++){
            let currentChar = combinations[j];
            let idx = 0;
            while(idx < currentCharacterCombinations.length){
                newCombinations.push(`${currentChar}${currentCharacterCombinations[idx]}`)
                idx++;
            }
        }
        //create new combinations -> iterate through combinations array and currenChar... push all possible cominations into the newCobinats array
        combinations = newCombinations;
    }
    return combinations
}

//Refactored solution
// function letterCombinations(digits){}

module.exports = letterCombinations;