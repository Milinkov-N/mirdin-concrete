import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppDispatch } from 'src/contexts/AppContext'
import { PhoneNumbers, Logo, Button, Email, NavModal } from 'src/components'
import { Container } from '../'
import classNames, { scrollUp } from 'src/utils'

import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  const setOrderCallModalOpened = useAppDispatch()
  const [sticky, setSticky] = useState(false)
  const [navOpened, setNavOpened] = useState(false)

  const headerClasses = classNames(styles.wrapper, '', {
    [styles.wrapperSticky]: sticky,
  })

  const handleClick = () => setOrderCallModalOpened(true)
  const toggleSidebar = () => setNavOpened(isOpened => !isOpened)
  const handleScrollUp = () => scrollUp()

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
              <Link href=''>
                <a onClick={handleScrollUp}>Главная</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='#about'>
                <a>О нас</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='#services'>
                <a>Услуги</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='#price-list'>
                <a>Цены</a>
              </Link>
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
