'use client'

import Link from 'next/link'
import styles from './navbarlink.module.css'
import { usePathname } from 'next/navigation'
import { AnimatedUnderline } from '@components/ui/animatedUnderline'

type NavbarLinkProps = {
  href: string
  value: string
  onclick?: () => void
}

export const NavbarLink = ({ href, value, onclick }: NavbarLinkProps) => {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <Link
      href={href}
      className={`${styles.navlink} ${isActive ? styles.active : ''}`}
      onClick={onclick}
    >
      {value}

      <AnimatedUnderline isActive={isActive} />
    </Link>
  )
}
