export function getSecureImageUrl(path: string, extension: string): string {
  const url = `${path}.${extension}`
  return url.replace("http://", "https://")
}
