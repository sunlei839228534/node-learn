const path = require('path')

console.log(__filename)

//1获取一个路径中的基础名称 返回一个路径中,最后一个部分  /user/peko.js 返回peko.js
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'));

//2 获取路径目录名 返回一个路径中 最后一部分的上一层目录所在的路径
// console.log(path.dirname(__filename))

//3 获取路径的扩展名  path.js 返回.js
// console.log(path.extname(__filename))

//4 解析路径 接受一个路径 返回一个对象 root dir base ext name
// const obj = path.parse('/a/b/c/index.html')
// console.log(obj)

//5 序列化路径
// const obj = path.parse('./a/b/c/')
// console.log(path.format(obj))

//6 判断当前路径是否为绝对路径
// console.log(path.isAbsolute('/1/2'));

//7 拼接路径
// console.log(path.join('a/b', 'c', 'index.html'))

//8 规范化路径
// console.log(path.normalize('a12/////b/c/d'))

//9 绝对路径
// console.log(path.resolve())
console.log(path.resolve('a', 'b'))