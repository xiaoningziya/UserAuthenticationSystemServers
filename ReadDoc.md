## 快速初始化项目
> npm init egg --type=simple

> npm i

> npm run dev

> open http://localhost:7001

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

## egg-mysql 常规方法
```
<!-- 查找 -->
let result = await this.app.mysql.get("user",{id:1})
<!-- 查找  -->
let result = await this.app.mysql.select("user",{ where:{id:1}

<!-- 增加 -->
let result = await this.app.mysql.insert("user",{username:"lisi",password:"1234"})

<!-- 修改 通过主键-->
let result = await this.app.mysql.update('user',{ id:2, username:'赵四' });
<!-- 修改 通过sql -->
let results=await this.app.mysql.query('update user set username = ? where id = ?',["王五",2]);

<!-- 删除 -->
let result= await this.app.mysql.delete('user',{ id:3 });

<!-- 执行sql -->
this.app.mysql.query(sql,values);

<!-- mysql事务 -->
const conn=await this.app.mysql.beginTransaction();
try{
    await conn.insert('user',{'username':'xiao1','password':'1111'});
    await conn.update('user',{id:2,username:'黑子'});
    await conn.commit();  //提交事务
}catch(err){
    await conn.rollback();//回滚事务
    throw err;
}
```