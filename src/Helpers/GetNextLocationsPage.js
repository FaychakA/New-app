import { START_LOAD_NEXT_LOCATIONS_PAGE, LOADED_NEXT_LOCATIONS_PAGE, ERROR_NEXT_LOCATIONS_PAGE } from './actions';

export const getNextLocationsPage = (link) => {
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
    type: START_LOAD_NEXT_LOCATIONS_PAGE
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_NEXT_LOCATIONS_PAGE,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_NEXT_LOCATIONS_PAGE,
    payload: {
        error
    }
});