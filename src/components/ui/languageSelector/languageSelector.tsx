'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()

  const router = useRouter()
  const pathname = usePathname()

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value

    router.replace(pathname, {
      locale: nextLocale,
    })
  }

  const t = useTranslations('common')

  return (
    <select value={locale} onChange={onSelectChange}>
      <option value="nl">{t('langselector.nl')}</option>
      <option value="fr">{t('langselector.fr')}</option>
      <option value="en">{t('langselector.en')}</option>
    </select>
  )
}
