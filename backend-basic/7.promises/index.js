function promise(num1, num2) {
    return new Promise((resolve, reject) => {
        if(num2 === 0) {
            reject("cannot divide")
        } else {
            resolve(num1 / num2)
        }
    })
}

promise(10, 0).then(value => console.log(value)).catch(error => console.log(error))