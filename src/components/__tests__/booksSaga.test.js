import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS } from '../../redux/bookTypes';
import { fetchBooks, booksSaga } from '../../redux/saga/booksSaga';
describe('SAGAS', () => {
    it('should dispatch action "FETCH_BOOKS" ', () => {
        const generator = booksSaga();
        expect(generator.next().value)
            .toEqual(takeEvery(FETCH_BOOKS, fetchBooks));
        expect(generator.next().done).toBeTruthy();
    })

    it('should dispatch action "FETCH_BOOKS_SUCCESS" with result from fetch Books Api', () => {
        const mockResponse = [{
            "author": "John Byrne Leicester Warren (3rd baron De Tabley.)",
            "title": "A screw loose, by William P. Lancaster",
            "kind": "books#volume"
        }];
        const generator = fetchBooks();
        generator.next();
        expect(generator.next(mockResponse).value)
            .toEqual(put({ type: FETCH_BOOKS_SUCCESS, books: mockResponse }))
        expect(generator.next().done).toBeTruthy();
    })
})