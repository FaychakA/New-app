import { START_LOAD_LOCATION, LOADED_LOCATION, ERROR_LOCATION } from './actions-types/locationActions';

export const getLocation = (id) => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(`https://rickandmortyapi.com/api/location/${id}`)
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
    type: START_LOAD_LOCATION
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_LOCATION,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_LOCATION,
    payload: {
        error
    }
});