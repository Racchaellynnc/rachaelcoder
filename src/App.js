import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/about/about-page.jsx';
import ContactMePage from './pages/contact/contact';
import ProjectsPage from './pages/projects/projects';
import CertificationsPage from './pages/certifications/certifications'
import Footer from './components/footer/footer.jsx';
import Work from './pages/workexperience/workexperience';
import { useTheme } from './ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor, backgroundColor } from './theme';
import { ReactComponent as LightSvg} from '../src/assets/lightbulb.svg';
import { ReactComponent as Projects} from '../src/assets/code-light.svg';
import { ReactComponent as About} from '../src/assets/user.svg';
import { ReactComponent as Contact} from '../src/assets/envelope.svg';
import { ReactComponent as MenuIcon} from '../src/assets/menubar.svg';

function App ({theme}) {
const themeToggle = useTheme();
  console.log(theme)
  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: 2px solid #1a1a1a56;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    position: relative;
    padding-bottom: 30px;
    margin-right: 20px;
    margin-left: 90px;
    outline: none !important;
    box-shadow: 0px 0px 11px 2px rgba(57, 110, 143, 0.471);
      @media screen and (max-width: 800px){
        margin-bottom: 20px;
        margin-left: 0px;
        margin-top: 20px;
      }
  `;
 const Slider = styled.button`
    background: ${backgroundColor};
    width: 30px;
    height: 30px;
    border: none;
    margin-left: ${theme.slide === 'on' ? '-39px' : '36px'};
    transition: 300ms ease margin;
    top: 10px;
    border-radius: 50%;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    padding: 0.2em 0.2em;
    outline: none !important;
    box-shadow: none;
      @media screen and (max-width: 800px){
        margin-right: 2px;
      }
  `;

return (
      <div className="app">
        <Router>
            <div className='header' >
              <div className='options'>
                <MenuIcon className='nav-menu' />
                <Button className='button' onClick={() => themeToggle.toggle()}>
                  <Slider className="switch-slider" >  
                    <div className="button-text">
                  <LightSvg className="svg"/>
                </div>
              </Slider>
            </Button> 
                <Link to='/about' className="option" ><About className="icons" />About Me</Link>
                <Link to='/projects' className="option" ><Projects className="icons"/>My Projects</Link>
                <Link to='/contactme' className="option" ><Contact className='icons' />Contact Me</Link>
               </div> 
              </div>
          <Switch>
            <Route exact path='/workexperience' component={Work} />
            <Route exact path='/' component={AboutPage} />
            <Route exact path='/certifications' component={CertificationsPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route path='/contactme' component={ContactMePage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }



export default withTheme(App);
