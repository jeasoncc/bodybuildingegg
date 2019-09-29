'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async server() {
      const { ctx } = this;
      // ctx.body = ctx
      const data = { name: 'egg' };
     // ctx.body = await ctx.renderString('hi, {{ name }}', data, {
     //  viewEngine: 'nunjucks',
    // });
      const dataList = {
      name: 'jeason',
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
       ]
      };
    // await ctx.render('home.nj')
      await ctx.render('home.nj', dataList)
    }

    async findUser() {
        const { ctx } = this;
        const info = await ctx.service.user.find()
        ctx.body = await  info
    }

}

module.exports = HomeController;
