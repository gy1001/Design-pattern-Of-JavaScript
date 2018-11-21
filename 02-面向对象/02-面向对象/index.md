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

> 1.People 是父类，公共的，不仅仅服务于 Student
>
> 2.继承可将公共方法抽离，提高复用，减少冗余

### 继承，子类继承父类

```javascript
// 父类
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

// 子类继承父类
class Student extends People {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
  study() {
    alert(`${this.name} study`);
  }
}

//实例
let xiaoming = new Student("xiaoming", 10, "A1");
xiaoming.study();
console.log(xiaoming.number);
xiaoming.eat();

let xiaohong = new Student("xiaohong", 11, "A2");
xiaohong.study();
xiaohong.speak();
```

### 封装，数据的权限和保密

> 三大关键字，但是 ES6 暂时不支持，可以用 typeScript 来演示
>
> - public 完全开放
> - protected 对子类开放
> - private 对自己开放

```javascript
// 父类
class People{
  name　// 这里不写属性，默认public
  age
  protected weight // 定义protected属性
  constructor(name,age){
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat(){
    alert(`${this.name} ear something`)
  }
  speak(){
    alert(`My name is ${this.name},age ${this.age}`)
  }
}

// 子类
class Student extends People{
  number
  private girlfriend // 定义private属性
  constructor(name,age,number){
    super(name,age)
    this.number =number
    this.girlfriend = 'xiaoli'
  }
  study(){
    alert(`${this.name} study`)
  }
  getWeight(){
    alert(`Weight is ${this.weight}`)
  }
}
// 实例
let xiaoming= new Student("xiaoming",10,'A1')
xiaoming.getWeight();
// console.log(xiaoming.girlfirend) 直接编辑就会报错，因为属性是私有的
// 以上代码可以在
// http://www.typescriptlang.org/play/
// 运行
```

### 多态, 同一接口不同实现

## js 的应用举例

## 面向对象的意义
