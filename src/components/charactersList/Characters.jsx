import React, {useEffect} from 'react';
import {getCharacters} from '../../actions/GetCharacters';
import {getNextCharactersPage} from '../../actions/GetNextCharactersPage';
import {getCharacterBySearchParams} from '../../actions/GetCharactersBySearchParams';
import {connect} from 'react-redux';
import CharacterCard from './components/characterCard/CharacterCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import CharactersSearchBar from './components/charactersSerchBar/CharactersSerchBar';
import './Characters.scss';

const Characters = ({
                        getCharacters,
                        getNextCharactersPage,
                        getCharacterBySearchParams,
                        loading,
                        loaded,
                        searched,
                        charactersList,
                        info,
                        error
                    }) => {

    useEffect(() => {
        if (!loaded || !searched) {
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
        <div className="characters">
            <CharactersSearchBar getCharacterBySearchParams={getCharacterBySearchParams}/>

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
        searched: state.characters.serched,
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
        },
        getCharacterBySearchParams: (params) => {
            dispatch(getCharacterBySearchParams(params));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters);
