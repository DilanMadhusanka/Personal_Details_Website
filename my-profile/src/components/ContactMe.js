import React from 'react';
import SocialMedia from './SocialMedia';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="ui container" style={{padding:"100px 0px 0px 0px"}}>
            <div className="ui stacked segment">
            <div className="ui list huge">
                <div className="item">
                    <i className="phone icon"></i>
                    <div className="content">
                        071 3287 289
                    </div>
                </div>
                <div className="item">
                    <i className="at icon"></i>
                    <div className="content">
                        dilan.madhusanka289@gmail.com
                    </div>
                </div>
                <div className="item">
                    <i className="mail icon"></i>
                    <div className="content">
                        No 17, Main Street, Opanayaka
                    </div>
                </div>
                <div className="item">
                    <i className="marker icon"></i>
                    <div className="content">
                        <Link to="/contacts" onClick={() => window.open("https://goo.gl/maps/Q6BLXnAKZETBW8qf6", "_blank")}>My Location</Link>
                    </div>
                </div>
            </div>
        </div>
        <SocialMedia />
        </div>
    );
}

export default ContactUs;