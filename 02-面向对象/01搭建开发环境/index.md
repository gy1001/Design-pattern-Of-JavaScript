# 面向对象

## 搭建开法环境

> - 初始化 npm 环境

```javascript
01
  npm init
```

> - 安装 webpack

```javascript
npm install webpack webpack-cli --save-dev
  新建src/index.js 以及 webpack.dev.config.js
  npm run dev
```

> - 安装 webapck-dev-server

```javasript
02
  cnpm install webpack-dev-server html-webpack-plugin --save-dev
  新建 index.html
```

> - 安装 babel

```javascript
03
视频资料执行以下命令然后npm run dev 报错,查因得知版本升级问题
  npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev
  改为执行即可：
　npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env　--save-dev
```

## 什么是面向对象

## UML 类图

##　总结
