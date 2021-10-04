import { FETCH_BOOKS, FETCH_BOOKS_FAILED, FETCH_BOOKS_SUCCESS, SELECTED_BOOK } from "./bookTypes"

const initialState = {
    booksList: [],
    selectedBook: {},
    loading: false,
    error: ''
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                loading: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                booksList: action.books
            }
        case FETCH_BOOKS_FAILED:
            return {
                ...state,
                loading: true,
                error: action.message
            }
        case SELECTED_BOOK:
            return {
                ...state,
                selectedBook: action.payload
            }

        default:
            return state
    }
}

export default booksReducer;