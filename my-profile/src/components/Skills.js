import React from 'react';
import springboot from '../images/springboot.png';
import react from '../images/react.png';
import flutter from '../images/flutter.png';

const Skills = () => {
    const styleName = {
        marginLeft:"50px",
        fontSize:"40px",
        // color:"darkblue"
    }
    const styleButton = {
        marginTop:"60%"
    }
    return (
        <div className="ui container">
            <div className="ui text container">
            <h2 className="ui icon header" style={{ marginLeft: "100px" }}>
                <i className="globe yellow icon" style={{fontSize:"100px"}}></i>
                <div class="content" style={{ fontSize: "50px" }}>
                    Frameworks
                    <div className="sub header" style={{ color: "white", marginTop:"10px" }}>I have more knowlegde about this frameworks.</div>
                </div>
            </h2>
            </div>

            <div class="ui middle aligned divided list">
                <div class="item">
                    <div class="right floated content">
                        <div class="ui button" style={styleButton} onClick={() => window.open("https://github.com/DilanMadhusanka/LearningSpring", "_blank")}>Follow</div>
                    </div>
                    <img class="ui small image" src={springboot} alt="img" />
                    <div class="content" style={styleName}>
                        Springboot
                    </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                        <div class="ui button" style={styleButton} onClick={() => window.open("https://github.com/DilanMadhusanka/React_Apps", "_blank")}>Follow</div>
                    </div>
                    <img class="ui small image" src={react} alt="img" />
                    <div class="content" style={styleName}>
                        React
                    </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                        <div class="ui button" style={styleButton} onClick={() => window.open("https://github.com/DilanMadhusanka/Flutter_App", "_blank")}>Follow</div>
                    </div>
                    <img class="ui small image" src={flutter} alt="img" />
                    <div class="content" style={styleName}>
                        Flutter
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Skills;