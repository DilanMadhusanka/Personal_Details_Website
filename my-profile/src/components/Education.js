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
                        <img src={vidya} alt="vidyakara isuru school"/>
                    </div>
                    <div className="content">
                        <Link className="header" to="education" onClick={() => window.open("https://www.facebook.com/pages/RVidyakara-Isuru-school-Opanayaka/532608860104372", "_blank")}>R/ Vidyakara Isuru School</Link>
                        <div className="meta">
                            <span style={{color:"dark blue"}}>R/ Vidyakara Isuru School is a school situated in Opanayaka, near Pelmadulla, Sabaragamuwa Province, Sri Lanka.
                                 The school provides secondary education to boys and girls aged 11 to 19 and has a student population of around 3,500. 
                                 Today it has become a leading school Sri Lanka
                            </span>
                        </div>
                        <div className="extra">
                            Primary Education
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="image">
                        <img src={scc} alt="scc" />
                    </div>
                    <div className="content">
                        <Link className="header" to="education" onClick={() => window.open("https://www.facebook.com/sivalicc/", "_blank")}>Sivali Central College</Link>
                        <div className="meta">
                            <span>Sivali Central College is a school situated in Hidellana, near Ratnapura, Sabaragamuwa Province, Sri Lanka.
                                 The school provides secondary education to boys and girls aged 11 to 19 and has a student population of around 3,500. 
                                 Today it has become a leading school Sri Lanka
                            </span>
                        </div>
                        <div className="extra">
                            Secondary Education
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={uok} alt="uok" />
                    </div>
                    <div className="content">
                        <Link className="header" to="education" onClick={() => window.open("https://www.kln.ac.lk/index.php/en/", "_blank")}>University of Kelaniya</Link>
                        <div className="meta">
                            <span>The University of Kelaniya is a state university in Sri Lanka. 
                                Just outside the municipal limits of Colombo, in the city of Kelaniya, the university has two major campuses, 
                                seven locations, six faculties and four institutions.
                            </span>
                        </div>
                        <div className="extra">
                            Higher Education
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;