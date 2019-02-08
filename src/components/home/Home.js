import React, { Component } from 'react'
import posed from 'react-pose'
import styles from './Home.module.css'

const Container = posed.div({
  enter: { delayChildren: 50 }
})

const Box = posed.div({
  open: { opacity: 1 },
  closed: { opacity: 0 }
})

class Home extends Component {
  state = {
    show: false
  }

  show = () => {
    this.setState({
      show: true
    })
  }

  componentDidMount() {
    setTimeout(this.show, 700)
  }

  render() {
    return (
      <Container className={styles.homePage}>
        <Box className="inner" pose={this.state.show ? 'open' : 'closed'}>
          <h1>Laura Ambrose</h1>
          <h4>Web Developer</h4>
        </Box>
      </Container>
    )
  }
}

export default Home
