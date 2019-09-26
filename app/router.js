'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.server);
  router.get('/backfront', controller.backfront.index.server);
  router.post('/login', controller.login.loginUser);
  router.post('/register', controller.register.registerUser);
};
