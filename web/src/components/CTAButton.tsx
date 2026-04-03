'use client'

import { SquareArrowOutUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import Link from 'next/link'

const variants = {
  primary: {
    initial: {
      backgroundColor: 'var(--secondary)',
    },
    hover: {
      backgroundColor: 'rgb(255 255 255)',
    },
    tap: {
      backgroundColor: 'rgb(255 255 255)',
    },
  },
  secondary: {
    initial: {
      backgroundColor: 'var(--primary)',
      color: 'rgb(255 255 255)',
    },
    hover: {
      backgroundColor: 'rgb(255 255 255)',
      color: 'var(--primary)',
    },
    tap: {
      backgroundColor: 'rgb(255 255 255)',
      color: 'var(--primary)',
    },
  },
  dark: {
    initial: {
      backgroundColor: 'var(--secondary)',
    },
    hover: {
      backgroundColor: 'var(--primary)',
      color: 'rgb(255 255 255)',
    },
    tap: {
      backgroundColor: 'var(--primary)',
      color: 'rgb(255 255 255)',
    },
  },
}

export default function CTAButton({
  cta,
  variant = 'primary',
}: {
  cta: {
    buttonLink: string
    buttonText: string
    buttonSubtext?: string | undefined
  }
  variant?: 'primary' | 'secondary' | 'dark'
}) {
  return (
    <motion.button
      className='inline-block cursor-pointer rounded-3xl px-8 py-4'
      initial='initial'
      whileHover='hover'
      whileTap='tap'
      variants={variants[variant]}
    >
      <Link href={cta.buttonLink} target='_blank'>
        <div className='font-titillium-web flex items-center justify-center gap-2 text-2xl font-semibold'>
          {cta.buttonText} <SquareArrowOutUpRight size={24} strokeWidth={3} />
        </div>
        {cta.buttonSubtext && (
          <div className='font-montserrat'>{cta.buttonSubtext}</div>
        )}
      </Link>
    </motion.button>
  )
}
