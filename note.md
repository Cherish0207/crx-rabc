## [rabc 权限](https://eggjs.org/zh-cn/tutorials/typescript.html)

> 目前最主流的权限设计系统

- `npm init egg --type=ts`

- `npm i egg-mysql`


Passport 的执行时序如下：

用户访问页面
检查 Session
拦截跳鉴权登录页面
Strategy 鉴权
校验和存储用户信息
序列化用户信息到 Session
跳转到指定页面