let arr = [0, 1, 2, 3, 4, 5]
let hon = 0
let unhon = 0
let zero = 0
function checkNum() {
    for(let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            if(arr[i]%2===0 && arr[i]!==0) {
                hon+=1
            }
            else if(arr[i]%2 !== 0) {
                unhon+=1
            }
            else if(arr[i]===0) {
                zero+=1
            }
        }
    }
    console.log('Четных чисел'+ ' - ' + hon + ' и ' + 'нечетных чисел' + ' - ' + unhon)
    if(zero !== 0) {
        console.log('Нулевые элементы' + ' - ' + zero)
    }
}
checkNum()