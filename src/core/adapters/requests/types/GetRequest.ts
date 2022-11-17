export type GetRequest = {
  path: string
  headers?: HeadersInit 
  cache?: RequestCache 
  credentials?: RequestCredentials
}