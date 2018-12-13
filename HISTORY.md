## 更新历史

#### 2018-03-02

- request.js 的 fetch 添加 timeout 功能
    - 只是在 promise 对象中创建一个 setTimeout 的队列，谁先跑到执行谁
    - 问题：这会导致有可能 fetch 触发了 timeout 功能，但是也有可能在随后的时间里又接受到了服务端的 response

#### 2018-03-21

- dva-loading
    - 添加该组件，会自动监控 effects 中发生的异步请求，从而改变 loading 状态
    - 调用：state.loading.models[${namespace}]