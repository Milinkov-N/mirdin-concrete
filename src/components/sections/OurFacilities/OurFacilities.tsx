import { Section } from 'src/components/layout'
import Facility from './Facility'
import styles from './OurFacilities.module.css'

export default function OurFacilities() {
  return (
    <Section
      title='Наши возможности'
      subtitle='«МИРДИН» – компания, известная как
  благонадежный изготовитель и поставщик.'
      alter
    >
      <div className={styles.facilities}>
        <Facility number={2} name='Бетонных завода' />
        <Facility
          number={1}
          name='Автобетоно
насос'
        />
        <Facility number={10} name='Автобетоно смесителей' />
        <Facility number={50} name='Специалистов' />
      </div>
    </Section>
  )
}
