'use client'

import { NavbarLink } from '@components/navbar/navbarlink'
import styles from '@components/navbar/navbar.module.css'
import { useTranslations } from 'next-intl'
import LanguageSelector from '@components/ui/languageSelector/languageSelector'

export const Navbar = () => {
  const t = useTranslations('common')

  return (
    <nav
      className={`${styles.navbar} py-7 top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4`}
    >
      <div>
        <LanguageSelector />
      </div>

      <div className="flex flex-end space-x-20 ml-auto">
        <NavbarLink href="/" value={t('nav.home')} />
        <NavbarLink href="/about" value={t('nav.about')} />
        <NavbarLink href="/contact" value={t('nav.contact')} />
        <NavbarLink href="/gallery" value={t('nav.gallery')} />
      </div>
    </nav>
  )
}
