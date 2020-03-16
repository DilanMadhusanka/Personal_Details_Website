import React from 'react';
import springboot from '../images/springboot.png';
import react from '../images/react.png';
import flutter from '../images/flutter.png';

const Skills = () => {
    return (
        <div className="ui text container">
            <h2 className="ui icon header" style={{ marginLeft: "100px" }}>
                <i className="globe yellow icon" ></i>
                <div class="content" style={{ fontSize: "40px" }}>
                    Frameworks
                    <div className="sub header" style={{ color: "white" }}>I have more knowlegde about this frameworks.</div>
                </div>
            </h2>

            <div class="ui middle aligned divided list">
                <div class="item">
                    <div class="right floated content">
                        <div class="ui button" onClick={() => window.open("https://github.com/DilanMadhusanka/LearningSpring", "_blank")}>Follow</div>
                    </div>
                    <img class="ui small image" src={springboot} alt="img" />
                    <div class="content">
                        Springboot
                </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                        <div class="ui button" onClick={() => window.open("https://github.com/DilanMadhusanka/React_Apps", "_blank")}>Follow</div>
                    </div>
                    <img class="ui small image" src={react} alt="img" />
                    <div class="content">
                        React
                </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                        <div class="ui button" onClick={() => window.open("https://github.com/DilanMadhusanka/Flutter_App", "_blank")}>Follow</div>
                    </div>
                    <img class="ui small image" src={flutter} alt="img" />
                    <div class="content">
                        Flutter
                </div>
                </div>
            </div>


        </div>
    );
}

export default Skills;