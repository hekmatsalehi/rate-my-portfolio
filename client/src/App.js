import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup'

import './styles/output.css'

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Login" component={Login}/>
             <Route path="/Signup" component={SignUp}/>
             <Route path="/ProfilePage" component={ProfilePage}/>
            </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;