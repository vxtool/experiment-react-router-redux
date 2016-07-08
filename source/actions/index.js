export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REQUEST_DATAS = 'REQUEST_DATAS';
export const RECEIVE_DATAS = 'RECEIVE_DATAS';

const incrementAction = () => ({
  type: INCREMENT,
});

export function increment() {
  return dispatch => dispatch(incrementAction());
}

const decrementAction = () => ({
  type: DECREMENT,
});

export function decrement() {
  return dispatch => dispatch(decrementAction());
}

const requestDatas = () => ({
  type: REQUEST_DATAS,
});

const receiveDatas = datas => ({
  type: RECEIVE_DATAS,
  datas,
  receivedAt: Date.now(),
});

const delay = () => Math.floor(Math.random() * 2000) + 500;
export function fetchDatas() {
  return (dispatch, getState) => {
    if (getState().stores.isFetching === false) {
      dispatch(requestDatas());
      const fakeData = new Date().toString();
      setTimeout(() => dispatch(receiveDatas(fakeData)), delay());
    }
  };
}
