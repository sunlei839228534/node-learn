/**
 * Buffer实例方法
 * fill: 用数据填充buffer
 * write: 把数据写入buffer
 * toString: 从buffer中提取数据
 * slice: 截取buffer
 * indexOf: 在buffer中查找数据
 * copy: 拷贝buffer中的数据
 */

let buf = Buffer.alloc(6)

buf.fill('123')
console.log(buf)
console.log(buf.toString());