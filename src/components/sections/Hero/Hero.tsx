import { OrderCallForm } from 'src/components'
import { Container } from 'src/components/layout'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Производство бетона</h1>
          <p className={styles.subtitle}>
            Современные технологии и наши амбиции создают не просто бетон, а
            фундамент для вашего идеального проекта
          </p>
        </div>
        <div className={styles.form}>
          <OrderCallForm />
        </div>
      </Container>
    </section>
  )
}
