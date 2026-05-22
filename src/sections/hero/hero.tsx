'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './hero.module.css'

export default function Hero() {
  const t = useTranslations('home')

  return (
    <section
      className={`${styles.hero} vintageOverlay flex flex-col items-center justify-center h-screen text-center`}
    >
      <Image
        src="/images/hero.jpg"
        alt="Vintage motorcycle"
        fill
        priority
        className={styles.heroImage}
      />

      <div className={styles.heroContent}>
        <h1 className="text-6xl font-bold tracking-wide">{t('heroTitle')}</h1>

        <p className="mt-6 text-xl text-[#D8C7A6]">{t('heroSubtitle')}</p>

        <button className="mt-10 px-6 py-3 bg-[#7A4B2B] rounded-md hover:bg-[#9B5C33] transition">
          Join the Club
        </button>
      </div>
    </section>
  )
}
