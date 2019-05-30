# vuecli3+axios+vue-router+vuex项目通用模板
二次封装axios、预设less等、配置router、vuex
最基础的项目模板，其他插件根据需求自行添加

## 技术栈
vuex + vue-router + axios + less + eslint/prettier

## 安装运行
```
git clone https://github.com/ZhanPhty/vuecli3-less-template.git

cd vuecli3-template

yarn 或者 npm install

yarn serve 或者 npm run serve
```

### 命令说明
```
yarn serve 或者 npm run serve   // 启动开发环境

yarn build:test 或者 npm run build:test  // 打包测试环境

yarn build 或者 npm run build   // 打包生成环境

yarn lint 或者 npm run lint   //使用eslint+prettier格式化代码

vue ui   //启动图形化界面
```

## 结构目录

```* public/
* dist/  --------打包文件夹
* src/  --------源代码根目录
    * assets/  --------静态资源存放
        * less/  --------预设less
            * base/  --------html初始化样式
            * common/  --------项目通用样式
            * variables/  --------less参数
            * base.less  --------页面引用文件
            * settings.less  --------配置入口文件
    * axios/  --------二次封装axios，更优雅的使用Promise
        * api/  --------api模块存放文件夹
        * config.js  --------封装axios配置
    * components/  --------模板文件
    * router/  --------router路由
        * demo/  --------配置路由demo
            * index.js  --------router.children配置
        * index.js  --------router模块统一引用入口
    * store/  --------vuex
        * demo/  --------配置vuex示例（模块化）
        * index.js  --------vuex模块统一引用入口
    * views/  --------视图
* tests/  --------单元测试
* .env.development  --------开发环境配置文件
* .env.production  --------生产环境配置文件
* .env.testing  --------测试环境配置文件
* .eslintrc.js  --------eslint配置文件
* vue.config.js  --------vuecli3配置文件
```
## 项目说明
在vue-cli3脚手架的基础上，添加了一些必要的配置文件，同时也保持最纯洁的模板，根据项目可引用其他框架。
更适合大型项目及多人协作
* 添加了一些less参数、reset.css等
* 对axios二次封装，可以更优雅的请求接口了
* 对router模块化引用，方便维护
* vuex同样模块化，分类管理


### less
使用 `style-resources-loader` 配置全局参数


### axios
封装后的axios，无需每个页面都axios，只需要import直接调用对应的接口
##### 示例（@/axios/api/user.js文件下的login接口）
`import { login } from 'api/user'

login({
   userid: 1234
}).then(res => {
   console.log(res)
})`


### router
模块化router，对一级以下的路由`(routes.children)`进行分类管理


### store
模块化vuex，使用官方的modules引入各个模块
* index.js
* state.js
* types.js
* actions.js
* getters.js
* mutations.js


### vue.config.js
> pluginOptions.env.TEST

自定义全局变量，打印测试`console.log(process.env.TEST)`


##### vue-cli其他配置
传送门： [vue-cli3](https://cli.vuejs.org/zh/).
