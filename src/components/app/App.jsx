import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import ListAvatarCharacters from '../../containers/Characters';

export default function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Home</Link>
        <Switch>
          <Route exact path='/' component={ListAvatarCharacters} />

        </Switch>
      </div>
    </Router>
  );
}
