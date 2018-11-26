class Circle {
  draw() {
    console.log("画一个圆形");
  }
}

class Decorate {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.setRedBorder(circle);
  }
  setRedBorder() {
    console.log("设置红色边框");
  }
}

// 测试代码
let circle = new Circle();
circle.draw();

let decorate = new Decorate(circle);
decorate.draw();
