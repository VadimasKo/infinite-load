import { useRef } from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import useFetchImages from "./components/useFetchImages";
import useIntersectionObserver from "./components/useIntersectionObserver";
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [images, error, fetchMore] = useFetchImages();
  const loaderCardRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(loaderCardRef, fetchMore)

  return (
    <section className={styles.page}>
      <div className={styles.imageContainer}>
        {images?.map((image, i) => (
          <ImageCard
            key={i}
            image={image}
            ref={images.length - 8 == i ? loaderCardRef : undefined} // SIMPLIFY
          />
        ))}
      </div>
    </section>
  )
}

export default HomePage;
