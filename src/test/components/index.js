import React from 'react';
import { connect } from 'dva';
import { Spin } from 'antd';
import { TEST_NAMESPACE } from '../actions';

function Test(props) {
  const {
    loading,
    data,
  } = props;

  return (
    <Spin spinning={loading}>
      {data.text}222223333
    </Spin>
  );
}

// 监听属性，建立组件和数据的映射关系
function mapStateToProps(state) {
  const {
    data,
  } = state[TEST_NAMESPACE];

  return {
    // dva-loading: 组件会监控对应 models.effects 中的异步请求
    loading: state.loading.models[TEST_NAMESPACE],
    data,
  };
}

// 关联 model
export default connect(mapStateToProps)(Test);
