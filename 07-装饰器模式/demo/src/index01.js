// > - 装饰方法
// >   例子 1：

class Person {
  constructor() {
    this.first = "A";
    thie.last = "B";
  }
  // 装饰方法
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

var p = new Person();
console.log(p.name());
/*
p.name = function() {
  console.log("这里不会执行，因为这个函数只能读");
}; // 这里会报错，因name 是只读属性
*/
function readonly(target, name, descriptor) {
  // descriptor 属性描述对象(Object.defineProperty中会用到)原来的值如下
  // {
  //      value:specifiedFunction,
  //      enumerable: false,
  //      configurable: true,
  //      writable: true
  // }
  descriptor.writable = false;
  return descriptor;
}

// 装饰方法-例子2
class Math {
  // 装饰方法
  @log
  add(a, b) {
    return a + b;
  }
}
const math = new Math();
const result = math.add(2, 4); // 执行add命令，会自动打印日志，因为有@log装饰器
console.log("result", result);

function log(target, name, descriptor) {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}
