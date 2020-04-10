import React from 'react';
import NavBar from './NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Education from './Education'
import Skills from './Skills';
import ContactMe from './ContactMe';
import ParticlesBg from 'particles-bg';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/education" exact component={Education} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/contacts" exact component={ContactMe} />
                </Switch>
            </BrowserRouter>
            <ParticlesBg bg={true} type="cobweb" />
        </div>
    );
}

export default App;