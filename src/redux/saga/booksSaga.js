import { call, put, takeEvery, all } from 'redux-saga/effects'
import { FETCH_BOOKS, FETCH_BOOKS_FAILED, FETCH_BOOKS_SUCCESS } from '../bookTypes';

const apiUrl = `https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a`;

export function fetchBooksApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

export function* fetchBooks(action) {
    try {
        const books = yield call(fetchBooksApi);
        yield put({ type: FETCH_BOOKS_SUCCESS, books: books });
    } catch (e) {
        yield put({ type: FETCH_BOOKS_FAILED, message: 'Failed to fetch resources. Please try again!!!' });
    }
}

export function* booksSaga() {
    yield takeEvery(FETCH_BOOKS, fetchBooks);
}

export default function* rootSaga() {
    yield all([
        booksSaga(),
    ])
}