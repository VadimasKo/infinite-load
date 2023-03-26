import { useEffect, useState } from 'react';
import { PexelImage } from '../api/types';
import photoStorage from '../utils/phtoStorage';
import ImageCard from './components/ImageCard/ImageCard';
import useFetchImages from './components/useFetchImages';
import useIntersectionObserver from './components/useIntersectionObserver';
import styles from './HomePage.module.scss';


const HomePage = () => {
  const [images, error, fetchMore] = useFetchImages();
  const [storedImages, setStoredImages] = useState(photoStorage.getPhotos());
  const [isVisible, loaderRef] = useIntersectionObserver()

  useEffect(() => {
    if (isVisible) fetchMore();
  }, [isVisible])

  const updateFovorites = (id: number, remove?: boolean) => {
    const newStored = remove ?
      storedImages.filter(image => image.id != id) :
      [...storedImages, images?.find(image => image.id == id) as PexelImage]

    photoStorage.storePhotos(newStored);
    setStoredImages(newStored)
  }
  
  return (
    <section className={styles.page}>
      <div className={styles.imageContainer}>
        {storedImages.map(image => (
          <ImageCard
            selected
            key={image.id + image.photographer_url}
            image={image}
            onToogle={updateFovorites}
          />
        ))}
        {images?.map((image, i) => (
          <ImageCard
            key={image.id}
            image={image}
            onToogle={updateFovorites}
            setRef={images.length - 12 == i ? loaderRef : undefined} // SIMPLIFY
          />
        ))}
      </div>
    </section>
  )
}

export default HomePage;
