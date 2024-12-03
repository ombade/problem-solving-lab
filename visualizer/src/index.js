import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import App from 'components/App';
import * as reducers from 'reducers';
import './stylesheet.scss';
import { Helmet } from 'react-helmet'

const store = createStore(combineReducers({ ...reducers, routing: routerReducer }));
const TITLE = 'Problem Solving Lab'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/scratch-paper/:gistId" component={App}/>
        <Route exact path="/:categoryKey/:algorithmKey" component={App}/>
        <Route path="/" component={App}/>
        <Helmet><title>{ TITLE }</title></Helmet>
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
