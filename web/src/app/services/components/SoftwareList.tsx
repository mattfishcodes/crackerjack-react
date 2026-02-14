'use client'

const softwareList = [
  'Airtable',
  'Asana',
  'Calendly',
  'Canva',
  'ClickUp',
  'Dubsado',
  'FormAssembly',
  'Gusto',
  'HubSpot',
  'LastPass',
  'Loom',
  'MailChimp',
  'Make',
  'Microsoft/Office 365',
  'Miro',
  'Moxie',
  'QuickBooks',
  'Salesforce',
  'SiteGround',
  'Slack',
  'Stripe Payments',
  'TaskRay',
  'Trello',
  'WordPress',
  'Zapier',
  'Zoom',
]

const SoftwareList = () => {
  return (
    <div className='py-8 text-center'>
      <h4>Software</h4>
      <p>
        We use a variety of online apps/SaaS tools. Some of them are used daily
        and some weekly, others less often. However, we have not yet met a SaaS
        tool that we were not able to master! We learn quickly and love the
        challenge of learning a new tool. Here is a brief list of some of the
        tools we currently use or have used frequently:
      </p>
      <div className='font-montserrat flex flex-row items-start justify-center leading-6'>
        <div>
          {softwareList.slice(0, softwareList.length / 2).map((sw, i) => {
            return <div key={i}>{sw}</div>
          })}
        </div>
        <div>
          {softwareList.slice(softwareList.length / 2).map((sw, i) => {
            return <div key={i}>{sw}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default SoftwareList
