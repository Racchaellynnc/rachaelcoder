import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/about/about-page.jsx';
import ContactMePage from './pages/contact/contact';
import ProjectsPage from './pages/projects/projects';
import Header from './components/header/header.jsx';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
         <Header />
          <Switch>
            <Route exact path='/' component={AboutPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route path='/contactme' component={ContactMePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
