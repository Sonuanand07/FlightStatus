import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlightStatus from './components/FlightStatus';
import NotificationSettings from './components/NotificationSettings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FlightStatus} />
        <Route path="/notifications" component={NotificationSettings} />
      </Switch>
    </Router>
  );
};

export default App;
