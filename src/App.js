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
import { buttonBackgroundColor, buttonTextColor, backgroundColor, SliderBackground } from './theme';
import { ReactComponent as LightSvg} from '../src/assets/darkmode.svg';

function App ({theme}) {
const themeToggle = useTheme();
  const Buttons = styled.button`
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
        margin-right: 5px;
        position: absolute;
      }
      @media screen and (max-width: 350px){
        padding-bottom: 0px;
        padding-top: 2px;
        margin-top: -3px;
      }
      
  `;
 const Slider = styled.button`
    background: ${SliderBackground};
    width: 30px;
    height: 29px;
    border: none;
    margin-top: 1px;
    margin-left: ${theme.slide === 'on' ? '-26px' : '22px'};
    margin-right: ${theme.slide === 'on' ? '0px' : '-6px'};
    transition: 300ms ease margin;
    top: 10px;
    border-radius: 50%;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    outline: none !important;
    box-shadow: none;
      @media screen and (max-width: 800px){
        margin-top: 0.5px;

      }
      @media screen and (max-width: 350px){
        height: 20px;
        width: 21px;
      }
  `;

  

return (
      <div className="app">
        <Router>
            <div className='header' >
            <Header />
              <div className='options'>
                <Buttons className='button' onClick={() => themeToggle.toggle()}>
                  <Slider 
                  className="switch-slider" >  
                    <div className="button-text">
                      <LightSvg className="svg"/>
                    </div>
                  </Slider>
                </Buttons>  
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
