import Image from 'next/image'
import { ImageWrapper } from '@components/ui/wrappers/imageWrapper'
import { VintageColorOverlay } from '@components/ui/overlays/vintageColor'
import { GrainOverlay } from '@components/ui/overlays/grain'
import { LinearGradientOverlay } from '@components/ui/overlays/linearGradient'

export const HeroImage = () => {
  return (
    <ImageWrapper>
      <LinearGradientOverlay />
      <VintageColorOverlay />
      <GrainOverlay />
      <Image
        src="/photo.jpg"
        alt=""
        fill
        className="object-cover object-position-center-20%"
      />
    </ImageWrapper>
  )
}
