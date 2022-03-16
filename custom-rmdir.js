const fs = require('fs')
const path = require('path')

/**
 * 需求:自定义一个函数,接收一个路径,然后执行伤处
 * 01 判断传入的是文件还是目录
 * 02 如果是文件 直接删除,如果是目录,需要读取目录中的内容,然后执行删除
 * 03 将删除行为定义为一个函数,然后通过递归的方式复用
 * 04 将当前名称拼接成在删除时可以使用的路径
 */

function myRmdir(dirPath, cb) {
  fs.stat(dirPath, (err, statObj) => {
    if (statObj.isDirectory()) {
      //目录 => 继续读取
      fs.readdir(dirPath, (err, files) => {
        let dirs = files.map(item => {
          let dirs = files.map(item => {
            return path.join(dirPath, item)
          })
          let index = 0
          function next() {
            if (index === dirs.length) return fs.rmdir(dirPath, cb)

            let current = dirs[index++]

            myRmdir(current, next)
          }
          next()
        })
      })
    } else {
      //文件 => 直接删除
      fs.unlink(dirPath, cb)
    }
  })

}
myRmdir('a/b/c', () => {
  console.log('删除成功')
})