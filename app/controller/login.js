'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginUser() {
    const { ctx } = this;
    const userInfo = await ctx.service.login.login({username: 'jeason', password: '123456'});
    ctx.body = userInfo;
  }
}

module.exports = LoginController;
