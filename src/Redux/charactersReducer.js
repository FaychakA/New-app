import {
    START_LOAD_CHARACTERS,
    LOADED_CHARACTERS,
    ERROR_CHARACTERS,
    START_LOAD_NEXT_CHARACTERS_PAGE,
    LOADED_NEXT_CHARACTERS_PAGE,
    ERROR_NEXT_CHARACTERS_PAGE,
    START_LOAD_CHARACTERS_BY_SEARCH_PARAMS,
    LOADED_CHARACTERS_BY_SEARCH_PARAMS,
    ERROR_CHARACTERS_BY_SEARCH_PARAMS
} from '../Helpers/actions';

const initialState = {
    loading: false,
    loaded: false,
    searched: false,
    info: {},
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
        case START_LOAD_NEXT_CHARACTERS_PAGE:
            return {
                ...state,
                loading: true,
                loaded: false
            };
            case START_LOAD_CHARACTERS_BY_SEARCH_PARAMS:
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
                searched: false,
                info: {...action.payload.info},
                charactersList: [...action.payload.results]
            };
        case LOADED_NEXT_CHARACTERS_PAGE:
            return {
                ...state,
                loading: false,
                loaded: true,
                info: {...action.payload.info},
                charactersList: [...state.charactersList, ...action.payload.results]
            };
            case LOADED_CHARACTERS_BY_SEARCH_PARAMS:
            return {
                ...state,
                loading: false,
                loaded: true,
                searched: true,
                info: {...action.payload.info},
                charactersList: [...action.payload.results]
            };
        case ERROR_CHARACTERS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ERROR_NEXT_CHARACTERS_PAGE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
            case ERROR_CHARACTERS_BY_SEARCH_PARAMS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}