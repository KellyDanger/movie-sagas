import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre: ''
  }
  handleChange = (event) => {
    console.log('change is', event.target.value);
  }

  addMovie = () => {
    console.log('Adding Movie', this.state);
  }


  render() {
    return(
      <div>
        <input placeholder="title" type="text" onChange={this.handleChange}/>
        <button onClick={this.addMovie}>Submit</button>
      </div>
      
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);