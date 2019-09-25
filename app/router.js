'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.server);
  //router.get('/client', controller.home.cient);
  router.post('/login', controller.login.loginUser);
  router.post('/register', controller.register.registerUser);
};
