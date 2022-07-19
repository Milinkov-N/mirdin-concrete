import styles from './OurFacilities.module.css'

interface FacilityProps {
  number: number
  name: string
}

export default function Facility({ name, number }: FacilityProps) {
  return (
    <div className={styles.facility}>
      <div className={styles.facilityNumber}>{number}</div>
      <div className={styles.facilityName}>{name}</div>
    </div>
  )
}
