import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
//Saga Imports
import {takeLatest, put} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
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

const sagaMiddleware = createSagaMiddleware();


function* searchGifs(action) {
    try{
        const response = yield axios({
            method: 'GET',
            url:`/api/search?search=${action.payload}`
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
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
