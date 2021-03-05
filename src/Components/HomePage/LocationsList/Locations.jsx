import React, {useEffect} from 'react';
import {getLocations} from '../../../Helpers/GetLocations';
import {connect} from 'react-redux';
import LocationCard from './LocationCard/LocationCard';
import './Locations.scss';

const Locations = ({getLocations, loading, loaded, locationsList, error}) => {

    useEffect(() => {
        if(!loaded && !loading) {
            getLocations();
        }
    }, []);
    console.log(locationsList, "locationsList");

    return (
        <div className="locations">
            <ul className="locations__list">
                {locationsList.map(location => (
                    <li key={location.id} className="locations__item">
                        <LocationCard location={location} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.locations.loading,
        loaded: state.locations.loaded,
        locationsList: state.locations.locationsList,
        error: state.locations.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLocations: () => {
            dispatch(getLocations());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
