import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Error404Page from './components/404/Error404Page'
import './App.scss'
const RoutesContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true, delay: 300 },
  exit: { opacity: 0 }
})

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div id="site-container">
            <div id="content-container">
              <ul className="site-nav">
                <li>
                  <NavLink exact activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/experience">
                    Experience
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <PoseGroup>
                <RoutesContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route component={Error404Page} />
                  </Switch>
                </RoutesContainer>
              </PoseGroup>
            </div>
          </div>
        )}
      />
    )
  }
}

export default App
