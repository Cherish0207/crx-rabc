 import { Application, IBoot } from 'egg';
import { Strategy } from 'passport-local'; // 本地用户名密码登陆的策略
export default class FooBoot implements IBoot {
  private readonly app: Application;
  constructor(app: Application) {
    this.app = app;
  }
  configDidLoad() {
    let { app } = this;
    
    // 这个其实是在配置鉴权的方式,配置鉴权的
    app.passport.use(
      new Strategy(
        {
          usernameField: 'userName', // 从请求体里的哪个字段取到用户名
          passReqToCallback: true, // 向callback中传递 request对象
        },
        async (req, userName, password, done) => {
          // select * from user where username=? and password=? limit 1
          let user = await app.mysql.get('user', { userName, password });
          if (user) {
            done(null, user);
          } else {
            // 如果登录失败了,则需要清除掉原来的登录状态
            req.ctx.isAuthenticated() && req.ctx.logout();
            done(null, false);
          }
        }
      )
    );
  }
}
