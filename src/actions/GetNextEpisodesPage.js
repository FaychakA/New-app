import { START_LOAD_EPISODES_NEXT_PAGE, LOADED_EPISODES_NEXT_PAGE, ERROR_EPISODES_NEXT_PAGE } from './actions-types/episodesListActions';

export const getNextEpisodesPage = (link) => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(link)
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
    type: START_LOAD_EPISODES_NEXT_PAGE
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_EPISODES_NEXT_PAGE,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_EPISODES_NEXT_PAGE,
    payload: {
        error
    }
});