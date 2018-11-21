class JQuery {
  constructor(selector) {
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || "";
  }
  append(node) {
    // ...
  }
  addClass(name) {
    // ...
  }

  html(name) {}
  // 此处生路N个API
}
window.$ = function(selector) {
  // 这里其实是一个工厂模式
  return new JQuery(selector);
};

// 测试代码
var $p = $("p");
console.log($p);
console.log($p.addClass);
console.log($p.html);
