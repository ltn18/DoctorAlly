import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from 'react-router-scroll-top';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

ReactDOM.render(
  <BrowserRouter>
    <Container fixed>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Container>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
