'use strict';

const Controller = require('egg').Controller;

class SelectActionController extends Controller {
  async find() {
    const { ctx } = this;
    const info = await ctx.service.front.actionGroup.find()
    ctx.body = info;
  }
  async findAction(muclePart) {
    const { ctx } = this;
    const info = await ctx.service.front.actionGroup.findAction({
        muclePart:ctx.request.body.muclePart
    });

    ctx.body = info;
  }
}

module.exports = SelectActionController;
