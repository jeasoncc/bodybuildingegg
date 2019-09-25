'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find({username: 'jeason', password: '123456'});
    await ctx.render('page/home/index.js', {message: 'egg react server side render'})
    await ctx.renderClient('home/index.js', {message: 'egg react client render'})
  }
}

module.exports = HomeController;
