import React, { Component } from 'react';
import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import logo from './logo.svg';
import './App.css';
import Movies from './movies/containers/Movies';
import reducer from './movies/reducers';

const store = createStore(reducer,applyMiddleware(thunk));

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Movies />
        </Provider>
      </div>
    );
  }
}

export default App;
