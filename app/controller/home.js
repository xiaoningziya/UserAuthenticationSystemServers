'use strict';

const Controller = require('egg').Controller;

/** @class 根路径控制器 */
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
