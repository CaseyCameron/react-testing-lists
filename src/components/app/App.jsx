import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CharactersDetails from '../../containers/CharactersDetails';
import ListAvatarCharacters from '../../containers/Characters';

export default function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Avatar Characters Home</Link>
        <Switch>
          <Route exact path='/' component={ListAvatarCharacters} />
          <Route exact path='/:_id' component={CharactersDetails} />
        </Switch>
      </div>
    </Router>
  );
}
