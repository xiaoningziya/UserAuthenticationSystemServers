# project

## 目录标注
- app/router.js，用于配置URL路由规则。

- app/controller/**，用于解析用户的输入，处理后返回相应的结果。

- app/service/**，用于编写业务逻辑层，可选。

- app/middleware/**，用于编写中间件。

- app/public/**，用于放置静态资源。

- app/extend/**，用于扩展框架。

- config/config.{env}.js，用于编写配置文件。

- config/plugin.js用于配置需要加载的插件。

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