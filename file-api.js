const fs = require('fs')

// 1.access 操作权限
// fs.access('a.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('有操作权限')
//   }
// })

//2.stat
// fs.stat('a.txt', (e, statObj) => {
//   console.log(statObj.size)
//   console.log(statObj.isFile())
//   console.log(statObj.isDirectory())
// })

//3.mkdir
// fs.mkdir(`${__dirname}/create`, (err) => {
//   if (!err) {
//     console.log('创建成功')
//   } else {
//     console.log('创建失败!')
//   }
// })

//4.rmdir
// fs.rmdir(`${__dirname}/a`, { recursive: true }, (err) => {
//   if (!err) {
//     console.log('删除成功!')
//   } else {
//     console.log('删除失败!')
//   }
// })

//5.readdir
// fs.readdir(`${__dirname}/a/b`, {}, (err, files) => {
//   console.log(files);
// })

//6. unlink
// fs.unlink('a/b/c/txt.txt', (err) => {
//   if (!err) {
//     console.log('删除成功!')
//   }
// })