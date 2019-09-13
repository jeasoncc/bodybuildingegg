'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async registerUser() {
    const { ctx } = this;
    const userInfo = await ctx.service.register.register({username: 'chenzhang', password: '123456'});
    ctx.body = userInfo;
  }
}

module.exports = RegisterController;
