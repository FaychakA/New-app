import React, {useEffect} from 'react';
import {getEpisodes} from '../../Helpers/GetEpisodes';
import {getNextEpisodesPage} from '../../Helpers/GetNextEpisodesPage';
import {connect} from 'react-redux';
import EpisodeCard from './EpisodeCard/EpisodeCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Episodes.scss';

const Locations = ({getEpisodes, getNextEpisodesPage, loading, loaded, info, episodesList, error}) => {

    useEffect(() => {
        if(!loaded) {
            getEpisodes();
        }
    }, []);

    const handleNextUpdate = () => {
        getNextEpisodesPage(info.next);
    };

    if (!episodesList) {
        return null;
    }

    return (
        <div className="episodes">
            <ul className="episodes__list">
                <InfiniteScroll
                    dataLength={episodesList.length}
                    next={handleNextUpdate}
                    hasMore={!!info.next}
                    className="episodes__scroll"
                >
                    {episodesList.map(ep => (
                        <li key={ep.id} className="episodes__item">
                            <EpisodeCard ep={ep} />
                        </li>
                    ))}
                </InfiniteScroll>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.episodes.loading,
        loaded: state.episodes.loaded,
        info: state.episodes.info,
        episodesList: state.episodes.episodesList,
        error: state.episodes.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getEpisodes: () => {
            dispatch(getEpisodes());
        },
        getNextEpisodesPage: (link) => {
            dispatch(getNextEpisodesPage(link));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
