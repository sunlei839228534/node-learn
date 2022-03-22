/**
 * Nodejs中流的分类
 *  Readable 可读流,实现数据的读取
 *  Writeable 可写流,实现数据的写操作
 *  Duplex: 双工流,可读又可写
 *  Transform: 转换流,可读可写,还能实现数据转换
 */
const { Readable } = require('stream')

//模拟底层数据
let source = ['peko', 'joshua', 'kang', 'lei']

//自定义类

//可读流
class MyReadable extends Readable {
  constructor(source) {
    super()
    this.source = source
  }
  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }
}

//实例化
let myReadable = new MyReadable(source)


myReadable.on('readable', (stream) => {
  console.log(stream);
  // while ((data = myReadable.read(1)) !== null) {
  //   console.log(data.toString())
  // }
})


myReadable.on('data', (stream) => {
  console.log(stream.toString());
  // while ((data = myReadable.read(1)) !== null) {
  //   console.log(data.toString())
  // }
})

myReadable.read()
myReadable.read()
myReadable.read()
myReadable.read()
