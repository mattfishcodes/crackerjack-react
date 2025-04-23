export default function imageLoader({ src }: { src: string }) {
  return `https://${process.env.HOST_URL}${src}`
}
