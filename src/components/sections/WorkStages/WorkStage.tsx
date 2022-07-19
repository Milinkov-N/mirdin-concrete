import { ReactNode } from 'react'

import styles from './WorkStages.module.css'

interface WorkStageProps {
  icon: ReactNode
  number: number
  title: string
  content: string
}

export default function WorkStage({
  icon,
  number,
  title,
  content,
}: WorkStageProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIconWrapper}>
        {icon}

        <span className={styles.number}>{number}</span>
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardContent}>{content}</p>
    </div>
  )
}
