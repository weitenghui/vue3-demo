// vue.config.js

const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/config.less")],
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          "primary-color": "#00B388",
          "warning-color": "#FD9941",
          "link-color": "#F5222D",
          "border-radius-base": "4px",
        },
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    // true 则热更新，false 则手动刷新，默认值为 true
    // development server port 8000
    port: 8080,
    // 后端测试环境地址部署好了：
    // IP访问地址：http://10.0.10.30:50000
    // 域名访问地址：https://erpproxy.hapi123.net/json/reply/ApproveCallbackReq
    proxy: {
      "/api": {
        // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
        target: "https://erpproxy.hapi123.net",
        // target: 'http://10.0.51.35:50001', // 后端本地 仅这几天调试用
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  // transpileDependencies: ['vuex-persist']
};
