import React from 'react'
import classNames from 'src/utils'

interface HeadingProps {
  className?: string
  label: string
}

export default function Heading({ className = '', label }: HeadingProps) {
  const headingClasses = classNames('section-title', className)

  return <h2 className={headingClasses}>{label}</h2>
}
