import React from 'react'

const SocialMedia = () => {

    const style = { marginLeft:"10px"}
    
    return (
        <div className="ui text center aligned container">
            <span className="ui circular facebook icon button" onClick={() => window.open("https://www.facebook.com/dilan.madhusanka119", "_blank")}>
                <i className="facebook icon"></i>
            </span>
            <span className="ui circular linkedin icon button" onClick={() => window.open("https://www.linkedin.com/in/dilan-madhusanka-533ba615b/", "_blank")} style={style}>
                <i className="linkedin icon"></i>
            </span>
            <span className="ui circular github icon button black" onClick={() => window.open("https://github.com/DilanMadhusanka", "_blank")} style={style}>
                <i className="github icon"></i>
            </span>
        </div>
    );
}

export default SocialMedia;