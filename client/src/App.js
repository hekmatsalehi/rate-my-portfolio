import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup'
import ProfileSummary from './components/ProfileSummary';
import './styles/output.css'
import Feedback from './components/Feedback';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
   console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <ErrorBoundary>
          <Navbar />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Login" component={Login}/>
             <Route path="/Signup" component={SignUp}/>
             <Route path="/ProfileSummary" component={ProfileSummary}/>
             <Route path="/ProfilePage" component={ProfilePage}/>
            </Switch>
            </ErrorBoundary>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
