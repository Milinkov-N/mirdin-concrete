import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppDispatch } from 'src/contexts/AppContext'
import { PhoneNumbers, Logo, Button, Email, NavModal } from 'src/components'
import { Container } from '../'
import classNames from 'src/utils'

import styles from './Header.module.css'

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [navOpened, setNavOpened] = useState(false)
  const headerClasses = classNames(styles.wrapper, '', {
    [styles.wrapperSticky]: sticky,
  })

  const setOrderCallModalOpened = useAppDispatch()

  const handleClick = () => setOrderCallModalOpened(true)

  const toggleSidebar = () => setNavOpened(isOpened => !isOpened)

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
  }, [])

  return (
    <header className={headerClasses}>
      <Container className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
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
        <Email className={styles.email} />
        <PhoneNumbers className={styles.phoneNumbers} />
        <div className={styles.buttons}>
          <Button
            type='button'
            className={styles.btn}
            label='Заказать звонок'
            onClick={handleClick}
          />
          <FaBars className={styles.menuToggleBtn} onClick={toggleSidebar} />
        </div>
      </Container>
      <NavModal show={navOpened} onClose={toggleSidebar} />
    </header>
  )
}
