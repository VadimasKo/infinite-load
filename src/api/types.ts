export type ImageSource = {
  landscape: string
  large: string
  large2x: string
  medium: string
  original: string
  portrait: string
  small: string
  tiny: string
}

export type PexelImage = {
  id: number
  alt: string
  height: number
  width: number
  liked: boolean
  photographer: string
  photographer_id: number
  photographer_url: string
  src: ImageSource
}

export type FetchCurratedResponse = {
  next_page: string
  page: number
  photos: PexelImage[]
  total_results: 8000
}
