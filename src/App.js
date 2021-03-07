import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from "./components/common/footer/Footer";
import Characters from './components/charactersList/Characters';
import Locations from "./components/locationsList/Locations";
import Episodes from "./components/episodesList/Episodes";
import CharacterPage from "./components/characterPage/CharacterPage";
import LocationPage from "./components/locationPage/LocationPage";
import EpisodePage from "./components/episodePage/EpisodePage";
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
                    >
                        <Redirect to="/character" />
                    </Route>

                    <Route
                        path="/character"
                        exact
                        component={Characters}
                    />

                    <Route
                        path="/location"
                        exact
                        component={Locations}
                    />

                    <Route
                        path="/episode"
                        exact
                        component={Episodes}
                    />

                    <Route
                    path="/character/:characterId"
                    exact
                    component={CharacterPage}
                    />

                    <Route
                        path="/location/:locationId"
                        exact
                        component={LocationPage}
                    />

                    <Route
                        path="/episode/:episodeId"
                        exact
                        component={EpisodePage}
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
