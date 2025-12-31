'use client'

import styles from './page.module.scss'
import Container from '@/components/Container'

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className={styles.div}>
        <h1 className={styles.header}>Privacy Policy</h1>
        <p>
          We respect your privacy and are committed to protecting it through
          compliance with this policy.
        </p>
        <p>
          Our website address is:{' '}
          <a href='https://www.crackerjacksolutions.com' className={styles.a}>
            https://www.crackerjacksolutions.com
          </a>
          .
        </p>
        <p>
          This privacy policy will inform you how Crackerjack Solutions LLC uses
          and protects the data you provide to us when you visit and use our
          website and contact form.
        </p>
        <p>
          We reserve the right to change this policy at any given time. If you
          want to make sure that you are up to date with the latest changes, we
          advise you to frequently visit this page.
        </p>
      </div>
      <div className={styles.div}>
        <h2 className={styles.header}>What User Data We Collect</h2>
        <p>When you visit our website, we may collect the following data:</p>
        <ul className={styles.ul}>
          <li>Your IP address.</li>
          <li>The contact information you provide on our contact form.</li>
          <li>Other information such as interests and preferences.</li>
          <li>Data profile regarding your online behavior on our website.</li>
        </ul>
      </div>
      <div className={styles.div}>
        <h2 className={styles.header}>Why We Collect Your Data</h2>
        <p>We collect your data for several reasons:</p>
        <ul className={styles.ul}>
          <li>To better understand your needs.</li>
          <li>To improve our services and products.</li>
          <li>
            To send you promotional emails we think you will find interesting.
          </li>
          <li>
            To customize our website according to your online behavior and
            personal preferences.
          </li>
        </ul>
      </div>
      <div className={styles.div}>
        <h2 className={styles.header}>Safeguarding and Securing the Data</h2>
        <p>
          Crackerjack Solutions LLC is committed to securing your data and
          keeping it confidential. Crackerjack Solutions LLC has done all in its
          power to prevent data theft, unauthorized access, and disclosure by
          implementing the latest technologies and software, which help us
          safeguard all the information we collect online.
        </p>
      </div>
      <div className={styles.div}>
        <h2 className={styles.header}>Our Cookie Policy</h2>
        <p>
          Cookies are strictly used to monitor which pages you find useful and
          which you do not so that we can provide a better experience for you.
        </p>
        <p>
          Once you agree to allow our website to use cookies, you also agree to
          allow us to use the data collected regarding your online behavior
          (analyze web traffic, web pages you visit and spend the most time on).
        </p>
        <p>
          If you want to disable cookies, you can do so by accessing the
          settings of your internet browser. You can visit{' '}
          <a href='https://www.internetcookies.com' className={styles.a}>
            https://www.internetcookies.com
          </a>
          , which contains comprehensive information on how to do this on a wide
          variety of browsers and devices. If you disable cookies our website
          may not perform as expected.
        </p>
      </div>
      <div className={styles.div}>
        <h2 className={styles.header}>Links to Other Websites</h2>
        <p>
          Our website may contain links that lead to other websites. If you
          click on these links Crackerjack Solutions LLC cannot be held
          responsible for your data and privacy protection.
        </p>
        <p>
          Visiting those websites is not governed by this privacy policy
          agreement. Make sure to read the privacy policy documentation of the
          website you go to from our website.
        </p>
      </div>
      <div className={styles.div}>
        <h2 className={styles.header}>
          Restricting the Use of your Personal Data
        </h2>
        <p>
          Crackerjack Solutions LLC will not lease, sell or distribute your
          personal information to any third parties, unless we have your
          permission or are required by law. The personal information you
          provide will be used to communicate with you only.
        </p>
      </div>
      <p>
        <strong>Privacy Policy last updated: September 2023</strong>
      </p>
    </Container>
  )
}

export default PrivacyPolicy
