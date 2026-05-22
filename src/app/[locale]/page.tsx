import Hero from '../../sections/hero/hero'
import { Navbar } from '../../components/navbar/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11110F] text-[#EFE6D2]">
      <Navbar />
      <Hero />
    </main>
  )
}
