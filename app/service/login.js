const Service = require('egg').Service;
class LoginService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
    async login({username, password}) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    //console.log(this.ctx.app.config.mysql.query())
    const user = await this.app.mysql.get('userinfo', {
        username:username,
        password:password
    })
    console.log(user)
   // const users = await this.ctx.mysql.query('select * from user.userinfo' );


    // 假定这里还有一些复杂的计算，然后返回需要的信息。
    // const picture = await this.getPicture(uid);
    return user;
    };
  }

 // async getPicture(uid) {
 //   const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, { dataType: 'json' });
 //   return result.data;
 // }
module.exports = LoginService;
