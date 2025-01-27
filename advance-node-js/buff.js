// what is buffers? buffer is just an object that works on low level memory. its not work in v8 engine because v8 eng specifally
// made for optimized for javascript.

// buufers mainly used for io operations handling image and audio. because js browser based so it will mainly work for strings


const buff = Buffer.alloc(10)
buff.write('hello') // it allocates a memory for that hello

console.log(buff); // allocating a memory



