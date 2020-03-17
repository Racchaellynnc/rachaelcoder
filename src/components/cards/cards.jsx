import React from 'react';
import './cards.styles.scss';

const CardComponent = () => (
    <div class="ui cards">
        <div class="card">
            <div className="content">
                <div className="header1">Work Experience</div>
                <div class="description">
                    Here is a detailed list of my Professional Work Experience as a Web Developer.
                </div>
            </div><a href="/workexperience">
                <div class="ui bottom attached button">
                    See more
            </div></a>
        </div>
        <div class="card">
            <div class="content">
                <div class="header1">Projects</div>
                <div class="description">
                    I have been doing Freelance work for about 3 years now. Check out some of the things I have worked on.
            </div>
            </div><a href="/projects" >
                <div class="ui bottom attached button">
                    See more
            </div></a>
        </div>
        <div class="card">
            <div class="content">
                <div class="header1">Certifications</div>
                <div class="description">
                    Here you can see that I have completed multiple courses that have taught me complex topics.
            </div>
            </div><a href="/certifications">
                <div class="ui bottom attached button">
                    See more
            </div></a>
        </div>
    </div>
)

export default CardComponent;