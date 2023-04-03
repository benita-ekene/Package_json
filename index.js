const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

setTimeout(() => {
  console.log('..................')
  console.log('Timer 1 finished')
  console.log('..................')
}, 0)

setImmediate(() => {
  console.log('immediate 1 finished')
  console.log('..................')
})

fs.readFile("./intermediate_phase/msg.pdf", () => {
  console.log('I/O 1 finished')

  process.nextTick(() => console.log('process.nextTick()'))

  crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', () =>{
    console.log(Date.now() - start, 'password encrypted')
  } )
})
console.log('server running on hope')
