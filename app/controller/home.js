'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find({username: 'jeason', password: '123456'});
    ctx.body = userInfo;
  }
}

module.exports = HomeController;
