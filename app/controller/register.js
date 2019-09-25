'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async registerUser() {
    const { ctx } = this;
    const userInfo = await ctx.service.register.register({
        username: ctx.request.body.username,
        password: ctx.request.body.password,
        emailaddress: ctx.request.body.emailaddress,
        acceptpush: ctx.request.body.acceptpush

    });
    ctx.body = userInfo;
  }
}

module.exports = RegisterController;
