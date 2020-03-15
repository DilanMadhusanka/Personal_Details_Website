import React from 'react';
import profile from '../images/profile.jpg'
import SocialMedia from './SocialMedia';

const Home = () => {
    return (
        <div className="ui container">
            <h1 className="ui center aligned icon header" style={{color:"black", fontSize:'50px'}}>
            <img class="ui medium circular image" src={profile} style={{width:"200px", height:"200px"}} alt="img" />
                {/* <i class="circular users icon"></i> */}
                I am Dilan Madhusanka
            </h1>

            <div class="ui raised very padded text container segment">
                {/* <h2 class="ui header">Dogs Roles with Humans</h2> */}
                <p>I am undergraduate of Software Engineering in University of Kelaniya. Burn on 13th of November in 1996 and
                    home town is Rathnapura. I have followed the subjects as full stack developer about web and mobile.
                </p>
            </div> <br />
            <SocialMedia />

        </div>
    );
}

export default Home;