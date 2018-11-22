// function loadImg(src) {
//   let promise = new Promise(function(resolve, reject) {
//     let img = document.createElement("img");
//     img.onload = function() {
//       resolve(img);
//     };
//     img.onerror = function(img) {
//       reject("图片加载失败");
//     };
//     img.src = src;
//   });
//   return promise;
// }
// const src = "https://www.imooc.com/static/img/index/logo.png";
// let result = loadImg(src);
// result
//   .then(function(img) {
//     // part 1
//     console.log("img.width", img.width);
//     return img;
//   })
//   .then(function(img) {
//     // part 2
//     console.log("img.height", img.height);
//   })
//   .then(function() {
//     //part 3
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

class Car {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

class Kuaiche extends Car {
  constructor(name, number) {
    super(name, number);
    this.price = 1;
  }
}

class Zhuanche extends Car {
  constructor(name, number) {
    super(name, number);
    this.price = 2;
  }
}

// 行程
class Trip {
  constructor(car) {
    this.car = car;
  }
  start() {
    console.log(`车名 ${this.car.name} 车牌号${this.car.number}`);
  }
  end() {
    console.log(`行程结束，价格${this.car.price * 5}`);
  }
}

let car = new Kuaiche(100, "桑塔纳");
let trip = new Trip(car);
trip.start();
trip.end();
