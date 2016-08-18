import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Splash from './splash-components/Splash';
import Auth from './auth-components/Auth';
import {LyftAuth, UberAuth, Login} from './auth-components/AuthComponents';
import MainLayout from './layout-components/MainLayout';
import NoMatch from './layout-components/NoMatch';
import UserProfile from './profile-components/UserProfile';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

requireAll(require.context('./static/', true, /^\.\/.*/));
function requireAll(r) { r.keys().forEach(r); }

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Splash}></IndexRoute>
      <Route path="app" component={App}></Route>
      <Route path="auth" component={Auth}>
        <Route path="login" component={Login}></Route>
      </Route>
      <Route path="lyftAuth" component={LyftAuth}></Route>
      <Route path="uberAuth" component={UberAuth}></Route>
      <Route path=":userid/profile" component={UserProfile}></Route>
    </Route>
    <Route path="*" component={NoMatch}></Route>
  </Router>
, document.getElementById('app'));
