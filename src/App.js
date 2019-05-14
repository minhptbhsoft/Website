import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Page/HomePage/Hompage';
import Aboutpage from './Page/AboutPage/Aboutpage';
import Navigation from './organisms/Navigation/Navigation';
import Contactpage from './Page/ContactPage/Contactpage';
import Footer from './organisms/Footer/Footer';
import Commentpage from './Page/CommentPage/Commentpage';

function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
      <Router>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route path="/aboutpage" component={Aboutpage}/>
            <Route path="/contact" component={Contactpage}/>
            <Route path="/comment" component={Commentpage}/>
        </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
