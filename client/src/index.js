import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './components/App/index';
import NonlinearStepper from './components/application/NonlinearStepper';

ReactDOM.render(
  <BrowserRouter>
    <NonlinearStepper />
  </BrowserRouter>,
  document.getElementById('root')
);
