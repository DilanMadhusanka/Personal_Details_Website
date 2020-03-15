import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const style = { fontSize:"18px" }
        return(
            <div className="ui inverted menu" style={{height:"50px"}}>
                <Link to="/" className="red item active" style={style}>Home</Link>
                <Link to="/education" className="item" style={style}>Education</Link>
                <Link to="/skills" className="item" style={style}>Skills</Link>
                <Link to="/contacts" className="item" style={style}>Contact Us</Link>
            </div>
        );
    }
}

export default NavBar;