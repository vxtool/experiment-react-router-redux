import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header row">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </header>
        <div className="content">
          {this.props.children}
        </div>
        <footer className="footer">
          <p>
            Project Source
            {' '}
            <a href="https://github.com/expalmer/react-router-redux-hot-webpack-es2015-boilerplate">
              on Github
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};
