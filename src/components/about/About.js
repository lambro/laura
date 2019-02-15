import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import posed from 'react-pose'
import styles from './About.module.css'
import ParallaxParty from '../utilities/ParallaxParty'
const Container = posed.div({
  enter: { staggerChildren: 50 }
})

const Box = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
})

class About extends Component {
  render() {
    return (
      <Container>
        <div className={styles.aboutMe} />
        <div className={styles.sectionMyLife}>
          <div className={styles.leftMyLife}>
            <Box>
              <h1>Some Title</h1>
            </Box>
          </div>
          <div className={styles.rightTop}>
            <Box>
              Some more Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Nesciunt, dignissimos asperiores ad laudantium, soluta
              quasi! Fugit unde reiciendis perferendis cupiditate et officia,
              reprehenderit sed libero praesentium delectus, consequatur
              quibusdam totam. here
            </Box>
          </div>
        </div>
        <div className={styles.sectionMyPhilosophy}>
          <div className={styles.leftMyPhilosophy}>
            <Box>
              <h1>Some other title</h1>
            </Box>
          </div>
          <div className={styles.right}>
            <Box>
              Some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              maiores modi incidunt voluptas inventore mollitia laborum
              reiciendis autem, magni dolor odit rerum atque, saepe, vero unde
              similique exercitationem libero illo! stuff here
            </Box>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.imageAndText}>
            <ParallaxParty
              offsetYMax={100}
              offsetYMin={-100}
              slowerScrollRate={true}
            >
              <div alt="background" className={styles.pink1} />
            </ParallaxParty>
            <ParallaxParty
              offsetYMax={200}
              offsetYMin={-200}
              slowerScrollRate={true}
            >
              <div alt="background" className={styles.pink2} />
            </ParallaxParty>
            <ParallaxParty
              offsetYMax={200}
              offsetYMin={-200}
              slowerScrollRate={true}
            >
              <div alt="background" className={styles.pink3} />
            </ParallaxParty>
            <ParallaxParty offsetYMax={300} offsetYMin={-300}>
              <div alt="background" className={styles.blue1} />
            </ParallaxParty>
            <ParallaxParty
              offsetYMax={500}
              offsetYMin={-500}
              slowerScrollRate={false}
            >
              <div className={styles.blue2}>
                <div
                  alt="background"
                  className={styles.linkToExperienceBackground}
                />
                <div alt="background" className={styles.linkToExperience} />
              </div>
            </ParallaxParty>
            <ParallaxParty
              offsetYMax={500}
              offsetYMin={-500}
              slowerScrollRate={true}
            >
              <div alt="background" className={styles.blue3} />
            </ParallaxParty>

            <ParallaxParty
              offsetYMax={220}
              offsetYMin={-220}
              slowerScrollRate={true}
            >
              <div className={styles.textAndLink}>
                <div alt="background" className={styles.linkToHomeBackground} />
                <div alt="background" className={styles.linkToHome} />
              </div>
            </ParallaxParty>
          </div>
        </div>
      </Container>
    )
  }
}

export default About
