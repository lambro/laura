import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'

class ParallaxParty extends Component {
  render() {
    const { children, offsetYMax, offsetYMin, slowerScrollRate } = this.props
    return (
      <Parallax
        offsetYMax={offsetYMax}
        offsetYMin={offsetYMin}
        slowerScrollRate={slowerScrollRate}
        tag="figure"
      >
        {children}
      </Parallax>
    )
  }
}

export default ParallaxParty
