'use strict';

const Controller = require('egg').Controller;

class InsertActionGroupController extends Controller {
    async server() {
        const { ctx } = await this;
        await ctx.render('userInfo.nj')
    }
}

module.exports = InsertActionGroupController;
