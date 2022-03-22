const { Writable } = require('stream')

class MyWritable extends Writable {
  constructor() {
    super()
  }
  _write(chunk, en, done) {
    process.stdout.write(chunk.toString() + '<----')
    process.nextTick(done)
  }
}

let myWriteable = new MyWritable()

myWriteable.write('pekopeko', 'utf-8', () => {
  console.log('end')
})