
var ambiguousCoordinates = function(str) {
    str = str.slice(1, -1)
    let returnArr = [];
    let digitsArr = str.split(''); //-> digitsArr = ["2", "3", "4"]
    let pointerTwo = 1;
    while(pointerTwo < digitsArr.length){
        let firstCoordinate = digitsArr.slice(0, pointerTwo);
        let secondCoordinate = digitsArr.slice(pointerTwo);
        if(firstCoordinate.length > 1){
            returnArr = returnArr.concat(makeDecimal(firstCoordinate.join(''), secondCoordinate.join('')))
        }
        if(secondCoordinate.length > 1){ // "2", "3"
            returnArr = returnArr.concat(makeDecimal(firstCoordinate.join(''), secondCoordinate.join(''))) 
        }
        returnArr.push(`(${firstCoordinate.join('')}, ${secondCoordinate.join('')})`)
        pointerTwo++;
    }
    console.log('returnArr', returnArr)
    return returnArr;
};
    
function makeDecimal(strOne, strTwo){
    let i = 1;
    let possibleCoordinates = [];
    if(strOne.length > 1){
        while(i <= strOne.length-1){
            let j = 1;
            let valueOne = strOne.slice(0, i)
            let decimalOne = strOne.slice(i)
            if(valueOne[0] !== '0' && decimalOne[-1] !== '0'){
                if(strTwo[0]!== '0'){
                    possibleCoordinates.push(`(${valueOne}.${decimalOne}, ${strTwo})`)
                }
                while(j <= strTwo.length -1){
                    let valueTwo = strTwo.slice(0, j)
                    let decimalTwo = strTwo.slice(j)
                    if(valueTwo[0] !== '0' && decimalTwo[0] !== '0') {
                        possibleCoordinates.push(`(${strOne.slice(0, i)}.${strOne.slice(i)}, ${valueTwo}.${decimalTwo})`)
                    }
                    j++
                }
            }
            i++
        }
    }
    else if(strTwo.length > 1 && strOne[0] !== '0'){
        while(i <= strTwo.length-1){
            possibleCoordinates.push(`(${strOne}, ${strTwo.slice(0, i)}.${strTwo.slice(i)})`)
            i++
        }
    }
    return possibleCoordinates;
}



module.exports = ambiguousCoordinates;