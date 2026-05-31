const style = {
  position: 'absolute' as const,
  mixBlendMode: 'hue' as const,
  pointerEvents: 'none' as const,
  backgroundColor: 'var(--color-overlay-vintage)',
  opacity: 0.08,
  inset: 0,
  zIndex: 10,
}

export const VintageColorOverlay = () => {
  return <div style={style}></div>
}
