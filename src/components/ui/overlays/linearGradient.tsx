const style = {
  position: 'absolute' as const,
  inset: 0,
  background: 'linear-gradient(to right, black 20%, transparent 60%)',
  pointerEvents: 'none' as const,
  zIndex: 20,
}

export const LinearGradientOverlay = () => {
  return <div style={style}></div>
}
