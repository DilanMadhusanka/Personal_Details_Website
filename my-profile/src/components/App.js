import React from 'react';
import NavBar from './NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;