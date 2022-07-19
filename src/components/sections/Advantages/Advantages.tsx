import { ReactNode } from 'react'
import { TbShieldCheck, TbTruckDelivery } from 'react-icons/tb'
import { IoMdPricetags } from 'react-icons/io'
import { Container } from 'src/components/layout'
import styles from './Advantages.module.css'

export default function Advantages() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <AdvantageCard
          icon={
            <FlFactory className={styles.cardIcon} color='#e18c0d' size={65} />
          }
          title='Собственное производство бетона'
          subtitle='Вы получаете бетон на прямую от производителя'
        />
        <AdvantageCard
          icon={<TbShieldCheck className={styles.cardIcon} />}
          title='Качественное сырье'
          subtitle='Мы поставляем только сертифицированные материалы'
        />
        <AdvantageCard
          icon={<IoMdPricetags className={styles.cardIcon} />}
          title='Доступная цена
          на бетон'
          subtitle='Отгружаем бетон на ваш объект без наценки'
        />
        <AdvantageCard
          icon={<TbTruckDelivery className={styles.cardIcon} />}
          title='Оперативная
          доставка бетона'
          subtitle='Доставляем бетон в день обращения'
        />
      </Container>
    </section>
  )
}

interface AdvantageCardProps {
  icon: ReactNode
  title: string
  subtitle: string
}

export function AdvantageCard({ icon, title, subtitle }: AdvantageCardProps) {
  return (
    <div className={styles.card}>
      {icon}
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardSubtitle}>{subtitle}</p>
    </div>
  )
}

interface IconProps {
  className?: string
  color?: string
  size?: number
}

export function FlFactory({
  className = '',
  color = '#222F3D',
  size = 24,
}: IconProps) {
  return (
    <svg
      className={className}
      width={`${size}`}
      height={`${size}`}
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.924 4.129A2.25 2.25 0 0 1 5.171 2h1.158a2.25 2.25 0 0 1 2.246 2.129l.838 15.5A2.25 2.25 0 0 1 7.167 22H4.333a2.25 2.25 0 0 1-2.247-2.371l.838-15.5ZM5.171 3.5a.75.75 0 0 0-.749.71l-.838 15.5a.75.75 0 0 0 .75.79h2.833a.75.75 0 0 0 .748-.79l-.837-15.5a.75.75 0 0 0-.75-.71H5.172ZM9.512 22H19.75A2.25 2.25 0 0 0 22 19.75V6a.75.75 0 0 0-1.27-.541l-4.98 4.781V6a.75.75 0 0 0-1.229-.578L9.855 9.284l.101 1.864 4.294-3.554V12a.75.75 0 0 0 1.27.541L20.5 7.76v11.99a.75.75 0 0 1-.75.75h-1V16A1.75 1.75 0 0 0 17 14.25h-4A1.75 1.75 0 0 0 11.25 16v4.5h-.92a3.247 3.247 0 0 1-.818 1.5Zm7.738-6v4.25h-4.5V16a.25.25 0 0 1 .25-.25h4a.25.25 0 0 1 .25.25Z'
        fill={color}
      />
    </svg>
  )
}
