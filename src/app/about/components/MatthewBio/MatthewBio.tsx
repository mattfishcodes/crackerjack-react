'use client'

import styles from './MatthewBio.module.scss'

const MatthewBio = () => {
  return (
    <div className={styles.container}>
      <h2>Matthew Fisher</h2>
      <p>
        I&apos;m Matthew, lead web designer here at Crackerjack Solutions. With
        a strong foundation in web design principles and a certification to back
        it up, I&apos;m dedicated to helping businesses and individuals
        establish their online presence.
      </p>
      <p>
        I specialize in building and maintaining websites using{' '}
        <a href='https://react.dev/' style={{ textDecoration: 'underline' }}>
          React
        </a>
        , a popular open source front-end javascript library built by Facebook
        (Meta). While I may be early in my professional journey, my commitment
        to continuous learning and improvement has equipped me with the skills
        needed to deliver top-notch web solutions.
      </p>
      <p>
        Whether you&apos;re looking for a brand-new website or need help
        revamping an existing one, I&apos;m here to make the process smooth and
        enjoyable. When I&apos;m not busy designing websites, you can find me
        exploring the latest technologies, keeping up with current events, or
        enjoying music or nature. I&apos;m always excited to take on new
        challenges and help my clients succeed in the digital world.
      </p>
    </div>
  )
}

export default MatthewBio
