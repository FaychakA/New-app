import React, {useEffect} from 'react';
import {getLocations} from '../../actions/GetLocations';
import {getNextLocationsPage} from '../../actions/GetNextLocationsPage';
import {getLocationsBySearchParams} from '../../actions/GetLocationsBySearchParams';
import {connect} from 'react-redux';
import LocationCard from './components/locationCard/LocationCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import LocationsSearchBar from './components/locatiosSearchBar/LocationsSearchBar';
import './Locations.scss';

const Locations = ({
                       getLocations,
                       getNextLocationsPage,
                       getLocationsBySearchParams,
                       loading,
                       loaded,
                       info,
                       searched,
                       locationsList,
                       error
                   }) => {

    useEffect(() => {
        if (!loaded || !searched) {
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
            <LocationsSearchBar getLocationsBySearchParams={getLocationsBySearchParams}/>

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
        earched: state.locations.serched,
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
        },
        getLocationsBySearchParams: (params) => {
            dispatch(getLocationsBySearchParams(params));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
