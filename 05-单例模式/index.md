# 单例模式

## 介绍

> - 系统中被唯一使用
> - 一个类只有一个实例

### 说明

> - 单例模式需要用到 java 的特性（private）
> - ES6 中没有(TypeScript 除外)
> - 只能用 JAVA 代码来演示 uml 图的内容

## 演示

### 实例

> - 登录框
> - 购物车

## 场景

> - JQuery 只有一个\$

```javascript
// jQuery 只有一个\$ -
if (window.jQuery !== null) {
  return window.jQuery;
} else {
  //　初始化
}
```

> - 模拟登录框

> - 购物车(和登陆框类似)
> - VUE 和 redux 中的 store

### 设计模式验证

> - 符合单一职责原则，只实例化唯一的对象
> - 没法具体开放封闭原则，但是不违反开放封闭原则

## 总结

> - 介绍和实例
> - uml 类图和演示
> - 经典使用场景
