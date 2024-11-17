async function divide(n1, n2) {
    try {
        if(n2 === 0) throw new Error("cannot divide by 0")
        return n1/n2
    } catch(error) {
        console.error('error', error)
    }   
}

async function main() {
    console.log(await divide(10, 2))
}

main()