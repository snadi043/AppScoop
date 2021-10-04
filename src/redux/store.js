import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import booksReducer from './booksReducer';
import booksSaga from './saga/booksSaga';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(booksReducer);

sagaMiddleware.run(booksSaga);

export default store;