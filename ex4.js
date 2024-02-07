function count(from, to) {
    const intervalId = setInterval(function () {
        console.log(from)
        if(from === to) {
            clearInterval(intervalId)
        }
        from++
    }, 1000)
}
count(5,15)