import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import Members from './members/Members';
import Navbar from './common/Navbar';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/roster" component={Members} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
