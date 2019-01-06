import React from 'react';

// Routing
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/index.css';

// Top level component
import App from './App';

// Service worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <div class="global">
      <Route exact path="/" component={App} />
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
