import { START_LOAD_CHARACTERS, LOADED_CHARACTERS, ERROR_CHARACTERS } from './actions';

export const getCharacters = () => {
    return dispatch => {
        dispatch(getStartedLoadData());

        fetch(`https://rickandmortyapi.com/api/character`)
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
   type: START_LOAD_CHARACTERS
});

const getLoadedDataSuccess = (data) => ({
   type: LOADED_CHARACTERS,
    payload: {
       ...data
    }
});

const getDataFailure = (error) => ({
   type: ERROR_CHARACTERS,
    payload: {
       error
    }
});