import { PageSectionProps } from 'src/types'
import { Section } from 'src/components/layout'
import BodyRow from './BodyRow'
import { concreteEntries } from 'src/consts'

import styles from './PriceList.module.css'

export default function PriceList({ anchor }: PageSectionProps) {
  return (
    <Section title='Прайс-лист' id={anchor}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr className={styles.headRow}>
              <th className={styles.headColumn}>Марка</th>
              <th className={styles.headColumn}>Доставка</th>
              <th className={styles.headColumn}>
                <div>Цена за 1м3 наличный</div>
                <div>расчёт, руб.</div>
              </th>
              <th className={styles.headColumn}>Цена за 1м3 без НДС, руб.</th>
              <th className={styles.headColumn}>Цена за 1м3 с НДС, руб.</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {concreteEntries.map((entry, i) => (
              <BodyRow key={i} {...entry} />
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
