function takeNum(numA) {
    return function(numB) {
        return numA + numB
    }
}
const sumFunc = takeNum(1);
console.log(sumFunc(2))