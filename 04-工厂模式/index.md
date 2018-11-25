# 工厂模式

## 介绍

> - 将 new 单独操作封装，
> - 遇到 new 时候，就要考虑是否应该使用工程模式了

## 示例

> - 你去购买“汉堡”，直接点餐，取餐 ，不会自己动手亲自做
> - 商店要“封装”做汉堡的工作，做好直接给买者

## UML 类图

## 代码演示

## 场景

### JQuery - \$('div')

> - $('div')和 new$('div')有何区别？
> - 第一：书写麻烦，JQuery 的链式操作将成为噩梦
> - 第二：一旦 JQuery 名字变化，将是灾难性的

### JQuery 插两句题外话

> - 聊一聊阅读经典 lib 源码的意义
> - 聊一聊创新和拿来主义

### React.createElement

```javascript
class Vnode(tag,attrs,children){
    //...省略内部代码...
}
React.createElement = new Vnode(tag,attrs,children) {
    return new Vnode(tag,attrs,children)
}
```

### Vue 异步组件

### 设计原则验证

> - 构造函数和创建者分离
> - 符合开放封闭原则
