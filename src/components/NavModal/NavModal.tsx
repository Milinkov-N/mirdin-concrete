import { IoMdClose } from 'react-icons/io'
import { PhoneNumbers, Button, Email, Modal } from 'src/components'

import styles from './NavModal.module.css'

interface NavModalProps {
  show: boolean
  onClose: () => void
}

export default function NavModal({ show, onClose }: NavModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <div className={styles.modal}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.listItem}>
              <a href='/'>Главная</a>
            </li>
            <li className={styles.listItem}>
              <a href='/'>О нас</a>
            </li>
            <li className={styles.listItem}>
              <a href='/'>Цены</a>
            </li>
            <li className={styles.listItem}>
              <a href='/'>Контакты</a>
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
