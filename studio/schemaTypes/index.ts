import { homePageType } from './homePage'
import { serviceType } from './service'
import { reviewType } from './review'
import { personType } from './person'

import { heroSectionType } from './sections/heroSection'
import { problemSectionType } from './sections/problemSection'
import { transformationSectionType } from './sections/transformationSection'
import { promoSectionType } from './sections/promoSection'
import { ctaSectionType } from './sections/ctaSection'
import { processSectionType } from './sections/processSection'
import { ctaType } from './cta'
import { featureSectionType } from './sections/featureSection'
import { retainerPackageType } from './retainerPackage'
import { servicesPageType } from './servicesPage'
import { retainerSectionType } from './sections/retainerSection'
import { softwareSectionType } from './sections/softwareSection'
import { retainerServiceType } from './retainerService'

export const schemaTypes = [
  // documents
  homePageType,
  servicesPageType,
  serviceType,
  reviewType,
  personType,
  ctaType,
  retainerPackageType,
  retainerServiceType,

  // sections (objects)
  heroSectionType,
  problemSectionType,
  transformationSectionType,
  promoSectionType,
  ctaSectionType,
  processSectionType,
  featureSectionType,
  retainerSectionType,
  softwareSectionType,
]
