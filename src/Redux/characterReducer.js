import { START_LOAD_CHARACTER, LOADED_CHARACTER, ERROR_CHARACTER } from '../Helpers/actions';

const initialState = {
    loading: false,
    characterParams: null,
    error: null,
}

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_CHARACTER:
            return {
                ...state,
                loading: true,
            };
        case LOADED_CHARACTER:
            console.log(action.payload, "action.payload");
            return {
                ...state,
                loading: false,
                characterParams: {...action.payload}
            };
        case ERROR_CHARACTER:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}