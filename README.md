# output-compile-time-webpack-plugin

### 1、安装

```shell
yarn add output-compile-time-webpack-plugin --dev
```

### 2、使用

```js
// webpack.config.js

const OutputCompileTimeWebpackPlugin = require('output-compile-time-webpack-plugin')
module.exports = {
  // ... 省略其他配置
  plugins: [
    // ... 省略其他插件
    new OutputCompileTimeWebpackPlugin()
  ]
}
```

```js
// vue.config.js
module.exports = {
  // ... 省略其他配置
  configureWebpack: config => {
    // 用cdn方式引入
    // ... 省略其他配置
    const plugins = [
      // ... 省略其他插件
      new OutputCompileTimeWebpackPlugin()
    ]
    config.plugins.push(...plugins)
  }
}
```
