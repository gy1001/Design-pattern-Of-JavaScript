#　设计原则

## 何为设计

### 描述

> - 按照哪一种思路或者标转来实现功能
> - 功能相同，可以有不同设计方案来实现
> - 伴随着需求的增加，设计的作用才能体现出来

### 结合《UNIX/LINUX 设计哲学》

> - 准则１:小即是美
> - 准则２:让每个程序只做好一件事
> - 准则３:快速建立原型
> - 准则３:快速建立原型
> - 准则４:舍弃高效率而取可移植性
> - 准则５:采用纯文本来存储数据
> - 准则６:充分利用软件的杠杆效应（软件复用）
> - 准则７:使用 shell 脚本来提高杠杆效应和可移植性
> - 准则８:避免强制性的用户界面
> - 准则９:让每个程序都称为过滤器

#### 小准则

> - 允许用户定制环境
> - 尽量使操作系统内核小而轻量化
> - 使用小写字母并尽量简短
> - 沉默是金
> - 各部分之和大于整体
> - 寻求９０％的解决方案

##### 演示：沉默是金　＋　让每个程序都成为过滤器

> - ls 在 linux 是展示当前目录所有文件，ls | grep \*.json | grep 'package.json'　当过滤结果有时候展示结果，没有时候直接不提示不展示不报错，这即是沉默是金

## 五大设计原则 S O L I D

### S－单一职责原则

> - 一个程序只做好一件事
> - 如果功能过于复杂就拆分开，每个部分保持独立

### O－开放封闭原则

> - 对扩展开放，对修改封闭
> - 增加需求时，扩展新代码，而非修改已有代码
> - 这是软件设计的终极目标

### L－李氏置换原则

> - 子类能覆盖父类
> - 父类能出现的地方子类也就能出现
> - JS 中使用较少（弱类型 & 继承使用较少）

### I－接口独立原则

> - 保持接口的单一独立，避免出现“胖接口”
> - JS 中没有接口(TypeScript 除外)，使用较少
> - 类似于单一职责原则，但是这里更关注接口

### D－依赖导致原则

> - 面向接口编程，依赖于抽象而不依赖于具体
> - 使用方只关注接口而不关注具体类的实现
> - JS 中使用较少(没有接口＆弱类型)

#### 设计原则总结

> - S O 体现较多，详细介绍
> - L I D 体现较少，但是要了解其用意

```javascript
// 用promise来说明S O
// 加载图片
functipn loadImg(src){
  var promise = new Promise(function(resolve,reject){
    var img = document.createElement('img');
    img.onload = function(){
      resolve(img)
    }
    img.onerror = function(){
      reject(img)
    }
    img.src = src
  })
  return promise
}
var src = 'https://www.imooc.com/static/img/index/logo.png';
var result = loadImg(src)
result.then(function(img){
  console.log('img.width',img.width)
  return img
}).then(function(img){
  console.log('img.height',img.height)
}).catch(function(ex){
  // 统一捕捉异常
  console.log(ex)
});
单一职责原则：每一个then中的逻辑只做好一件事
开放封闭原则：如果有新需求，就扩展then
对扩展开放，对修改封闭

```

## 从设计到模式

### 设计

### 模式

### 分开

### 从设计到模式

## 介绍 23 种设计模式

### 创建型

> - 工厂模式（工厂方式模式，抽象工厂模式，建造者模式）
> - 单例模式
> - 原型模式

### 结构型

> - 适配器模式
> - 装饰者模式
> - 代理模式
> - 外观模式
> - 桥接模式
> - 组合模式
> - 享元模式

### 组合型

### 行为型

> - 策略模式
> - 模板方法模式
> - 观察者模式
> - 迭代器模式
> - 职责连模式
> - 命令模式
> - 备忘录模式
> - 状态模式
> - 访问者模式
> - 中介者模式
> - 解释器模式

### 分优先级

> - 前端常用设计模式，详讲
> - 前端非常用设计模式，略讲
> - 前端少用设计模式，介绍

## 如何讲解设计模式

> - 介绍和举例（生活中易理解的示例）
> - 画 UML 类图写 demo 代码
> - 结合经典应用场景，讲解该设计模式如何被使用
> - 该如何学习设计模式
> - 明白每个设计的道理和用意
> - 通过经典应用体会它的真正使用场景
> - 自己编码时候多思考，尽量模仿

# 总结

> - 创建型，结构型，行为型
> - 如果学习设计模式
> - 如

## 面试题示例

> - 真实面试题
> - 第一题是某打车公司一面，第二题的某短视频公司三面
> - 考察面向对象和设计能力
> - 面试有可能遇到，也有可能遇不到(不同时间,不同部门)

###　第一题

> - 打车时，可以打专车或者快车，任何车都有车牌和名称。
> - 不同车价格不同，快车每公里１元，专车每公里２元。
> - 行程开始时候，显示车辆信息
> - 行程结束时候，显示打车金额，（假定行程就５公里）

### 要求

> - 画出 UML 类图
> - 用 ES6 语法写出该示例

```javascript
class Car{
  constructor(number,name){
    this.number =number;
    this.name = name;
  }
}
class Kuaiche extends Car{
  constructor(number, name){
    super(number,name)
    this.price = 1
  }
}
class Zhuanche extend Car{
  constructor(number,name){
    super(number,name)
    this.price = 2
  }
}
class Trip{
  constructor(car){
    this.car = car;
  }
  start(){
    console.log(`行程开始，名称${this.car.name},车牌号${this.car.number}`)
  }
  end(){
    console.log(`行程结束,价格${this.car.price} * 5`)
  }
}
let car = new Kuaiche (100,'桑塔纳');
let trip = new Trip(car);
trip.start();
trip.end();
```

### 第二题

> - 某个停车场，分３层，每层１００车位
> - 每个车位都能监控到车辆的驶入和离开
> - 车辆进入前，显示每层的空余车位数量
> - 车辆进入时，摄像头可识别车牌号和时间
> - 车辆出来时，出口显示器显示车辆号和停车时长

> - 画出 UML 类图

> - 代码

```javascript
```

## 总结

> - 何为设计《UNIX/LINUX 设计哲学》
> - SOLID 五大设计原则
> - 从设计到模式
> - 介绍 23 种设计模式
