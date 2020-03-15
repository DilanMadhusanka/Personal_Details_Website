import React from 'react';
import { Link } from 'react-router-dom';
import scc from '../images/scc.png';
import uok from '../images/uok.png';
import vidya from '../images/vidya.jpg'

const Education = () => {
    return (
        <div className="ui container">
            <div className="ui items">
            <div className="item">
                    <div className="image">
                        <img src={vidya} />
                    </div>
                    <div className="content">
                        <Link className="header" to="" style={{color:"white"}}>R/ Vidyakara Isuru School</Link>
                        <div className="meta">
                            <span style={{color:"white"}}>R/ Vidyakara Isuru School is a school situated in Opanayaka, near Pelmadulla, Sabaragamuwa Province, Sri Lanka.
                                 The school provides secondary education to boys and girls aged 11 to 19 and has a student population of around 3,500. 
                                 Today it has become a leading school Sri Lanka
                            </span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            Additional Details
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="image">
                        <img src={scc} />
                    </div>
                    <div className="content">
                        <Link className="header" to="" style={{color:"white"}}>Sivali Central College</Link>
                        <div className="meta">
                            <span style={{color:"white"}}>Sivali Central College is a school situated in Hidellana, near Ratnapura, Sabaragamuwa Province, Sri Lanka.
                                 The school provides secondary education to boys and girls aged 11 to 19 and has a student population of around 3,500. 
                                 Today it has become a leading school Sri Lanka
                            </span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            Additional Details
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={uok} />
                    </div>
                    <div className="content">
                        <Link className="header" to="" style={{color:"white"}} >University of Kelaniya</Link>
                        <div className="meta">
                            <span style={{color:"white"}}>The University of Kelaniya is a state university in Sri Lanka. 
                                Just outside the municipal limits of Colombo, in the city of Kelaniya, the university has two major campuses, 
                                seven locations, six faculties and four institutions.
                            </span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            Additional Details
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;