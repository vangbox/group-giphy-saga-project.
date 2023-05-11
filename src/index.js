import React from 'react';
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

const store = createStore(
    combineReducers({

    }),
    applyMiddleware(SagaMiddleware, logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
