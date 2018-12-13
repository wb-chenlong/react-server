## React + dva + antd 脚手架

### 相关文档

- [dva.js](https://github.com/dvajs/dva)
- [Ant Design (2.x)](https://ant.design/index-cn)

### 目录结构

```
react-dva-fetch
├── HISTORY.md // 更新记录
├── README.md  
├── dist       // 构建目录
├── mock       // mock 数据、接口
├── package.json // 基础配置
├── proxy.config.js // 代理服务器配置，https://github.com/dora-js/dora-plugin-proxy
├── src			// 组件目录
	├── common 	// 公共资源目录
		├── index.js // js公共资源
		├── index.less // css 公共资源
		├── utile 	// 全局自定义工具包
	├── test			// 测试项目
		├── actions	// 常量
		├── components	// 组件
		├── models	// dva models
		├── services	// 请求接口
		├── test.html	//	测试页面
		├── test.less	// 测试页面css资源
		├── test-entry.js	// 输出的 js 文件
└── webpack.config.js // Webpack 配置
```

### 开发环境以及打包

```
	// 命令行
	$ cnpm install
	$ cnpm start
	
	// 访问测试页面
	http://127.0.0.1:8989/src/test/test.html

	// 打包
	$ cnpm run build
```
