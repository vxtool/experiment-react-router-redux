import './css/style.css';
import React from 'react';
import { render } from 'react-dom';
import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';

import App from './containers/App';
import Home from './components/Home';
import Clock from './components/Clock';
import Counter from './components/Counter';
import NotFound from './components/NotFound';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route patch="/" component={App}>
        <Route path="/" component={Home} />
        <Route path="/clock" component={Clock} />
        <Route path="/counter" component={Counter} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
