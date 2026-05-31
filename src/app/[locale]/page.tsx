import Hero from '@sections/hero/hero'
import { Navbar } from '@components/navbar/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-body-background)] text-[var(--color-text-body)]">
      <Navbar />
      <Hero />
    </main>
  )
}
