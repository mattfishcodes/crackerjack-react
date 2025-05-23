'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './OurProcess.module.scss'
import Container from '@/app/components/Container/Container'

const OurProcess = () => {
  return (
    <Container>
      <h3 className={styles.heading}>Our Process</h3>
      <div className='separator dark' />
      <div className={styles.container}>
        <div className={styles.item}>
          <p className={styles.number}>1</p>
          <h3>Initial Consultation</h3>
          <p>
            We begin with a free, open discussion to understand your business
            goals and challenges, so we can recommend the right solution for
            your needs.
          </p>
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div className={styles.item}>
          <p className={styles.number}>2</p>
          <h3>Package Selection</h3>
          <p>
            Together, we&apos;ll select the best-fit package—whether you need
            systems analysis, CRM setup, web development, or ongoing support.
          </p>
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div className={styles.item}>
          <p className={styles.number}>3</p>
          <h3>Planning</h3>
          <p>
            Next, we&apos;ll schedule a detailed discovery call to outline the
            project scope and deliver a tailored proposal for your approval.
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
    </Container>
  )
}

export default OurProcess
