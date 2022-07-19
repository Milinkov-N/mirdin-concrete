import { useState } from 'react'
import classNames from 'src/utils'

import styles from './Email.module.css'

interface EmailProps {
  className?: string
}

export default function Email({ className = '' }: EmailProps) {
  const email = 'spik555@mail.ru'
  const [clicked, setClicked] = useState(false)

  const wrapperClasses = classNames('pos-rel fw-light', className)
  const tooltipClasses = classNames(styles.tooltip, '', {
    [styles.tooltipClicked]: clicked,
  })

  const handleEmailClick = () => {
    setClicked(true)

    navigator.clipboard
      .writeText(email)
      .catch(e =>
        console.error(`Error occured while copying to clipboard. Cause: ${e}`)
      )

    setTimeout(() => setClicked(false), 1000)
  }

  return (
    <div className={wrapperClasses}>
      <span className='cur-pointer' onClick={handleEmailClick}>
        {email}
      </span>
      <div className={tooltipClasses}>Скопировано!</div>
    </div>
  )
}
