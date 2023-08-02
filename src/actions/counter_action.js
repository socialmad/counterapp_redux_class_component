import { ADD_NUMBER, SUBSTRACT_NUMBER } from '../utils/constants';

export function incrementCount() {
    return {
        type: ADD_NUMBER,
    }
}

export function decrementCount() {
    return {
        type: SUBSTRACT_NUMBER,
    }
}