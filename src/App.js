import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './pages';
import  SigninPage  from './pages/signin';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SigninPage} />
      </Switch>
    </>
  );
}

export default App;
