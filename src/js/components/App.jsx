import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Categories from './Categories';
import Locations from './Locations';
import { Link } from 'react-router-dom';
import Test from './Test';

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
          <Route path='/categories' component={Categories} />
          <Route path='/locations' component={Locations} />
          <Route path='/test' component={Test} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;


