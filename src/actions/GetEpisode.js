import { START_LOAD_EPISODE, LOADED_EPISODE, ERROR_EPISODE } from './actions-types/episodeActions';

export const getEpisode = (id) => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
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
    type: START_LOAD_EPISODE
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_EPISODE,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_EPISODE,
    payload: {
        error
    }
});