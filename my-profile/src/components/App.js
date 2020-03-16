import React from 'react';
import NavBar from './NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Education from './Education'
import Skills from './Skills';
import ContactMe from './ContactMe';
import bg from '../images/back.jpg'

const App = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat', height:'100vh'}}>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/education" exact component={Education} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/contacts" exact component={ContactMe} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;