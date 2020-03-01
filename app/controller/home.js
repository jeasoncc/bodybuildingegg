'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async server() {
      const { ctx } = this;
      const data = { name: 'egg' };
      await ctx.render('home.nj')
    }

    async findUser() {
        const { ctx } = this;
        const info = await ctx.service.user.find()
        ctx.body = await info
    }

}

module.exports = HomeController;
