import React from 'react';
import springboot from '../images/springboot.png';
import react from '../images/react.png';
import flutter from '../images/flutter.png';

const Skills = () => {
    return (
        <div className="ui text container">
            <h2 className="ui icon header" style={{marginLeft:"100px"}}>
                <i className="globe yellow icon" ></i>
                <div class="content" style={{ fontSize:"40px"}}>
                    Frameworks
                    <div className="sub header" style={{color:"white"}}>I have more knowlegde about this frameworks.</div>
                </div>
            </h2>
            <div className="ui vertical segment">
                {/* <p>asdfkdjfkjdkfjkd fdjkfdjksjksla</p> */}
                <img class="ui small rounded image" src={springboot} alt="spring boot" ></img>
            </div>
            <div className="ui vertical segment">
                {/* <p>ddfldkfls</p> */}
                <img class="ui small rounded image" src={react} alt="react" ></img>
            </div>
            <div class="ui vertical segment">
                {/* <p>hg</p> */}
                <img class="ui small rounded image" src={flutter} alt="flutter" ></img>
            </div>


        </div>
    );
}

export default Skills;