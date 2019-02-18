import React, { Component } from 'react'
import styles from './Portfolio.module.css'
import Gallery from 'react-photo-gallery'
import { artThings } from '../../constants/artThings'

class Portfolio extends Component {
  render() {
    return (
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h3>gonna put some pictures of shit hereeee</h3>\
        <Gallery photos={artThings} margin={4} />
      </div>
    )
  }
}

export default Portfolio
