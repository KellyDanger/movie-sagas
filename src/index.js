import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', fetchGenres)
    yield takeEvery('ADD_MOVIE', addMovie)
}
//add movie SAGA sends post request to movie router and updates home page movie list
function* addMovie(action) {
    try {
        yield axios.post(`api/movie`, action.payload);
        yield put({type: 'FETCH_MOVIES'});
    }catch(error) {
        console.log('ERROR IN POST');
    }
}
//fetchGenres SAGA gets genres from DB to populate add movie dropdown
function* fetchGenres() {
    try {
        const genresResponse = yield axios.get('/api/genre')
        yield put({type: 'SET_GENRES', payload: genresResponse.data});
    }catch(error) {
        console.log('ERROR in FETCH');  
    }
}
//fetchMovies SAGA gets all movies from the DB and sets the movie reducer state to those movies
function* fetchMovies() {
    try{
        const moviesResponse = yield axios.get('/api/movie')
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data})      
    }catch(error) {
        console.log('Error in FETCH');  
    }
}
//send axios request to movierouter with the movie's id as a payload
//set the details router state to the data retrieved from the DB via movierouter
function* fetchDetails(action){
    try{
        const detailsResponse = yield axios.get(`/api/movie/${action.payload}`)
        yield put({type: 'SET_DETAILS', payload: detailsResponse.data})    
    }catch(error) {
        console.log('Error in FETCH DETAILS');
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//details reducer stores detailed information for a specific movie
const details = (state = [], action) => {    
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
