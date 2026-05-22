'use client'

import { createContext, useContext } from 'react'

const I18nContext = createContext<unknown>(null)

export function I18nProvider({
  t,
  children,
}: {
  t: unknown
  children: React.ReactNode
}) {
  return <I18nContext.Provider value={t}>{children}</I18nContext.Provider>
}

export function useT() {
  return useContext(I18nContext)
}
