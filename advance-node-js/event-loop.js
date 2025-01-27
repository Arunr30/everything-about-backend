// what is event loop? 
// event loop is a js mechanism that enables non blocking io operations and makes programing responsoive
// microtask, macrotask, check, IO callbacks, cpu intensive operations --> this is the order this is how program runs.

setTimeout(() => {
  console.log('set timeout')
}, 0)

setImmediate(() => {
  console.log('heyy')
})
