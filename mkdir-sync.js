const fs = require('fs')
const path = require('path')

/**
 * 1.将来调用时 需要接受类似于a/b/c这样的路径 他们直接采用 / 去链接
 * 2.利用/ 分隔符将路径进行拆分,将每一项放入一个数组中进行管理 ['a','b','c']
 * 3.对上述的数组进行遍历,我们需要拿到每一项,然后与前一项进行拼接 /
 * 4.判断一下当前对拼接后的路径是否具有可操作的权限,如果有则证明存在,否则的话就需要执行创建
 */


function makeDirSync(dirPath) {
  let items = dirPath.split('/')
  for (let i = 1; i <= items.length; i++) {
    let dir = items.slice(0, i).join(path.sep)
    console.log(dir);
    try {
      fs.accessSync(dir)
    } catch (e) {
      fs.mkdirSync(dir)
    }
  }
}

makeDirSync('a/b/c')
