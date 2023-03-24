import { useEffect, useState } from "react";
import pexelApi from "../../api/pexelApi";
import { FetchCurratedResponse } from "../../api/types";

const useFetchImages = () => {
  const [response, setResponse] = useState<FetchCurratedResponse>();
  const [error, setError] = useState<unknown>()

  const fetchMoreImages = async () => {
    console.log('load more', response?.photos.length)
    if (!response) return
    try {
      const newResponse = await pexelApi.fetchCurrated(undefined, undefined, response.next_page);
      newResponse.photos = response.photos.concat(newResponse.photos)
      console.log('loaded more', newResponse.photos.length)
      setResponse(newResponse)
    } catch(e) {
      setError(e)
    }
  }

  useEffect(() => {
    console.log('fetch')
    pexelApi.fetchCurrated(30, 1)
      .then(result => setResponse(result))
      .catch(e => setError(e))
  }, [])


  return [response?.photos, error, fetchMoreImages] as const
}

export default useFetchImages;
