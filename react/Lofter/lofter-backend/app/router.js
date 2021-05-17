'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test)
  router.get('/user', controller.user.index)
  router.get('/getid/:id', controller.user.getid)
  router.get('/getUser', controller.user.add)
  router.get('/list',controller.home.list)
  router.post('/add',controller.home.add)
  router.post('/update/:id',controller.home.update)
  router.post('/detail/:id',controller.home.getDiaryById)
};
