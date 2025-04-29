'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './OurProcess.module.scss'

const OurProcess = () => {
  return (
    <>
      <h3 className={styles.heading}>Our Process</h3>
      <div className='separator dark' />
      <div className={styles.container}>
        <div className={styles.item}>
          <p className={styles.number}>1</p>
          <h3>Initial Consultation</h3>
          <p>
            We start with a complimentary, open discussion to fully understand
            your business needs and goals. This allows us to propose the perfect
            solution tailored to your unique situation.
          </p>
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div className={styles.item}>
          <p className={styles.number}>2</p>
          <h3>Package Selection</h3>
          <p>
            We will help you choose the package that best suits your
            requirements—whether it&apos;s systems analysis, CRM setup, website
            development/maintenance, or an hourly retainer option.
          </p>
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div className={styles.item}>
          <p className={styles.number}>3</p>
          <h3>Planning</h3>
          <p>
            We&apos;ll conduct a thorough discovery call to review and plan the
            project details, then we will provide a detailed proposal for your
            review and signature.
          </p>
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div className={styles.item}>
          <p className={styles.number}>4</p>
          <h3>Execution</h3>
          <p>
            Our team will diligently work on your project, ensuring completion
            on time and in accordance with your expectations.
          </p>
        </div>
      </div>
    </>
  )
}

export default OurProcess
