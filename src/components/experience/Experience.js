import React, { Component } from 'react'
import styles from './Experience.module.css'
import { Parallax } from 'react-scroll-parallax'

class Experience extends Component {
  render() {
    return (
      <div className={styles.experiencePage}>
        <div className={styles.content}>
          <div className={styles.first}>
            <div className={styles.left}>
              <h1>Education</h1>
            </div>
            <div className={styles.line} />
            <div className={styles.right}>
              <h2>
                <b>.NET Object Oriented Programming</b> using C# 2015 City
                University, London
              </h2>
              <h2>
                <b>Web Development</b> Immersive Course 2014 General Assembly,
                London
              </h2>
              <h2>
                <b>Front End</b> Web Development Course 2014 General Assembly,
                London
              </h2>
              <h2>
                Level 4 (Upper Intermediate) Intensive <b>Korean</b> Course 2010
                - 2011 Konkuk University, Seoul
              </h2>
              <h2>
                MSc. <b>Medical Parasitology</b> 2005 - 2006 London School of
                Hygiene and Tropical Medicine, London
              </h2>
              <h2>
                BSc. (Honours) <b>Environmental Science</b> 2:2 2001 - 2005
                Kings College London, University of London, London
              </h2>
              <Parallax
                className={styles.triangle}
                offsetYMax={70}
                offsetYMin={-70}
                offsetXMax={-30}
                offsetXMin={30}
                slowerScrollRate="true"
              >
                <img src="/images/triangle.svg" alt="triangle" />
              </Parallax>
              <Parallax
                className={styles.triangle2}
                offsetYMax={70}
                offsetYMin={-70}
                offsetXMax={-30}
                offsetXMin={30}
                slowerScrollRate="true"
              >
                <img src="/images/triangle.svg" alt="triangle" />
              </Parallax>
              <Parallax
                className={styles.triangle3}
                offsetYMax={70}
                offsetYMin={-70}
                offsetXMax={-30}
                offsetXMin={30}
                slowerScrollRate="true"
              >
                <img src="/images/triangle.svg" alt="triangle" />
              </Parallax>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.left}>
              <h1>Experience</h1>
            </div>
            <div className={styles.line2} />

            <div className={styles.right}>
              <h2>
                <b>HONG KONG</b>
              </h2>
              <h2>
                <b>KintoHub</b> Front End Engineer
              </h2>
              <h2>September 2017 - Present </h2>
              <h2>HTML / JSX / JS / SCSS </h2>
              <h2>
                React / Node.js / API communication / GraphQL Microservices
              </h2>
              <h2>Unit testing</h2>
            </div>

            <div className={styles.right}>
              <h2>
                <b>LONDON</b>
              </h2>
              <h2>
                <b>Fuse Universal</b> Front End Web Developer
              </h2>
              <h2>May 2016 - November 2016 (7 months)</h2>
              <h2>
                HTML / CSS / SASS / Coffeescript in a Ruby, Backbone &
                Marionette stack.
              </h2>
              <h2>Unit testing</h2>

              <h2>
                <b>Durable Digital</b> Junior Front End Developer
              </h2>
              <h2>March 2015 - May 2016</h2>
              <h2>(1 year 3 months) London Front end engineering</h2>
              <h2>
                HTML / CSS / LESS / JavaScript / Angular and C#, in Sitecore and
                Umbraco.
              </h2>
            </div>
          </div>
          <div className={styles.third}>
            <div className={styles.left}>
              <h1>Skills</h1>
            </div>
            <div className={styles.line3} />
            <div className={styles.right}>
              <h2>
                <b>JavaScript</b> I have been working with Javascript in various
                forms since I began. Initially I worked on large projects using
                Javascript, JQuery and AngularJS to display visuals using data
                from our clients API. Following this I went on to work on a
                social learning web app set in a backbone-marionette stack.
              </h2>
              <h2>
                <b>Style</b> I have had a lot of experience with CSS throughout
                my coding life, starting with the Front End course at GA and
                throughout my career as a Front End developer. CSS has changed a
                lot over the years, often replacing the need for JavaScript. I
                have used pure CSS, and preprocessors such as SASS, SCSS and
                LESS. Experimenting with CSS is a lot of fun, and more recently
                I have been playing with SVG design and animation. And in my day
                to day work life I build fully responsive pages and components
                to design, working with designers to bring their flat designs to
                life with animations and consideration of the full UX experience
                on interactive platforms.
              </h2>

              <h2>
                <b>Production</b> Working with teams of local and remote
                developers I have had valuable experience working with GIT on
                collaborative projects and with Webpack, Circle CI, QA engineers
                and unit testing as integral parts of my day to day work
                processes.
              </h2>
              <h2>
                <b>Integration</b> As a front end developer integration and
                collaboration with other developers is an essential skill, I
                worked in a .NET stack at Durable, integrating with C# in
                Umbraco and Sitecore CMS systems. My most recent experience was
                with a Ruby stack at Fuse.
              </h2>
            </div>
          </div>
          <div className={styles.fourth}>
            <div className={styles.left}>
              <h1>Hobbies</h1>
            </div>
            <div className={styles.line4} />
            <div className={styles.right}>
              <h2>Pixel Art / Digital Art</h2>
              <h2>Muay Thai</h2>
              <h2>Video Games</h2>
            </div>
          </div>
          <div className={styles.fifth}>
            <img src="/images/triangle.svg" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
