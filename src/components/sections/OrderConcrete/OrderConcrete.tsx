import { Button, Input } from 'src/components'
import { Select } from 'src/components/Input/Input'
import { Section } from 'src/components/layout'
import { concreteEntries } from 'src/consts'
import { useOrderConcreteForm } from 'src/hooks/'

import styles from './OrderConcrete.module.css'

export default function OrderConcrete() {
  const { summary, state, handlers } = useOrderConcreteForm()

  return (
    <Section title='Заказать бетон' alter>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <p>
            Мы сможем изготовить, а также транспортировать бетон и предоставить
            необходимое оборудование к оговоренному заранее месту проведения
            строительства со следующими условиями доставки:
          </p>
          <ol className={styles.clausesList}>
            <li>Миксер работает 40 минут бесплатно - далее 1000 руб./час</li>
            <li>Максимальная длина жёлоба 4,5 метра</li>
            <li>Стоимость бетононасоса 14 тыс. руб. </li>
            <li>
              Расходы по увязке миксера по вине клиента - оплачивает клиент
            </li>
          </ol>
        </div>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Форма заявки</h2>
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
              value='Новый заказ доставки бетона на сайте concrete-mirdin.ru'
              label=''
            />
            <Input type='hidden' name='summary' value={summary} label='' />
            <Select
              name='concrete-model'
              label='Марка бетона'
              onChange={handlers.handleConcreteModelChange}
            >
              {concreteEntries.map(({ fullname, value }) => (
                <option key={value} value={value}>
                  {fullname}
                </option>
              ))}
            </Select>
            <Input
              type='number'
              name='volume'
              label='Объём, м3'
              placeholder='3'
              value={state.volume}
              min={0}
              onChange={handlers.handleVolumeChange}
            />
            <Input
              type='text'
              name='name'
              label='Имя'
              placeholder='Введите имя'
            />
            <Input
              type='tel'
              name='phoneNumber'
              label='Телефон'
              placeholder='+7 (___) ___-__-__'
            />
            <Input
              wrapperClassName={styles.span_2}
              type='text'
              name='delivery-adress'
              label='Адрес доставки'
              placeholder='ул. Пугачёва, д.45'
            />
            <Input
              wrapperClassName={styles.span_2}
              type='datetime-local'
              name='delivery-date'
              label='Дата'
            />
            <Select name='entrance' label='Подъезд к территории'>
              <option value='good'>Хороший</option>
              <option value='problematic'>Проблематичный</option>
            </Select>
            <Input
              type='number'
              name='gutter-length'
              label='Длина жёлоба, м'
              placeholder='3'
            />
            <Select
              className={styles.span_2}
              name='payment'
              label='Оплата'
              onChange={handlers.handlePaymentChange}
            >
              <option value='hard-cash'>Наличными</option>
              <option value='remittance'>Переводом</option>
              <option value='debit-card'>По карте</option>
            </Select>
            <div className={styles.checkbox}>
              <input
                type='checkbox'
                name='concrete-pump'
                id='concrete-pump'
                onChange={handlers.handleConcretePumpChange}
              />
              <label htmlFor='concrete-pump'>Бетононасос</label>
            </div>

            <footer className={styles.span_2}>
              <div className={styles.summary}>
                Итого: <span>{summary} руб.</span>
              </div>
              <Button
                className={styles.submitBtn}
                type='button'
                btnType='submit'
                label='Отправить заявку'
              />
            </footer>
          </form>
        </div>
      </div>
    </Section>
  )
}
