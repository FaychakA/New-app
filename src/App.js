import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Characters from './Components/HomePage/CharactersList/Characters';
import Locations from "./Components/HomePage/LocationsList/Locations";
import Episodes from "./Components/HomePage/EpisodesList/Episodes";
import Footer from "./Components/Footer/Footer";
import CharacterPage from "./Components/HomePage/CharacterPage/CharacterPage";
import './App.scss';

function App() {
    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <main className="app__main">
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={HomePage}
                    />

                    <Route
                        path="/characters"
                        exact
                        component={Characters}
                    />

                    <Route
                        path="/locations"
                        exact
                        component={Locations}
                    />

                    <Route
                        path="/episodes"
                        exact
                        component={Episodes}
                    />

                    <Route
                    path="/character/:characterId"
                    exact
                    component={CharacterPage}
                    />
                </Switch>
            </main>

            <div className="app__footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
