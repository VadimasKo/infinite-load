import { FetchCurratedResponse } from "./types";

const pexelUrl = import.meta.env.VITE_PEXEL_URL
const pexelKey = import.meta.env.VITE_PEXEL_KEY

// consider function overload
export const fetchCurrated = async (per_page?: number, page?: number) => {
  const url = `${pexelUrl}/v1/curated?per_page=${per_page}&page=${page}` 

  const response = await fetch(url, {
    method: 'GET',
    headers: { Authorization: pexelKey }
  })

  // could be handled better
  return response.json() as unknown as FetchCurratedResponse;
}

const pexelApi = {
  fetchCurrated
}

export default pexelApi;
