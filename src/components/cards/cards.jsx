import React from 'react';
import './cards.styles.scss';
import { Link } from 'react-router-dom';

const CardComponent = () => (
    <div className="ui cards">
        <div className="card">
            <div className="content">
                <div className="header1">Work Experience</div>
                <div className="description">
                    Here is a detailed list of my Professional Work Experience as a Web Developer.
                </div>
            </div>
            <Link to="/workexperience">
                <div className="ui bottom attached button">
                    See more
                </div>
            </Link>
        </div>

        <div className="card">
            <div className="content">
                <div className="header1">Projects</div>
                <div className="description">
                    I have been doing Freelance work for about 3 years now. Check out some of the things I have worked on.
                </div>
            </div>
            <Link to="/projects">
                <div className="ui bottom attached button">
                    See more
                </div>
            </Link>
        </div>

        <div className="card">
            <div className="content">
                <div className="header1">Certifications</div>
                <div className="description">
                    Here you can see that I have completed multiple courses that have taught me complex topics.
                </div>
            </div>
            <Link to="/certifications">
                <div className="ui bottom attached button">
                    See more
                </div>
            </Link>
        </div>
    </div>
)

export default CardComponent;