import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import styles from './page.module.scss'
import Section from '../components/Section'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'

export default function About() {
  return (
    <main>
      <Header title={'About'} />

      <Section>
        <div>
          <h3>Christine Warner</h3>
          <Image
            src='/christine-headshot.png'
            alt=''
            width={500}
            height={500}
          />
          <p>
            Hey there! I&apos;m Christine, the founder of Crackerjack Solutions.
            With a lifelong background in entrepreneurship and over 25 years of
            corporate experience across diverse industries, I&apos;ve embraced
            the digital nomad lifestyle for the past 8 years to refine my
            expertise.
          </p>
          <p>
            At Crackerjack Solutions, I help entrepreneurs, solopreneurs, and
            freelancers strategize, organize, and streamline their operations.
            Think of me as your behind-the-scenes sherpa, leading you through
            complex business terrain and fine-tuning your systems.
          </p>
          <p>
            I excel at strategic thinking and solving complex business
            challenges through the effective use of technology, processes, and
            resources. Together, we&apos;ll create a plan to automate and
            streamline your operations, transforming chaos into efficiency and
            freeing you to focus on what you do best.
          </p>
          <p>
            Building strong relationships with customers is a priority for me.
          </p>
          <p>
            When I&apos;m not busy crafting business solutions, you can find me
            exploring the beautiful woods and waters of Traverse City, tending
            to my garden, getting lost in a good book, or painting my next
            masterpiece. After all, even a sherpa needs some downtime to
            recharge!
          </p>
          <p>
            I&apos;m excited to help you achieve peak efficiency and tackle your
            business challenges. Let&apos;s optimize your business for peak
            performance!
          </p>
        </div>
      </Section>

      <Section>
        <p>
          If you would like to review my recent career history, you can do so{' '}
          <Link href='#' style={{ textDecoration: 'underline' }}>
            here
          </Link>
          .
        </p>
      </Section>

      <Section>
        <div>
          <h2>Matthew Fisher</h2>
          <p>
            I&apos;m Matthew, lead web designer here at Crackerjack Solutions.
            With a strong foundation in web design principles and a
            certification to back it up, I&apos;m dedicated to helping
            businesses and individuals establish their online presence.
          </p>
          <p>
            I specialize in building and maintaining websites using WordPress,
            the world&apos;s most popular content management system. While I may
            be early in my professional journey, my commitment to continuous
            learning and improvement has equipped me with the skills needed to
            deliver top-notch web solutions.
          </p>
          <p>
            Whether you&apos;re looking for a brand-new website or need help
            revamping an existing one, I&apos;m here to make the process smooth
            and enjoyable. When I&apos;m not busy designing websites, you can
            find me exploring the latest technologies, keeping up with current
            events, or enjoying music or nature. I&apos;m always excited to take
            on new challenges and help my clients succeed in the digital world.
          </p>
        </div>
      </Section>

      <Section>
        <h3>Core Values</h3>
        <p>Integrity Accountability Kindness</p>
      </Section>

      <Section>
        <CallToAction buttonColor='dark'>
          <h3>
            Thank you for taking the time to learn a bit about me and
            Crackerjack Solutions online business management services.
          </h3>
          <p>
            We are excited to explore how we can assist you in achieving your
            business goals and overcoming challenges. Feel free to reach out,
            and let&apos;s start a conversation!
          </p>
        </CallToAction>
      </Section>
    </main>
  )
}
