import React, {useEffect} from 'react';
import {getCharacter} from '../../../Helpers/GetCharacter';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './CharacterPage.scss';

const CharacterPage = ({match, getCharacter, loading, characterParams, error}) => {

    useEffect(() => {
        if (!loading) {
            getCharacter(match.params.characterId);
        }
    }, []);

    if(loading || !characterParams){
        return null;
    }

    return (
        <div className="character">
            <div className="character__wrapper">
                <img src={characterParams.image} className="character__img" alt="photo"/>

                <div className="character__params">
                    <div className="character__params--text">
                        Name: &nbsp; {characterParams.name}
                    </div>

                    <div className="character__params--text">
                        Gender: &nbsp; {characterParams.gender}
                    </div>

                    <div className="character__params--text">
                        Species: &nbsp; {characterParams.species}
                    </div>

                    <div className="character__params--text">
                        Status: &nbsp; {characterParams.status}
                    </div>

                    <div className="character__params--text">
                        Type: &nbsp; {characterParams.type}
                    </div>

                    <div className="character__params--text">
                        Origin: &nbsp;
                        <Link
                            to={`/location/${characterParams.origin.url.split('/').reverse()[0]}`}
                            className="character__link"
                        >
                            {characterParams.origin.name}
                        </Link>
                    </div>

                    <div className="character__episode">
                        <div>
                            Episodes:
                        </div>

                        <ul className="character__episode--list">
                            &nbsp;
                            {characterParams
                            && characterParams.episode
                            && characterParams.episode.map((ep, index) => (
                                <li key={index} className="character__episode--item">
                                    <Link
                                        to={`/episode/${ep.split('/').reverse()[0]}`}
                                        className="character__link"
                                    >
                                        {ep.split('/').reverse()[0]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="character__location">
                        Location: &nbsp;
                        <Link
                            to={`/location/${characterParams.location.url.split('/').reverse()[0]}`}
                            className="character__link"
                        >
                            {characterParams.location.url.split('/').reverse()[0]}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.character.loading,
        characterParams: state.character.characterParams,
        error: state.character.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCharacter: (id) => {
            dispatch(getCharacter(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterPage);