function MyEvent() {
  //准备一个数据结构用于缓存订阅者信息
  this._events = Object.create(null)

}

MyEvent.prototype.on = function (type, callback) {
  //判断当前次的事件是否已经存在,然后再决定如何做缓存
  if (this._events[type]) {
    this._events[type].push(callback)
  } else {
    this._events[type] = [callback]
  }
}

MyEvent.prototype.emit = function (type, ...args) {
  if (this._events[type] && this._events[type].length) {
    this._events[type].forEach(callback => {
      callback.call(this, ...args)
    })
  }
}

MyEvent.prototype.off = function (type, callback) {
  if (this._events && this._events[type]) {
    this._events[type] = this._events[type].filter(item => {
      return item !== callback && item.link !== callback
    })
  }
}

MyEvent.prototype.once = function (type, callback) {
  let foo = function (...args) {
    callback.call(this, ...args)
    this.off(type, foo)
  }
  foo.link = callback
  this.on(type, foo)
}

let ev = new MyEvent()

let fn = (...args) => { console.log('事件1触发了', args) }
ev.once('事件1', fn)
ev.off('事件1', fn)
ev.emit('事件1', 1, 2, 3)
ev.emit('事件1', 1, 2, 3)
