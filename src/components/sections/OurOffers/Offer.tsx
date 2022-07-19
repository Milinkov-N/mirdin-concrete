import { Img, TextBlock } from 'src/components'
import classNames from 'src/utils'

import styles from './OurOffers.module.css'

interface OfferProps {
  imageSrc: string
  title: string
  content: string
  alter?: boolean
}

export default function Offer({
  imageSrc,
  alter = false,
  ...rest
}: OfferProps) {
  const offerClasses = classNames(styles.offer, '', {
    [styles.offerAlter]: alter,
  })

  return (
    <div className={offerClasses}>
      <div className={styles.image}>
        <Img
          width='auto'
          height='100%'
          src={imageSrc}
          aspectRatio='433 / 236'
        />
      </div>
      <TextBlock className={styles.textBlock} {...rest} />
    </div>
  )
}
