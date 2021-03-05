import { START_LOAD_CHARACTER, LOADED_CHARACTER, ERROR_CHARACTER } from './actions';

export const getCharacter = (id) => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
    type: START_LOAD_CHARACTER
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_CHARACTER,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_CHARACTER,
    payload: {
        error
    }
});