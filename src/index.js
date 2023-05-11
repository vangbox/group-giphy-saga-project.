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


//rootSaga logger
const sagaMiddleware = createSagaMiddleware()

//rootSaga generator function
function* rootSaga() {
    yield takeLatest('GET_GALLERY', getGallery);
    yield takeLatest('GET_FAVORITES', getFavorites);
    yield takeLatest('POST_FAVORITE', postFavorite);
    yield takeLatest('DELETE_FAVORITE', deleteFavorite);
}

//Saga Functions
function* getGallery() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/gallery'
        })

        const gallery = response.data;

        yield put({
            type: 'FETCH_GALLERY',
            payload: gallery
        })
    } catch (error) {
        console.log('Saga getGallery failed');
    }
}

function* getFavorites() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/favorites'
        })

        const favorites = response.data;

        yield put({
            type: 'FETCH_FAVORITES',
            payload: favorites
        })
    } catch (error) {
        console.log('Saga getFavorites failed')
    }
}

function* postFavorite(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/favorites',
            data: action.payload
        })
        
        yield put({
            type: 'GET_FAVORITES'
        })
    } catch (error) {
        console.log('Saga postFavorites failed')
    }
}

function* deleteFavorite(action) {
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `/api/favorites/${action.payload}`,
        })

        yield put({
            type: 'GET_FAVORITES'
        })
    } catch {
        console.log('Saga deleteFavorite failed')
    }
}

//Redux Reducers
const gallery = ((state=[], action) => {
    switch(action.type) {
        case 'FETCH_GALLERY':
            return [...state, action.payload];
        default:
            return state;
    }

})
const favorites = ((state=[], action) => {
    switch(action.type) {
        case 'FETCH_FAVORITES':
            return [...state, action.payload];
    }
    return state;
})


function* searchGifs(action) {
    try{
        const response = yield axios({
            method: 'GET',
            url:`/api/search?search=${action.payload}`
        })
        console.log("This is the response from Giphy:", response.data);

        yield put({
            type: 'FETCH_GALLERY',
            payload: response.data
        })
    } catch(error) {
        console.log("Error with GET req to server:", error);
    }
}
function* rootSaga() {

    yield takeLatest('SAGA/SEARCH_GIFS', searchGifs)
}

const store = createStore(
    combineReducers({
        gallery,
        favorites
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);