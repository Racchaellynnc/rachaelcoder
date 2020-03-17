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

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
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
}


export default App;
