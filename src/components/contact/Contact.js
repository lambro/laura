import React, { Component } from 'react'
import styles from './Contact.module.scss'
import poppop from './poppop.png'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
class Contact extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.main}>
          <div className={styles.left}>
            <h1>Contact</h1>

            <h4>
              I am based <strong>in Singapore</strong> and{' '}
              <strong>available for hire </strong>
            </h4>

            <h4>
              <strong>
                <a href="https://docs.google.com/document/d/1vAZOufFaVmiPN5zhJVkD6Dn0n3OzIzH8PSAdcH85z50/edit?usp=sharing">
                  HERE
                </a>
              </strong>
              copy of my
              <strong>
                <a href="https://docs.google.com/document/d/1vAZOufFaVmiPN5zhJVkD6Dn0n3OzIzH8PSAdcH85z50/edit?usp=sharing">
                  CV
                </a>
              </strong>
            </h4>

            <h4> You can find me in all the usual places.</h4>
          </div>

          <div className={styles.theBorderLine}>
            <div className={styles.line} />
          </div>

          <div className={styles.left}>
            <div className={styles.logos}>
              <a
                href="https://www.linkedin.com/in/lauraambroseftw/"
                className={styles.logo}
              >
                <img src={linkedin} alt="linkedin" />
                <img className={styles.hovered} src={poppop} alt="background" />
              </a>

              <a href="https://twitter.com/voodoolawz" className={styles.logo}>
                <img src={twitter} alt="twitter" />
                <img className={styles.hovered} src={poppop} alt="background" />
              </a>
              <a
                href="https://www.instagram.com/veryfluffylamb/"
                className={styles.logo}
              >
                <img src={instagram} alt="instagram" />
                <img className={styles.hovered} src={poppop} alt="background" />
              </a>
              <a href="https://github.com/lambro" className={styles.logo}>
                <img src={github} alt="github" />
                <img className={styles.hovered} src={poppop} alt="background" />
              </a>
            </div>
          </div>
        </div>

        <p className={styles.attribution}>
          Icons made by{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </div>
    )
  }
}

export default Contact
