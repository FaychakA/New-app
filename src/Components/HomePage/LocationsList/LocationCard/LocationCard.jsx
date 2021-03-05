import React from 'react';
import {Link} from 'react-router-dom';
import './LocationCard.scss';

const LocationCard = ({location}) => {

    return (
        <div className="card">

            <div className="card__wrapper">
                Name: &nbsp;
                <Link to={`location/${location.id}`} className="card__link">
                    {location.name}
                </Link>

                <div className="card__item">
                    Type: &nbsp; {location.type}
                </div>

                <div className="card__item">
                    Dimension: &nbsp; {location.dimension}
                </div>
            </div>
        </div>
    )
};

export default LocationCard;