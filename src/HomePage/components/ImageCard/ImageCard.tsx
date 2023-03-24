import { forwardRef, Ref } from "react";
import { PexelImage } from "../../../api/types"
import styles from './ImageCard.module.scss';

interface Props {
  image: PexelImage
  onToogle: (id: number, remove?: boolean) => void
  selected?: boolean
}

const ImageCard = forwardRef<HTMLDivElement, Props>(({ image, selected, onToogle }, ref) => {

  return (
    <div className={styles.imageCard} ref={ref} style={{ backgroundColor: ref ? 'red' : undefined }}>
      <button onClick={() => onToogle(image.id, selected)}>{!selected ? 'favorite' : 'forget'}</button>
      <img
        loading='lazy' // is lazy loading good enough?
        src={image.src.large}
        alt={image.alt}
      />
    </div>
  )
})

export default ImageCard
