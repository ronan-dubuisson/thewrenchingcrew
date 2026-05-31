import { Navbar } from '@components/navbar/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-body-background)] text-[var(--color-text-body)]">
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold tracking-wide">Contact Page</h1>

        <p className="mt-6 text-xl text-[var(--color-nav-inactive)]">
          Under construction
        </p>
      </section>
    </main>
  )
}
