# jianshudemo
自配置webpack + react 全家桶 实现简书网站的部分前端
# 项目说明
## 运行项目
1. 开发环境运行：  
 在config/webpack.config.js 中设置(默认为`true`)`shouldUseDllPlugin`。
 `shouldUseDllPlugin = true`时需要先运行 `npm run dll`  打包依赖文件。
 然后运行`npm start` 启动本地服务器运行项目。
 `shouldUseDllPlugin = false` 时直接运行`npm start`运行项目。
2. 打包后运行：  
  运行`npm run build`打包文件，然后运行`npm run http`启动本地服务器，在浏览器中输入控制台打印的地址即可运行。
3. 实现了PWA 的 service-worker 部分，访问一次即可自启动的服务器。
## 项目使用的第三方库说明
1. redux, react-redux: 统一管理数据，以及在react中更方便使用redux
2. immutable, immutable-redux: 使用不可突变数据，配合 react中的 PureComponent使组件性能提高，以及合并reducer使用。
3. styled-component: 实现 css-in-js
4. redux-thunk: redux中间件，实现dispatch一个函数，完成异步操作。
5. react-loadable: 实现组件的lazy-load，同时定义加载动画。
6. axios: 请求方法的封装库。
7. react-router-dom：管理路由。
## webpack 优化
1. babel-loader：不处理第三方库以及开启缓存
2. 使用了DllPlugin：对第三方库进行了提前打包，减少每次对第三方库的打包时间。
## React 优化
1. 对未用到的组件进行了分离。
2. 使用PureComponent优化了组件性能。
3. 使用了不可突变数据管理数据。
