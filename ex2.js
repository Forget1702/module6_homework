function checkNum(num) {
    if(num > 1000) {
        return 'Данные неверны'
    }
    for(let i = 2; i < num; i++) {
        if(num % i !== 0) {
            return 'Число простое'
        }
        else {
            return 'Число непростое'
        }
    }
}
console.log(checkNum(13))