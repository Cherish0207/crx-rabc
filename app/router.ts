import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // controller 是控制器对象,home就是 Homecontroller类的一个实例
  router.get('/', controller.home.index);
  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/api/loginCallback', // 鉴权成功的回调
    failureRedirect: '/api/loginCallback', // 鉴权失败的回调
  });
  // localstrategy功能先从请求中获取到用户和密码,然后把它们传入我们自己写的ca11back,
  // 鉴权成功后,会把用户对象传给done,
  // done里面会把用户放入session会话,并定向到/api/logincallback
  router.post('/api/login/account', localStrategy);
  router.get('/api/loginCallback', controller.user.loginCallback);
};
