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

export const schemaTypes = [
  // documents
  homePageType,
  serviceType,
  reviewType,
  personType,
  ctaType,

  // sections (objects)
  heroSectionType,
  problemSectionType,
  transformationSectionType,
  promoSectionType,
  ctaSectionType,
  processSectionType,
]
