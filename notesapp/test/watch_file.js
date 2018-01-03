const fs = require('fs')

console.log(333)
const watcher = fs.watchFile('./test.txt', (e) => {
  console.log(e)
  // if (e === 'change') {
  const content = fs.readFileSync('./test.txt');
  console.log(content)
  // }
})