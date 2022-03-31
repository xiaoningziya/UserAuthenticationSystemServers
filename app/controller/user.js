'use strict';

const Controller = require('egg').Controller;
const mysql = require('../mysql/user')

// 标准返回正确
const result = {
  type: 'success',
  msg:'',
  result: {}
}

/** @class 用户相关控制器 */
class UserController extends Controller {
  // 注册接口
  async register() {
    const payload = this.ctx.request.body;
    if(!payload.username || !payload.password){
      this.ctx.body = {
        type:'error',
        msg: '请输入用户名或密码'
      };
    }
    let insertResult = await this.app.mysql.insert(
      'user_table', {
        username: payload.username,
        password: payload.password
      }
    );
    console.log('insertResult',insertResult)

    this.ctx.body = result;
  }
}

module.exports = UserController;
