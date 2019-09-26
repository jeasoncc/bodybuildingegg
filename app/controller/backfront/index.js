'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async server() {
        const { ctx } = await this;
        await ctx.render('backfrontindex.nj')
    }
}

module.exports = IndexController;
