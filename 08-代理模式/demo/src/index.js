// class ReadImg {
//   constructor(fileName) {
//     this.fileName = fileName;
//     this.loadFromDisk(); // 初始化即从硬盘中加载，模拟
//   }

//   display() {
//     console.log("display..." + this.fileName);
//   }

//   loadFromDisk() {
//     console.log("loading..." + this.fileName);
//   }
// }

// class ProxyImg {
//   constructor(fileName) {
//     this.realImg = new ReadImg(fileName);
//   }
//   display() {
//     this.realImg.display();
//   }
// }

// // 测试
// let proxyImg = new ProxyImg("1.png");
// proxyImg.display();

// 明星经纪人
// 明细
let star = {
  name: "张xx",
  age: 25,
  phone: "13900000111"
};

// 经纪人
let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === "phone") {
      // 明星经纪人电话
      return "1688ddddgg";
    }
    if (key === "price") {
      // 明星不报价，经纪人报价
      return 120000;
    }
    return target[key];
  },
  set: function(target, key, val) {
    if (key === "customePrice") {
      if (val < 100000) {
        //  最低10w
        throw new Error("价格太低");
      } else {
        target[key] = val;
        return true;
      }
    }
  }
});

//  测试
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);
agent.customePrice = 112000;

console.log(agent.customePrice);

agent.customePrice = 5000;
console.log(agent.customePrice);
