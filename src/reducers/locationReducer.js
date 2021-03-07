import { START_LOAD_LOCATION, LOADED_LOCATION, ERROR_LOCATION } from '../actions/actions-types/locationActions';

const initialState = {
    loading: false,
    locationParams: null,
    error: null,
}

export default function locationReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_LOCATION:
            return {
                ...state,
                loading: true,
            };
        case LOADED_LOCATION:
            return {
                ...state,
                loading: false,
                locationParams: {...action.payload}
            };
        case ERROR_LOCATION:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}