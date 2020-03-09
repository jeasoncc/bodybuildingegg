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
  router.get('/backfront', controller.backfront.index.server);
  router.get('/userinfo', controller.backfront.userInfo.server);
  router.get('/insertactiongrouppage', controller.backfront.insertActionGroup.server);
  /*
  *@description 后端接口
  */
  router.post('/finduser', controller.home.findUser)

 /*
  *@description 前端接口
  */
  router.post('/login', controller.login.loginUser);
  router.post('/register', controller.register.registerUser);
  router.post('/muclepart', controller.front.selectAction.find);
  router.post('/actiongroups', controller.front.selectAction.findAction);
};
