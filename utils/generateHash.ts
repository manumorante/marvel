import { createHash } from "crypto"
import { HashParams } from "@/types/auth"

export function generateHash({ ts, privateKey, publicKey }: HashParams): string {
  if (!ts || !privateKey || !publicKey) {
    throw new Error("Missing required parameters")
  }

  return createHash("md5").update(`${ts}${privateKey}${publicKey}`).digest("hex")
}
