import { START_LOAD_CHARACTERS_NEXT_PAGE, LOADED_CHARACTERS_NEXT_PAGE, ERROR_CHARACTERS_NEXT_PAGE } from './actions-types/charactersListActions';

export const getNextCharactersPage = (link) => {
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
    type: START_LOAD_CHARACTERS_NEXT_PAGE
});

const getLoadedDataSuccess = (data) => ({
    type: LOADED_CHARACTERS_NEXT_PAGE,
    payload: {
        ...data
    }
});

const getDataFailure = (error) => ({
    type: ERROR_CHARACTERS_NEXT_PAGE,
    payload: {
        error
    }
});