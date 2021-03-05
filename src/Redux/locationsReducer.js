import { START_LOAD_LOCATIONS, LOADED_LOCATIONS, ERROR_LOCATIONS } from '../Helpers/actions';

const initialState = {
    loading: false,
    loaded: false,
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
        case LOADED_LOCATIONS:
            return {
                ...state,
                loading: false,
                loaded: true,
                locationsList: [...state.locationsList, ...action.payload.results]
            };
        case ERROR_LOCATIONS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}