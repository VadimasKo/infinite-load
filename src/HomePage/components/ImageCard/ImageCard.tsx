import { PexelImage } from "../../../api/types"
import styles from './ImageCard.module.scss';

interface Props {
  image: PexelImage
}

const ImageCard = ({ image }: Props) => {

  return (
    <div className={styles.imageCard}>
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
