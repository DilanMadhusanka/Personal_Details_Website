import React from 'react';
import springboot from '../images/springboot.png';
import react from '../images/react.png';
import flutter from '../images/flutter.png';

const Skills = () => {

    const styleName = {
        marginLeft:"50px",
        fontSize:"40px",
    }
    
    const styleButton = {
        marginTop:"60%"
    }

    return (
        <div className="ui container">
            <div className="ui text container">
            <h2 className="ui icon header" style={{ marginLeft: "100px" }}>
                <i className="globe yellow icon" style={{fontSize:"100px"}}></i>
                <div className="content" style={{ fontSize: "50px" }}>
                    Frameworks
                    <div className="sub header" style={{ color: "white", marginTop:"10px" }}>I have more knowlegde about this frameworks.</div>
                </div>
            </h2>
            </div>

            <div className="ui middle aligned divided list">
                <div className="item">
                    <div className="right floated content">
                        <div className="ui button" style={styleButton} onClick={() => window.open("https://github.com/DilanMadhusanka/LearningSpring", "_blank")}>Follow</div>
                    </div>
                    <img className="ui small image" src={springboot} alt="img" />
                    <div className="content" style={styleName}>
                        Springboot
                    </div>
                </div>
                <div className="item">
                    <div className="right floated content">
                        <div className="ui button" style={styleButton} onClick={() => window.open("https://github.com/DilanMadhusanka/React_Apps", "_blank")}>Follow</div>
                    </div>
                    <img className="ui small image" src={react} alt="img" />
                    <div className="content" style={styleName}>
                        React
                    </div>
                </div>
                <div className="item">
                    <div className="right floated content">
                        <div className="ui button" style={styleButton} onClick={() => window.open("https://github.com/DilanMadhusanka/Flutter_App", "_blank")}>Follow</div>
                    </div>
                    <img className="ui small image" src={flutter} alt="img" />
                    <div className="content" style={styleName}>
                        Flutter
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Skills;