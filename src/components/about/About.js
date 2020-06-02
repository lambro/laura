import React, { Component } from 'react'
import posed from 'react-pose'
import styles from './About.module.css'
import { Parallax } from 'react-scroll-parallax'

const Container = posed.div({
  enter: { staggerChildren: 50 }
})

class About extends Component {
  render() {
    return (
      <Container>
        <div className={styles.aboutMe}>
          <div>
            <h2>
              <strong> front</strong>end engineer
            </h2>
            <h2>
              Most recently working in <strong>react</strong>and
              <strong> node.js</strong>
            </h2>
            <h2>A Master in Science.</h2>
            <h2>
              Concurrently a lover of, and allergic to, <strong>cats </strong>and<strong> Nutella</strong>.
            </h2>
            <h2>
              Member of the <strong>console</strong> underclass.
            </h2>
            <h2>
              Based in <strong>Singapore</strong>.
            </h2>
          </div>
          <div className={styles.imageInSvg}>
            <Parallax
              className={styles.border}
              offsetXMax={100}
              offsetXMin={-100}
            >
              <svg height="360" width="360">
                <polygon
                  id="triangle"
                  points="5, 5, 350, 5, 175 , 350"
                  className={styles.path}
                  style={{
                    stroke: 'rgba(23, 190, 187, 1)',
                    strokeWidth: 5,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                    fill: 'none'
                  }}
                />
              </svg>
            </Parallax>

            <Parallax>
              <img src="/images/laura2.png" className={styles.clipped} alt="" />
            </Parallax>

            <Parallax
              offsetXMax={-200}
              className={styles.border1}
              offsetXMin={-100}
            >
              <svg height="460" width="460">
                <polygon
                  id="triangleTop"
                  points="5, 5, 450, 5, 225, 450"
                  className={styles.path1}
                  style={{
                    stroke: 'white',
                    strokeWidth: 5,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                    fill: 'none'
                  }}
                />
              </svg>
            </Parallax>
          </div>
        </div>
        <div className={styles.sectionMyLife}>
          <h1>The Details</h1>
          <div>
            <Parallax
              offsetYMax={200}
              offsetYMin={-200}
              offsetXMax={0}
              offsetXMin={0}
            >
              <div className={styles.line} />
            </Parallax>
          </div>
          <div className={styles.textualInformation}>
            <h2>
              After graduating from the London School of Hygiene
              and Tropical Medicine, I decided to take some time out abroad. I moved to Korea, where I taught English at first. 
              While I was doing this I had a scooter accident, which scared me into squeezing more out of my day to day life.
            </h2>
            <h2>
              I made an effort to get into jobs that I would wake up in the
              morning and look forward to going in to do, first at advertising
              agencies, then went on to do some modelling, DJing, TV work and
              play bass guitar in a band.
            </h2>
            <h2>
              I then decided to return to London and, after a year back acclimatising, started
              experimenting with coding and ruby on the advice of many of my
              close friends, who described me as a "massive geek who just didn't
              know it yet". 
              I found coding enjoyable and decided that I wanted to do it everyday so took steps to make this part
              of my life and work with my courses at General Assembly. Now its
              been years since I typed my first lines of code I am still happy I
              made the leap, coding never gets boring and I always have
              something new to play with.
            </h2>
          </div>
        </div>
      </Container>
    )
  }
}

export default About
