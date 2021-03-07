import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = () => {

    return (
        <header className="header">
            <ul className="header__list">
                <li className="header__item">
                    <NavLink
                        to="/character"
                        exact
                        className="header__link"
                        activeClassName="header__link--active"
                    >
                        All Characters
                    </NavLink>
                </li>

                <li className="header__item">
                    <NavLink
                        to="/location"
                        exact
                        className="header__link"
                        activeClassName="header__link--active"
                    >
                        All Locations
                    </NavLink>
                </li>

                <li className="header__item">
                    <NavLink
                        to="/episode"
                        exact
                        className="header__link"
                        activeClassName="header__link--active"
                    >
                        All Episodes
                    </NavLink>
                </li>
            </ul>
        </header>
    )
};

export default Header;