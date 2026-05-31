type CTAButtonProps = {
  text: string
  onClick?: () => void
}

export const CTAButton = ({ text, onClick }: CTAButtonProps) => {
  return (
    <button className="mt-10 px-6 py-3 bg-[var(--color-vintage)] rounded-md hover:bg-[var(--color-vintage-hover)] transition">
      Join the Club
    </button>
  )
}
