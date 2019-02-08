import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import './App.css'

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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
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
