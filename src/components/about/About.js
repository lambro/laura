import React, { Component } from 'react'
import posed from 'react-pose'
import styles from './About.module.scss'
import { Parallax } from 'react-scroll-parallax'
import laura from './laura2.png'
import daytoday from './daytoday.jpg'
import junk from './junk.jpg'
import boxing from './boxing.jpg'
import kintohub from './kintohub.jpg'
import skiing from './skiing.jpg'

const Container = posed.div({
  enter: { staggerChildren: 50 }
})

class About extends Component {
  render() {
    return (
      <Container>
        {/* top section */}
        <div className={styles.aboutMe}>
          <div>
            <h2>
              <strong> front</strong>end engineer
            </h2>
            <h2>
              Most recently working in <strong>react</strong>and
              <strong> node.js</strong>
            </h2>
            <h2>A Master of Science.</h2>
            <h2>
              Concurrently a lover of, and allergic to, <strong>cats </strong>
              and<strong> Nutella</strong>.
            </h2>
            <h2>
              Member of the <strong>console</strong> underclass.
            </h2>
            <h2>
              Based in <strong>Singapore</strong>.
            </h2>
          </div>
          <div className={styles.imageInSvgMobile}>
            <Parallax x={[100, -100]} className={styles.border}>
              <svg height="200" width="200">
                <polygon
                  id="triangleMobile"
                  points="5, 5,190, 5, 95 , 190"
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

            <img src={laura} className={styles.clipped} alt="" />

            <Parallax x={[200, -200]} className={styles.border1}>
              <svg height="300" width="300">
                <polygon
                  id="triangleTopMobile"
                  points="5, 5, 290, 5, 145, 290"
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

          <div className={styles.imageInSvg}>
            <Parallax className={styles.border} x={[-80, 100]}>
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
            <img src={laura} className={styles.clipped} alt="" />
            <Parallax x={[0, -120]} className={styles.border1}>
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

        <div className={styles.fifth}>
          <img
            src="/images/backgroundLines.svg"
            alt="background lines"
            className={styles.arrowLine}
          />

          <div className={styles.images}>
            <Parallax x={[100, -100]}>
              <img src={daytoday} className={styles.clippedPortrait} alt="" />
              <img src={junk} className={styles.clippedInverted} alt="" />
              <img
                src={boxing}
                className={styles.clippedPortraitInverted}
                alt=""
              />
              <img src={kintohub} className={styles.clippedKinto} alt="" />
              <img src={skiing} className={styles.clippedPortrait} alt="" />
            </Parallax>
          </div>
        </div>

        <div className={styles.sectionMyLife}>
          <h1>The Details</h1>
          <div className={styles.theBorderLine}>
            <Parallax y={[100, -100]}>
              <div className={styles.line} />
            </Parallax>
          </div>
          <div className={styles.textualInformation}>
            <h4>
              After graduating from the London School of Hygiene and Tropical
              Medicine, I decided to take some time out abroad. I moved to
              Korea, where I taught English at first. While I was doing this I
              had a scooter accident, which scared me into squeezing more out of
              my day to day life.
            </h4>
            <h4>
              I made an effort to get into jobs that I would wake up in the
              morning and look forward to going in to do, first at advertising
              agencies, then modelling, DJing, TV work and playing bass guitar
              in a band.
            </h4>
            <h4>
              I then decided to return to London and, after a year back
              acclimatising, started experimenting with coding and Ruby on the
              advice of many of my close friends, who described me as a "massive
              geek who just didn't know it yet". I found coding enjoyable and
              decided that I wanted to do it everyday, so took steps to make
              this part of my life and work with my courses at General Assembly.
              It has now been years since I typed my first lines of code and I
              am still happy I made the leap. Coding never gets boring and I
              always have something new to play with.
            </h4>
          </div>
        </div>
      </Container>
    )
  }
}

export default About
