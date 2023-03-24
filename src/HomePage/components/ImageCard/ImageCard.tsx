import { PexelImage } from "../../../api/types"

interface Props {
  image: PexelImage
}

const ImageCard = ({ image }: Props) => {

  return (
    <div>
      <img
        // sizes=''
        loading='lazy' // is lazy loading good enough?
        // onLoad={}
        // onError={() => {}}
        src={image.src.large}
        alt={image.alt}
      />
    </div>
  )
}

export default ImageCard
