'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
    mysql: {
        enable: true,
        package: 'egg-mysql'
    },
    // 跨域插件
    cors: {
        enable: true,
        package: 'egg-cors'
    },
    // 模板插件
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks'
    }
};
