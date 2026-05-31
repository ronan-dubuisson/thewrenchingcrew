const style = {
  position: 'absolute' as const,
  backgroundImage: 'url("/textures/grain-02.jpg")',
  pointerEvents: 'none' as const,
  opacity: 0.08,
  inset: 0,
  zIndex: 5,
}

export const GrainOverlay = () => {
  return <div style={style}></div>
}
