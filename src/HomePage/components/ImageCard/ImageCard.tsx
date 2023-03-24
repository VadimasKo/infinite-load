import { forwardRef, Ref } from "react";
import { PexelImage } from "../../../api/types"
import styles from './ImageCard.module.scss';

interface Props {
  image: PexelImage
}

const ImageCard = forwardRef<HTMLDivElement, Props>(({ image }, ref) => {

  return (
    <div className={styles.imageCard} ref={ref} style={{ backgroundColor: ref ? 'red' : undefined }}>
      <img
        loading='lazy' // is lazy loading good enough?
        src={image.src.large}
        alt={image.alt}
      />
    </div>
  )
})

export default ImageCard
