import { START_LOAD_LOCATIONS, LOADED_LOCATIONS, ERROR_LOCATIONS} from './actions-types/locationsListActions';

export const getLocations = () => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(`https://rickandmortyapi.com/api/location`)
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
    type: START_LOAD_LOCATIONS
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_LOCATIONS,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_LOCATIONS,
    payload: {
        error
    }
});