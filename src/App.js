import Navigation from './Navbar';
import Home from './Home';
import Info from './Info';
import Rules from './Rules';
import Events from './Events';
import Packages from './Packages';
import Book from './Book';
import Checkout from './Checkout';
import Dashboard from './Dashboard';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  
  document.body.style = 'background: #36454f;';
  
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route exact path="/rules">
              <Rules />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/packages">
              <Packages />
            </Route>
            <Route exact path="/book">
              <Book />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
