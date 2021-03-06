import { START_LOAD_EPISODE, LOADED_EPISODE, ERROR_EPISODE } from '../Helpers/actions';

const initialState = {
    loading: false,
    episodeParams: null,
    error: null,
}

export default function episodeReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_EPISODE:
            return {
                ...state,
                loading: true,
            };
        case LOADED_EPISODE:
            return {
                ...state,
                loading: false,
                episodeParams: {...action.payload}
            };
        case ERROR_EPISODE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}