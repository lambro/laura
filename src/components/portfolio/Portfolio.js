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
    itemsToShow: 'codeScreenShots',
    isShown: true,
    section: 'codeScreenShots'
  }

  selectItem = art => {
    this.setState({ section: art })
  }

  render() {
    return (
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>

        <div className={styles.titles}>
          <h2 onClick={() => this.selectItem('codeScreenShots')}>
            <svg height="25" width="25" className={styles.pathLeft}>
              <polygon
                points="2, 20, 12,2, 23,23"
                style={{
                  strokeWidth: 2,
                  strokeLinejoin: 'round',
                  strokeLinecap: 'round',
                  fill: 'none'
                }}
              />
            </svg>
            Web Screenshots
            <svg height="25" width="25" className={styles.pathRight}>
              <polygon
                points="23,23, 2,20, 12,2"
                style={{
                  strokeWidth: 2,
                  strokeLinejoin: 'round',
                  strokeLinecap: 'round',
                  fill: 'none'
                }}
              />
            </svg>
          </h2>

          <h2 onClick={() => this.selectItem('pixelThings')}>
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
            <svg
              height="24"
              width="24"
              className={styles.pathSquareBottomRight}
            >
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

          <div className={styles.heading}>
            <div className={styles.cube}>
              <div className={styles.topCube}>Top</div>
              <div className={styles.rightCube}>Right</div>
              <div className={styles.bottomCube}>Bottom</div>
              <div className={styles.leftCube}>Left</div>
              <div className={styles.frontCube}>Front</div>
              <div className={styles.backCube}>Back</div>
            </div>
            <h2 onClick={() => this.selectItem('isometricThings')}>
              Isometric and 3D
            </h2>
          </div>

          <h2 onClick={() => this.selectItem('digitalArtThings')}>Drawings</h2>
        </div>

        <PortfolioSection
          pose={this.state.section === 'codeScreenShots' ? 'visible' : 'hidden'}
        >
          {this.state.section === 'codeScreenShots' && (
            <Gallery photos={art['codeScreenShots']} margin={4} />
          )}
        </PortfolioSection>

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
          pose={this.state.section === 'isometricThings' ? 'visible' : 'hidden'}
        >
          {this.state.section === 'isometricThings' && (
            <Gallery photos={art['isometricThings']} margin={4} />
          )}
        </PortfolioSection>
      </div>
    )
  }
}

export default Portfolio
