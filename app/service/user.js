const Service = require('egg').Service;
const User = require('./../class/User');
class UserService extends Service {
  constructor(ctx) {
    super(ctx)
  }
  async find() {
        var {username, password} = this.ctx.request.body
        const user = await this.app.mysql.get('userinfo',{username, password});
        if(user) {
            return new User(user)
        }
        return {isUser:false};
    };
}

module.exports = UserService;
