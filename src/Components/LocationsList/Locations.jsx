import React, {useEffect} from 'react';
import {getLocations} from '../../Helpers/GetLocations';
import {getNextLocationsPage} from '../../Helpers/GetNextLocationsPage';
import {connect} from 'react-redux';
import LocationCard from './LocationCard/LocationCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Locations.scss';

const Locations = ({getLocations, getNextLocationsPage, loading, loaded, info, locationsList, error}) => {

    useEffect(() => {
        if (!loaded) {
            getLocations();
        }
    }, []);

    const handleNextUpdate = () => {
        getNextLocationsPage(info.next);
    };

    if (!locationsList) {
        return null;
    }

    return (
        <div className="locations">
            <ul className="locations__list">
                <InfiniteScroll
                    dataLength={locationsList.length}
                    next={handleNextUpdate}
                    hasMore={!!info.next}
                    className="locations__scroll"
                >
                    {locationsList.map(location => (
                        <li key={location.id} className="locations__item">
                            <LocationCard location={location}/>
                        </li>
                    ))}
                </InfiniteScroll>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.locations.loading,
        loaded: state.locations.loaded,
        info: state.locations.info,
        locationsList: state.locations.locationsList,
        error: state.locations.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLocations: () => {
            dispatch(getLocations());
        },
        getNextLocationsPage: (link) => {
            dispatch(getNextLocationsPage(link));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
