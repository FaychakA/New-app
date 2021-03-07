import { START_LOAD_LOCATIONS_NEXT_PAGE, LOADED_LOCATIONS_NEXT_PAGE, ERROR_LOCATIONS_NEXT_PAGE } from './actions-types/locationsListActions';

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
    type: START_LOAD_LOCATIONS_NEXT_PAGE
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_LOCATIONS_NEXT_PAGE,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_LOCATIONS_NEXT_PAGE,
    payload: {
        error
    }
});