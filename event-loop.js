//浏览器下: 同步代码 => 微任务 => 宏任务 => 微任务 ....
// setTimeout(() => {
//   console.log('s1')
//   Promise.resolve().then(() => {
//     console.log('p1')
//     setTimeout(() => {
//       console.log('s3')
//       Promise.resolve().then(res => {
//         console.log('p3')
//       })
//     })
//   })
// })

// setTimeout(() => {
//   console.log('s2')
//   Promise.resolve().then(() => {
//     console.log('p2')
//   })
// })


// setTimeout(() => {
//   console.log('s1');
//   Promise.resolve().then(() => console.log('p2'))
//   Promise.resolve().then(() => console.log('p3'))
// })

// Promise.resolve().then(() => {
//   console.log('p1')
//   setTimeout(() => {
//     console.log('s2');
//   })
//   setTimeout(() => {
//     console.log('s3');
//   })
// })

//node环境下  process.nextTick是微任务 优先级高于Promise.then, setTimeout为宏任务中的timer,setImmediate为宏任务中的check模块,宏任务的执行流程为  timer => poll => check
//node环境下 一个宏任务执行完并不会去执行微任务队列中的任务,而是等宏任务队列清空后,在切换下一个宏任务队列之前,才去执行微任务队列
// 从上往下执行同步代码,遇到什么任务,放在什么队列里,当同步代码执行完,执行微任务,微任务执行完,会从timer开始往下继续切换,微任务的执行时机是在上一个队列执行完成后.
setTimeout(() => {
  console.log('s1');
})
Promise.resolve().then(() => {
  console.log('p1')
})
console.log('start')

process.nextTick(() => {
  console.log('tick')
})

setImmediate(() => {
  console.log('setimmediate');
})

console.log('end')