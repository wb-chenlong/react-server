import {
  TEST_NAMESPACE,
  FETCH_TEST,
} from '../actions';
import {
  fetchTestGet,
  fetchTestPost,
} from '../services';

export default {
  namespace: TEST_NAMESPACE,

  state: {
    data: {},
  },

  subscriptions: {
    init({ dispatch }) {
      dispatch({
        type: FETCH_TEST,
      });
    },
  },

  effects: {
    * [FETCH_TEST]({ payload }, { call, put }) {
      const data = yield call(fetchTestGet, { ...payload });

      if (data && data.stat === 'ok') {
        yield put({
          type: 'setData',
          payload: {
            data: data.data,
          },
        });
      }
    },
  },

  reducers: {
    setData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
