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
    await ctx.render('home.nj')
    }
}

module.exports = HomeController;
