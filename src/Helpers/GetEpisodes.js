import { START_LOAD_EPISODES, LOADED_EPISODES, ERROR_EPISODES} from './actions';

export const getEpisodes = () => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(`https://rickandmortyapi.com/api/episode`)
            .then( response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then(res => {
                dispatch(getLoadedDataSuccess(res));
            })
            .catch(err => {
                dispatch(getDataFailure(err.message));
            })
    };
};

const getStartedLoadData = () => ({
    type: START_LOAD_EPISODES
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_EPISODES,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_EPISODES,
    payload: {
        error
    }
});