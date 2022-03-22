const EventEmiter = require('events')

const ev = new EventEmiter()
// ev.on('事件1', () => {
//   console.log('事件1触发了')
// })
// ev.emit('事件1')

// ev.on('事件1', () => {
//   console.log('事件1触发了')
// })

// ev.emit('事件1')

// ev.off('事件1')

// ev.emit('事件1')


ev.on('事件1', () => {
  console.log(this)
})

ev.emit('事件1')