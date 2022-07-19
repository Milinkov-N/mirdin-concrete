// import React from 'react'

import { ReactNode } from 'react'
import { Heading } from 'src/components'
import { Container } from 'src/components/layout'
import classNames from 'src/utils'

interface SectionProps {
  classes?: {
    section?: string
    container?: string
  }
  title: string
  subtitle?: string
  alter?: boolean
  children?: ReactNode
}

export default function Section({
  classes,
  title,
  subtitle,
  alter = false,
  children,
}: SectionProps) {
  const sectionClass = classes?.section ? classes.section : ''
  const sectionClasses = classNames('section', sectionClass, {
    'section-alter': alter,
  })

  return (
    <section className={sectionClasses}>
      <Container className={classes?.container}>
        <header className='section-header'>
          <Heading label={title} />
          {subtitle && <p className='section-subtitle'>{subtitle}</p>}
        </header>

        {children}
      </Container>
    </section>
  )
}
