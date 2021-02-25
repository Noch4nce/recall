import React, { Component } from 'react';
import About from './About';
import Home from './Home';
import Users from './Users';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Users">
              <Users />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
