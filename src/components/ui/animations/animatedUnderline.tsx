import styles from '@components/ui/animations/animatedUnderline.module.css'

type AnimatedUnderlineProps = {
  isActive: boolean
}

export const AnimatedUnderline = ({ isActive }: AnimatedUnderlineProps) => {
  return (
    <span
      className={`${styles.underline} ${isActive ? styles.active : ''}`}
    ></span>
  )
}
