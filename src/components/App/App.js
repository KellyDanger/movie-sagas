import React, { Component } from 'react';
import{HashRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Movies!</h1>
          <Link to="/addmovie">Add Movie</Link>
          <Route exact path="/" component={Home}/>
          <Route path="/details" component={Details}/>
          <Route path="/addmovie" component={AddMovie}/>
          </div>
      </Router>

    );
  }
}

export default connect()(App);
