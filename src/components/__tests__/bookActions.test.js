import * as actions from '../../redux/booksActions';
import { FETCH_BOOKS, SELECTED_BOOK } from '../../redux/bookTypes';

describe('ACTIONS', () => {
    it('should create an action with correct type', () => {
        const expectedAction = {
            type: FETCH_BOOKS
        }
        expect(actions.fetchBooks()).toEqual(expectedAction)
    })
})

describe('ACTIONS', () => {
    it('should create an action with correct type with payload', () => {
        const expectedAction = {
            type: SELECTED_BOOK,
            payload:undefined
        }
        expect(actions.selectedBook()).toEqual(expectedAction)
    })
})