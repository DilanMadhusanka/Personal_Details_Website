import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <div className="ui three item menu">
                <Link to="/" className="item">Editorials</Link>
                <Link to="/study" className="item">Reviews</Link>
                <Link to="/" className="item">Upcoming Events</Link>
            </div>
        );
    }
}

export default NavBar;