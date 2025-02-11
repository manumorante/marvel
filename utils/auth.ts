import { generateHash } from "./generateHash"
import { AuthParams, ApiKeys } from "@/types"

function getAuthParams(keys: ApiKeys): AuthParams {
  const ts = new Date().getTime().toString()
  const { privateKey, publicKey } = keys

  if (!privateKey || !publicKey) {
    throw new Error("API keys are not configured")
  }

  const hash = generateHash({
    ts,
    privateKey,
    publicKey,
  })

  return {
    ts,
    publicKey,
    hash,
  }
}

export function getAuthQueryString(keys: ApiKeys): string {
  const { ts, publicKey, hash } = getAuthParams(keys)
  return `ts=${ts}&apikey=${publicKey}&hash=${hash}`
}
