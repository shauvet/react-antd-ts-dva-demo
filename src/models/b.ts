import {Model} from 'dva';

const delay = (timeout: number) => new Promise((resolve: Function) => setTimeout(resolve, timeout));

const b: Model = {
  namespace: 'b',
  state: '',
  reducers: {
    fooSuccess(state: any, {payload}: any) {
      return state + payload;
    }
  },
  effects: {
    addWatcher: [function*({take, put, call}: any) {
      while(true) {
        const a = yield take('a/fetch');

        const {payload} = yield take('a/fetchSuccess');
        yield put({type: 'fooSuccess', payload});
      }
    }, {type: 'watcher'}],
    *foo(action, {call, put, takeEvery}) {
      yield call(delay, 5000);
      yield put({type: 'fooSuccess', payload: '233'});
    }
  }
};

export default b;