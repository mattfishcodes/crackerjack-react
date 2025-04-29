'use client'

import Container from '@/app/components/Container/Container'

const PageHeader = ({ title }: { title: string }) => {
  return (
    <Container bg='primary'>
      <div style={{ textAlign: 'center' }}>
        <h1>{title}</h1>
        <div className='separator light' />
      </div>
    </Container>
  )
}

export default PageHeader
