import React from 'react'
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    return (
        <div>
            <div className="ui center aligned container">
                <div class="ui relaxed horizontal list">
                    <div class="item">
                        <div className="content">
                            <Link className="header" onClick={() => window.open("https://www.facebook.com/dilan.madhusanka119", "_blank")}><i className="facebook square icon black big" /></Link>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <Link class="header" onClick={() => window.open("https://www.linkedin.com/in/dilan-madhusanka-533ba615b/", "_blank")}><i className="linkedin icon black big" /></Link>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                        <Link class="header" onClick={() => window.open("https://github.com/DilanMadhusanka", "_blank")}><i className="github icon black big" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;