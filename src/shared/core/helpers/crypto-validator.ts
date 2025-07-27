export function isValidAddress(address: string): boolean {
  const cleaned = address.startsWith('0x') ? address.slice(2) : address
  return /^[a-fA-F0-9]{40}$/.test(cleaned)
}
export function isValidPublicKey(publicKey: string): boolean {
  const cleaned = publicKey.startsWith('0x') ? publicKey.slice(2) : publicKey
  return /^[a-fA-F0-9]{66,130}$/.test(cleaned)
}
