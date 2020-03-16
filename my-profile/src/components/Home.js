import React from 'react';
import profile from '../images/profile.jpg'
import SocialMedia from './SocialMedia';

const Home = () => {
    const style = {
        backgroundColor: "lightblue", fontSize: "50px", fontStyle: "italic", fontFamily: "New Times Roman",
        color: "purple"
    }
    return (
        <div className="ui container">

            <div className="ui raised segment" style={{backgroundColor:"lightblue"}}>
            <h1 class="ui block header" style={style}>
                <img class="ui medium circular image" src={profile} style={{ width: "200px", height: "170px" }} alt="img" />
                <div class="content" style={{marginLeft:"20px"}}>
                    I am Dilan Madhusanka
                    <div class="sub header">Bsc. Honz Software Engineering, University of Kelaniya</div>
                </div>
            </h1>
            </div>

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