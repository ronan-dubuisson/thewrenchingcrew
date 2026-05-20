import styles from './hero.module.css'

export default function Hero() {
  return (
    <section
      className={`${styles.hero} hue-bg flex flex-col items-center justify-center h-screen text-center`}
    >
      <h1 className="text-6xl font-bold tracking-wide">The wrenching crew</h1>

      <p className="mt-6 text-xl text-[#D8C7A6]">Preserving the past</p>

      <button className="mt-10 px-6 py-3 bg-[#7A4B2B] rounded-md hover:bg-[#9B5C33] transition">
        Join the Club
      </button>
    </section>
  )
}
