## 介绍

> - 旧接口格式和使用者不兼容
> - 中间加一个适配转换接口
> - 旧接

## UML 类图

> - 网搜索传统 uml 类图

## 代码演示

```javascript
```

## 场景

> - 封装旧接口

```javascript
// 自己封装的ajax,使用方式如下
ajax({
  url: "/getData",
  type: "post",
  dataType: "json",
  data: {
    id: "123"
  }
}).done(function() {});

// 但因为历史原因，代码中全都是
// $.ajax({....})

// 做一层适配器
var $ = {
  ajax: function(options) {
    return ajax(options);
  }
};
```

> - VUE computed

```javascript
新建test.html
sudo npm install http-server -g
http-server -p 8881
打开 localhost:8881/test.html

见代码;
```

##　设计原则验证

> - 将旧接口和使用者进行分离
> - 将旧接口和使用者进行分离

## 总结

> - 介绍和示例
> - uml 类图和演示
> - 经典使用场景
