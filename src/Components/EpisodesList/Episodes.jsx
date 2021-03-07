import React, {useEffect} from 'react';
import {getEpisodes} from '../../Helpers/GetEpisodes';
import {getNextEpisodesPage} from '../../Helpers/GetNextEpisodesPage';
import {getEpisodesBySearchParams} from '../../Helpers/GetEpisodesBySearchParams';
import {connect} from 'react-redux';
import EpisodeCard from './EpisodeCard/EpisodeCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import EpisodesSearchBar from '../EpisodesSearchBar/EpisodesSearchBar';
import './Episodes.scss';

const Locations = ({
                       getEpisodes,
                       getNextEpisodesPage,
                       getEpisodesBySearchParams,
                       loading,
                       loaded,
                       info,
                       searched,
                       episodesList,
                       error
}) => {

    useEffect(() => {
        if(!loaded || !searched) {
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
            <EpisodesSearchBar getEpisodesBySearchParams={getEpisodesBySearchParams} />

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
        searched: state.episodes.serched,
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
        },
        getEpisodesBySearchParams: (params) => {
            dispatch(getEpisodesBySearchParams(params));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
