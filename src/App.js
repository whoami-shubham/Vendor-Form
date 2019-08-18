import React from 'react';
import Authform from './components/Authform';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
        
        <Switch>
                    <Route exact path="/" component={Authform}/>
                    <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </Router>
  );
}

export default App;
