import React, {useEffect} from 'react';
import {getLocation} from '../../Helpers/GetLocation';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './LocationPage.scss';

const LocationPage = ({match, getLocation, loading, locationParams, error}) => {

    useEffect(() => {
        if (!loading) {
            getLocation(match.params.locationId);
        }
    }, []);

    if(loading || !locationParams){
        return null;
    }

    return (
        <div className="location">
            <div className="location__wrapper">
                <img src={locationParams.image} className="location__img" alt="photo"/>

                <div className="location__params">
                    <div className="location__params--text">
                        Name: &nbsp; {locationParams.name}
                    </div>

                    <div className="location__params--text">
                        Type: &nbsp; {locationParams.type}
                    </div>

                    <div className="location__params--text">
                        Dimension: &nbsp; {locationParams.dimension}
                    </div>

                    <div className="location__characters">
                        <div>
                            Residents:
                        </div>

                        <ul className="location__characters--list">
                            &nbsp;
                            {locationParams
                            && locationParams.residents
                            && locationParams.residents.map((unit, index) => (
                                <li key={index} className="location__characters--item">
                                    <Link
                                        to={`/character/${unit.split('/').reverse()[0]}`}
                                        className="location__link"
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
        loading: state.location.loading,
        locationParams: state.location.locationParams,
        error: state.location.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLocation: (id) => {
            dispatch(getLocation(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationPage);