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

#### 三大关键字，但是 ES6 暂时不支持，可以用 typeScript 来演示

> - public 完全开放
> - protected 对子类开放
> - private 对自己开放

#### 作用，意义

> - 减少耦合，不该外露的不外露
> - 利于数据、接口的权限管理
> - ES6 目前不支持，一般认为 \_ 开头的属性是 private

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

> - 同一个接口，不同表现(类似于 first.png)
> - JS 应用极少
> - 需要结合 java 等语言的接口、重写、重载等功能

#### 功能，意义

> - 保持子类的开放性和灵活性
> - 面向接口编程
> - (JS 引用极少，了解即可)

## js 的应用举例

> - JQuery 就是一个 Class
> - \$('p')是 JQuery 的一个实例
> -

## 面向对象的意义

### 为什么要使用面向对象

> - 程序执行：顺序、判断、循环-----结构化
> - 面向对象 ------数据结构化
> - 对于计算机,结构化的才是最简单的
> - 编程应该 简单 & 抽象
