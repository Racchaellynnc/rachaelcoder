import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/about/about-page.jsx';
import ContactMePage from './pages/contact/contact';
import ProjectsPage from './pages/projects/projects';
import CertificationsPage from './pages/certifications/certifications'
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Work from './pages/workexperience/workexperience';
import { useTheme } from './ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from './theme';
import { ReactComponent as LightSvg} from '../src/assets/lightbulb.svg';

function App (props) {
const themeToggle = useTheme();

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

return (
      <div className="app">
        <Router>
          <div className="button-wrapper">
            <Button onClick={() => themeToggle.toggle()}><LightSvg className="svg" />
              <div className="button-text">
              {props.theme.mode === 'dark' ? "Light Mode" : "Dark Mode"}
              </div>
            </Button>
          </div>
          <Header />
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
