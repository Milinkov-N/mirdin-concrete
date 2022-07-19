import { IoIosArrowUp } from 'react-icons/io'
import { Button, Email, Logo, PhoneNumbers } from 'src/components'
import { useAppDispatch } from 'src/contexts/AppContext'
import { Container } from '../'
import { scrollUp } from 'src/utils'

import styles from './Footer.module.css'

export default function Footer() {
  const setOrderCallModalOpened = useAppDispatch()

  const handleClick = () => setOrderCallModalOpened(true)
  const handleScrollUp = () => scrollUp()

  return (
    <footer className={styles.wrapper}>
      <div>
        <Container className={styles.topRow}>
          <Logo />
          <div className={styles.contacts}>
            <Email />
            <PhoneNumbers />
            <Button
              type='button'
              label='Заказать звонок'
              onClick={handleClick}
            />
          </div>
        </Container>
      </div>
      <div>
        <Container className={styles.bottomRow}>
          <p className={styles.copyright}>
            <span className='uppercase'>ооо “мирдин”</span>{' '}
            <span>- Все права защищены &copy; {new Date().getFullYear()}</span>
          </p>
          <div className={styles.scrollUpBtn} onClick={handleScrollUp}>
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
