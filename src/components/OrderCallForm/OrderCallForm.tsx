import { IoMdClose } from 'react-icons/io'
import { Button, Input } from 'src/components'
import { useAppDispatch } from 'src/contexts/AppContext'
import classNames from 'src/utils'

import styles from './OrderCallForm.module.css'

interface OrderCallProps {
  isModal?: boolean
}

export default function OrderCallForm({ isModal = false }: OrderCallProps) {
  const setOrderCallModalOpened = useAppDispatch()
  const wrapperClasses = classNames(styles.formWrapper, '', {
    [styles.modal]: isModal,
  })

  const handleClick = () => setOrderCallModalOpened(false)

  return (
    <div className={wrapperClasses}>
      {isModal && (
        <IoMdClose className={styles.closeBtn} onClick={handleClick} />
      )}
      <h2 className={styles.title}>Заказать звонок</h2>
      <p className={styles.subtitle}>
        Оставьте заявку и наши сотрудники свяжутся с вами в кратчайшие сроки
      </p>
      <form
        className={styles.form}
        action='https://formsubmit.co/spik555@mail.ru'
        method='POST'
      >
        <Input
          type='hidden'
          name='_cc'
          value='milinkov.nik@gmail.com'
          label=''
        />
        <Input
          type='hidden'
          name='_subject'
          value='Новый заявка на звонок на сайте concrete-mirdin.ru'
          label=''
        />
        <Input
          type='text'
          name='name'
          label='Имя'
          placeholder='Введите имя'
          required
        />
        <Input
          type='tel'
          name='phoneNumber'
          label='Телефон'
          placeholder='+7 (___) ___-__-__'
          required
        />
        <Button
          className={styles.submitBtn}
          type='button'
          btnType='submit'
          label='Отправить заявку'
        />
      </form>
    </div>
  )
}
