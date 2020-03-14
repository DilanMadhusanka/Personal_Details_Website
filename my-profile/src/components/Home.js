import React from 'react';
import profile from '../images/profile.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="ui container">
            <h1 className="ui center aligned icon header">
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


            <div className="ui center aligned container">
                <div class="ui relaxed horizontal list">
                    <div class="item">
                        <div className="content">
                            <Link className="header"><i className="facebook square icon black big" /></Link>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <Link class="header"><i className="linkedin icon black big" /></Link>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                        <Link class="header"><i className="github icon black big" /></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;