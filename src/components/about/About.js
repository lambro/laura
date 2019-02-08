import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import posed from 'react-pose'
import styles from './About.module.css'

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
              <h1>My life</h1>
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
              <h1>My Philosophy</h1>
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
          <div className={styles.backgroundImage} />
          <div className={styles.imageAndText}>
            <div className={styles.mainImage} />
            <div className={styles.links}>
              <Link to="/about">Home</Link>
              <Link to="/about">Experience</Link>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default About
