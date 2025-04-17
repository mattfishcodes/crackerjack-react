'use client'

import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'
import ScheduleButton from './ScheduleButton'
import styles from './CallToAction.module.scss'

type CallToActionProps = {
  buttonColor: string
  children: Array<ReactNode>
}

const CallToAction: React.FunctionComponent<CallToActionProps> = ({
  buttonColor,
  children,
}) => {
  return (
    <div className={styles.container}>
      {children.map((element, i) => {
        if (isValidElement(element)) {
          if (element.type === 'p') {
            return cloneElement(
              element as ReactElement<{ className?: string }>,
              { key: i, className: styles.p },
            )
          }
        }

        return element
      })}

      <ScheduleButton color={buttonColor} />
    </div>
  )
}

export default CallToAction
