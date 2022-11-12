export type PostRequest = {
  path: string
  body?: object
  headers?: HeadersInit 
  cache?: RequestCache 
  credentials?: RequestCredentials
}