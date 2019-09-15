'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find({username: 'jeason', password: '123456'});
    console.log(2121)
    ctx.body = userInfo;
    console.log('2121212')
  }
}

module.exports = HomeController;
