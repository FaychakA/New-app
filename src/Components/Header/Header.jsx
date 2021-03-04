import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        exact
                    >
                        Home Page
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/characters"
                        exact
                    >
                        List of all Characters
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/locations"
                        exact
                    >
                        List of all Locations
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/episodes"
                        exact
                    >
                        List of all Episodes
                    </NavLink>
                </li>
            </ul>
        </header>
    )
};

export default Header;