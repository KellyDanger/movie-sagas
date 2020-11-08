import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre_id: 0,
    }
  }
  //on page load, fetch all movie genres from DB and populate dropdown menu 
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_GENRES'
    })  
  }
  //set local state of new movie to userinput data by key(param) type
  handleChangeFor = (event, param) => {
      this.setState({
      newMovie: {
        ...this.state.newMovie,
        [param]: event.target.value
      }
    })
  }
  
  //dispatch ADD MOVIE action with local state as payload
  addMovie = () => {
    this.props.dispatch({
      type: 'ADD_MOVIE',
      payload: this.state.newMovie
    })
    this.props.history.push('/');
  }
  //cancel button returns user to home page
  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        <input placeholder="title" type="text" onChange={(event)=>this.handleChangeFor(event, 'title')}/>
        <input placeholder="posterURL" type="text" onChange={(event)=>this.handleChangeFor(event, 'poster')}/>
        <input placeholder="description" type="text" onChange={(event)=>this.handleChangeFor(event, 'description')}/>
        <select onChange={(event) => this.handleChangeFor(event, 'genre_id')}>
          {/* map through genre array from DB to dynamically populate genre options */}
          {this.props.reduxState.genres[0] && this.props.reduxState.genres.map((genre) => {
           return(
            <option key={genre.id} value={genre.id}>{genre.name}</option>
           ) 
          })}
          
        </select>
        <button onClick={this.addMovie}>Submit</button>
        <button onClick={this.handleClick} className="backBtn">Cancel</button>
      </div>
      
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);