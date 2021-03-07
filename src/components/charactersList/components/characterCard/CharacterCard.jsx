import React from 'react';
import {Link} from 'react-router-dom';
import './CharacterCard.scss';

const CharacterCard = ({character}) => {

    return (
        <div className="card">
            <img src={character.image} className="card__img" alt="photo"/>

            <div className="card__wrapper">
                Name: &nbsp;
                <Link to={`/character/${character.id}`} className="card__link">
                    {character.name}
                </Link>

                <div className="card__item">
                    Gender: &nbsp; {character.gender}
                </div>

                <div className="card__item">
                    Species: &nbsp; {character.species}
                </div>

                <div className="card__item">
                    Status: &nbsp; {character.status}
                </div>

                <div className="card__item">
                    Type: &nbsp; {character.type}
                </div>

            </div>
        </div>
    )
};

export default CharacterCard;