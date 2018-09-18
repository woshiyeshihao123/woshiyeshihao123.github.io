---
layout: post
title:  "搭建一个 伪.校宝学院（1）"
categories: Esao
tags:  VUE axios nodejs MongoDB express nginx vue-cli3
author: Esao
---

* content
{:toc}

## 目的：

因为期末要处理学校的事，放假了又去学车了，所以好久没更新了，在杭州找了实习，打算好好提升自己，以后更新勤奋点，共勉.
在之前的项目组用的全是jQuery，学了Vue然而用不到项目里，也不知道自己学的算怎么样，所以打算通过这个项目练习一下Vue全家桶的使用，以及学习一下nodejs+mongoDB的全栈开发
使用:VUE全家桶+axios+nodejs+MongoDB+express+nginx+element-ui
这第一篇从最新的vue脚手架工具 vue-cli3 开始





## 正文：


这段时间vue-cli3正式发布,为了学习进步 ~~尝鲜~~ 我选择这个项目用vue-cli3去搭建

[vue-cli3官网](https://cli.vuejs.org/)

在👆官网中有有比较详细的文档

### 首先全局安装vue-cli3

``npm install -g @vue/cli``

### 检测安装：

```
C:\WINDOWS\system32>vue -V
3.0.0
```

### 安装成功后,创建项目
我这里创建了一个名为vuecli3的项目,创建成功后会显示如下界面 前面的三项是我自己创建的预设,第一次使用的应该是只有后两项 default和Manually
我们选择最后一项

```
vue create vuecli3

Vue CLI v3.0.0
? Please pick a preset: (Use arrow keys)
> hello-vue-ui (vue-router, babel, typescript, eslint)
  demo (vue-router, vuex, sass, babel, eslint)
  vuecli3 (vue-router, vuex, sass, babel, typescript, eslint)
  default (babel, eslint)
  Manually select features

```
勾选vuex router 以及 css Pre-processors Linter 其他类似测试等按需要选择

```
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
>(*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

路由模式我启用了history

CSS预处理语言按喜好选择,我这里使用的SCSS

```
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
> SCSS/SASS
  LESS
  Stylus
```
代码格式化检测,我选择的ESLint + Standard config

```
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): SCSS/SASS? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
> ESLint + Standard config
  ESLint + Prettier
```
这里是询问是否要保存这次的预设
```
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): SCSS/SASS? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit
```
babel,postcss,eslint这些配置文件放哪？ 我选择第一项,单独放一个配置文件 ,第二项则是放在package.json中
```
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): SCSS/SASS? Pick a linter / formatter config: Standard
? Pick additional lint features:
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json
```

配置好后 确认等待下载完成即可
```
Vue CLI v3.0.0
✨  Creating project in G:\workspace\github\vuecli3.
🗃  Initializing git repository...
⚙  Installing CLI plugins. This might take a while...
```

完成

```
🎉  Successfully created project vuecli3.
👉  Get started with the following commands:

 $ cd vuecli3
 $ npm run serve

```

然后 npm run serve 一下 就可以启动项目了

### 目录

![image text](https://i.loli.net/2018/08/24/5b7f85dd5546c.png)

配置文件需要单独创建 所以自己在根目录下新建一个vue.config.js文件
[相关文档](https://cli.vuejs.org/zh/guide/)

下面配置说明转自百度

```
// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
module.exports = {
    // baseUrl  type:{string} default:'/' 
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',

    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

    // outputDir: 'dist',

    // pages:{ type:Object,Default:undfind } 
/*
  构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
  个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
  的字符串，
  注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
*/
    // pages: {
        // index: {
            // entry for the page
            // entry: 'src/index/main.js',
            // the source template
            // template: 'public/index.html',
            // output as dist/index.html
            // filename: 'index.html'
        // },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js'
    // },

    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: true,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项

    devServer: {
        port: 8085, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
}
```

