import React, { Component } from 'react'
import posed from 'react-pose'
import styles from './Portfolio.module.sass'
import Gallery from 'react-photo-gallery'
import { art } from '../../constants/artThings'

const PortfolioSection = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
})

class Portfolio extends Component {
  state = {
    itemsToShow: 'digitalArtThings',
    isShown: true,
    section: 'digitalArtThings'
  }

  selectItem = art => {
    this.setState({ section: art })
  }

  render() {
    return (
      <div className={styles.portfolio}>
        <div className={styles.top}>
          <h1>Portfolio</h1>

          <div className={styles.line} />

          <div className={styles.right}>
            <h2>Websites</h2>

            <div className={styles.links}>
              <a href="https://www.kintohub.com/">KintoHub</a>|
              <a href="https://www.fuseuniversal.com/">Fuse Universal</a>|
              <a href="https://www.fordfoundation.org/">Ford Foundation</a>
            </div>

            <h2>Previous Code Tests</h2>

            <div className={styles.linksTests}>
              <a href="http://codepen.io/Lamb/pen/jmrMmy">Bee Hive Test</a>|
              <a href="http://laura-the.ninja/movie-library/#!/">
                Movie Library
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}></div>

        <div className={styles.gallery}>
          <div className={styles.titles}>
            <div className={styles.scribbleOuter}>
              <img
                className={styles.scribbles}
                src="/images/drawing_outline.png"
                alt="scribble"
              />
              <img
                className={styles.scribblesStatic}
                src="/images/drawing_outline_static.png"
                alt="scribble"
              />
              <h2
                onClick={() => this.selectItem('digitalArtThings')}
                className={
                  this.state.section === 'digitalArtThings'
                    ? styles.highlightedHeading
                    : ''
                }
              >
                Drawings
              </h2>
            </div>

            <h2
              onClick={() => this.selectItem('pixelThings')}
              className={
                this.state.section === 'pixelThings'
                  ? styles.highlightedHeading
                  : ''
              }
            >
              <svg height="25" width="25" className={styles.pathSquareTopLeft}>
                <polygon
                  points="2, 2, 2,22, 22,22 , 22, 2"
                  style={{
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round'
                  }}
                />
              </svg>
              <svg height="14" width="14" className={styles.pathSquareTopSmall}>
                <polygon
                  points="2, 2, 2,12, 12,12 , 12, 2"
                  style={{
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round'
                  }}
                />
              </svg>
              Pixels
              <svg height="24" width="24" className={styles.pathSquareTopRight}>
                <polygon
                  points="2, 2, 2,22, 22,22 , 22, 2"
                  style={{
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                    fill: 'none'
                  }}
                />
              </svg>
              <svg height="34" width="34" className={styles.pathSquareBottom}>
                <polygon
                  points="2, 2, 2,32, 32,32 , 32, 2"
                  style={{
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                    fill: 'none'
                  }}
                />
              </svg>
              <svg
                height="14"
                width="14"
                className={styles.pathSquareBottomSmall}
              >
                <polygon
                  points="2, 2, 2,12, 12,12 , 12, 2"
                  style={{
                    strokeWidth: 2,
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                    fill: 'none'
                  }}
                />
              </svg>
            </h2>

            <div className={styles.cubeHeading}>
              <div className={styles.cube}>
                <div className={styles.topCube}></div>
                <div className={styles.rightCube}></div>
                <div className={styles.bottomCube}></div>
                <div className={styles.leftCube}></div>
                <div className={styles.frontCube}></div>
                <div className={styles.backCube}></div>
              </div>
              <h2
                onClick={() => this.selectItem('isometricThings')}
                className={
                  this.state.section === 'isometricThings'
                    ? styles.highlightedHeading
                    : ''
                }
              >
                IRL, Isometric and 3D
              </h2>
            </div>
          </div>

          <div className={styles.line} />

          <div className={styles.images}>
            <PortfolioSection
              pose={this.state.section === 'pixelThings' ? 'visible' : 'hidden'}
            >
              {this.state.section === 'pixelThings' && (
                <Gallery photos={art['pixelThings']} margin={4} />
              )}
            </PortfolioSection>

            <PortfolioSection
              pose={
                this.state.section === 'digitalArtThings' ? 'visible' : 'hidden'
              }
            >
              {this.state.section === 'digitalArtThings' && (
                <Gallery photos={art['digitalArtThings']} margin={4} />
              )}
            </PortfolioSection>

            <PortfolioSection
              pose={
                this.state.section === 'isometricThings' ? 'visible' : 'hidden'
              }
            >
              {this.state.section === 'isometricThings' && (
                <Gallery photos={art['isometricThings']} margin={4} />
              )}
            </PortfolioSection>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
