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
    //react: {
        //enable:true,
        //package: 'egg-view-react'
    //},
    reactssr: {
        enable: true,
        package: 'egg-view-react-ssr'
    }
};
