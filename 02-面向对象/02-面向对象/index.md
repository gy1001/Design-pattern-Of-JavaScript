#　什么是面向对象

## 概念

> - 类, 类即模板

```javascript
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    alert(`${this.name} eat something`);
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}.`);
  }
}
```

> - 对象(实例)

```javascript
// 创建实例
let zhang = new People("zhang", 20);
zhang.eat();
zhang.speak();

// 创建实例
let wang = new People("wang", 21);
wang.eat();
wang.speak();
```

## 三要素：继承、封装、多态

## js 的应用举例

## 面向对象的意义
