import booksReducer from "../../redux/booksReducer";
import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS } from "../../redux/bookTypes";

describe('REDUCER', () => {
    it('should return the initial state', () => {
        expect(booksReducer({
            booksList: [],
            selectedBook: {},
            loading: false,
            error: ''
        }, {})).toEqual({
            booksList: [],
            selectedBook: {},
            loading: false,
            error: ''
        })
    })

    it('should handle "FETCH_BOOKS" action', () => {
        expect(booksReducer({
            loading: false,
        }, { type: FETCH_BOOKS })).toEqual({ loading: true })
    })

    it('should handle "FETCH_BOOKS_SUCCESS" action', () => {
        const mockData = [{
            "author": "John Byrne Leicester Warren (3rd baron De Tabley.)",
            "title": "A screw loose, by William P. Lancaster",
            "kind": "books#volume"
        }];

        expect(booksReducer({
            booksList: [],
            loading: false
        }, { type: FETCH_BOOKS_SUCCESS, books: mockData })).toEqual({ loading: false, booksList: mockData })
    })
})