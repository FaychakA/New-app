import {
    START_LOAD_EPISODES,
    LOADED_EPISODES,
    ERROR_EPISODES,
    START_LOAD_EPISODES_NEXT_PAGE,
    LOADED_EPISODES_NEXT_PAGE,
    ERROR_EPISODES_NEXT_PAGE,
    START_LOAD_EPISODES_BY_SEARCH_PARAMS,
    LOADED_EPISODES_BY_SEARCH_PARAMS,
    ERROR_EPISODES_BY_SEARCH_PARAMS
} from '../actions/actions-types/episodesListActions';

const initialState = {
    loading: false,
    loaded: false,
    searched: false,
    info: {},
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
        case START_LOAD_EPISODES_NEXT_PAGE:
            return {
                ...state,
                loading: true,
                loaded: false
            };
            case START_LOAD_EPISODES_BY_SEARCH_PARAMS:
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
                searched: false,
                info: {...action.payload.info},
                episodesList: [...action.payload.results]
            };
        case LOADED_EPISODES_NEXT_PAGE:
            return {
                ...state,
                loading: false,
                loaded: true,
                info: {...action.payload.info},
                episodesList: [...state.episodesList, ...action.payload.results]
            };
            case LOADED_EPISODES_BY_SEARCH_PARAMS:
            return {
                ...state,
                loading: false,
                loaded: true,
                searched: true,
                info: {...action.payload.info},
                episodesList: [...action.payload.results]
            };
        case ERROR_EPISODES:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ERROR_EPISODES_NEXT_PAGE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
            case ERROR_EPISODES_BY_SEARCH_PARAMS:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}