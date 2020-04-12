import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import Error404 from '../pages/common/Error-404';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/404">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
