import {
    START_LOAD_LOCATIONS,
    LOADED_LOCATIONS,
    ERROR_LOCATIONS,
    START_LOAD_NEXT_LOCATIONS_PAGE,
    LOADED_NEXT_LOCATIONS_PAGE,
    ERROR_NEXT_LOCATIONS_PAGE
} from '../Helpers/actions';

const initialState = {
    loading: false,
    loaded: false,
    info: {},
    locationsList: [],
    error: null,
}

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_LOCATIONS:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case START_LOAD_NEXT_LOCATIONS_PAGE:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case LOADED_LOCATIONS:
            return {
                ...state,
                loading: false,
                loaded: true,
                info: {...action.payload.info},
                locationsList: [...action.payload.results]
            };
        case LOADED_NEXT_LOCATIONS_PAGE:
            return {
                ...state,
                loading: false,
                loaded: true,
                info: {...action.payload.info},
                locationsList: [...state.locationsList, ...action.payload.results]
            };
        case ERROR_LOCATIONS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ERROR_NEXT_LOCATIONS_PAGE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}