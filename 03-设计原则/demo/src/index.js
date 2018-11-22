function loadImg(src) {
  let promise = new Promise(function(resolve, reject) {
    let img = document.createElement("img");
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function(img) {
      reject("图片加载失败");
    };
    img.src = src;
  });
  return promise;
}
const src = "https://www.imooc.com/static/img/index/logo.png";
let result = loadImg(src);
result
  .then(function(img) {
    // part 1
    console.log("img.width", img.width);
    return img;
  })
  .then(function(img) {
    // part 2
    console.log("img.height", img.height);
  })
  .then(function() {
    //part 3
  })
  .catch(function(error) {
    console.log(error);
  });
