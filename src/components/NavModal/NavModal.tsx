import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'
import { PhoneNumbers, Button, Email, Modal } from 'src/components'
import { scrollUp } from 'src/utils'

import styles from './NavModal.module.css'

interface NavModalProps {
  show: boolean
  onClose: () => void
}

export default function NavModal({ show, onClose }: NavModalProps) {
  const handleScrollUp = () => {
    scrollUp()
    onClose()
  }

  return (
    <Modal show={show} onClose={onClose}>
      <div className={styles.modal}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.listItem}>
              <Link href=''>
                <a onClick={handleScrollUp}>Главная</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='#about'>
                <a onClick={onClose}>О нас</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='#services'>
                <a onClick={onClose}>Услуги</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='#price-list'>
                <a onClick={onClose}>Цены</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button
            className={styles.btn}
            type='button'
            label='Заказать звонок'
          />
          <PhoneNumbers className={styles.numbers} />
          <Email className={styles.email} />
        </div>
        <IoMdClose className={styles.closeBtn} onClick={onClose} />
      </div>
    </Modal>
  )
}
