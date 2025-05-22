import path from 'path'
import { ImageLoaderProps } from 'next/image'

const imageLoader = ({ src, width }: ImageLoaderProps) => {
  const ext = path.extname(src).toLowerCase()

  const name = path.basename(src, ext)

  return `/images/${name}-${width}.webp`
}

export default imageLoader
