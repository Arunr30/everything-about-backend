function person(name, callbackFn) {
    console.log(`hello ${name}`)
    callbackFn()
}

function address() {
    console.log("india")
}

person("arun", address)