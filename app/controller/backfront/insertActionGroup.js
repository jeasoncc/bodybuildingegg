'use strict';

const Controller = require('egg').Controller;

class InsertActionGroupController extends Controller {
    async server() {
        const { ctx } = await this;
        await ctx.render('insertActionGroupPage.nj')
    }
}

module.exports = InsertActionGroupController;
