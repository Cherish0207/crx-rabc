import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {
      mysql: {
        // 单数据库信息配置
        client: {
          host: 'localhost',
          port: '3306',
          user: 'root',
          password: 'cherish55',
          database: 'cms2',
          socketPath: '/tmp/mysql.sock',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
      },
    };

  return config;
};
