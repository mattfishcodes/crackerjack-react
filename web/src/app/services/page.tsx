import { type Metadata } from 'next'

import Button from '@/components/Button'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import Separator from '@/components/Separator'
import { client } from '@/sanity/lib/client'
import {
  type ServicesPageData,
  servicesPageQuery,
} from '@/sanity/queries/servicesPage'

import ReviewsCarousel from './components/ReviewsCarousel'

export const metadata: Metadata = {
  title: 'Services',
}

export default async function Services() {
  const {
    consultPromo,
    servicesCards,
    retainerPackages,
    retainerBenefits,
    retainerPromo,
    retainerServices,
    reviews,
    tools,
    footerPromo,
  } = (await client.fetch(servicesPageQuery)) as ServicesPageData

  return (
    <main>
      {/* Consult Promo */}
      <Container className='text-secondary-foreground text-center'>
        <h2 className='text-3xl'>{consultPromo.heading}</h2>
        <p className=''>{consultPromo.body}</p>

        <Button data={consultPromo.cta} variant='dark' />
      </Container>

      <PageHeader>Services</PageHeader>

      {/* Services Cards */}
      <Container>
        <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap'>
          {servicesCards.map((d) => (
            <div
              key={d.title}
              id={d.slug.current}
              className='bg-primary flex-4/9 rounded-xl p-4 text-white lg:p-8'
            >
              <h3 className='text-primary-foreground font-semibold'>
                {d.title}
              </h3>
              <p>{d.subtitle}</p>
              <Separator variant='light' />
              {d.features.map((f) => (
                <p key={f.heading}>
                  <strong className='text-primary-foreground'>
                    {f.heading}
                  </strong>
                  <br />
                  {f.body}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>

      {/* Retainer Packages */}
      <Container>
        <div className='text-center'>
          <h3>{retainerPackages.heading}</h3>
          <p>{retainerPackages.body}</p>
          <Separator variant='dark' />
          <div className='flex flex-col gap-4'>
            {retainerPackages.items.map((item) => (
              <div
                key={item.title}
                className='bg-primary flex-1 rounded-3xl p-8 text-white'
              >
                <h4 className='font-bold'>{item.title}</h4>
                <p className='mb-2'>{item.hours}</p>
                <p className='text-primary-foreground mb-2 font-bold'>
                  ${item.price}
                </p>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <Separator variant='dotted' />
          <div className='px-4'>{retainerPackages.disclaimer}</div>
          <Separator variant='dotted' />
        </div>
      </Container>

      {/* Retainer Benefits */}
      <Container className='text-center'>
        <h4>{retainerBenefits.heading}</h4>
        <ul>
          {retainerBenefits.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>

      {/* Retainer Promo */}
      <Container className='text-center'>
        <h3>{retainerPromo.heading}</h3>
        <p>{retainerPromo.body}</p>
        <Button data={retainerPromo.cta} variant='dark' />
      </Container>

      {/* Retainer Services */}
      <Container className='bg-gray-200'>
        <div className='text-center'>
          <h5>{retainerServices.heading}</h5>
          <p>{retainerServices.body}</p>
        </div>
        <div className='flex flex-row flex-wrap gap-4'>
          {retainerServices.items.map((item) => {
            return (
              <div key={item.title} className='min-w-75 flex-1 py-4'>
                <h3>{item.title}</h3>
                <Separator variant='dark' />
                <ul className='list-none'>
                  {item.items.map((i) => {
                    return (
                      <li
                        key={i}
                        className='bg-[url(/icon.svg)] bg-size-[10px_auto] bg-position-[0_7px] bg-no-repeat pl-4'
                      >
                        {i}
                      </li>
                    )
                  })}
                  <li className='bg-[url(/icon.svg)] bg-size-[10px_auto] bg-position-[0_7px] bg-no-repeat pl-4'>
                    And More...
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </Container>

      {/* Reviews */}
      <Container>
        <h4 className='my-4 text-center text-2xl'>{reviews.heading}</h4>
        <div className='relative flex items-center justify-center'></div>
        <ReviewsCarousel reviews={reviews.items} />
      </Container>

      {/* Tools */}
      <Container className='from-secondary to-primary bg-linear-30 from-95% to-100%'>
        <div className='py-8 text-center'>
          <h4>{tools.heading}</h4>
          <p>{tools.body}</p>
          <div className='font-montserrat flex flex-col justify-center leading-6 lg:flex-wrap'>
            <div>
              {tools.items.sort().map((item) => (
                <p key={item} className='font-mono text-sm'>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Footer Promo */}
      <Container className='text-center'>
        <h6>{footerPromo.heading}</h6>
        <p>{footerPromo.primaryBody}</p>
        <div className='mb-4'>
          <Button data={footerPromo.primaryCta} variant='dark' />
        </div>

        <p>{footerPromo.secondaryBody}</p>
        <Button data={footerPromo.secondaryCta} variant='dark' />
      </Container>
    </main>
  )
}
