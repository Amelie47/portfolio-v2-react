import React from 'react';
import Root from './components/pages/Root';
import Project from './components/pages/Project';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
      ></meta>
      <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'></meta>
      <meta name='HandheldFriendly' content='true'></meta>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Root />
          </Route>
          <Route path='/project/:id'>
            <Project />
          </Route>
        </Switch>
      </Router>

      <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js'></script>
    </div>
  );
}

export default App;
