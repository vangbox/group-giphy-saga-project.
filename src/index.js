import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
//Saga Imports
import {takeLatest, put} from 'redux-saga/effects';
import SagaMiddleware from 'redux-saga';
import axios from 'axios';
//Redux Imports
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
//Router Imports
import {BrowserRouter} from 'react-router-dom';

const gallery = ((state=[], action) => {
    return state;
})

const favorites = ((state=[], action) => {
    return state;
})
searchGifs('cheesburgers')
function* searchGifs(userQuery) {
    try{
        const response = yield axios({
            method: 'GET',
            url:`/api/search?search=${userQuery}`
        })
        console.log("This is the response from Giphy:", response.data);
    } catch(error) {
        console.log("Error with GET req to server:", error);
    }
}
function* rootSaga() {

    yield takeLatest('SAGA/SEARCH_GIFS', searchGifs)
}

const store = createStore(
    combineReducers({

    }),
    applyMiddleware(SagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
