import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ReactTrainingHome from './ReactTrainingHome';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Movies from './Movies';

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/react-training" component={ReactTrainingHome} />
          <Route component={NotFoundPage} />

        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
