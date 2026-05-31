import { ReactNode } from 'react'
import styles from './imageWrapper.module.css'

type ImageWrapperProps = {
  children: ReactNode
  className?: string
}

export const ImageWrapper = ({
  children,
  className = '',
}: ImageWrapperProps) => {
  return <div className={`${styles.imageFrame} ${className}`}>{children}</div>
}
