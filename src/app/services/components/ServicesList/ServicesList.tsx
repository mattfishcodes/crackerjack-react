'use client'

import React from 'react'
import styles from './ServicesList.module.scss'
import List from '../../../components/List/List'

const ServicesList = () => {
  return (
    <div className={styles.flexContainer}>
      <List
        title={'Projects'}
        list={[
          'Create Detailed Project Plans',
          'Lead Initial Kickoff Call with Stakeholders',
          'Lead Regular Check In Calls',
          'Manage Communication, Timeline, Change Requests, Status and Deliverables',
          'Maximize Productivity, Quality and Stakeholder Satisfaction',
          'And more…',
        ]}
      />

      <List
        title={'Systems'}
        list={[
          'Manage Scheduling',
          'Manage Invoicing',
          'Manage Client Onboarding',
          'Review, Update and Create Processes',
          'Create SOPs & Playbooks for Systems',
          'And more…',
        ]}
      />

      <List
        title={'Operations'}
        list={[
          'Review and Optimize existing Business Processes and Tools',
          'Create SOPs and Playbooks for Operations',
          'Manage CRM, Email and Calendar',
          'Create and/or Update Automations',
          'Develop Digital File Systems',
          'And more…',
        ]}
      />
    </div>
  )
}

export default ServicesList
