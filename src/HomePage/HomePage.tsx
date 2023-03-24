import ImageCard from "./components/ImageCard/ImageCard";
import useFetchImages from "./components/useFetchImages";
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [images, loading, error, fetchMore] = useFetchImages();

  return (
    <section className={styles.page}>
      <div className={styles.imageContainer}>
        {images?.map(image => <ImageCard image={image} />)}
      </div>
    </section>
  )
}

export default HomePage;
