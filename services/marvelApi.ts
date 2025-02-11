import { getAuthQueryString } from "@/utils/auth"

const MARVEL_API_BASE = "https://gateway.marvel.com/v1/public"

function getMarvelApiUrl(endpoint: string, params = {}) {
  const hash = getAuthQueryString({
    publicKey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!,
    privateKey: process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY!,
  })

  const queryParams = new URLSearchParams(params).toString()
  const extraParams = queryParams ? `&${queryParams}` : ""

  return `${MARVEL_API_BASE}/${endpoint}?${hash}${extraParams}`
}

export async function getMarvelCharacters(params?: object) {
  const response = await fetch(getMarvelApiUrl("characters", params))
  return response.json()
}

export async function getMarvelComics(params?: object) {
  const response = await fetch(getMarvelApiUrl("comics", params))
  return response.json()
}
