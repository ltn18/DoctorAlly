import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from 'react-router-scroll-top';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import store from './redux/store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <Container fixed>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Container>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
