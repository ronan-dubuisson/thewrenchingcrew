import { Navbar } from '@components/navbar/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11110F] text-[#EFE6D2]">
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold tracking-wide">About page</h1>

        <p className="mt-6 text-xl text-[#D8C7A6]">Under construction</p>
      </section>
    </main>
  )
}
