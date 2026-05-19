export default function Home() {
  return (
    <main className="min-h-screen bg-[#11110F] text-[#EFE6D2]">
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold tracking-wide">
          Oldtimer Motor Club
        </h1>

        <p className="mt-6 text-xl text-[#D8C7A6]">
          Preserving the spirit of motorcycles up to 1966
        </p>

        <button className="mt-10 px-6 py-3 bg-[#7A4B2B] rounded-md hover:bg-[#9B5C33] transition">
          Join the Club
        </button>
      </section>
    </main>
  )
}
