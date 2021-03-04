import { START_LOAD_CHARACTERS, LOADED_CHARACTERS, ERROR_CHARACTERS } from '../Helpers/actions';

const initialState = {
    loading: false,
    loaded: false,
    charactersList: [],
    error: null,
}

export default function charactersReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_CHARACTERS:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case LOADED_CHARACTERS:
            return {
                ...state,
                loading: false,
                loaded: true,
                charactersList: [...state.charactersList, ...action.payload.results]
            };
        case ERROR_CHARACTERS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}