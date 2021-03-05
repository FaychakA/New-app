import React, {useEffect} from 'react';
import {getCharacters} from '../../../Helpers/GetCharacters';
import {connect} from 'react-redux';
import CharacterCard from './CharacterCard/CharacterCard';
import './Characters.scss';

const Characters = ({getCharacters, loading, loaded, charactersList, error}) => {

    useEffect(() => {
        if(!loaded && !loading) {
            getCharacters();
        }
    }, []);
    console.log(charactersList, "characterList");

    return (
        <div className="characters">
            <ul className="characters__list">
                {charactersList.map(character => (
                    <li key={character.id} className="characters__item">
                        <CharacterCard character={character} />
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
