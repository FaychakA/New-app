import React, {useEffect} from 'react';
import {getEpisode} from '../../../Helpers/GetEpisode';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './EpisodePage.scss';

const EpisodePage = ({match, getEpisode, loading, episodeParams, error}) => {

    useEffect(() => {
        if (!loading) {
            getEpisode(match.params.episodeId);
        }
    }, []);
    console.log(episodeParams, "episodeParams");

    if(loading || !episodeParams){
        return null;
    }

    return (
        <div className="episode">
            <div className="episode__wrapper">
                <img src={episodeParams.image} className="episode__img" alt="photo"/>

                <div className="episode__params">
                    <div className="episode__params--text">
                        Name: &nbsp; {episodeParams.name}
                    </div>

                    <div className="episode__params--text">
                        Episode: &nbsp; {episodeParams.episode}
                    </div>

                    <div className="episode__characters">
                        <div>
                            Characters:
                        </div>

                        <ul className="episode__characters--list">
                            &nbsp;
                            {episodeParams
                            && episodeParams.characters
                            && episodeParams.characters.map((unit, index) => (
                                <li key={index} className="episode__characters--item">
                                    <Link
                                        to={`/character/${unit.split('/').reverse()[0]}`}
                                        className="episode__link"
                                    >
                                        {unit.split('/').reverse()[0]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.episode.loading,
        episodeParams: state.episode.episodeParams,
        error: state.episode.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEpisode: (id) => {
            dispatch(getEpisode(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EpisodePage);