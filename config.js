// 配置
window.Config = {

  // 站点名
  SiteName: '网站稳定性在线监控平台-喃娘',

  // 站点链接
  SiteUrl: 'https://ooii.us.kg/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 http://qq110.ku83n.cn/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur2559220-173e086520f735abda17457c',
  //    'ur1879342-1410082ab2a31ccb876b2601',
  //    'ur1879342-1410082ab2a31ccb876b2601',
   //   'ur1879342-1410082ab2a31ccb876b2601',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '喃娘',
      url: 'https://ooii.us.kg/'
    },
   
    
  ]
};
