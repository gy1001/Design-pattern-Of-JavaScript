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

// class Car {
//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//   }
// }

// class Kuaiche extends Car {
//   constructor(name, number) {
//     super(name, number);
//     this.price = 1;
//   }
// }

// class Zhuanche extends Car {
//   constructor(name, number) {
//     super(name, number);
//     this.price = 2;
//   }
// }

// // 行程
// class Trip {
//   constructor(car) {
//     this.car = car;
//   }
//   start() {
//     console.log(`车名 ${this.car.name} 车牌号${this.car.number}`);
//   }
//   end() {
//     console.log(`行程结束，价格${this.car.price * 5}`);
//   }
// }

// let car = new Kuaiche(100, "桑塔纳");
// let trip = new Trip(car);
// trip.start();
// trip.end();

class Car {
  constructor(number) {
    this.number = number;
  }
}

class Camera {
  shot(car) {
    return {
      number: car.number,
      inTime: Date.now()
    };
  }
}
// 出口显示屏
class Screen {
  show(car, inTime) {
    console.log(`车牌号${car.number},停车时间　${Date.now() - inTime}`);
  }
}

//停车场
class Park {
  constructor(floors) {
    this.floors = floors || [];
    this.carList = {}; // 存储摄像头拍摄返回的车辆信息
    this.camera = new Camera();
    this.screen = new Screen();
  }
  in(car) {
    // 通过摄像头获得信息
    const info = this.camera.shot(car);
    // 车辆进入，停到某个停车位
    const i = parseInt((Math.random() * 100) / 100);
    // 暂时停车到第一层的某个随机停车位上
    const place = this.floors[0].places[i];
    place.in();
    info.place = place;
    //　记录停车位中的车信息
    this.carList[car.number] = info;
  }
  out(car) {
    // 获取车辆信息
    const info = this.carList[car.number];
    //　将停车位清空
    const place = info.place;
    place.out();
    // 显示时间
    this.screen.show(car, info.inTime);
    // 清空当期车辆信息，不然造成内存泄露
    delete this.carList[car.number];
  }
  emptyPlaceNum() {
    return this.floors
      .map(floor => {
        return `${floor.index}层还有${floor.emptyPlaceNum()}个空位`;
      })
      .join("\n");
  }
}

// 车位
class Place {
  constructor() {
    this.isEmpty = true;
  }
  in() {
    this.isEmpty = false;
  }
  out() {
    this.isEmpty = true;
  }
}
// 层
class Floor {
  constructor(index, places) {
    this.index = index;
    this.places = places || [];
  }
  emptyPlaceNum() {
    let num = 0;
    this.places.forEach(item => {
      if (item.isEmpty) {
        num += 1;
      }
    });
    return num;
  }
}

//  测试
// 　初始化停车场
const floors = [];
//  三层
for (let i = 0; i < 3; i++) {
  const places = [];
  // 每层100个停车位
  for (let k = 0; k < 100; k++) {
    // 停车位为初始化
    places[k] = new Place();
  }
  // 每一层传入相应停车位
  floors[i] = new Floor(i + 1, places);
}
const park = new Park(floors);

// 初始化车辆
const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);
const car4 = new Car(400);

console.log("第一辆车辆进入");
console.log(park.emptyPlaceNum());
park.in(car1);
console.log("第二辆车辆进入");
console.log(park.emptyPlaceNum());
park.in(car2);
console.log("第一辆车辆离开");
console.log(park.emptyPlaceNum());
park.out(car1);
console.log("第二辆车辆离开");
console.log(park.emptyPlaceNum());
park.out(car2);
console.log(`当前停车场信息${park.emptyPlaceNum()}`);

console.log("第三辆车进入");
console.log(park.emptyPlaceNum());
park.in(car3);
console.log("第三辆车离开");
park.out(car3);
console.log(park.emptyPlaceNum());
