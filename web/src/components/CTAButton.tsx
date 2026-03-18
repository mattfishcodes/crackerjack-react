import { SquareArrowOutUpRight } from 'lucide-react'
import { type SanityDocument } from 'next-sanity'
import Link from 'next/link'

export default function CTAButton({ cta }: { cta: SanityDocument }) {
  return (
    <Link
      href={cta.buttonLink}
      className='bg-secondary text-secondary-foreground border-secondary hover:bg-primary inline-block cursor-pointer rounded-3xl border-4 px-8 py-4 transition-all hover:border-white hover:text-white'
    >
      <div className='font-titillium-web flex items-center justify-center gap-2 text-2xl font-semibold'>
        {cta.buttonText} <SquareArrowOutUpRight size={24} strokeWidth={3} />
      </div>
      {cta.buttonSubtext && (
        <div className='font-montserrat'>{cta.buttonSubtext}</div>
      )}
    </Link>
  )
}
