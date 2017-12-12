import React from 'react';
import {Route} from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import FeedbackPageContainer from './containers/FeedbackPageContainer';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    // <Route path="/feed" component={FeedbackPageContainer}/>
  </Route>
);
