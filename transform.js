const { Transform } = require('stream')

class MyTransform extends Transform {
  constructor(options) {
    super()
  }
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback(null)
  }
}

let a = new MyTransform()

a.write('a')
a.write('b')
a.end('c')

a.pipe(process.stdout)