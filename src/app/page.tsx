import styles from './page.module.scss'
import Section from './components/Section'
import ServicesLinks from './home/components/ServicesList/ServicesLinks'
import CallToAction from './home/components/CallToAction/CallToAction'
import PaintPointsSection from './home/components/PainPointsSection/PainPointsSection'
import TitleSection from './home/components/TitleSection/TitleSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Section>
        <TitleSection />
      </Section>
      <Section>
        <PaintPointsSection />
      </Section>
      <Section>
        <CallToAction />
      </Section>
      <Section>
        <ServicesLinks />
      </Section>
    </main>
  )
}
