import React from 'react';
import './App.scss';
import Header from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/about/about-page.jsx';
import ContactMePage from './pages/contact/contact';
import ProjectPage from './pages/projects/projects';
import Footer from './components/footer/footer.jsx';
import Work from './pages/workexperience/workexperience';
import { useTheme } from './ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor, backgroundColor } from './theme';
import { ReactComponent as LightSvg} from '../src/assets/lightbulb.svg';

function App ({theme}) {
const themeToggle = useTheme();
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
    outline: none !important;
      @media screen and (max-width: 800px){
        margin-bottom: 20px;
        margin-left: 0px;
        margin-top: 20px;
      }
  `;
 const Slider = styled.button`
    background: ${backgroundColor};
    width: 30px;
    height: 29px;
    border: none;
    margin-left: ${theme.slide === 'on' ? '-27px' : '24px'};
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
        margin-left: ${theme.slide === 'on' ? '-27px' : '23px'};
        margin-top: 0.5px;
      }
  `;

return (
      <div className="app">
        <Router>
            <div className='header' >
            <Header />
              <div className='options'>
                <Button className='button' onClick={() => themeToggle.toggle()}>
                  <Slider className="switch-slider" >  
                    <div className="button-text">
                      <LightSvg className="svg"/>
                    </div>
                  </Slider>
                </Button>  
               </div> 
              </div>
          <Switch>
            <Route exact path='/workexperience' component={Work} />
            <Route exact path='/' component={AboutPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/projects' component={ProjectPage} />
            <Route path='/contactme' component={ContactMePage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }



export default withTheme(App);
