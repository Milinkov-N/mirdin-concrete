import { ReactNode } from 'react'
import { MdOutlinePayments } from 'react-icons/md'
import { TbTruckDelivery, TbTruckLoading } from 'react-icons/tb'
import { CgCalculator, CgNotes } from 'react-icons/cg'
import WorkStage from './WorkStage'
import { Section } from 'src/components/layout'

import styles from './WorkStages.module.css'

type WorkStageData = {
  icon: ReactNode
  title: string
  content: string
}

const workStagesData: WorkStageData[] = [
  {
    icon: <CgNotes className={styles.cardIcon} />,
    title: 'Заявка',
    content:
      'Вы оставляете заявку на сайте либо звоните по указанному телефону в наш отдел продаж',
  },
  {
    icon: <CgCalculator className={styles.cardIcon} />,
    title: 'Расчет стоимости',
    content:
      'Наши менеджеры рассчитают для Вас полную стоимость заказа с учётом доставки на Ваш объект',
  },
  {
    icon: <TbTruckLoading className={styles.cardIcon} />,
    title: 'Отгрузка',
    content:
      'Мы отгрузим бетон с ближайшего к Вам завода для уменьшения стоимости доставки',
  },
  {
    icon: <TbTruckDelivery className={styles.cardIcon} />,
    title: 'Доставка',
    content:
      'Заказ будет доставлен в точно в срок со всеми сопроводительными документами, возможна доставка в тот же день',
  },
  {
    icon: <MdOutlinePayments className={styles.cardIcon} />,
    title: 'Оплата',
    content: 'Оплата осуществляется по наличному и безналичному расчету',
  },
]

export default function WorkStages() {
  return (
    <Section title='Этапы работы' alter>
      <div className={styles.cards}>
        {workStagesData.map((data, i) => (
          <WorkStage
            key={data.title}
            icon={data.icon}
            number={i + 1}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </Section>
  )
}
