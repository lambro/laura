import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import Home from './components/home/Home'
import About from './components/about/About'
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
              </ul>

              <PoseGroup>
                <RoutesContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
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
