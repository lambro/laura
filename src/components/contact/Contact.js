import React, { Component } from 'react'
import styles from './Contact.module.scss'

class Contact extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.main}>
          <div className={styles.left}>
            <h1>Contact</h1>

            <h4>
              I am currently <strong>in Singapore</strong> and{' '}
              <strong>available for hire </strong>
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
                <img src="/images/icons/004-linkedin.svg" alt="triangle" />
                <img
                  className={styles.hovered}
                  src="/images/test.png"
                  alt="triangle"
                />
              </a>

              <a href="https://twitter.com/voodoolawz" className={styles.logo}>
                <img src="/images/icons/001-twitter.svg" alt="triangle" />
                <img
                  className={styles.hovered}
                  src="/images/test.png"
                  alt="triangle"
                />
              </a>
              <a
                href="https://www.instagram.com/veryfluffylamb/"
                className={styles.logo}
              >
                <img src="/images/icons/003-instagram.svg" alt="triangle" />
                <img
                  className={styles.hovered}
                  src="/images/test.png"
                  alt="triangle"
                />
              </a>
              <a href="https://github.com/lambro" className={styles.logo}>
                <img src="/images/icons/005-github.svg" alt="triangle" />
                <img
                  className={styles.hovered}
                  src="/images/test.png"
                  alt="triangle"
                />
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
