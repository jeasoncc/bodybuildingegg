const Service = require('egg').Service;
class ActionGroupService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
      async find() {
        const user = await this.app.mysql.select('muclepart')
        return user;
      };

      async findAction({muclePart}) {
        const actionGroup = await this.app.mysql.select('actiongroup', {
            where: {
                mucle_part: muclePart
            }
        })
        return actionGroup
      }
  }



module.exports = ActionGroupService;
