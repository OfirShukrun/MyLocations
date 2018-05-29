import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import categories from './Categories';
import locations from './Locations';
import { Link } from 'react-router-dom';

const FourOhFour = () => {
  return (
    <div className="404Page">
      <h1>404</h1>
      <p>You are in a non existing page, please click <Link to="/">Here</Link> to return to Home Page.</p>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path='/categories' component={categories} />
          <Route path='/locations' component={locations} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;


