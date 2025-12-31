'use client'

import Container from '@/app/components/Container/Container'
import Separator from '@/components/Separator'

const PaintPointsSection = () => {
  return (
    <Container>
      <div style={{ marginBottom: '2rem' }}>
        <Separator variant='dotted' />
        <h4>
          Are your days filled with scattered tasks and a never ending to do
          list?
        </h4>
        <Separator variant='dotted' />

        <p>
          You&apos;re not alone. Juggling scattered tasks, constant context
          switching, and a to-do list that never shrinks can leave you feeling
          overwhelmed and unproductive. It&apos;s time to bring clarity, focus,
          and structure back into your day.
        </p>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <Separator variant='dotted' />
        <h4>
          Are you struggling to keep up with the rapidly evolving digital
          landscape and its challenges?
        </h4>
        <Separator variant='dotted' />
        <p>
          Staying current feels like a full-time job—new platforms, shifting
          algorithms, and endless tools all competing for your attention. If
          you&apos;re feeling lost in the noise, you&apos;re not alone. We help
          you cut through the chaos and focus on what really moves the needle.
        </p>
      </div>
      <Separator variant='dotted' />
      <h4>
        Is your productivity suffering due to inefficient systems and
        operations?
      </h4>
      <Separator variant='dotted' />
      <p>
        Clunky workflows, outdated tools, and disjointed systems can quietly
        drain hours from your day and stall growth. Streamlining your operations
        isn&apos;t just a luxury—it&apos;s essential for staying competitive and
        reclaiming your time.
      </p>
    </Container>
  )
}

export default PaintPointsSection
