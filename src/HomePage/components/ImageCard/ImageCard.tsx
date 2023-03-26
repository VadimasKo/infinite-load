import { useState } from 'react';
import { PexelImage } from '../../../api/types'
import styles from './ImageCard.module.scss';

interface Props {
  image: PexelImage
  setRef?: (instance: HTMLDivElement | null) => void
  onToogle: (id: number, remove?: boolean) => void
  selected?: boolean
}


const ImageCard = (({ image, selected, onToogle, setRef }: Props) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={[styles.imageCard, hovered && styles.hovered].join(' ')}
      onClick={() => setHovered(!hovered)}
      ref={setRef}
    >
      <img
        crossOrigin='anonymous'
        draggable={false}
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
