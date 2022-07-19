import Link from 'next/link'
import classNames from 'src/utils'

interface LogoProps {
  className?: string
  color?: 'white' | 'black' | 'inherit'
}

export default function Logo({ className = '', color = 'inherit' }: LogoProps) {
  const logoClasses = classNames('logo', [`clr-${color}`, className])

  return (
    <Link href='/'>
      <a className={logoClasses}>ооо "мирдин"</a>
    </Link>
  )
}
