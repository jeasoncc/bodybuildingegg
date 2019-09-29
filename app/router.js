'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /*
  *@description 后端路由
  */
  router.get('/', controller.home.server);
  // 测试
  router.post('/finduser', controller.home.findUser)

  router.get('/backfront', controller.backfront.index.server);
  router.get('/insertactiongrouppage', controller.backfront.insertActionGroup.server);
 /*
  *@description 前端接口
  */
  router.post('/login', controller.login.loginUser);
  router.post('/register', controller.register.registerUser);
  router.post('/muclepart', controller.front.selectAction.find);
  router.post('/actiongroups', controller.front.selectAction.findAction);
};
