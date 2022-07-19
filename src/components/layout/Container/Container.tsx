import { ComponentPropsWithoutRef } from 'react'
import classNames from 'src/utils'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {}

export default function Container({
  className = '',
  children,
}: ContainerProps) {
  const containerClasses = classNames('container', className)
  return <div className={containerClasses}>{children}</div>
}
