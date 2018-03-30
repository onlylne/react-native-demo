# react-native-demo

a React Native starter powered by [dva](https://github.com/dvajs/dva) and [react-navigation](https://github.com/react-community/react-navigation)

## Start

```bash
yarn # or npm install
react-native run-ios # or react-native run-android
```

## Others Component

[antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)

[react-native-picker](https://github.com/beefe/react-native-picker)

## package description（app） （文件结构说明）

    |--app

        |--component(组件)
        |--config （配置）
            |--api.js (api接口)
        |--containers （所有页面 all pages ）
        |--imgages (图片)
        |--models (数据模型)
        |--services (数据请求服务)
        |--utils (工具类)
            |--config.js (域名、端口配置 set host and port)
            |--dva.js (use dva-core)
            |--index.js (export)
            |--request.js (网络请求整合 network)
            |--storage.js (本地数据存储)
        
其他的就不写了
持续更新中...

MIT
