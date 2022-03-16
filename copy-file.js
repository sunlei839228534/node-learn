const fs = require('fs')

/**
 * 01 打开a文件,利用read 将数据保存到 buffer中 
 * 02 打开b文件,利用write 将buffer中数据写入到b文件中
 */

//声明10字节的内存空间
let buf = Buffer.alloc(10)

//打开指定的文件
// fs.open('a.txt', 'r', (err, rfd) => {
//   //打开b文件 用于执行数据写入操作
//   fs.open('b.txt', 'w', (err, wfd) => {
//     // 从打开的文件中读取数据
//     fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
//       //讲buffer中的数据写入到b.txt中
//       fs.write(wfd, buf, 0, 10, 0, (err, written, buffer) => {
//         console.log('写入成功!')
//       })
//     })
//   })
// })

//02 数据的完全拷贝
// fs.open('a.txt', 'r', (err, rfd) => {
//   fs.open('b.txt', 'a+', (err, wfd) => {
//     fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
//       fs.write(wfd, buf, 0, 10, 0, (err, written, buffer) => {
//         fs.read(rfd, buf, 0, 5, 10, (err, readBytes, buffer) => {
//           fs.write(wfd, buf, 0, 5, 10, (err, written, buffer) => {
//             console.log('写入成功!');
//           })
//         })
//       })
//     })
//   })
// })

const BUFFER_SIZE = buf.length
let readOffset = 0

fs.open('a.txt', 'r', (err, rfd) => {
  fs.open('b.txt', 'w', (err, wfd) => {
    function next() {
      fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
        if (!readBytes) {
          //如果条件成立 说明内容已经读取完毕
          fs.close(rfd, () => { })
          fs.close(wfd, () => { })
          return
        }
        readOffset += readBytes
        fs.write(wfd, buf, 0, readBytes, (err, written) => {
          next()
        })
      })
    }
    next()
  })
})
