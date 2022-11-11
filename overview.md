富文本 wangEditor
编译报错：You may need an appropriate loader to handle this file type.
找到 webplack.base.conf.js 
修改babel-loader配置项 resolve('node_modules/@wangeditor')

第三方库marked 可以把markdown转为html
https://www.npmjs.com/package/marked

进度条 nprogress

**格式**
```
{
   code:'',
   data:{},
   msg:''
}
```

**文章**
文章id 分类 文章标题 文章描述 文章图片 文章内容 作者 发布时间

**分类**
分类id 分类名字

**用户**
用户id 用户名字 用户权限

自动增加：创建表的时候已经设置它为 AUTO_INCREMENT(自动增加) 属性 就不必传
now() 当前日期和时间


**node:**
1. 安装express： npm install -g express-generator
2. 创建： express --view=pug myapp
3. 进入目录：cd myapp
4. 安装依赖：npm i
5. 启动：npm start

**vue:**
- npm i vue vue-cli
- vue init webpack myapp_vue

### 设置代理：
```
proxyTable: {
   '/api':{                // 匹配api
      target:'http://localhost:3000',  //代理到后台接口域名
      changeOrigin:true,    //是否跨域
      ws:true,             //如果要代理 websockets，配置这个参数
      secure:false,       // 如果是https接口，需要配置这个参数
      pathRewrite:{       //重写请求路径
         '^/api' : ''
      }
   }
}
```

查看端口
netstat -ano | findstr 3000
杀死进程
taskkill -f -pid 14216


** pm2
pm2是可以用于生产环境的Nodejs的进程管理工具
相关链接：https://www.jianshu.com/p/bab31fac7655
相关命令：
启动进程
pm2 start

查看进程
pm2 list

杀死某进程
pm2 delete 0

端口被挡 
/sbin/iptables -I INPUT -p tcp --dport 1315 -j ACCEPT
navicat破解链接
https://www.jb51.net/article/199525.html
