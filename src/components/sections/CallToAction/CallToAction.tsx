import { Button, Img } from 'src/components'
import { Container } from 'src/components/layout'
import Image from 'public/truck.png'

import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>БЫСТРО И КАЧЕСТВЕННО</h2>
          <p className={styles.subtitle}>
            Коротко опишите ваш запрос и заполните все поля.
          </p>
          <Button type='link' href='/' label='Оставить заявку' />
        </div>
        <div className={styles.image}>
          <Img src={Image.src} width={500} aspectRatio='187 / 134' />
        </div>
      </Container>
    </section>
  )
}
