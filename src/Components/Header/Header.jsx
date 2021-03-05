import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = () => {

    return (
        <header className="header">
            <ul className="header__list">
                <li className="header__item">
                    <NavLink
                        to="/"
                        exact
                        className="header__link"
                    >
                        Home Page
                    </NavLink>
                </li>

                <li className="header__item">
                    <NavLink
                        to="/characters"
                        exact
                        className="header__link"
                    >
                        All Characters
                    </NavLink>
                </li>

                <li className="header__item">
                    <NavLink
                        to="/locations"
                        exact
                        className="header__link"
                    >
                        All Locations
                    </NavLink>
                </li>

                <li className="header__item">
                    <NavLink
                        to="/episodes"
                        exact
                        className="header__link"
                    >
                        All Episodes
                    </NavLink>
                </li>
            </ul>
        </header>
    )
};

export default Header;