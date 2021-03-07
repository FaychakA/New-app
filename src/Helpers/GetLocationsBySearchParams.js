import {
    START_LOAD_LOCATIONS_BY_SEARCH_PARAMS,
    LOADED_LOCATIONS_BY_SEARCH_PARAMS,
    ERROR_LOCATIONS_BY_SEARCH_PARAMS
} from './actions';

export const getLocationsBySearchParams = (params) => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(`https://rickandmortyapi.com/api/location/?${params}`)
            .then(response => {
                if (response.ok) {
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
    type: START_LOAD_LOCATIONS_BY_SEARCH_PARAMS
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_LOCATIONS_BY_SEARCH_PARAMS,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_LOCATIONS_BY_SEARCH_PARAMS,
    payload: {
        error
    }
});