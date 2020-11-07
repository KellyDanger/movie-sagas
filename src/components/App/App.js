import React, { Component } from 'react';
import{HashRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/details" component={Details}/>
        </Router>
      </div>
    );
  }
}

export default App;