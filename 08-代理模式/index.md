#介绍

> - 使用者无权访问目标对象
> - 中间加代理，通过代理做授权和控制(例如科学上网)

<!-- 示例：科学上网，明星经纪人 -->

## 场景

> - 网页事件代理

<!-- 子元素的点击事件由父元素代理 -->

> - JQuerry \$.proxy

<!--
$("#div1").click(function(){
  // this符合期望
  $(this).addClass("red")
})

$("#div1").click(function(){
  setTimeout(function(){
    // this不符合期望
    $(this).addClass("red")
  },100)
})
 -->

 <!-- 可以用如下方式解决
 $("#div1").click(function(){
  // this符合期望
  $(this).addClass("red")
})

$("#div1").click(function(){
  var _this = this;
  setTimeout(function(){
    // _this符合期望
    $(_this).addClass("red")
  },100)
})
  -->

<!-- 但是推荐使用$.proxy 来解决，这样就少定义一个变量
$("#div1").click(function(){
  var _this = this;
  setTimeout($.proxy(function(){
    // this符合期望
    $(this).addClass("red")
  },this),100)
})
 -->

> - ES6 proxy

<!-- 明星经纪人
// 明星

let star = {
name:"张 xx",
age:25,
phone:'15138971750'
}

//经纪人
let agent = new Proxy(star,{
  get: function(targe,key){
    if(key ==="phone"){
    //返回经纪人自己的手机号码
      return "188888888***"
    }
    if(key==="price"){
       // 明星不报价，经纪人报价
      return 120000
    }
    return targe[key]
  },
  set: function(target,key,val){
    if(key ==="customPrice"){
      if(val<100000){
        throw new Error("价格太低")
      }else {
        taget[key] = val
        return true
      }
    }
  }
})


-->
