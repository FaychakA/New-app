import React, {useEffect} from 'react';
import {getEpisodes} from '../../../Helpers/GetEpisodes';
import {connect} from 'react-redux';
import EpisodeCard from './EpisodeCard/EpisodeCard'
import './Episodes.scss';

const Locations = ({getEpisodes, loading, loaded, episodesList, error}) => {

    useEffect(() => {
        if(!loaded && !loading) {
            getEpisodes();
        }
    }, []);
    console.log(episodesList, "episodesList");

    return (
        <div className="episodes">
            <ul className="episodes__list">
                {episodesList.map(ep => (
                    <li key={ep.id} className="episodes__item">
                        <EpisodeCard ep={ep} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.episodes.loading,
        loaded: state.episodes.loaded,
        episodesList: state.episodes.episodesList,
        error: state.episodes.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEpisodes: () => {
            dispatch(getEpisodes());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
