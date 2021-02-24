import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './Menu.css';
import './Grid.css';
import './PortfolioPage.css';
import './Experience.css';
import './About.css';
import './Footer.css';

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

import CLI from "./pages/CLI";
import WSP from "./pages/WSP";
import SLP from "./pages/SLP";
import FuelCycle from "./pages/FuelCycle";
import Imager from "./pages/Imager";
import CSS from "./pages/CSS";
import JSS from "./pages/JSS";
import MCW from "./pages/MCW";
import COVID from "./pages/COVID";
import PDP from "./pages/PDP";
import Hargreaves from "./pages/Hargreaves";
import MTAMan from "./pages/MTAMan";
import UX from "./pages/UX";
import NAVI from "./pages/NAVI";
import MooMilk from "./pages/MooMilk";

import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route to exact path="/">
          <Home />
        </Route>
        <Route to exact path="/portfolio">
          <Portfolio />
        </Route>

        <Route to exact path="/portfolio/community-literature-initiative">
          <CLI />
        </Route>
        <Route to exact path="/portfolio/world-stage-press">
          <WSP />
        </Route>
        <Route to exact path="/portfolio/sims-library-of-poetry">
          <SLP />
        </Route>
        <Route to exact path="/portfolio/fuel-cycle">
          <FuelCycle />
        </Route>
        <Route to exact path="/portfolio/imager">
          <Imager />
        </Route>
        <Route to exact path="/portfolio/css-sketchbook">
          <CSS />
        </Route>
        <Route to exact path="/portfolio/jang-soo-sushi-bar">
          <JSS />
        </Route>
        <Route to exact path="/portfolio/mcw-global">
          <MCW />
        </Route>
        <Route to exact path="/portfolio/covid-19-tracker">
          <COVID />
        </Route>
        <Route to exact path="/portfolio/pi-delta-psi">
          <PDP />
        </Route>
        <Route to exact path="/portfolio/hargreaves-jones">
          <Hargreaves />
        </Route>
        <Route to exact path="/portfolio/mta-man">
          <MTAMan />
        </Route>
        <Route to exact path="/portfolio/accessibility-in-foreign-countries">
          <UX />
        </Route>
        <Route to exact path="/portfolio/navi">
          <NAVI />
        </Route>
        <Route to exact path="/portfolio/moo-milk">
          <MooMilk />
        </Route>

        <Route to exact path="/experience">
          <Experience />
        </Route>
        <Route to exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;