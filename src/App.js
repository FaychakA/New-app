import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Characters from './Components/HomePage/Characters';
import Locations from "./Components/HomePage/Locations";
import Episodes from "./Components/HomePage/Episodes";
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Header/>
            </div>

            <main>
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
                </Switch>
            </main>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
