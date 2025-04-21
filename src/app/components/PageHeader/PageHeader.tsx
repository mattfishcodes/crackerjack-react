import React from 'react'
import Container from '../Container/Container'

type PageHeaderProps = {
  title: string
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ title }) => {
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
