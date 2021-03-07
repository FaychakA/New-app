import {
    START_LOAD_LOCATIONS,
    LOADED_LOCATIONS,
    ERROR_LOCATIONS,
    START_LOAD_LOCATIONS_NEXT_PAGE,
    LOADED_LOCATIONS_NEXT_PAGE,
    ERROR_LOCATIONS_NEXT_PAGE,
    START_LOAD_LOCATIONS_BY_SEARCH_PARAMS,
    LOADED_LOCATIONS_BY_SEARCH_PARAMS,
    ERROR_LOCATIONS_BY_SEARCH_PARAMS
} from '../actions/actions-types/locationsListActions';

const initialState = {
    loading: false,
    loaded: false,
    searched: false,
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
        case START_LOAD_LOCATIONS_NEXT_PAGE:
            return {
                ...state,
                loading: true,
                loaded: false
            };
            case START_LOAD_LOCATIONS_BY_SEARCH_PARAMS:
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
                searched: false,
                info: {...action.payload.info},
                locationsList: [...action.payload.results]
            };
        case LOADED_LOCATIONS_NEXT_PAGE:
            return {
                ...state,
                loading: false,
                loaded: true,
                info: {...action.payload.info},
                locationsList: [...state.locationsList, ...action.payload.results]
            };
            case LOADED_LOCATIONS_BY_SEARCH_PARAMS:
            return {
                ...state,
                loading: false,
                loaded: true,
                searched: true,
                info: {...action.payload.info},
                locationsList: [...action.payload.results]
            };
        case ERROR_LOCATIONS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ERROR_LOCATIONS_NEXT_PAGE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
            case ERROR_LOCATIONS_BY_SEARCH_PARAMS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}