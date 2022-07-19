import { Img, TextBlock } from 'src/components'
import { Section } from 'src/components/layout'
import classNames from 'src/utils'
import AboutImage from 'public/about.jpg'

import styles from './About.module.css'

export default function About() {
  const articleClasses = classNames(styles.gridItem, styles.content)
  return (
    <Section title='О нас'>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <div className={styles.imageContainer}>
            <Img
              className={styles.img}
              src={AboutImage.src}
              width='auto'
              height='100%'
              aspectRatio='3 / 2'
            />
          </div>
        </div>
        <article className={articleClasses}>
          <TextBlock
            title='Более 8 лет'
            content='Компания активно функционирует на российском внутреннем рынке как
              респектабельный поставщик строительной продукции.'
          />
          <TextBlock
            title='2 крупных завода'
            content='Владеет фирма, что укомплектованы высокотехнологичными машинами
            для производства бетонных масс.'
          />
          <TextBlock
            title='60-80 м3'
            content='Производительность турецкого оборудования в час, которые находятся
            в нашем распоряжении.'
          />
        </article>
      </div>
    </Section>
  )
}
