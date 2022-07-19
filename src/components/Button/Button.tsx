import { ReactNode } from 'react'
import classNames from 'src/utils'
import styles from './Button.module.css'

interface CommonProps {
  className?: string
  label?: string
  onClick?: () => void
  children?: ReactNode
}

interface Link {
  type: 'link'
  href: string
  btnType?: never
}

interface Button {
  type: 'button'
  btnType?: 'button' | 'submit' | 'reset'
  href?: never
}

type ButtonProps = CommonProps & (Link | Button)

export default function Button({
  className = '',
  type,
  onClick,
  href,
  btnType,
  label,
  children,
}: ButtonProps) {
  const btnClasses = classNames(styles.primary, className)
  const content = children ? children : label
  switch (type) {
    case 'link':
      return (
        <a className={btnClasses} href={href} onClick={onClick}>
          {content}
        </a>
      )

    case 'button':
      return (
        <button className={btnClasses} type={btnType} onClick={onClick}>
          {content}
        </button>
      )
  }
}
