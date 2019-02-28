import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';
import { GlobalIconFont } from './static/icon-font/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'
import store from './store';
import { Provider } from 'react-redux';
import Header from './commom/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <GlobalIconFont></GlobalIconFont>
        <BrowserRouter>
          <Fragment>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;