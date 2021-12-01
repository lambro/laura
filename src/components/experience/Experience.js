import React, { Component } from 'react'
import styles from './Experience.module.scss'
import { Parallax } from 'react-scroll-parallax'

class Experience extends Component {
  render() {
    return (
      <div className={styles.experiencePage}>
        <div className={styles.content}>
          <div className={styles.third}>
            <div className={styles.left}>
              <h1>Skills</h1>
            </div>
            <div className={styles.line3} />
            <div className={styles.right}>
              <h2>
                <b>JavaScript</b> I have been working with Javascript in various
                forms since I began coding. Initially I worked on large projects
                using Javascript, JQuery and AngularJS to display graphical
                visuals using data from our clients API at the Ford Foundation.
                Following this I went on to work on a social learning web app
                set in a Backbone-Marionette stack.
              </h2>
              <h2>
                More recently I was the sole Front End Developer working with{' '}
                <b>ES9</b> on deployment software. I used <b>NodeJS</b>,{' '}
                <b>React and Redux</b> for our webapp while also building and
                maintaining our promotional website which was built in Gatsby.
              </h2>
              <h2>
                <b>Style</b> I have had a lot of experience with CSS throughout
                my coding life, starting with the Front End course at GA and
                throughout my career as a Front End developer. CSS has changed
                significantly over the years, now sometimes replacing the need
                for JavaScript. I have used pure <b>CSS</b>, and preprocessors
                such as <b>SASS, SCSS and LESS</b>. Experimenting with CSS is a
                lot of fun, and more recently I have been playing with SVG
                design and animation. In my day to day work life I build fully
                responsive pages and components, working with designers to bring
                their flat designs to life with animations and consideration of
                the full UX experience on interactive platforms.
              </h2>

              <h2>
                <b>Production</b> Working with teams of local and remote
                developers I have had valuable experience working with GIT on
                collaborative projects and with <b>Webpack</b>, <b>Circle CI</b>
                , QA engineers and <b>unit testing</b> as integral parts of my
                day to day work processes. I have built production grade
                websites alone making efforts for good SEO and loading times.
              </h2>
              <h2>
                <b>Integration</b> As a front end developer integration and
                collaboration with other developers is an essential skill, I
                worked in a .NET stack at Durable, integrating with C# in
                Umbraco and Sitecore CMS systems. Following this I went on to
                work with a full stack team at Fuse where we were integrating
                Ruby with Backbone Marionette. My most recent experience was
                with a React stack at KintoHub, where we worked in microservices
                and a complete separation of interests. The front end
                communicated with back end services exclusively via APIs, using {' '}
                <b>REST</b> at first and then via <b>GraphQL</b>.
              </h2>
            </div>
          </div>

          <div className={styles.second}>
            <div className={styles.left}>
              <h1>Experience</h1>
            </div>
            <div className={styles.line2} />

            <div className={styles.right}>
              <h2 className={styles.country}>
                <b>SINGAPORE</b>
              </h2>
              <h2>
                <b>Ubisoft</b> Web Developer
              </h2>
              <h2>June 2021 - Present</h2>
              <h2>HTML / JSX / JS / SCSS </h2>
              <h2>
                React / API communication / LIT Element
              </h2>
              <h2>Unit testing</h2>
            </div>

            <div className={styles.right}>
              <h2 className={styles.country}>
                <b>HONG KONG</b>
              </h2>
              <h2>
                <b>KintoHub</b> Front End Engineer
              </h2>
              <h2>September 2017 - May 2020 (2 years 8 months)</h2>
              <h2>HTML / JSX / JS / SCSS </h2>
              <h2>
                React / Node.js / API communication / GraphQL Microservices
              </h2>
              <h2>Unit testing</h2>

              <h2 className={styles.country}>
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
                <b>Durable Digital</b> Front End Developer
              </h2>
              <h2>March 2015 - May 2016</h2>
              <h2>(1 year 3 months) London Front end engineering</h2>
              <h2>
                HTML / CSS / LESS / JavaScript / Angular and C#, in Sitecore and
                Umbraco.
              </h2>
            </div>
          </div>

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
                BSc. (Honours) <b>Environmental Science</b> 2001 - 2005 Kings
                College London, University of London, London
              </h2>

              <img
                className={styles.arrows}
                src="/images/arrows_down_singular.png"
                alt=""
              />

              <Parallax
                className={styles.triangle}
                x={[30, -30]}
                y={[70, -70]}
                slowerScrollRate={true}
              >
                <img src="/images/triangle.svg" alt="triangle" />
              </Parallax>
              <Parallax
                className={styles.triangle2}
                x={[30, -30]}
                y={[70, -70]}
                slowerScrollRate={true}
              >
                <img src="/images/triangle.svg" alt="triangle" />
              </Parallax>
              <Parallax
                className={styles.triangle3}
                x={[30, -30]}
                y={[70, -70]}
                slowerScrollRate={true}
              >
                <img src="/images/triangle.svg" alt="triangle" />
              </Parallax>
            </div>
          </div>
          <div className={styles.fourth}>
            <div className={styles.left}>
              <h1>Hobbies</h1>
            </div>
            <div className={styles.line4} />
            <div className={styles.right}>
              <h2>Video Games</h2>
              <h2>Muay Thai</h2>
              <h2>Portraits / Pixel Art / Digital Art</h2>
              <h2>Cycling</h2>
              <h2>Running</h2>
              <h2>Yoga</h2>
              <h2>Horticulture</h2>
            </div>

            <div className={styles.hobbiesBackground}>
              <img
                src="/images/about_me_hobbies_background.svg"
                alt="monstera gloves and ps5 controller"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
