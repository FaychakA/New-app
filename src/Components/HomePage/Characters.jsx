import React, {useEffect} from 'react';
import {getCharacters} from '../../Helpers/GetCharacters';
import {connect} from 'react-redux';

const Characters = ({getCharacters, loading, loaded, charactersList, error}) => {

    useEffect(() => {
        if(!loaded && !loading) {
            getCharacters();
        }
    }, []);

    return (
        <div>
            <ul>
                {charactersList.map(character => (
                    <li key={character.id}>
                        {character.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.characters.loading,
        loaded: state.characters.loaded,
        charactersList: state.characters.charactersList,
        error: state.characters.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => {
            dispatch(getCharacters());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters);
