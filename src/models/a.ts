import {Model} from 'dva';

const delay = (timeout: number) => new Promise((resolve: Function) => setTimeout(resolve, timeout));

const a: Model = {
  namespace: 'a',
  state: '',
  reducers: {
    fetchSuccess(state: any, {payload}: any) {
      return state + payload;
    }
  },
  effects: {
    *fetch(action, {call, put}) {
      yield call(delay, 3000);
      yield put({type: 'fetchSuccess', payload: '666'});
    }
  }
};

export default a;