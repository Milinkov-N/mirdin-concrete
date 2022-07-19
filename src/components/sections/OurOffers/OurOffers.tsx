import React from 'react'
import Offer from './Offer'
import { Section } from 'src/components/layout'
import ImageOne from 'public/offer_img1.jpg'
import ImageTwo from 'public/offer_img2.jpg'
import ImageThree from 'public/offer_img3.jpg'
import ImageFour from 'public/offer_img4.jpg'

import styles from './OurOffers.module.css'

type IOffer = {
  imageSrc: string
  title: string
  content: string
}

const offers: IOffer[] = [
  {
    imageSrc: ImageOne.src,
    title: 'Доставка бетона',
    content:
      'Доставка бетона от фирмы «МИРДИН» осуществляется автобетоносмесители или бетононасосами на небольшие расстояния.',
  },
  {
    imageSrc: ImageTwo.src,
    title: 'Автобетоносмесители',
    content:
      'Аренда бетоносмесителя позволяет эффективно решать вопрос изготовления, заливки и быстрого распределения бетона, а также его перевозки.',
  },
  {
    imageSrc: ImageThree.src,
    title: 'Автобетононасосы',
    content:
      'Это возможность ускорить процесс строительства. Мы подберем подходящие устройства нужных габаритов и производительности, в том числе и вибратор для бетона.',
  },
  {
    imageSrc: ImageFour.src,
    title: 'Лаборатории',
    content:
      'На производствах размещены собственные лаборатории, эффективно осуществляющие контроль всех компонентов, используемых для формирования смесей.',
  },
]

export default function OurOffers() {
  return (
    <Section title='Что мы предлагаем'>
      <div className={styles.offers}>
        {offers.map((offer, i) => (
          <Offer key={offer.title} alter={i % 2 !== 0} {...offer} />
        ))}
      </div>
    </Section>
  )
}
