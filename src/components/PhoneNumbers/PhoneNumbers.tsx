import { FaPhoneAlt } from 'react-icons/fa'
import classNames from 'src/utils'

import styles from './PhoneNumbers.module.css'

interface PhoneNumberProps {
  className?: string
  color?: 'white' | 'black' | 'inherit'
}

export default function PhoneNumbers({
  className = '',
  color = 'inherit',
}: PhoneNumberProps) {
  const ulClassNames = classNames(styles.list, [`clr-${color}`, className])

  return (
    <ul className={ulClassNames}>
      <li>
        <a href='tel:+79501746699' className={styles.phoneNumber}>
          <FaPhoneAlt className={styles.phoneIcon} />
          <span>+7 (950) 174-66-99</span>
        </a>
      </li>
      <li>
        <a href='tel:+79018669999' className={styles.phoneNumber}>
          <FaPhoneAlt className={styles.phoneIcon} />
          <span>+7 (901) 866-99-99</span>
        </a>
      </li>
    </ul>
  )
}
