import React from 'react';
import SocialMedia from './SocialMedia';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="ui container" style={{padding:"100px 0px 0px 0px"}}>
            <div className="ui stacked segment">
            <div class="ui list huge">
                <div class="item">
                    <i class="phone icon"></i>
                    <div class="content">
                        071 3287 289
                    </div>
                </div>
                <div class="item">
                    <i class="at icon"></i>
                    <div class="content">
                        dilan.madhusanka289@gmail.com
                    </div>
                </div>
                <div class="item">
                    <i class="mail icon"></i>
                    <div class="content">
                        No 17, Main Street, Opanayaka
                    </div>
                </div>
                <div class="item">
                    <i class="marker icon"></i>
                    <div class="content">
                        <Link onClick={() => window.open("https://goo.gl/maps/Q6BLXnAKZETBW8qf6", "_blank")}>My Location</Link>
                    </div>
                </div>
            </div>
        </div>
        <SocialMedia />
        </div>
    );
}

export default ContactUs;