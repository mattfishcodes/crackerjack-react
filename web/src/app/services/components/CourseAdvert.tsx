'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CourseAdvert() {
  return (
    <div className='mx-auto md:max-w-[50%]'>
      <Link href='https://courses.crackerjacksolutions.com/info'>
        <Image src='course-flyer.jpg' alt='' width={1024} height={1024} />
      </Link>
    </div>
  )
}
