import React, {useEffect} from 'react';
import {getCharacters} from '../../Helpers/GetCharacters';
import {getNextCharactersPage} from '../../Helpers/GetNextCharactersPage';
import {connect} from 'react-redux';
import CharacterCard from './CharacterCard/CharacterCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Characters.scss';

const Characters = ({getCharacters, getNextCharactersPage, loading, loaded, charactersList, info, error}) => {

    useEffect(() => {
        if (!loaded) {
            getCharacters();
        }
    }, []);

    const handleNextUpdate = () => {
        getNextCharactersPage(info.next);
    };

    if (!charactersList) {
        return null;
    }

    return (
        <div  className="characters">
            <ul className="characters__list">
                <InfiniteScroll
                    dataLength={charactersList.length}
                    next={handleNextUpdate}
                    hasMore={!!info.next}
                    className="characters__scroll"
                >
                    {charactersList.map((character, index) => (
                        <li key={index} className="characters__item">
                            <CharacterCard character={character}/>
                        </li>
                    ))}
                </InfiniteScroll>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.characters.loading,
        loaded: state.characters.loaded,
        info: state.characters.info,
        charactersList: state.characters.charactersList,
        error: state.characters.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => {
            dispatch(getCharacters());
        },
        getNextCharactersPage: (link) => {
            dispatch(getNextCharactersPage(link));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters);
