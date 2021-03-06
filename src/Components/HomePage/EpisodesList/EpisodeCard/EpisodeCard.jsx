import React from 'react';
import {Link} from 'react-router-dom';
import './EpisodeCard.scss';

const EpisodeCard = ({ep}) => {

    return (
        <div className="card">

            <div className="card__wrapper">
                <div className="card__item">
                    Name: &nbsp; {ep.name}
                </div>

                Episode: &nbsp;
                <Link to={`episode/${ep.id}`} className="card__link">
                    {ep.name}
                </Link>
            </div>
        </div>
    )
};

export default EpisodeCard;