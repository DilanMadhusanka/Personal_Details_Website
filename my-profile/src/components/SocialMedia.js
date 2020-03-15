import React from 'react'

const SocialMedia = () => {
    return (
        <div>
            <div className="ui center aligned container">
                <div class="ui relaxed horizontal list">
                    <div class="item">
                        <div className="content">
                            <a className="header" href="https://www.facebook.com/dilan.madhusanka119" target="_blank"><i className="facebook square icon black big" /></a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <a class="header" href="https://www.linkedin.com/in/dilan-madhusanka-533ba615b/" target="_blank"><i className="linkedin icon black big" /></a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                        <a class="header" href="https://github.com/DilanMadhusanka" target="_blank"><i className="github icon black big" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;