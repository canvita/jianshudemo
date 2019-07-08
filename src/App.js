import React from 'react';
import Header from './common/Header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { GlobalStyle } from './resetCss'

import Home from './pages/home';
import Detail from './pages/detail';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <BrowserRouter basename="/#">
          <>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </>
        </BrowserRouter>
      </Provider>
    )
  }
}