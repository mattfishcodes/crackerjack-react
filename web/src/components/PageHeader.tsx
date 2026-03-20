'use client'

import Separator from '@/components/Separator'

import Container from './Container'

export default function PageHeader({ children }: { children: string }) {
  return (
    <Container className='bg-primary text-center text-white'>
      <h1>{children}</h1>
      <Separator variant='light' />
    </Container>
  )
}
