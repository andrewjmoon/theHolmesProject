import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Saints from './components/Saints';
import PrayerList from './components/posts/PrayerList';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/prayerlist" component={PrayerList} />
            <Route exact path="/saints-holies" component={Saints} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
