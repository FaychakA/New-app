import React from 'react';
import {Link} from 'react-router-dom';
import './EpisodeCard.scss';

const EpisodeCard = ({ep}) => {

    return (
        <div className="card">
            <img src={ep.image} className="card__img" alt="photo"/>

            <div className="card__wrapper">
                <div className="card__item">
                    Name: &nbsp; {ep.name}
                </div>

                Episode: &nbsp;
                <Link to={`/episode/${ep.id}`} className="card__link">
                    {ep.episode}
                </Link>
            </div>
        </div>
    )
};

export default EpisodeCard;