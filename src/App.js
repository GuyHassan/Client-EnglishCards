import React from 'react';
import WordCards from './Pages/Cards/Cards';
import { Uploads } from './Pages/UploadsFiles';
import { Login } from './Pages/Login';
import './App.css';
import { NavBar } from './components/NavBar';
import { RouteNotFound } from './Utils';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { ProtectedRoute } from './Utils';
import { LoginProvider } from './Context';

const App = () => {
    return (
        <LoginProvider>
            <Router>
                <NavBar />
                <Switch>
                    <ProtectedRoute exact path="/wordlearn" component={WordCards} />
                    <ProtectedRoute exact path="/uploadWords" component={Uploads} />
                    <Route exact path="/login" component={Login} />
                    <Route path="*" component={RouteNotFound} />
                </Switch>
            </Router>
        </LoginProvider>
    )
}

export default App;