import ImageCard from "./components/ImageCard/ImageCard";
import useFetchImages from "./components/useFetchImages";


const HomePage = () => {
  const [images, loading, error, fetchMore] = useFetchImages();

  return (
    <div>
      {images?.map(image => <ImageCard image={image} />)}
    </div>
  )
}

export default HomePage;
