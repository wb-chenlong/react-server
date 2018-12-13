import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import Test from './components/index';
import './test.less';
import './test.html';

const app = dva({
  onError(e) {
    // eslint-disable-next-line
    console.log(e);
  },
});

// 2. Plugins
app.use(createLoading()); // 全局loading

app.model(require('./models'));

app.router(() => (<Test />));

app.start('#react-root');
