import { useEffect, useState } from "react";
import pexelApi from "../../api/pexelApi";
import { FetchCurratedResponse } from "../../api/types";

const useFetchImages = () => {
  const [response, setResponse] = useState<FetchCurratedResponse>();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const loadMoreImages = async () => {
    if (!response) return
    try {
      setLoading(true)
      const newResponse = await pexelApi.fetchCurrated(undefined, undefined, response.next_page);
      setResponse(newResponse)
    } catch(e) {
      setError(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    pexelApi.fetchCurrated(30, 1)
      .then(result => setResponse(result))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [])


  return [response?.photos, loading, error, loadMoreImages] as const
}

export default useFetchImages;
