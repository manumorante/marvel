export interface MarvelCharacter {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface ApiKeys {
  publicKey: string
  privateKey: string
}

export interface AuthParams {
  ts: string
  publicKey: string
  hash: string
}

export interface HashParams {
  ts: string
  privateKey: string
  publicKey: string
}
