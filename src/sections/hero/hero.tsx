'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from '@sections/hero/hero.module.css'
import { CTAButton } from '../../components/ui/buttons/cta'
import { HeroImage } from './heroImage'

export default function Hero() {
  const t = useTranslations('home')

  return (
    <section
      className={`${styles.hero} flex flex-col items-start justify-center h-screen text-center px-15`}
    >
      <HeroImage />

      <div className={`${styles.heroContent} relative max-w-[30vw]`}>
        <p className="text-2xl font-light italic">
          {t('heroSection.quoteText')}
        </p>

        <h1 className="text-6xl font-bold tracking-wide py-4 leading-[1.3] py-10">
          {t('heroSection.heroTitle')}
        </h1>

        <p className=" text-xl text-[var(--color-nav-inactive)]">
          {t('heroSection.heroSubtitle')}
        </p>

        <CTAButton text={t('heroSection.ctaText')} />
      </div>
    </section>
  )
}
