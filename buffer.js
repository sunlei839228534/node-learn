//二进制数据: 用户使用软件来获取信息 开发者使用语言处理展示信息 如视频 图片 音频等

/**
 * Buffer
 *  无需require的一个全局变量
 *  实现Node平台下的二进制数据操作
 *  不占据V8堆内存大小的内存空间
 *  内存的使用由Node来控制,由V8的GC回收
 *  一般配合Stream流使用,充当数据缓冲区
 */

const fs = require('fs')
//read: 所谓的读 就是将数据从 磁盘文件中写入到buffer中
let buf = Buffer.alloc(10)

/**
 * fd 定位当前被打开的文件
 * buf 用于表示当前缓冲区
 * offset表示当前从buf的哪个位置开始执行写入
 * length 表示当前次写入的长度
 * position 表示当前从文件的哪个位置开始读取操作
 */
// fs.open('data.txt', 'r', (err, rfd) => {
//   fs.read(rfd, buf, 0, 11, 0, (err, readBytes, data) => {
//     console.log(readBytes);
//     console.log(data.toString());
//   })
// })

//write  将缓冲区里的内容 写入到磁盘文件中
buf = Buffer.from('123456789010')
fs.open('b.txt', 'w', (err, wfd) => {
  fs.write(wfd, buf, 1, 10, 0, (err, written, buffer) => {
    console.log(written);
    console.log(buffer);
    console.log(buffer.toString());
  })
})