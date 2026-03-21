import { client } from '@/sanity/client'

const softwareQuery = `*[_type == "servicesPage"][0]{software}`

export default async function SoftwareList() {
  const { software } = await client.fetch(softwareQuery)
  return (
    <div className='py-8 text-center'>
      <h4>{software.heading}</h4>
      <p>{software.description}</p>
      <div className='font-montserrat flex max-h-100 flex-col flex-wrap items-start justify-center leading-6'>
        {software.list.sort().map((s: string) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </div>
  )
}
