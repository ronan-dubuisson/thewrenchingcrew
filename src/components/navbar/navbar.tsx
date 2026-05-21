import { NavbarLink } from './navbarlink'
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav
      className={`${styles.navbar} py-7 top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4`}
    >
      <ul className="flex flex-end space-x-20 ml-auto">
        <NavbarLink href="/" value="Home" />
        <NavbarLink href="/about" value="About" />
        <NavbarLink href="/contact" value="Contact" />
        <NavbarLink href="/gallery" value="Gallery" />
      </ul>
    </nav>
  )
}
