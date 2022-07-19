import { useEffect, useState } from 'react'
import { Modal, OrderCallForm } from 'src/components'
import { useApp } from 'src/contexts/AppContext'

import styles from './OrderCallModal.module.css'

export default function OrderCallModal() {
  const [isResponsive, setIsResponsive] = useState(false)
  const [opened, setOpened] = useApp()

  const handleClose = () => setOpened(false)

  useEffect(() => {
    if (document.body.clientWidth < 451) {
      setIsResponsive(true)
    } else {
      setIsResponsive(false)
    }

    const onResize = () => {
      if (document.body.clientWidth < 451) {
        setIsResponsive(true)
      } else {
        setIsResponsive(false)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Modal
      show={opened}
      initial={{ x: '50%', y: '-100vh' }}
      animate={{ x: '50%', y: isResponsive ? '0vh' : '15vh' }}
      exit={{ x: '50%', y: '-100vh' }}
      onClose={handleClose}
    >
      <OrderCallForm isModal />
    </Modal>
  )
}
