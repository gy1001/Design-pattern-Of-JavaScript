# 介绍

> - 为对象添加新功能
> - 不改变其原有结构和功能

## 传统 UML 类图

> - 网搜

## 代码演示

## 传统

## 场景

### ES7 装饰器

> - 配置环境
> - 装饰类

 <!-- 装饰器的原理
    @decorator
    class A{}
    等同于
    class A{}
    A = decorator(A) || A
   -->

### core-decorators

> - 第三方开源 lib

<!-- 首先安装npm i core-decorators --save
// 开始编码

import {readonly} from 'core-decorators'

class Person{
   @readonly
   name(){
      return 'zhang'
   }
}

let p = new Person()
alert(p.name())

p.name = function(){ } // 此处会报错
 -->

> - 提供常用的装饰器
> - 查阅文档 https://www.npmjs.com/package/core-decorators

> https://github.com/jayphelps/core-decorators

## 设计原则验证

> - 将现有对象和装饰器进行分离，两者独立存在
> - 符合开放封闭原则

#总结

## 介绍和示例

## UML 类图和演示

## 经典使用场景
