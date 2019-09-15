'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginUser(username,password) {
    const { ctx } = this;
    const userInfo = await ctx.service.login.login({username: ctx.request.body.username, password: ctx.request.body.password});
    ctx.body = userInfo;
  }
}

module.exports = LoginController;
