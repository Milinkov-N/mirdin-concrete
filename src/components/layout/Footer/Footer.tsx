import { IoIosArrowUp } from 'react-icons/io'
import { Button, Email, Logo, PhoneNumbers } from 'src/components'
import { Container } from '../'

import styles from './Footer.module.css'

export default function Footer() {
  const scrollUp = () => window.scrollTo({ top: 0 })

  return (
    <footer className={styles.wrapper}>
      <div>
        <Container className={styles.topRow}>
          <Logo />
          <div className={styles.contacts}>
            <Email />
            <PhoneNumbers />
            <Button type='button' label='Заказать звонок' />
          </div>
        </Container>
      </div>
      <div>
        <Container className={styles.bottomRow}>
          <p className={styles.copyright}>
            <span className='uppercase'>ооо “мирдин”</span>{' '}
            <span>- Все права защищены &copy; {new Date().getFullYear()}</span>
          </p>
          <div className={styles.scrollUpBtn} onClick={scrollUp}>
            <span>Наверх</span>
            <div className={styles.scrollUpIcon}>
              <IoIosArrowUp />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
