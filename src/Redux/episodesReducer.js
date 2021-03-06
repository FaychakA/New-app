import { START_LOAD_EPISODES, LOADED_EPISODES, ERROR_EPISODES } from '../Helpers/actions';

const initialState = {
    loading: false,
    loaded: false,
    episodesList: [],
    error: null,
}

export default function episodesReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOAD_EPISODES:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case LOADED_EPISODES:
            return {
                ...state,
                loading: false,
                loaded: true,
                episodesList: [...state.episodesList, ...action.payload.results]
            };
        case ERROR_EPISODES:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}