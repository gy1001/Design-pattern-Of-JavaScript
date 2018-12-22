#介绍

## 发布&订阅

## 一对多

> - 示例
> - 点咖啡，点好以后坐等被叫

## 场景

### 网页事件绑定

```javascript
<button id="btn1">button</button>
<script>
  $("#btn1").click(function(){
    console.log(1)
  })
   $("#btn1").click(function(){
    console.log(2)
  })
   $("#btn1").click(function(){
    console.log(3)
  })
   $("#btn1").click(function(){
    console.log(4)
  })
</script>
```

### Promise

```javascript
function Promise(src) {
  var Promise = new Promise(function(resolve, reject) {
    var img = document.createElement("img");
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject("图片加载失败");
    };
    img.src = src;
  });
  return Promise;
}
```

### JQuerry callbacks

```javascript
var callbacks = $.Callbacks(); //注意大小写
callbacks.add(function(info) {
  console.log("fn1", info);
});
callbacks.add(function(info) {
  console.log("fn2", info);
});
callbacks.add(function(info) {
  console.log("fn3", info);
});
callbacks.fire("gogogo");
callbacks.fire("fire");
```

### nodejs 自定义事件

```javascript
const EventEmitter = require("events").EventEmitter;
const emitter1 = new EventEmitter();
emitter1.on("some", function() {
  // 监听some事件
  console.log("some event is occured 1");
});
emitter1.on("some", function() {
  // 监听some事件
  console.log("some event is occured 1");
});
// 触发some事件
emitter1.emit("some");
```

```javascript
const EventEmitter = require("events").EventEmitter;
// 任何构造函数都可以继承EventEmitter的方法on emit
class Dog extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}
var simon = new Dog("simon");
simon.on("bark", function() {
  console.log(this.name, "barked");
});
setInterval(() => {
  simon.emit("bark)
},500)
```

### 其他场景

> - nodejs 中，处理 http 请求，多线程通讯
> - Vue 和 React 组件生命周期触发
> - Vue watch

###设计原则验证

> - 主题和观察者分离，不是主动触发而是被动监听，两者解耦
> - 符合开放封闭原则

##总结

> - 介绍和示例

> - uml 类图和演示

> - 经典使用场景
