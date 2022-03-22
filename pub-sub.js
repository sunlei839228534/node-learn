class PubSub {
  constructor() {
    this._events = {}
  }

  //订阅事件
  subscribe(event, callback) {
    //没有订阅过此事件的话,初始化操作
    if (!this._events[event]) {
      this._events[event] = [callback]
    } else {
      this._events[event].push(callback)
    }
  }

  //发布事件
  publish(event, ...args) {
    const items = this._events[event]
    if (items && items.length) {
      items.forEach(function (callback) {
        callback.call(this, ...args)
      })
    }
  }
}

let ps = new PubSub()

ps.subscribe('事件1', () => {
  console.log('事件1执行了')
})

ps.publish('事件1')