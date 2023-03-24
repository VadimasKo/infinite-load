import { forwardRef, Ref, useState } from "react";
import { PexelImage } from "../../../api/types"
import styles from './ImageCard.module.scss';

interface Props {
  image: PexelImage
  onToogle: (id: number, remove?: boolean) => void
  selected?: boolean
}

const ImageCard = forwardRef<HTMLDivElement, Props>(({ image, selected, onToogle }, ref) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={[styles.imageCard, hovered && styles.hovered].join(' ')} 
      onClick={() => setHovered(!hovered)}
      ref={ref}
    >
      <img
        draggable={false}
        loading='lazy' // is lazy loading good enough?
        src={image.src.large}
        alt={image.alt}
      />
      <div draggable={false} className={styles.info}>
        <h3>{image.alt.substring(0, 25) || 'Untitled'}</h3>
        <div className={styles.divider} />
        <p>{image.photographer}</p>
        <button onClick={() => onToogle(image.id, selected)}>{!selected ? 'Favorite' : 'Forget'}</button>
      </div>
    </div>
  )
})

export default ImageCard
