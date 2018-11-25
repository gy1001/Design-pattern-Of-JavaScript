class Adaptee {
  specificRequest() {
    return "德国标准插头";
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }
  reuqest() {
    let info = this.adaptee.specificRequest();
    return `${info}- 转换器　－ 中国标准插头`;
  }
}
// 测试
let targe = new Target();
let result = targe.reuqest();
console.log(result);
