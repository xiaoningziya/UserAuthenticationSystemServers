## 快速初始化项目
> npm init egg --type=simple
> npm i
> npm run dev
> open http://localhost:7001

## 框架能力
- 基础服务  `eggjs`
- 数据库  `egg-mysql`

## 解决跨域问题
1. 安装 egg-cors
```
npm i egg-cors --save / cnpm i egg-cors --save
```
2. 配置plugin.js
```
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
```
3. 配置config.default.js
```
config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['*']//[]中放放出的白名单，*代表所有
};
config.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
```

## 接口返回格式制定
```
/* 成功 */
const res = {
  type: 'success',
  result: {
    token: 'xxx123-xxxfxstasdawafgdfsf'
  }
}

/* 失败 */
const err = {
  type: 'error',
  msg: '注册用户已存在'
}
```

## egg接收请求参数
1、get请求
```
let query = this.ctx.query;
let name = query.name;
let id = query.id;
```
2、post请求
```
let query = this.ctx.request.body;
let name = query.name;
let id = query.id;
```
3、接口返回值
```
this.ctx.body = {
  code: 0,
  data: '返回的数据',
  msg: '错误数据'
}
```