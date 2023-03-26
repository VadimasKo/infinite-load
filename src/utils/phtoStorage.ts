import { PexelImage } from '../api/types'

const storePhotos = (items: PexelImage[]) => (
  localStorage.setItem('photos', JSON.stringify(items))
)

const getPhotos = () => {
  const encodedPhotos = localStorage.getItem('photos')
  return JSON.parse(encodedPhotos || '[]') as PexelImage[]
} 

const photoStorage = {
  storePhotos,
  getPhotos,
}

export default photoStorage
