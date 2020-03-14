import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <div className="ui four item menu">
                <Link to="/" className="item">Home</Link>
                <Link to="/education" className="item">Education</Link>
                <Link to="/skills" className="item">Skills</Link>
                <Link to="/contacts" className="item">Contact Us</Link>
            </div>
        );
    }
}

export default NavBar;