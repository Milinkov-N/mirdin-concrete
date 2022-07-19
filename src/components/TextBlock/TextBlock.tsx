import styles from './TextBlock.module.css'

interface TextBlockProps {
  className?: string
  title: string
  content: string
}

export default function TextBlock({
  className,
  title,
  content,
}: TextBlockProps) {
  return (
    <div className={className}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  )
}
