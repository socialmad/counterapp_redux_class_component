import { ADD_NUMBER, SUBSTRACT_NUMBER } from '../utils/constants';

export const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                count: state.count + 1
            }
        case SUBSTRACT_NUMBER:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}