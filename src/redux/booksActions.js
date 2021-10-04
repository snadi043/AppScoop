import { FETCH_BOOKS, SELECTED_BOOK } from "./bookTypes"

export const fetchBooks = () => {
    return {
        type: FETCH_BOOKS
    }
}
export const selectedBook = (sb) => {
    return {
        type: SELECTED_BOOK,
        payload: sb
    }
}

