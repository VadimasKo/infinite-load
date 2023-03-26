import { useEffect, useState } from "react";
import { FetchCurratedResponse } from "../../api/types";
import pexelApi from "../../api/pexelApi";


const useFetchImages = () => {
  const [response, setResponse] = useState<FetchCurratedResponse>();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const controller = new AbortController()

    pexelApi.fetchCurrated(30, 2, controller.signal)
      .then(result => setResponse(result))
      .catch(e => setError(e))
      .finally(() => setLoading(false))

    return () => controller.abort();
  }, [])

  const fetchMoreImages = async () => {
    if (!response || loading) return
    setLoading(true)
    try {
      const newResponse = await pexelApi.fetchCurrated(30, response.page + 1);
      newResponse.photos = response.photos.concat(newResponse.photos)
      setResponse(newResponse)

    } catch(e) {
      setError(e)
    }
    setLoading(false)
  }

  return [response?.photos || [], error, fetchMoreImages] as const
}

export default useFetchImages;
