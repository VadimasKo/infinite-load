import { useEffect, useState } from "react";
import { FetchCurratedResponse } from "../../api/types";
import pexelApi from "../../api/pexelApi";

const useFetchImages = () => {
  const [response, setResponse] = useState<FetchCurratedResponse>();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const fetchMoreImages = async () => {
    console.log('load more', response) //why is it undefined
    if (!response || loading) return
    setLoading(true)
    try {
      const newResponse = await pexelApi.fetchCurrated(30, response.page+1);
      newResponse.photos = response.photos.concat(newResponse.photos)
      console.log('loaded more', newResponse)
      setResponse(newResponse)
    } catch(e) {
      setError(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    pexelApi.fetchCurrated(30, 2)
      .then(result => setResponse(result))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [])


  return [response?.photos, error, fetchMoreImages] as const
}

export default useFetchImages;
