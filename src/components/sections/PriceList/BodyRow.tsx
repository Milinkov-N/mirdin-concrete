import { ConcreteEntry } from 'src/consts'

import styles from './PriceList.module.css'

interface BodyRowProps extends ConcreteEntry {}

export default function BodyRow({
  name,
  delivery,
  prices: { hardCash, withVAT, withoutVAT },
}: BodyRowProps) {
  return (
    <tr className={styles.bodyRow}>
      <td className={styles.bodyColumn}>{name}</td>
      <td className={styles.bodyColumn}>
        {delivery ? 'С доставкой' : 'Без доставки'}
      </td>
      <td className={styles.bodyColumn}>{hardCash}</td>
      <td className={styles.bodyColumn}>{withoutVAT}</td>
      <td className={styles.bodyColumn}>{withVAT}</td>
    </tr>
  )
}
