import React from 'react'
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    const style = { marginLeft:"10px"}
    return (
        <div className="ui text center aligned container">
            <Link class="ui circular facebook icon button" onClick={() => window.open("https://www.facebook.com/dilan.madhusanka119", "_blank")}>
                <i class="facebook icon"></i>
            </Link>
            <Link class="ui circular linkedin icon button" onClick={() => window.open("https://www.linkedin.com/in/dilan-madhusanka-533ba615b/", "_blank")} style={style}>
                <i class="linkedin icon"></i>
            </Link>
            <Link class="ui circular github icon button black" onClick={() => window.open("https://github.com/DilanMadhusanka", "_blank")} style={style}>
                <i class="github icon"></i>
            </Link>
        </div>
    );
}

export default SocialMedia;