import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from './FeedbackForm/Feeling';
import Understanding from './FeedbackForm/Understanding';
import Supported from './FeedbackForm/Supported';
import Comments from './FeedbackForm/Comments';
import Review from './FeedbackForm/Review';
import Success from './FeedbackForm/Success';
import Admin from './Admin/Admin';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <Feeling />
        </Route >
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/supported">
          <Supported />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
