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

## 总结
