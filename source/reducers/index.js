import {
  INCREMENT,
  DECREMENT,
  REQUEST_DATAS,
  RECEIVE_DATAS,
} from '../actions';

export function grids(state = [1, 2, 3, 4]) {
  return state;
}

export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  lastUpdated: null,
  datas: [],
};

export function stores(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATAS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_DATAS:
      return Object.assign({}, state, {
        isFetching: false,
        datas: [...state.datas, [action.datas]],
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}


