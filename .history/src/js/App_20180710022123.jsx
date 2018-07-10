import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Categories from './components/categories/CategoriesPage'
import Locations from './components/locations/LocationsPage'
import Footer from './components/static/Footer'
import { Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import './css.css'

const FourOhFour = () => {
  return (
    <div className="404Page">
      <h1>404</h1>
      <p>You are in a non existing page, please click <Link to="/">Here</Link> to return to Home Page.</p>
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route path='/categories' component={Categories} />
        <Route path='/locations' component={Locations} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default hot(module)(App)


