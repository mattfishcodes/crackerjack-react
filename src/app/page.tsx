import Image from 'next/image'
import styles from './page.module.scss'
import Section from './components/Section'
import ScheduleButton from './components/ScheduleButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <Section>
        <Image
          className={styles.logo}
          src='/icon-square.png'
          alt=''
          width={500}
          height={500}
        />
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '40px' }}>Crackerjack Solutions</h1>

          <hr style={{margin: '20px 0'}}/>

          <p style={{marginBottom: '10px'}}>Welcome to Crackerjack Solutions Virtual Business Management Services!</p>

          <p style={{marginBottom: '10px'}}>Empowering Entrepreneurs and Business Leaders to cultivate business growth, elevate productivity, and optimize operations.</p>

          <p>Unleash Your Potential, Reduce Stress, and Reclaim Time for What Matters Most!</p>
        </div>
      </Section>
      <Section>
        <div style={{marginBottom: '10px'}}>
          <p style={{marginBottom: '10px'}}>Are your days filled with scattered tasks and a never ending to do list?</p>

          <p style={{marginBottom: '10px'}}>Do you find yourself jumping from one task to another, unable to focus on what truly matters?</p>

          <p style={{marginBottom: '10px'}}>Are you struggling to keep up with the rapidly evolving digital landscape and its challenges?</p>

          <p style={{marginBottom: '10px'}}>Is your productivity suffering due to inefficient systems and operations?</p>

          <p>Do you experience ongoing stress and overwhelm caused by these issues?</p>
        </div>
        <Image
          className={styles.img}
          src='/scrabble-letters.jpg'
          alt=''
          width={400}
          height={300}
        />
      </Section>
      <Section>
        <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
          <strong style={{marginBottom: '10px'}}>If you answered yes to one or more of the above questions, Crackerjack Solutions can help!</strong>
          <p style={{marginBottom: '10px'}}>Above all, at Crackerjack Solutions, we get that running a business can be a lot to handle. But don&apos;t worry, that&apos;s where we come in! We&apos;re all about making things simpler for you. Most importantly, we believe in keeping things in sync with your big vision and goals.</p>
          <p style={{marginBottom: '10px'}}>So, what do we do? Well, we help you out with managing your projects, systems, and operations. However, we don&apos;t just provide services; we&apos;re like your trusty sidekick. We&apos;re here to lend a hand and keep things rolling smoothly. Our aim? To help you focus on what truly matters &#45; your passions, growth, and vision.</p>
          <p style={{marginBottom: '10px'}}>Picture a world where you&apos;re not buried in the day-to-day grind, while also having more time to do what you love. Crackerjack Solutions is here to turn that vision into your reality. So, why not get in touch today and unlock your business&apos;s full potential?</p>
          <ScheduleButton color='dark'/>
        </div>
      </Section>
    </main>
  )
}
