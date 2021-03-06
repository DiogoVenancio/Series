import { SET_WHOLE_SERIE, SET_FIELD, SERIE_SAVED_SUCCESS, RESET_FORM } from '../actions';

const INITIAL_STATE = {
    id: null,
    title: '',
    gender: 'science_fiction',
    rate: 0,
    img: '',
    description: ''
}

export default function serieFormReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
        case SET_WHOLE_SERIE:
            return action.serie;
        case RESET_FORM:
            return INITIAL_STATE;
        case SERIE_SAVED_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};