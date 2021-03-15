import React from 'react';
import styled, { css } from 'styled-components';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Pics from './components/Pics'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/pics" component={Pics} />
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
